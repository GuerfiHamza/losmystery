<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePatientTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('patients', function (Blueprint $table) {
            $table->id();

            $table->string('name'); // Nom

            $table->string('birthdate')->nullable();
            $table->string('color')->nullable();
            $table->string('eyes')->nullable();
            $table->string('country')->nullable();
            $table->string('tel')->nullable();

            $table->string('identity_card')->nullable(); // Photo carte d'identité

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
        Schema::dropIfExists('patients');
    }
}
