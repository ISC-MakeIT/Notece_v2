<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Note;

class NotesController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth');
    }

    public function index()
    {
        $notes = Note::orderBy('created_at', 'desc')->paginate(10);
        return view('notes.index', ['notes' => $notes]);
    }

    public function search(Request $request)
    {
        $searchKey = $request->get('searchKey');
        $query = Note::query();
        $query->where('note_title', 'LIKE', "%$searchKey%");
        $query->orderBy('created_at', 'desc');
        $notes = $query->get();
        return view('notes.index', ['notes' => $notes]);
    }

    public function myindex()
    {
        $query = Note::query();
        $query->where('user_id', session('userid'));
        $query->orderBy('created_at', 'desc');
        $notes = $query->get();
        return view('notes.mynote', ['notes' => $notes]);
    }

    public function create()
    {
        return view('notes.write');
    }

    public function store(Request $request)
    {
        $params = $request->validate([
            'note_title' => 'required|max:50',
            'note_body' => 'required|max:2000',
        ]);
        $params = array_merge($params, ['user_id' => session('userid')]);
        Note::create($params);

        return redirect()->route('top');
    }

    public function show($note_id)
    {
        $note = Note::findOrFail($note_id);

        return view('notes.show', [
            'note' => $note,
        ]);
    }

    public function edit($note_id)
    {
        $note = Note::findOrFail($note_id);

        return view('notes.edit', [
            'note' => $note,
        ]);
    }

    public function update($note_id, Request $request)
    {
        $params = $request->validate([
            'note_title' => 'required|max:50',
            'note_body' => 'required|max:2000',
        ]);

        $note = Note::findOrFail($note_id);
        $note->fill($params)->save();

        return redirect()->route('notece.note', ['note' => $note]);
    }

    public function destroy($note_id)
    {
        $note = Note::findOrFail($note_id);

        \DB::transaction(function () use ($note) {
            $note->comments()->delete();
            $note->delete();
        });
        return redirect()->route('top');
    }
}
