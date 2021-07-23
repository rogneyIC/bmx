<?php

namespace App\Models;

use App\Models\User;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Donation extends Model
{
    use HasFactory;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'user_id',
        'donation',
        'detail',
        'message_optional',
        'destiny',
        'accumulated_return',
        'accepted'
    ];

    public function users()
    {
        return $this->belongsTo(User::class);
    }
}
