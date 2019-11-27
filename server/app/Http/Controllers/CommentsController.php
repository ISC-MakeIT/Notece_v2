<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Note;

class CommentsController extends Controller
{
    public function store(Request $request)
    {
        $params = $request->validate([
            'note_id' => 'required|exists:notes,note_id',
            'comment_body' => 'required|max:2000',
        ]);
        $params = array_merge($params, ['user_id' => session('userid')]);


        $note = Note::findOrFail($params['note_id']);
        $note->comments()->create($params);

        return ['note' => $note];
    }
}
