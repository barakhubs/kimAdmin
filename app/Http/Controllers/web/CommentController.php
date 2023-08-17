<?php

namespace App\Http\Controllers\web;

use App\Http\Controllers\Controller;
use App\Models\Comment;
use Illuminate\Http\Request;

class CommentController extends Controller
{
    public function postComments($post)
    {
        $comments = Comment::where('post_id', $post)->where('status', 'approved')->get();

        return response()->json(['rows'=>$comments->count(), 'comments' => $comments], 200);
    }

    public function storeComment(Request $request, $post){
        $comment = new Comment();
        $comment->post_id = $post;
        $comment->email = $request->email;
        $comment->comment = $request->comment;
        $comment->status = 'not_approved';
        
        if ($comment->save()){
            return ['status' => 200, 'message' => 'Comment saved successfully! Wait for approval'];
        }
    }
}
