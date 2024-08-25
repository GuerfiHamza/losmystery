<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateVaArchiveTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('va_archive', function (Blueprint $table) {
            $table->id();
            $table->string('nom')->nullable();
            $table->string('vendeur')->nullable();
            $table->string('date')->nullable();
            $table->text('weapon')->nullable();
            $table->string('prix')->nullable();
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
        Schema::dropIfExists('va_archive');
    }
}
