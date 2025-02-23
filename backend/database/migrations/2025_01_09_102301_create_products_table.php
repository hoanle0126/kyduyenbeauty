<?php

use App\Models\Category;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('products', function (Blueprint $table) {
            $table->id();
            $table->string("name");
            $table->string("key_name");
            $table->string("thumbnail");
            $table->longText("description")->nullable();
            $table->longText("detail")->nullable();
            $table->longText(column: "mass")->default(0);
            $table->json("ingredient")->nullable();
            $table->float("price");
            $table->float("price_total");
            $table->float("sales")->default(0);
            $table->float("revenue")->default(0);
            $table->integer("quantity");
            $table->integer("remain");
            $table->json("images");
            $table->foreignIdFor(Category::class)->constrained()->cascadeOnDelete();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('products');
    }
};
