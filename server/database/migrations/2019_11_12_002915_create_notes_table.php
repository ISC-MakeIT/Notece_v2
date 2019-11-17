<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateNotesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('notes', function (Blueprint $table) {
            $table->increments('note_id');
            $table->string('user_id', 30);
            $table->json('note_data')->nullable();
            $table->text('note_icon')->nullable();
            $table->string('note_tag', 50)->nullable();
            $table->string('note_title', 50);
            $table->text('note_body');
            $table->timestamps();

            $table->foreign('user_id')->references('user_id')->on('users');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('notes');
    }
}
