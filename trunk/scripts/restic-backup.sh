#!/usr/bin/env bash
set -Eeuo pipefail

usage() {
  cat <<"EOU"
Usage:
  scripts/restic-backup.sh [--label LABEL] [--skip-db-dump] [--db-result-file RELATIVE_PATH] [--tag TAG]

Required environment:
  RESTIC_REPOSITORY
  RESTIC_PASSWORD or RESTIC_PASSWORD_FILE

Optional environment:
  RESTIC_BIN                  Path to restic binary. Default: first `restic` in PATH.
  DRUPAL_ROOT                 Default: <project>/web
  DB_BACKUP_SCRIPT            Default: <project>/scripts/db-backup.sh
  BACKUP_ENV                  Default tag value: stage
  RESTIC_CACHE_DIR            Default: <project>/backups/restic-cache

Examples:
  RESTIC_REPOSITORY=sftp:user@host:/repo RESTIC_PASSWORD=secret \
    scripts/restic-backup.sh --label stage-manual

  RESTIC_REPOSITORY=s3:s3.amazonaws.com/bucket/oksenate RESTIC_PASSWORD_FILE=/run/secrets/restic \
    scripts/restic-backup.sh --label ci --tag ci
EOU
}

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PROJECT_ROOT="$(cd "$SCRIPT_DIR/.." && pwd)"
DRUPAL_ROOT="${DRUPAL_ROOT:-$PROJECT_ROOT/web}"
DB_BACKUP_SCRIPT="${DB_BACKUP_SCRIPT:-$SCRIPT_DIR/db-backup.sh}"
RESTIC_BIN="${RESTIC_BIN:-$(command -v restic || true)}"
RESTIC_CACHE_DIR="${RESTIC_CACHE_DIR:-$PROJECT_ROOT/backups/restic-cache}"
BACKUP_ENV="${BACKUP_ENV:-stage}"
LABEL="manual"
TIMESTAMP="$(date +%Y-%m-%d-%H%M%S)"
SKIP_DB_DUMP=0
DB_RESULT_FILE=""
EXTRA_TAGS=()

while [[ $# -gt 0 ]]; do
  case "$1" in
    --label)
      LABEL="$2"
      shift 2
      ;;
    --skip-db-dump)
      SKIP_DB_DUMP=1
      shift
      ;;
    --db-result-file)
      DB_RESULT_FILE="$2"
      shift 2
      ;;
    --tag)
      EXTRA_TAGS+=("$2")
      shift 2
      ;;
    --help|-h)
      usage
      exit 0
      ;;
    *)
      echo "Unknown argument: $1" >&2
      usage >&2
      exit 2
      ;;
  esac
done

if [[ -z "$RESTIC_BIN" || ! -x "$RESTIC_BIN" ]]; then
  echo "restic not found. Install it or set RESTIC_BIN to an executable path." >&2
  exit 1
fi

if [[ -z "${RESTIC_REPOSITORY:-}" ]]; then
  echo "RESTIC_REPOSITORY is required." >&2
  exit 1
fi

if [[ -z "${RESTIC_PASSWORD:-}" && -z "${RESTIC_PASSWORD_FILE:-}" ]]; then
  echo "Set RESTIC_PASSWORD or RESTIC_PASSWORD_FILE." >&2
  exit 1
fi

if [[ ! -d "$DRUPAL_ROOT" ]]; then
  echo "Drupal root not found: $DRUPAL_ROOT" >&2
  exit 1
fi

if [[ -z "$DB_RESULT_FILE" ]]; then
  DB_RESULT_FILE="../backups/db/${LABEL}-${TIMESTAMP}.sql"
fi

DB_ARTIFACT="$PROJECT_ROOT/${DB_RESULT_FILE#../}"
if [[ "$DB_RESULT_FILE" == *.sql ]]; then
  DB_ARTIFACT_GZ="${DB_ARTIFACT}.gz"
else
  DB_ARTIFACT_GZ="$DB_ARTIFACT"
fi

mkdir -p "$PROJECT_ROOT/backups/db" "$RESTIC_CACHE_DIR"

if [[ "$SKIP_DB_DUMP" -eq 0 ]]; then
  if [[ ! -x "$DB_BACKUP_SCRIPT" ]]; then
    echo "DB backup script not found or not executable: $DB_BACKUP_SCRIPT" >&2
    exit 1
  fi
  "$DB_BACKUP_SCRIPT" --label "$LABEL" --result-file "$DB_RESULT_FILE"
else
  if [[ ! -f "$DB_ARTIFACT_GZ" && ! -f "$DB_ARTIFACT" ]]; then
    echo "--skip-db-dump was used, but no DB dump exists at $DB_ARTIFACT or $DB_ARTIFACT_GZ" >&2
    exit 1
  fi
fi

PATHS=()
for candidate in \
  "$PROJECT_ROOT/backups/db" \
  "$PROJECT_ROOT/config/sync" \
  "$DRUPAL_ROOT/sites/default/files" \
  "$DRUPAL_ROOT/sites/default/files/private" \
  "$PROJECT_ROOT/composer.json" \
  "$PROJECT_ROOT/composer.lock" \
  "$PROJECT_ROOT/drush" \
  "$PROJECT_ROOT/scripts"
 do
  if [[ -e "$candidate" ]]; then
    PATHS+=("$candidate")
  fi
done

if [[ "${#PATHS[@]}" -eq 0 ]]; then
  echo "No backup paths found." >&2
  exit 1
fi

RESTIC_CMD=(
  "$RESTIC_BIN"
  backup
  "${PATHS[@]}"
  --repo "$RESTIC_REPOSITORY"
  --cache-dir "$RESTIC_CACHE_DIR"
  --tag "site:oksenate"
  --tag "env:$BACKUP_ENV"
  --tag "label:$LABEL"
)

for tag in "${EXTRA_TAGS[@]}"; do
  RESTIC_CMD+=(--tag "$tag")
done

printf "Using restic repo: %s\n" "$RESTIC_REPOSITORY"
printf "Backup label: %s\n" "$LABEL"
printf "Included paths:\n"
printf  - %sn "${PATHS[@]}"

"${RESTIC_CMD[@]}"
