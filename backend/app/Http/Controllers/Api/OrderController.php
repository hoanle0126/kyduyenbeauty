<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Order;
use App\Models\Product;
use Illuminate\Http\Request;

class OrderController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Order::all();
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        Order::create([
            "products" => $request->products,
            "address" => $request->address,
            "payment" => $request->payment,
            "status" => $request->status
        ]);

        foreach ($request->products as $product) {
            $updateProduct = Product::where("id", $product['id'])->first();
            $updateProduct->update([
                "revenue" => $updateProduct['revenue'] + $product['quantity_cart'],
                "remain" => $updateProduct['remain'] - $product['quantity_cart']
            ]);
        }
        return Order::all();
    }

    /**
     * Display the specified resource.
     */
    public function show(Order $order)
    {
        return $order;
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Order $order)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Order $order)
    {
        $order->update([
            "status" => $request->status,
            "current_status" => $request->current_status
        ]);
        return Order::all();
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Order $order)
    {
        $order->delete();
        return Order::all();
    }
}
