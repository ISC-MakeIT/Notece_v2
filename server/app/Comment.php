<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Comment extends Model
{
    protected $primaryKey = 'comment_id';

    protected $fillable = [
        'note_id',
        'user_id',
        'comment_body',
    ];
    
    public function note()
    {
        return BelongsTo('App\Note');
    }
}
