<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Comment;
use Faker\Generator as Faker;

$factory->define(Comment::class, function (Faker $faker) {
    return [
        'user_id' => 'hoge',
        'note_id' => 1,
        'comment_body' => "コメントです。ほげほげほげほげほげほげほげほげほげほげほげほげほげほげほげほげぇ！",
    ];
});
