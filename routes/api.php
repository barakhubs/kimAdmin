<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\web\PostController;
use App\Http\Controllers\web\CommentController;
use App\Http\Controllers\web\ProjectController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

//web routes
Route::get('posts', [PostController::class, 'index']);
Route::get('posts/{slug}', [PostController::class, 'show']);
Route::get('comments/{post}', [CommentController::class, 'postComments']);
Route::post('comment/{post}', [CommentController::class, 'storeComment']);
Route::get('projects', [ProjectController::class, 'all']);
Route::get('category/{id}/projects', [ProjectController::class, 'categoryProjects']);
Route::get('project/{slug}', [ProjectController::class, 'single']);
Route::post('comment/{post}', [CommentController::class, 'storeComment']);
