<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Profile;
use App\User;
use App\Note;

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
            'icon' => 'image|mimes:jpeg,png|nullable',
            'birthday' => 'nullable',
        ]);

        if (isset($params['icon'])) {
            $icon = $params['icon'];
            $icon = base64_encode(file_get_contents($icon));
            $params = array_merge($params, ['icon' => $icon]);
        }

        $userid = session('userid');
        $params = array_merge($params, ['user_id' => $userid]);

        $profile = Profile::findOrFail($userid);
        $profile->fill($params)->save();

        return view('notes.profile', ['profile' => $profile]);
    }

    public function destroy(Request $request) {
        $param = $request->session()->get('userid');
        $notes = Note::where('user_id',$param);
        $notes->delete();
        $profile = Profile::where('user_id',$param);
        $profile->delete();
        $user = User::find($param);
        $user->delete();
        return redirect()->route('top');
    }
}
