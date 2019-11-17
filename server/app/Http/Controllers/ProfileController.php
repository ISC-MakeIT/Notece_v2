<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Profile;


class ProfileController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth');
    }


    public function index()
    {
        $query = Profile::query();
        $query->where('user_id', session('userid'));
        $profile = $query->first();
        return view('notes.profile', ['profile' => $profile]);
    }

    public function edit()
    {
        $query = Profile::query();
        $query->where('user_id', session('userid'));
        $profile = $query->first();
        return view('notes.edit_profile', ['profile' => $profile]);
    }

    public function update($request)
    {
        $params = $request->validate([
            'name' => 'max:20',
            'sex' => 'max:3',
            'age' => 'numeric|max:11',
            'comment' => 'max:200',
            'icon' => 'image',
        ]);

        $params = array_merge($params,['user_id' => session('userid')]); 
        var_dump($params);
        $query = Profile::query();
        $query->where('user_id', session('userid'));
        $profile = $query->update($params);
        return redirect()->route('top');

    }
}
