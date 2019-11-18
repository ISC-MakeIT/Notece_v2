@extends('layouts.main')

@section('content')

<form method="post" action="{{ url('/notece/main') }}" class="search_container">
    {{ csrf_field() }}
    <input type="text" name="searchKey" size="25" placeholder="　キーワード検索">
    <input type="submit" name="search" value="Search">
</form>

<div class="mb-4">
    <a href="{{ route('notes.create') }}" class="btn btn-primary">
        投稿を新規作成する
    </a>
    <a href="{{ url('/notece/mynote') }}" class="btn btn-primary">
        自分のノートを見る
    </a>
    <a href="{{ url('/notece/profile') }}" class="btn btn-primary">
        自分のプロフィール
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

            <a class="card-link" href="{{ route('notes.show', ['note' => $note]) }}">
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