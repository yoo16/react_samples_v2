<?php

use App\Http\Controllers\Api\CategoryController;
use App\Http\Controllers\Api\OrderController;
use App\Http\Controllers\Api\ProductController;
use App\Http\Controllers\Api\SeatController;
use App\Http\Controllers\Api\VisitController;
use Illuminate\Support\Facades\Route;

// API のルーティングを定義
// TODO: エンドポイント: cateory/fetch
Route::get('category/fetch', [CategoryController::class, 'index']);
// TODO: エンドポイント: product/fetch
Route::get('product/fetch', [ProductController::class, 'index']);
// TODO: エンドポイント: seat/fetch
Route::get('seat/fetch', [SeatController::class, 'index']);
Route::get('seat/available', [SeatController::class, 'available']);
Route::get('seat/find', [SeatController::class, 'show']);
Route::get('visit/find', [VisitController::class, 'show']);
Route::post('visit/join', [VisitController::class, 'join']);
Route::get('order/fetch', [OrderController::class, 'index']);
Route::post('order/add', [OrderController::class, 'store']);
Route::post('order/billed', [OrderController::class, 'bill']);
