<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User; 
use App\Events\user_tb_data; 

use Illuminate\Support\Facades\DB; // Import the DB class


class ApiController extends Controller
{
    public function createUser(Request $request){
        $User = new User();
        $User->username = $request->input('username');
        $User->password = $request->input('password');
        $User->save();
        broadcast(new user_tb_data());
        return response()->json($User);
    }

    public function viewUser(){
        $User = User::all();
        return response()->json($User);
    }
}
