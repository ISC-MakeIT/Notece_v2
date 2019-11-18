@extends('layouts.main')

@section('content')
<div class="mb-4">
    <a href="{{ route('notece.create') }}" class="btn btn-primary">
        投稿を新規作成する
    </a>
</div>
<div class="container mt-4">
    @foreach ($notes as $note)
    <div class="card mb-4">
        <div class="card-header">
            {{ $note->note_title }}

        </div>
        <div class="card-body">
            <p class="card-text">
                {!! nl2br(e($note->note_body, 200)) !!}
            </p>

            <a class="card-link" href="{{ route('notece.note', ['note' => $note]) }}">
                続きを読む
            </a>
        </div>
        <div class="card-footer">
            <span class="mr-2">
                投稿日時 {{ $note->created_at->format('Y.m.d') }}
            </span>

            @if ($note->comments->count())
            <span class="badge badge-primary">
                コメント {{ $note->comments->count() }}件
            </span>
            @endif
        </div>
    </div>
    @endforeach
</div>
@endsection