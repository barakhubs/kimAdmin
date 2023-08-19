<?php

namespace App\Http\Controllers\auth;

use App\Http\Controllers\Controller;
use App\Models\User;
use Auth;
use Illuminate\Http\Request;
use Laravel\Socialite\Facades\Socialite;

class AuthController extends Controller
{
    public function redirectToGoogle()
    {
        return Socialite::driver('google')->redirect();
    }

    public function handleGoogleCallback()
    {
        $user = Socialite::driver('google')->user();

        $dbUser = User::updateOrCreate([
            'google_id' => $user->id,
        ], [
            'name' => $user->name,
            'email' => $user->email,
            'google_id' => $user->id,
            'google_token' => $user->token,
        ]);

        // Authenticate the user
        Auth::login($dbUser, true);

        // Now generate the token for the authenticated user
        $token = $dbUser->createToken('Kimdigitary')->accessToken;

        // Return this token to the client
        return response([
            'token' => $token,
            'name' => $dbUser->name,
            'email' => $dbUser->email
        ]);

    }
}
