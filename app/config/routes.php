<?php

$app->get("/", function () {
    return $this->render(TEMPLATE, ['title' => 'Home']);
});

$app->get("/hello/:name", function () {
    return $this->render(TEMPLATE, ['title' => 'Hello']);
});