@extends('jobs.va.layouts.app')

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

<h1 class="font-opensans text-2xl mb-10">Creer un dossier</h1>
<form action="{{ route('va-archives.store') }}" class="w-1/3 border-2 border-white rounded-md mx-auto p-4 flex flex-col font-opensans" method="POST" enctype="multipart/form-data">
    @csrf

    <label for="type" class="text-white">Personne</label>
    <select name="user" id="user" class="block font-opensans">
        @foreach(\App\Models\VA\Client::all() as $archives)
            <option value="{{ $archives->id }}" class="font-opensans">{{ $archives->name }}</option>
        @endforeach
    </select>
    <label for="who" class="mt-2 text-white">Le vendeur</label>
    <input type="text" name="who" id="who" value="{{ \Auth::user()->players->name }}" class="px-2 border border-gray-500 rounded text-black" readonly>

    <hr class="mt-8 mb-4">
 
    <label for="prix" class="mt-2 text-white">Prix</label>
    <input type="number" min="0" step="1" name="prix" id="prix" class="px-2 border border-gray-500 rounded text-black">

    <label for="date" class="mt-2 text-white">Date</label>
    <input type="date" min="0" step="1" name="date" id="date" class="px-2 border border-gray-500 rounded text-black">

    <label for="informations" class="mt-2 text-white">Informations supplémentaires</label>
    <textarea name="informations" id="informations" class="block p-2 border border-gray-500 rounded text-black"></textarea>
    
    <label for="weapon" class="mt-2 text-text-white">Armes</label>
    <select id="weapon" multiple class="text-black" name="weapon[]">
        <option value="9mm" @if ((old('weapon') ?: (isset($weapon) ? $weapons->weapon: '')) == '9mm') selected @endif>Pistolet 9mm</option>
<option value="cal50" @if ((old('weapon') ?: (isset($weapon) ? $weapons->weapon: '')) == 'cal50') selected @endif>Pistolet Cal.50</option>
<option value="vintage" @if ((old('weapon') ?: (isset($weapon) ? $weapons->weapon: '')) == 'vintage') selected @endif>Pistolet Vintage</option>
<option value="poing" @if ((old('weapon') ?: (isset($weapon) ? $weapons->weapon: '')) == 'poing') selected @endif>Poing Américain</option>
<option value="cle" @if ((old('weapon') ?: (isset($weapon) ? $weapons->weapon: '')) == 'clef') selected @endif>Clé Anglaise</option>
<option value="knife" @if ((old('weapon') ?: (isset($weapon) ? $weapons->weapon: '')) == 'knife') selected @endif>Couteau</option>
<option value="batte" @if ((old('weapon') ?: (isset($weapon) ? $weapons->weapon: '')) == 'batte') selected @endif>Batte</option>
<option value="lampe" @if ((old('weapon') ?: (isset($weapon) ? $weapons->weapon: '')) == 'lampe') selected @endif>Lampe Torche</option>
<option value="marteau" @if ((old('weapon') ?: (isset($weapon) ? $weapons->weapon: '')) == 'marteau') selected @endif>Marteau</option>
<option value="butterflyknife" @if ((old('weapon') ?: (isset($weapon) ? $weapons->weapon: '')) == 'butterflyknife') selected @endif>Couteau papillon</option>
<option value="lockpick" @if ((old('weapon') ?: (isset($weapon) ? $weapons->weapon: '')) == 'lockpick') selected @endif>Pied de biche</option>
<option value="shotgun" @if ((old('weapon') ?: (isset($weapon) ? $weapons->weapon: '')) == 'shotgun') selected @endif>Canon scié</option>
<option value="mousquet" @if ((old('weapon') ?: (isset($weapon) ? $weapons->weapon: '')) == 'mousquet') selected @endif>Mousquet</option>
<option value="pfuse" @if ((old('weapon') ?: (isset($weapon) ? $weapons->weapon: '')) == 'pfuse') selected @endif>Pistolet de détresse</option>
<option value="fuse" @if ((old('weapon') ?: (isset($weapon) ? $weapons->weapon: '')) == 'fuse') selected @endif>Fusée de détresse</option>
    </select>
    <hr class="mt-8 mb-4">


    <div class="mt-2 flex flex-row items-center justify-center">
        <input type="checkbox" name="ppa" id="ppa" class="px-2 border border-gray-500 rounded text-black">
        <label for="ppa" class="ml-2 text-white">PPA</label>
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
