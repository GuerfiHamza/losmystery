<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateRecordsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('lspd_records', function (Blueprint $table) {
            $table->id();

            $table->string('type'); // Catégorie d'infraction
            $table->integer('cell')->nullable(); // Temps de cellule
            $table->integer('penalty')->nullable(); // Amende
            $table->text('informations')->nullable(); // Informations supplémentaires

            $table->boolean('search')->default(false); // Fouillé 
            $table->boolean('recidivism')->default(false); // Récidive

            $table->string('captured')->nullable(); // Objets Saisies

            $table->unsignedBigInteger('criminal_id');                         // Link to criminal folder
            $table->foreign('criminal_id')->references('id')->on('criminals'); // -----------------------

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
        Schema::dropIfExists('records');
    }
}
