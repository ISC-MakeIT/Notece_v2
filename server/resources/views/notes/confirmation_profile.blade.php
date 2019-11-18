@extends('layouts.profile')

@section('content')
<div class="mb-4">
    <p>
        本当に退会してもよろしいですか？
    </p>
    <div>
        <a href="{{ url('notice/destroy_profile') }}" class="btn btn-primary">退会する</a>
        <a href="{{ url('notice/profile') }}" class="btn btn-primary">キャンセル</a>
    </div>
</div>
@endsection