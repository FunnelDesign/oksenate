#!/usr/bin/env bash
set -Eeuo pipefail

usage() {
  cat <<"EOU"
Usage:
  scripts/db-backup.sh [--label LABEL] [--result-file RELATIVE_PATH] [--no-gzip]

Examples:
  scripts/db-backup.sh
  scripts/db-backup.sh --label stage-before-full-backup
  scripts/db-backup.sh --result-file ../backups/db/ci-manual.sql

Notes:
  - result-file must be relative to the Drupal root because Drush sql:dump expects that.
  - default output path is ../backups/db/<label>-<timestamp>.sql from the Drupal root.
EOU
}

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PROJECT_ROOT="$(cd "$SCRIPT_DIR/.." && pwd)"
DRUPAL_ROOT="${DRUPAL_ROOT:-$PROJECT_ROOT/web}"
DRUSH_BIN="${DRUSH_BIN:-$PROJECT_ROOT/vendor/bin/drush}"
LABEL="manual"
TIMESTAMP="$(date +%Y-%m-%d-%H%M%S)"
RESULT_FILE=""
USE_GZIP=1
EXTRA_DUMP="${DB_BACKUP_EXTRA_DUMP:-}"

while [[ $# -gt 0 ]]; do
  case "$1" in
    --label)
      LABEL="$2"
      shift 2
      ;;
    --result-file)
      RESULT_FILE="$2"
      shift 2
      ;;
    --no-gzip)
      USE_GZIP=0
      shift
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

if [[ ! -x "$DRUSH_BIN" ]]; then
  echo "Drush not found or not executable: $DRUSH_BIN" >&2
  exit 1
fi

if [[ -z "$RESULT_FILE" ]]; then
  RESULT_FILE="../backups/db/${LABEL}-${TIMESTAMP}.sql"
fi

mkdir -p "$DRUPAL_ROOT/$(dirname "$RESULT_FILE")"

DRUSH_CMD=("$DRUSH_BIN" sql:dump "--result-file=$RESULT_FILE")
if [[ "$USE_GZIP" -eq 1 ]]; then
  DRUSH_CMD+=(--gzip)
fi
if [[ -n "$EXTRA_DUMP" ]]; then
  DRUSH_CMD+=("--extra-dump=$EXTRA_DUMP")
fi

cd "$DRUPAL_ROOT"
"${DRUSH_CMD[@]}"

if [[ "$USE_GZIP" -eq 1 ]]; then
  CREATED_PATH="$DRUPAL_ROOT/${RESULT_FILE}.gz"
else
  CREATED_PATH="$DRUPAL_ROOT/${RESULT_FILE}"
fi

printf "Backup created: %s\n" "$CREATED_PATH"
