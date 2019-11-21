<?php

use Illuminate\Database\Seeder;
use App\Note;
use App\Comment;

class NotesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        factory(Note::class, 10)
            ->create()
            ->each(function ($note) {
                $comments = factory(App\Comment::class, 2)->make();
                $note->comments()->saveMany($comments);
            });
    }
}
