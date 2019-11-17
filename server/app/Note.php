<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Note extends Model
{
    protected $primaryKey = 'note_id';

    protected $fillable = [
        'user_id',
        'note_title',
        'note_body',
    ];

    public function comments()
    {
        return $this->hasMany('App\Comment', 'note_id', 'note_id');
    }
}
