@extends('layouts.layout')

@section('content')
<div class="container mt-4">
    <div class="border p-4">
        <h1 class="h5 mb-4">
            投稿の新規作成
        </h1>

        <form method="POST" action="{{ route('notece.store') }}">
            @csrf

            <fieldset class="mb-4">
                <div class="form-group">
                    <label for="title">
                        タイトル
                    </label>
                    <input id="title" name="note_title" class="form-control {{ $errors->has('note_title') ? 'is-invalid' : '' }}" value="{{ old('note_title') }}" type="text">
                    @if ($errors->has('note_title'))
                    <div class="invalid-feedback">
                        {{ $errors->first('note_title') }}
                    </div>
                    @endif
                </div>

                <div class="form-group">
                    <label for="body">
                        本文
                    </label>

                    <textarea id="body" name="note_body" class="form-control {{ $errors->has('note_body') ? 'is-invalid' : '' }}" rows="4">{{ old('note_body') }}</textarea>
                    @if ($errors->has('note_body'))
                    <div class="invalid-feedback">
                        {{ $errors->first('note_body') }}
                    </div>
                    @endif
                </div>

                <div class="mt-5">
                    <a class="btn btn-secondary" href="{{ route('top') }}">
                        キャンセル
                    </a>

                    <button type="submit" class="btn btn-primary">
                        投稿する
                    </button>
                </div>
            </fieldset>
        </form>
    </div>
</div>
@endsection