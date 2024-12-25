<?php

namespace Drupal\senate_pdf_viewer\Plugin\Field\FieldFormatter;

use Drupal\Core\Field\FieldItemListInterface;
use Drupal\pdf\Plugin\Field\FieldFormatter\PdfPages;

/**
 * @FieldFormatter(
 *  id = "senate_pdf_viewer",
 *  label = @Translation("PDF: Continuous pdf scroll for senate"),
 *  description = @Translation("Don&#039;t use this to display big PDF file."),
 *  field_types = {"file"}
 * )
 */
class SenatePdfPages extends PdfPages {

  public function viewElements(FieldItemListInterface $items, $langcode) {
    $elements = [];
    foreach ($items as $delta => $item) {
      if ($item->entity->getMimeType() == 'application/pdf') {
        $scale = $this->getSetting('scale');
        $file_url = \Drupal::service('file_url_generator')->generateAbsoluteString($item->entity->getFileUri());
        $html = [
          '#type' => 'html_tag',
          '#tag' => 'div',
          //'#value' => TODO,
          '#attributes' => [
            'class' => ['pdf-pages', 'rtecenter'],
            'id' => ['pdf-pages-' . $delta],
            'file' => [$file_url],
            'scale' => [$scale],
          ],
        ];
        $elements[$delta] = $html;
      }
      else {
        $elements[$delta] = [
          '#theme' => 'file_link',
          '#file' => $item->entity,
        ];
      }
    }
    $elements['#attached']['library'][] = 'pdf/drupal.pdf';
    $worker = \Drupal::service('file_url_generator')->generateAbsoluteString(base_path() . 'libraries/pdf.js/build/pdf.worker.js');
    $elements['#attached']['drupalSettings'] = [
      'pdf' => [
        'workerSrc' => $worker,
      ],
    ];
    return $elements;
  }
}
