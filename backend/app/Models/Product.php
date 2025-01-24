<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    use HasFactory;

    protected $fillable = [
        "name",
        "key_name",
        "thumbnail",
        "description",
        "revenue",
        "detail",
        'category_id',
        "sales",
        "price",
        "price_total",
        "quantity",
        "remain",
        "ingredient",
        "images"
    ];
    protected $casts = [
        'ingredient' => 'array', // Cast cột JSON thành mảng
        'images' => 'array',
        "sales" => 'array'
    ];

    public function category()
    {
        return $this->belongsTo(Category::class);
    }
}
