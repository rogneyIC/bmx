<?php

use Illuminate\Support\Facades\Route;

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

Route::get('/', function () {
    return view('index');
})->name('index');

Auth::routes();

Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');
Route::get('/what', [App\Http\Controllers\HomeController::class, 'index'])->name('what');
Route::get('/donation', [App\Http\Controllers\HomeController::class, 'index'])->name('donation');
Route::get('/leveler', [App\Http\Controllers\HomeController::class, 'index'])->name('leveler');
Route::get('/trip', [App\Http\Controllers\HomeController::class, 'index'])->name('trip');
Route::get('/datatec', [App\Http\Controllers\HomeController::class, 'index'])->name('datatec');
Route::get('/leveler/progress', [App\Http\Controllers\HomeController::class, 'index'])->name('progress');
Route::get('/profile', [App\Http\Controllers\HomeController::class, 'index'])->name('profile');

Route::post('/user/list', [App\Http\Controllers\UserController::class, 'list']);
Route::post('/user/filter', [App\Http\Controllers\UserController::class, 'filter']);
Route::post('/user/competitor', [App\Http\Controllers\UserController::class, 'isCompetitor']);
Route::post('/user/make', [App\Http\Controllers\UserController::class, 'makeCompetitor']);
Route::post('/user/get', [App\Http\Controllers\UserController::class, 'getUser']);

Route::post('/progress/list', [App\Http\Controllers\ProgressController::class, 'index']);
Route::post('/progress/get', [App\Http\Controllers\ProgressController::class, 'getProgress']);
Route::post('/progress/wait', [App\Http\Controllers\ProgressController::class, 'progressWait']);
Route::post('/progress/store', [App\Http\Controllers\ProgressController::class, 'store']);
Route::post('/progress/update', [App\Http\Controllers\ProgressController::class, 'update']);
Route::post('/progress/delete', [App\Http\Controllers\ProgressController::class, 'delete']);

Route::post('/donation/list', [App\Http\Controllers\DonationController::class, 'index']);
Route::post('/donation/store', [App\Http\Controllers\DonationController::class, 'store']);
Route::post('/donation/update', [App\Http\Controllers\DonationController::class, 'update']);
Route::post('/donation/delete', [App\Http\Controllers\DonationController::class, 'delete']);