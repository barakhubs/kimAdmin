<?php

namespace App\Http\Controllers\web;

use App\Http\Controllers\Controller;
use App\Models\Category;
use App\Models\Project;
use Illuminate\Database\Eloquent\ModelNotFoundException;
use Symfony\Component\HttpFoundation\Response;

class ProjectController extends Controller
{
    public function all()
    {
        $projects = Project::all();


        if ($projects->isEmpty()) {
            return response()->json(['error' => 'No projects found'], Response::HTTP_NOT_FOUND);
        }


        return response()->json(['rows'=>$projects->count(), 'projects' => $projects], 200);
    }

    

    public function categoryProjects($id)
    {
        try {
            $category = Category::with('projects')->findOrFail($id);
            $projects = $category->projects;

            return response()->json(['rows' => $projects->count(), 'category' => $category->title, 'projects' => $projects], 200);
        } catch (ModelNotFoundException $e) {
            return response()->json(['error' => 'Category not found'], Response::HTTP_NOT_FOUND);
        }
    }

    public function single($slug)
    {
        $project = Project::where('slug', $slug)->first();

        if (!$project) {
            return response()->json(['error' => 'Project not found'], Response::HTTP_NOT_FOUND);
        }

        return response()->json(['project' => $project], 200);
    }
}
