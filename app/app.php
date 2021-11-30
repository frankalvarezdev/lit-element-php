<?php

use Lime\App;
const TEMPLATE = 'views:template.php';

$app = new App();
$app->path('views', __DIR__ . '/views');

$app->bind("/", function () {
    return $this->render(TEMPLATE);
});

$app->run();
