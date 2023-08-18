<?php

namespace App\Http\Controllers\web;

use App\Http\Controllers\Controller;
use App\Models\Project;
use Illuminate\Http\Request;

class ProjectController extends Controller
{
    public function all()
    {
        $projects = Project::all();

        return response()->json(['rows'=>$projects->count(), 'projects' => $projects], 200);
    }
}
