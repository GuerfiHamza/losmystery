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
<form action="{{ isset($criminal) ? route('lspd-criminal.update', compact('criminal')) : route('lspd-criminal.store') }}" class="w-1/3 font-opensans border-2 border-white rounded-md text-white rounded mx-auto p-4 flex flex-col mb-4" method="POST" enctype="multipart/form-data">
    @csrf
 
    @if (isset($criminal))
        @method('PUT')
    @endif

    <label for="name" class="mt-2 text-text-white">NOM Prénom</label>
    <input type="text" name="name" id="name" class="px-2 border border-gray-500 rounded text-black" value="{{ old('name') ?: (isset($criminal) ? $criminal->name : '') }}" required>

    <label for="birthdate" class="mt-2 text-text-white">Date de naissance</label>
    <input type="date" name="birthdate" id="birthdate" value="{{ old('birthdate') ?: (isset($criminal) ? $criminal->birthdate : '') }}" class="px-2 border border-gray-500 rounded text-black">

    <label for="skin" class="mt-2 text-text-white">Couleur de peau</label>
    <select name="color" id="skin">
        <option value="pale" @if ((old('color') ?: (isset($criminal) ? $criminal->color : '')) == 'pale') selected @endif>Pale</option>
        <option value="basane" @if ((old('color') ?: (isset($criminal) ? $criminal->color : '')) == 'basane') selected @endif>Basané</option>
        <option value="metisse" @if ((old('color') ?: (isset($criminal) ? $criminal->color : '')) == 'metisse') selected @endif>Metissé</option>
        <option value="fonce" @if ((old('color') ?: (isset($criminal) ? $criminal->color : '')) == 'fonce') selected @endif>Foncé</option>
    </select>

    <label for="country" class="mt-2 text-text-white">Pays d'origine</label>
    <input type="text" name="country" id="country" value="{{ old('country') ?: (isset($criminal) ? $criminal->country : '') }}" class="px-2 border border-gray-500 rounded text-black">
    
    <hr class="mt-8 mb-4">

    <label for="identity_card" class="mt-2 text-text-white">Carte d'identité</label>
    <input type="file" name="identity_card" id="identity_card" class="px-2 border border-gray-500 rounded text-white">
    
    <label for="front" class="mt-2 text-text-white">Photo de devant</label>
    <input type="file" name="front" id="front" class="px-2 border border-gray-500 rounded text-white">
    <label for="right" class="mt-2 text-text-white">Photo de droite</label>
    <input type="file" name="right" id="right" class="px-2 border border-gray-500 rounded text-white">
    <label for="left" class="mt-2 text-text-white">Photo de gauche</label>
    <input type="file" name="left" id="left" class="px-2 border border-gray-500 rounded text-white">
    <label for="back" class="mt-2 text-text-white">Photo de derrière</label>
    <input type="file" name="back" id="back" class="px-2 border border-gray-500 rounded text-white">

    <hr class="mt-8 mb-4">

    <div class="mt-2 flex flex-row items-center justify-center">
        <input type="checkbox" name="dead" id="dead" class="px-2 border border-gray-500 rounded text-black" {{ old('dead') ? 'checked' : (isset($criminal) && $criminal->dead != null ? 'checked' : '') }}>
        <label for="dead" class="ml-2 text-white">Mort</label>
    </div>
    
    <div class="mt-2 flex flex-row items-center justify-center mb-10">
        <input type="checkbox" name="researched" id="researched" class="px-2 border border-gray-500 rounded text-black" {{ old('researched') ? 'checked' : (isset($criminal) && $criminal->researched != null ? 'checked' : '') }}>
        <label for="researched" class="ml-2 text-white">Recherché</label>
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
    $('#skin').select2();
});
</script>
@endsection
