@extends('layouts.profile')


@section('content')
<div class="mb-4">
    <a href="{{ url('notece/edit_profile') }}" class="btn btn-primary">
        プロフィールを編集する
    </a>
</div>
<div class="profile-card">
    <div class="profile-card__inner">
        <div class="profile-thumb">
            <img src="data:image/png;base64,{{$profile->icon}}" alt="">
        </div>
        <div class="profile-content">
            <span class="profile-name">{{$profile->name}}</span>
            <span class="profile-sex">性別：{{ $profile->sex ?: '未設定'}}</span>
            <span class="profile-age">年齢：{{ $profile->age ?: '未設定'}}</span>
            <span class="profile-comment">コメント：<br>{{ $profile->comment ?: '未設定' }}</span>
        </div>
    </div>
</div>
@endsection