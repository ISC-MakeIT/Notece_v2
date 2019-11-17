<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Note;
use Faker\Generator as Faker;

$factory->define(Note::class, function (Faker $faker) {
    return [
        'user_id' => 'hoge',
        'note_title' => 'タイトル',
        'note_body' => "本文です。\nほげほげほげほげほげほげほげほげほげほげほげほげほげほげほげほげ\nほげほげほげほげほげほげほげほげほげほげほげほげほげほげほげほげぇ！",
    ];
});
