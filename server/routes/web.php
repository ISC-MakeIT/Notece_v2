<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

#use Symfony\Component\Routing\Route;

use App\Http\Controllers\NotesController;
use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('welcome');
});


Auth::routes();
Route::get('/notece/main', 'NotesController@index')->name('top');
Route::post('/notece/main', 'NotesController@search');
Route::get('/notece/mynote', 'NotesController@myindex');
Route::get('/notece/profile', 'ProfileController@index');
Route::get('/notece/edit_profile', 'ProfileController@edit');
Route::post('/notece/edit_profile', 'ProfileController@update');
Route::resource('notece', 'NotesController', ['only' => ['create', 'store', 'update', 'destroy']]);
Route::get('/notece/note/{note}', 'NotesController@show')->name('notece.note');
Route::get('/notece/note/edit/{note}', 'NotesController@edit')->name('notece.note.edit');
Route::resource('comments', 'CommentsController', ['only' => ['store']]);
Route::view('/notece/confirmation_profile', 'notes.confirmation_profile');
Route::get('/notece/destroy_profile', 'ProfileController@destroy');
