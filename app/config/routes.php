<?php

$app->get("/", function () {
    return $this->render(TEMPLATE);
});

$app->get("/hello/:name", function () {
    return $this->render(TEMPLATE);
});