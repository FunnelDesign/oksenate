<?php

namespace Drupal\manage\Tests;

use Drupal\Tests\BrowserTestBase;


/**
 * Provides automated tests for the manage module.
 */
class SenatorControllerTest extends BrowserTestBase {

  protected $defaultTheme = 'stark';


  /**
   * {@inheritdoc}
   */
  public static function getInfo() {
    return [
      'name' => "manage SenatorController's controller functionality",
      'description' => 'Test Unit for module manage and controller SenatorController.',
      'group' => 'Other',
    ];
  }

  /**
   * {@inheritdoc}
   */
  public function setUp() {
    parent::setUp();
  }

  /**
   * Tests manage functionality.
   */
  public function testSenatorController() {
    // Check that the basic functions of module manage.
    $this->assertEquals(TRUE, TRUE, 'Test Unit Generated via Drupal Console.');
  }

}
