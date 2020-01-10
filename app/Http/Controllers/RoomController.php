<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Player;

class RoomController extends Controller
{
    public function showHome()
    {
        return view('home');
    }

    public function showRoom(Request $request)
    {
        $stage = $request->input('stage');
        
        return view('room', [
                'stage' => $stage,
            ]);
    }
}
