<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateProfilesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('profiles', function (Blueprint $table) {
            $table->string('user_id', 30);
            $table->string('name', 20)->default('NO NAME');
            $table->string('sex', 3)->nullable();
            $table->integer('age')->nullable();
            $table->text('comment')->nullable();
            $table->json('search__history')->nullable();
            $table->binary('icon')->nullable();
            $table->dateTime('birthday')->nullable();

            $table->primary('user_id');
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
        Schema::dropIfExists('profiles');
    }
}
