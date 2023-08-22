<?php

namespace App\Http\Controllers\web;

use App\Http\Controllers\Controller;
use App\Models\Testimonial;
use Illuminate\Http\Request;

class TestimonialController extends Controller
{
    public function index()
    {
        $testimonials = Testimonial::get();

        return response()->json(['rows'=>$testimonials->count(), 'testimonials' => $testimonials], 200);
    }
}
