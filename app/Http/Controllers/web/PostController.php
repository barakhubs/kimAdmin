<?php

namespace App\Http\Controllers\web;

use App\Http\Controllers\Controller;
use App\Models\Post;
use Illuminate\Http\Request;

class PostController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $posts = Post::where('status', 'published')->get();

        // Transform the posts data
        $transformedPosts = $posts->map(function ($post) {
            return [
                'id' => $post->id,
                'title' => $post->title,
                'slug' => $post->slug,
                'image' => $post->image,
                'content' => $post->content,
                'status' => $post->status,
                'category_name' => $post->category->name, // Assuming 'category' is the relationship
                'username' => $post->user->username, // Assuming 'user' is the relationship
                'created_at' => $post->created_at->format('M d,Y'),
                'updated_at' => $post->updated_at->format('M d,Y'),
            ];
        });

        return response()->json(['rows' => $transformedPosts->count(), 'posts' => $transformedPosts], 200);
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
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(string $slug)
    {
        $post = Post::where('slug', $slug)->first();

        return response()->json(['post' => $post], 200);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
