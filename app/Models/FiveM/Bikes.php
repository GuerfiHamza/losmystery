<?php

namespace App\Models\FiveM;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Bikes extends Model
{
    protected $connection = 'fivem';
    protected $table = 'vehicles_bike';

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
