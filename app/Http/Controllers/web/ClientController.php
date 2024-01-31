<?php

namespace App\Http\Controllers\web;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Client;

class ClientController extends Controller
{
    public function index () {
        $clients = Client::where('is_parent', '0')->get();

        return response()->json(['rows'=>$clients->count(), 'clients' => $clients], 200);
    }
}
