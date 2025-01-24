<?php

namespace App\Http\Controllers\Api;

use App\Http\Resources\ProductResource;
use App\Models\Product;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Str;

class ProductController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {

        $category = request()->get("category");
        $price = request()->get("price");
        $sort = request()->get("sort");
        $asc = request()->get("asc");
        $search = request()->get("search");
        $sort = request()->get("sort");
        $range = explode("-", $price);
        $paginate = request()->get("paginate");
        $manager = request()->get("manager");
        $products = Product::query();


        if ($category) {
            $products = $products->where("category_id", $category);
        }
        if ($price) {
            $products = $products->where("price", "<=", $range[1]);
            $products = $products->where("price", ">=", $range[0]);
        }
        if ($search) {
            $products = $products->where("name", "like", $search . "%");
        }
        if ($sort) {
            $products = $products->orderBy($sort, $asc || $asc == true ? "asc" : "desc");
        }

        return ProductResource::collection($products->paginate($paginate ? $paginate : 8));
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $product = Product::create([
            'name' => $request->name,
            'key_name' => Str::slug($request->name, '-'),
            'description' => $request->description,
            'thumbnail' => $request->thumbnail,
            'category_id' => $request->category,
            'ingredient' => $request->ingredient,
            'sales' => $request->sales,
            'price' => $request->price,
            'images' => $request->images,
            'remain' => $request->quantity,
            'quantity' => $request->quantity
        ]);

    }

    /**
     * Display the specified resource.
     */
    public function show($product)
    {
        return new ProductResource(Product::where("key_name", $product)->first());
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Product $product)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, $product)
    {
        $product = Product::where("key_name", $product)->first();
        $product->update([
            'name' => $request->name,
            'key_name' => Str::slug($request->name, '-'),
            'description' => $request->description,
            'detail' => $request->detail,
            'thumbnail' => $request->thumbnail,
            'category_id' => $request->category_id,
            'ingredient' => $request->ingredient,
            'sales' => $request->sales,
            'price' => $request->price,
            'images' => $request->images,
            'quantity' => $request->quantity,
            'remain' => $request->remain,
        ]);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Product $product)
    {
        $product->delete();
        return ProductResource::collection(Product::all());
    }
}
