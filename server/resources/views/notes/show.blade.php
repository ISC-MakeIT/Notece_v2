@extends('layouts.layout')

@section('content')
<div class="container mt-4">
    <div class="border p-4">
        @if ($note->user_id == session('userid'))
        <div class="mb-4 text-right">

            <a class="btn btn-primary" href="{{ route('notece.note.edit', $note->note_id)}}">
                編集する
            </a>
            <form style="display: inline-block;" method="POST" action="{{ action('NotesController@destroy', $note->note_id) }}">
                @csrf
                @method('DELETE')

                <button class="btn btn-danger">削除する</button>
            </form>
        </div>
        @endif
        <h1 class="h5 mb-4">
            {{ $note->note_title }}
        </h1>

        <p class="mb-5">
            {!! nl2br(e($note->note_body)) !!}
        </p>

        <section>
            <h2 class="h5 mb-4">
                コメント
            </h2>


            <form class="mb-4" method="POST" action="{{ route('comments.store') }}">
                @csrf

                <input name="note_id" type="hidden" value="{{ $note->note_id }}">

                <div class="form-group">
                    <label for="body">
                        本文
                    </label>

                    <textarea id="body" name="comment_body" class="form-control {{ $errors->has('comment_body') ? 'is-invalid' : '' }}" rows="4">{{ old('comment_body') }}</textarea>
                    @if ($errors->has('comment_body'))
                    <div class="invalid-feedback">
                        {{ $errors->first('comment_body') }}
                    </div>
                    @endif
                </div>

                <div class="mt-4">
                    <button type="submit" class="btn btn-primary">
                        コメントする
                    </button>
                </div>
            </form>


            @forelse($note->comments as $comment)
            <div class="border-top p-4">
                <time class="text-secondary">
                    {{ $comment->created_at->format('Y.m.d H:i') }}
                </time>
                <p class="mt-2">
                    {!! nl2br(e($comment->comment_body)) !!}
                </p>
            </div>
            @empty
            <p>コメントはまだありません。</p>
            @endforelse

        </section>
    </div>
</div>
@endsection