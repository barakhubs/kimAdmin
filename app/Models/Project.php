<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Project extends Model
{
    use HasFactory;

    protected $guarded = [];

    protected $casts = [
        'description' => 'array',
    ];

    protected $appends = [
        'category_title',
        'parent_category_title'
    ];

    protected $hidden = [
        'Category'
    ];

    protected $fillable = [
        'category_id',
        'title',
        'slug',
        'featured_image',
        'business',
        'image',
        'description'
    ];

    /**
     * Get the projectCategory that owns the Project
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function Category(): BelongsTo
    {
        return $this->belongsTo(Category::class);
    }

    public function getCategoryTitleAttribute(): string
    {
        return $this->Category->title;
    }

    public function getParentCategoryTitleAttribute(): string
    {
        return $this->Category->parent->title;
    }
}
