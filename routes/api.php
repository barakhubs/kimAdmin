<?php

use App\Http\Controllers\auth\AuthController;
use App\Http\Controllers\web\TestimonialController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\web\PostController;
use App\Http\Controllers\web\CommentController;
use App\Http\Controllers\web\ProjectController;
use App\Http\Controllers\web\ClientController;

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

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

//auth
Route::get('auth/google', [AuthController::class,'redirectToGoogle']);
Route::get('auth/google/callback', [AuthController::class,'handleGoogleCallback']);

//web routes
Route::get('posts', [PostController::class, 'index']);
Route::get('posts/latest', [PostController::class, 'latestPosts']);
Route::get('posts/{slug}', [PostController::class, 'show']);
Route::get('comments/{post}', [CommentController::class, 'postComments']);
Route::post('comment/{post}', [CommentController::class, 'storeComment']);
Route::get('projects', [ProjectController::class, 'all']);
Route::get('project/{slug}', [ProjectController::class, 'singleProject']);
Route::get('category/{id}/projects', [ProjectController::class, 'categoryProjects']);
Route::get('project/{slug}', [ProjectController::class, 'single']);
Route::post('comment/{post}', [CommentController::class, 'storeComment']);
Route::get('testimonials', [TestimonialController::class, 'index']);
Route::get('clients', [ClientController::class, 'index']);
