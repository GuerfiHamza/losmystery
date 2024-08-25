@extends('jobs.ppa.app')

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
<form action="{{ isset($ppa) ? route('ppa.update', compact('ppa')) : route('ppa.store') }}" class="w-1/3 font-opensans border-2 border-white rounded-md text-white rounded mx-auto p-4 flex flex-col mb-4" method="POST" enctype="multipart/form-data">
    @csrf
 
    @if (isset($ppa))
        @method('PUT')
    @endif

    <label for="nom" class="mt-2 text-text-white">NOM Prénom</label>
    <input type="text" name="nom" id="nom" class="px-2 border border-gray-500 rounded text-black" value="{{ old('nom') ?: (isset($ppa) ? $ppa->nom : '') }}" required>

    @if (\Auth::user()->players->job == "ambulance" )
    <div class="mt-2 flex flex-row items-center justify-center">
        <input type="checkbox" name="psy" id="psy" class="px-2 border border-gray-500 rounded text-black" {{ old('psy') ? 'checked' : (isset($ppa) && $ppa->psy != null ? 'checked' : '') }}>
        <label for="psy" class="ml-2 text-white  mr-3">Test phyisique</label>
        <input type="checkbox" name="phys" id="phys" class="px-2 border  border-gray-500 rounded text-black" {{ old('dead') ? 'checked' : (isset($ppa) && $ppa->phys != null ? 'checked' : '') }}>
        <label for="phys" class="ml-2 text-white">Test psychologique</label>
    </div>
    @else
    <div class="mt-2 flex flex-row items-center justify-center">
        <input type="checkbox" name="psy" id="psy" class="px-2 border border-gray-500 rounded text-black" {{ old('psy') ? 'checked' : (isset($ppa) && $ppa->psy != null ? 'checked' : '') }}  onclick="return false;">
        <label for="psy" class="ml-2 text-white  mr-3">Test phyisique</label>
        <input type="checkbox" name="phys" id="phys" class="px-2 border  border-gray-500 rounded text-black" {{ old('dead') ? 'checked' : (isset($ppa) && $ppa->phys != null ? 'checked' : '') }}  onclick="return false;">
        <label for="phys" class="ml-2 text-white">Test psychologique</label>
    </div>
    @endif
    
    @if (\Auth::user()->players->job == "police" )
           <div class="mt-2 flex flex-row items-center justify-center ">
        <input type="checkbox" name="casier" id="casier" class="px-2 border border-gray-500 rounded text-black" {{ old('casier') ? 'casier' : (isset($ppa) && $ppa->casier != null ? 'checked' : '') }}>
        <label for="casier" class="ml-2 text-white">Casier</label>
    </div>
    @else
    <div class="mt-2 flex flex-row items-center justify-center ">
        <input type="checkbox" name="casier" id="casier" class="px-2 border border-gray-500 rounded text-black" {{ old('casier') ? 'casier' : (isset($ppa) && $ppa->casier != null ? 'checked' : '') }}  onclick="return false;">
        <label for="casier" class="ml-2 text-white">Casier</label>
    </div>
    @endif
 
     @if (\Auth::user()->players->job == "armurier" )
     <div class="mt-2 flex flex-row items-center justify-center mb-10">
        <input type="checkbox" name="ppa1" id="ppa1" class="px-2 border border-gray-500 rounded text-black" {{ old('ppa1') ? 'ppa1' : (isset($ppa) && $ppa->ppa1 != null ? 'checked' : '') }}>
        <label for="ppa1" class="ml-2 text-white mr-3">PPA 1</label>
        <input type="checkbox" name="ppa2" id="ppa2" class="px-2 border  border-gray-500 rounded text-black" {{ old('ppa2') ? 'checked' : (isset($ppa) && $ppa->ppa2 != null ? 'checked' : '') }}>
        <label for="ppa2" class="ml-2 text-white mr-3">PPA 2</label>
        <input type="checkbox" name="ppa3" id="ppa3" class="px-2 border  border-gray-500 rounded text-black" {{ old('ppa3') ? 'checked' : (isset($ppa) && $ppa->ppa3 != null ? 'checked' : '') }}>
        <label for="ppa3" class="ml-2 text-white">PPA 3</label>
    </div>
     @else
     <div class="mt-2 flex flex-row items-center justify-center mb-10">
        <input type="checkbox" name="ppa1" id="ppa1" class="px-2 border border-gray-500 rounded text-black" {{ old('ppa1') ? 'ppa1' : (isset($ppa) && $ppa->ppa1 != null ? 'checked' : '') }} onclick="return false;">
        <label for="ppa1" class="ml-2 text-white mr-3">PPA 1</label>
        <input type="checkbox" name="ppa2" id="ppa2" class="px-2 border  border-gray-500 rounded text-black" {{ old('ppa2') ? 'checked' : (isset($ppa) && $ppa->ppa2 != null ? 'checked' : '') }} onclick="return false;">
        <label for="ppa2" class="ml-2 text-white mr-3">PPA 2</label>
        <input type="checkbox" name="ppa3" id="ppa3" class="px-2 border  border-gray-500 rounded text-black" {{ old('ppa3') ? 'checked' : (isset($ppa) && $ppa->ppa3 != null ? 'checked' : '') }} onclick="return false;">
        <label for="ppa3" class="ml-2 text-white">PPA 3</label>
    </div>
     @endif
    
 
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
