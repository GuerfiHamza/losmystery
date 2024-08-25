<?php

namespace App\Models\FiveM;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Cars extends Model
{
    protected $connection = 'fivem';
    protected $table = 'vehicles';

    protected $primaryKey  = 'model';
    public $incrementing = false;
    public $timestamps = false;

    protected $fillable = [
        'name',
        'model',
        'price',
        'category'
    ];
}
