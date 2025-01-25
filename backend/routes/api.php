<?php

use App\Http\Controllers\Api\CategoryController;
use App\Http\Controllers\Api\ProductController;
use App\Http\Controllers\PaymentController;
use App\Http\Resources\ProductResource;
use App\Models\Product;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::middleware(['auth:sanctum'])->get('/user', function (Request $request) {
    return $request->user();
});

Route::apiResource("/products", ProductController::class);
Route::apiResource("/categories", CategoryController::class);
Route::get("/all-products", function () {
    return ProductResource::collection(Product::all());
});
Route::post('/payment', [PaymentController::class, 'processPayment']);

