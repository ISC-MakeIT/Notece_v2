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

    public function edit(Request $request)
    {
        $query = Profile::query();
        $query->where('user_id', session('userid'));
        $profile = $query->first();
        return view('notes.edit_profile', ['profile' => $profile]);
    }

    public function update(Request $request)
    {
        $params = $request->validate([
            'name' => 'max:20|nullable',
            'sex' => 'max:3|nullable',
            'age' => 'integer|nullable',
            'comment' => 'max:200|nullable',
            'search_histroy' => 'nullable',
            'icon' => 'image|nullable',
            'birthday' => 'nullable',
        ]);
        $userid = session('userid');
        $params = array_merge($params, ['user_id' => $userid]);

        $profile = Profile::findOrFail($userid);
        $profile->fill($params)->save();

        return view('notes.profile', ['profile' => $profile]);
    }
}
