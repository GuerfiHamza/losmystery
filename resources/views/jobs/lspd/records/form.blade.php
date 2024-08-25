@extends('jobs.lspd.layouts.app')

@section('title', 'Intranet')

@section('css')
<link href="https://cdn.jsdelivr.net/npm/select2@4.0.13/dist/css/select2.min.css" rel="stylesheet" />
<style>
.select2-results__option, .select2-search__field {
    color: black;
}
</style>
@endsection

@section('content')
<form action="{{ route('lspd-record.store') }}" class="w-1/3 border-2 border-white rounded-md mx-auto p-4 flex flex-col font-opensans" method="POST" enctype="multipart/form-data">
    @csrf

    <label for="type" class="text-white">Personne</label>
    <select name="user" id="user" class="block font-opensans">
        @foreach(\App\Models\LSPD\Criminal::all() as $criminal)
            <option value="{{ $criminal->id }}" class="font-opensans">{{ $criminal->name }}</option>
        @endforeach
    </select>

    <label for="type" class="mt-2 text-white">Type de délit</label>
    <select name="type" id="type" class="block">
        <option value="rappel">Rappel à la loi</option>
        <option value="leger" selected>Délit léger</option>
        <option value="moyen">Délit moyen</option>
        <option value="grave">Délit grave</option>
        <option value="lourd">Faute lourde</option>
    </select>

    <hr class="mt-8 mb-4">
 
    <label for="cell" class="mt-2 text-white">Temps de cellule (en min)</label>
    <input type="number" min="0" step="1" name="cell" id="cell" class="px-2 border border-gray-500 rounded text-black">

    <label for="penalty" class="mt-2 text-white">Amende (en $)</label>
    <input type="number" min="0" step="1" name="penalty" id="penalty" class="px-2 border border-gray-500 rounded text-black">
    
    <label for="informations" class="mt-2 text-white">Informations supplémentaires</label>
    <textarea name="informations" id="informations" class="block p-2 border border-gray-500 rounded text-black"></textarea>
    
    <hr class="mt-8 mb-4">

    <div class="mt-2 flex flex-row items-center justify-center">
        <input type="checkbox" name="search" id="search" class="px-2 border border-gray-500 rounded text-black">
        <label for="search" class="ml-2 text-white">Fouillé</label>
    </div>

    <label for="captured" class="mt-2 text-white">Objets trouvées</label>
    <input type="text" name="captured" id="captured" class="px-2 border border-gray-500 rounded text-black">
    
    <div class="mt-2 flex flex-row items-center justify-center">
        <input type="checkbox" name="recidivism" id="recidivism" class="px-2 border border-gray-500 rounded text-black">
        <label for="recidivism" class="ml-2 text-white">Récidive</label>
    </div>

    <button type="submit" class="btn-primary transition duration-300 ease-in-out focus:outline-none focus:shadow-outline bg-yellow-600 hover:bg-yellow-900 text-white font-normal py-2 px-4 mr-1 rounded-2xl mt-15 mb-15 font-opensans">
        <i class="fa fa-submit"></i> Envoyer
    </button>
</form>
@endsection

@section('js')
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/select2@4.0.13/dist/js/select2.min.js"></script>
<script>
$(document).ready(function () {
    $('#user').select2({
        tags: true,
    });
    $('#type').select2();
});
</script>
@endsection
