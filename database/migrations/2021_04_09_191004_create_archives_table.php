<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateArchivesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('archives', function (Blueprint $table) {
            $table->id();

            $table->string('type'); // Catégorie d'infraction
            $table->text('informations')->nullable(); // Informations supplémentaires


            $table->string('who')->nullable(); // Objets Saisies

            $table->unsignedBigInteger('patient_id');                         // Link to criminal folder
            $table->foreign('patient_id')->references('id')->on('patients'); // -----------------------

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
        Schema::dropIfExists('archives');
    }
}
