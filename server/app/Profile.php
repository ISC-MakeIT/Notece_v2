<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Profile extends Model
{
    protected $primaryKey = 'user_id';

    protected $fillable = [
        'user_id',
        'name',
        'sex',
        'age',
        'comment',
        'search_histroy',
        'icon',
        'birthday',

    ];

    public $timestamps = false;
    public function user()
    {
        return BelongsTo('App\User');
    }
}
