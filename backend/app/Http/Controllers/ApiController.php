<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User; 
use App\Events\user_tb_data; 
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;


class ApiController extends Controller
{

    /*
        'username.required' => 'The username field is required.',
        'username.unique' => 'The username has already been taken.',
        'username.regex' => 'The username should only contain letters and numbers.',
        'password.required' => 'The password field is required.',
        'password.min' => 'The password must be at least 8 characters long.',
    */

    public function createUser(Request $request){
        $validator = Validator::make($request->all(), [
            'username' => ['required', 'regex:/^[A-Za-z0-9]+$/','unique:user_tb,username'],
            'password' => 'required|min:3',
        ]);
        
        if ($validator->fails()) {
            $errorMessages = $validator->errors()->all();
            return $errorMessages[0];
        }

        $User = new User();
        $User->username = $request->input('username');
        $User->password = bcrypt($request->input('password'));
        $User->save();
        broadcast(new user_tb_data());
        return 'success';
    }

    public function loginUser(Request $request){
        $credentials = $request->only('username', 'password');

        $user = User::where('username', $credentials['username'])->first();
    
        if ($user && Hash::check($credentials['password'], $user->password)) {
            // Authentication successful
            return 'success';
        } else {
            // Authentication failed
            return 'invalid';
        }
     
    }

    public function viewUser(){
        $User = User::all();
        return response()->json($User);
    }

    //If an error occurs during the execution of the truncate method, it will throw an exception and halt the execution of the code. 
    //same logic in other function

    public function deleteAllUser(){
        User::truncate();
        broadcast(new user_tb_data());
        return response()->json(['message' => 'All users have been deleted']);
    }

    public function deleteUserByUser_id(Request $request){
        $User = User::where('user_id',$request->input('user_id'))->first();
        if($User){
            $User->delete();
            broadcast(new user_tb_data());
        }
        return response()->json('success');
    }
    
    public function updateUserByUser_id(Request $request){
        $User = User::where('user_id',$request->input('user_id'))->first();
        $User ->username = $request->input('username');
        $User ->password = bcrypt($request->input('password'));
        $User->save();
        broadcast(new user_tb_data());
        return 'success';
    }

}
