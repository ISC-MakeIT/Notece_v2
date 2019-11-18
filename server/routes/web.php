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

use Illuminate\Support\Facades\Route;
Route::get('/', function () {
    return view('welcome');
});
Auth::routes();
Route::get('/notice/main', 'NotesController@index')->name('top');
Route::post('notice/main', 'NotesController@search');
Route::get('/notice/mynote', 'NotesController@myindex');
Route::get('/notice/profile', 'ProfileController@index');
Route::get('/notice/edit_profile', 'ProfileController@edit');
Route::post('/notice/edit_profile', 'ProfileController@update');
Route::view('/notice/confirmation_profile','notes.confirmation_profile');
Route::get('/notice/destroy_profile', 'ProfileController@destroy');
Route::resource('notes', 'NotesController', ['only' => ['create', 'store', 'show', 'edit', 'update','destroy']]);
Route::resource('comments', 'CommentsController', ['only' => ['store']]);