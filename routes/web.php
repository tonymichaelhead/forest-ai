<?php

use App\Player;
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

Route::get('/game', [
    'uses' => 'RoomController@showRoom',
    'as' => 'show-room'
]);

Route::get('/home', [
    'uses' => 'RoomController@showHome',
    'as' => 'show-home'
]);

Route::get('/testy', [
    'uses' => 'ForestController@messageForest',
    'as' => 'message-forest'
]);

Route::post('/message-forest', [
    'uses' => 'ForestController@messageForest',
    'as' => 'message-forest'
]);

Route::redirect('/', '/home', 301);

