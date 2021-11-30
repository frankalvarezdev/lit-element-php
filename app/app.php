<?php

use Lime\App;
const TEMPLATE = 'views:template.php';

$app = new App();
$app->path('views', __DIR__ . '/views');

// import routes
require_once __DIR__ . '/config/routes.php';

// render custom error pages
$app->on("after", function() {
    switch($this->response->status){
        case "404":
            $this->response->body = $this->render(TEMPLATE);
            break;
        case "500":
            $this->response->body = 'ERROR 500';
            break;
    }
});

$app->run();