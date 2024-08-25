<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePPASTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('ppa', function (Blueprint $table) {
            $table->id();
            $table->string('nom');
            $table->boolean('psy')->default(false);  
            $table->boolean('phys')->default(false);  
            $table->boolean('casier')->default(false);  
            $table->boolean('ppa1')->default(false);  
            $table->boolean('ppa2')->default(false);  
            $table->boolean('ppa3')->default(false);  

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('ppa');
    }
}
