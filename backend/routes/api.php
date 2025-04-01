<?php

use App\Http\Controllers\Api\CategoryController;
use App\Http\Controllers\Api\OrderController;
use App\Http\Controllers\Api\ProductController;
use App\Http\Controllers\PaymentController;
use App\Http\Controllers\sendCustomMail;
use App\Http\Resources\ProductResource;
use App\Models\Product;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;


Route::middleware(['auth:sanctum'])->get('/user', function (Request $request) {
    return $request->user();
});
Route::post('/send-email', [sendCustomMail::class, 'sendCustomMail']);

Route::post('/payments', [PaymentController::class, 'processPayment']);
Route::get('/checkout-success', function () {
    return "Thanh toán thành công!";
})->name('checkout.success');

Route::apiResource("/products", ProductController::class);
Route::apiResource("/categories", CategoryController::class);
Route::apiResource("/orders", OrderController::class);
Route::get("/all-products", function () {
    return ProductResource::collection(Product::all());
});
