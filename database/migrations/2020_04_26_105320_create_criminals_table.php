<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateCriminalsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('criminals', function (Blueprint $table) {
            $table->id();

            $table->string('name'); // Nom

            $table->string('birthdate')->nullable();
            $table->string('color')->nullable();
            $table->string('eyes')->nullable();
            $table->string('country')->nullable();

            $table->string('identity_card')->nullable(); // Photo carte d'identité
            $table->string('front')->nullable(); // Photo de face
            $table->string('left')->nullable();  // Photo de gauche
            $table->string('right')->nullable(); // Photo de droite
            $table->string('back')->nullable();  // Photo de derriere

            $table->boolean('researched')->default(false); // Recherché ?
            $table->boolean('dead')->default(false);       // Mort ?

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
        Schema::dropIfExists('criminals');
    }
}
