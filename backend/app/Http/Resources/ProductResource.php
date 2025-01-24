<?php

namespace App\Http\Resources;

use App\Models\Product;
use App\Models\Review;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class ProductResource extends JsonResource
{
    public function __construct($resource)
    {
        parent::__construct($resource);

        $this->withoutWrapping();
    }
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        $this->withoutWrapping();
        return [
            'id' => $this->id,
            'name' => $this->name,
            'key_name' => $this->key_name,
            'thumbnail' => $this->thumbnail,
            "quantity" => $this->quantity,
            "remain" => $this->remain,
            "category_id" => $this->category_id,
            "price" => $this->price,
            "price_total" => $this->price_total,
            "sales" => $this->sales,
            "images" => $this->images,
            "description" => $this->description,
            "ingredient" => $this->ingredient,
            "revenue" => $this->revenue,
            "detail" => $this->detail,
            'created_at' => $this->created_at ? $this->created_at->toDateTimeString() : "",
        ];
    }
}
