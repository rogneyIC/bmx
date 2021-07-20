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

Route::post('/donation/list', [App\Http\Controllers\DonationController::class, 'index']);
Route::post('/user/list', [App\Http\Controllers\UserController::class, 'index']);

Route::post('/donation/store', [App\Http\Controllers\DonationController::class, 'store']);