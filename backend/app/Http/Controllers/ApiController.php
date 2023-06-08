<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User; 

use Illuminate\Support\Facades\DB; // Import the DB class


class ApiController extends Controller
{
    public function createUser(Request $request){
        $User = new User();
        $User->username = $request->input('username');
        $User->password = $request->input('password');
        $User->save();
        return response()->json($User);
    }

    public function viewUser(){
        $User = User::all();
        return response()->json($User);
    }
}
