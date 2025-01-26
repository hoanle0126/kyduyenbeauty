<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Order extends Model
{
    use HasFactory;

    protected $fillable = [
        "products",
        "address",
        "payment",
    ];
    protected $casts = [
        'products' => 'array',
        'address' => 'array',
        "payment" => 'array'
    ];
}
