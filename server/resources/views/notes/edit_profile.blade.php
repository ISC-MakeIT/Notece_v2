@extends('layouts.edit_profile')

@section('content')
    <form action="{{ url('/notice/edit_profile') }}" method="POST" enctype="multipart/form-data">
        <img src="data:image/png;base64,{{$profile->icon}}" alt='' id='icon' border='1'>
        <label for="name">名　　前：</label>
        <input type="text" id="name" name="name" value="{{ $profile->name }}"><br>

        <label for="sex">性　　別：</label>
        <input type="text" id="sex" name="sex" value="{{ $profile->sex }}"><br><br>

        <label for="age">年　　齢：</label>
        <input type="text" id="age" name="age" value="{{ $profile->age }}"><br><br>

        <label for="comment">コメント：</label>
        <textarea id="comment" name="comment" rows="4" cols="30">{{ $profile->comment }}</textarea><br><br>

        <input type="file" value="アイコン変更" id="image" name="image">

        <input type="submit" id="preserve" name="preserve" value="保　存">
    </form>
@endsection

