@extends('jobs.ems.layouts.app')

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
<form action="{{ isset($patient) ? route('ems-patients.update', compact('patient')) : route('ems-patients.store') }}" class="w-1/3 font-opensans border-2 border-white rounded-md text-white rounded mx-auto p-4 flex flex-col mb-4" method="POST" enctype="multipart/form-data">
    @csrf
 
    @if (isset($patient))
        @method('PUT')
    @endif

    <label for="name" class="mt-2 text-white">NOM Prénom</label>
    <input type="text" name="name" id="name" class="px-2 border border-gray-500 rounded text-black" value="{{ old('name') ?: (isset($patient) ? $patient->name : '') }}" required>

    <label for="birthdate" class="mt-2 text-white">Date de naissance</label>
    <input type="date" name="birthdate" id="birthdate" value="{{ old('birthdate') ?: (isset($patient) ? $patient->birthdate : '') }}" class="px-2 border border-gray-500 rounded text-black">

    <label for="skin" class="mt-2 text-white">Couleur de peau</label>
    <select name="color" id="skin">
        <option value="pale" @if ((old('color') ?: (isset($patient) ? $patient->color : '')) == 'pale') selected @endif>Pale</option>
        <option value="basane" @if ((old('color') ?: (isset($patient) ? $patient->color : '')) == 'basane') selected @endif>Basané</option>
        <option value="metisse" @if ((old('color') ?: (isset($patient) ? $patient->color : '')) == 'metisse') selected @endif>Metissé</option>
        <option value="fonce" @if ((old('color') ?: (isset($patient) ? $patient->color : '')) == 'fonce') selected @endif>Foncé</option>
    </select>

    <label for="country" class="mt-2 text-white">Pays d'origine</label>
    <input type="text" name="country" id="country" value="{{ old('country') ?: (isset($patient) ? $patient->country : '') }}" class="px-2 border border-gray-500 rounded text-black">
    

    <label for="tel" class="mt-2 text-white">Numéro de telephone</label>
    <input type="tel" name="tel" id="tel" value="{{ old('tel') ?: (isset($patient) ? $patient->tel : '') }}" class="px-2 border border-gray-500 rounded text-black">
    
    <hr class="mt-8 mb-4">
    <label for="identity_card" class="mt-2 text-white">Carte d'identité</label>
    <input type="file" name="identity_card" id="identity_card" class="px-2 border border-gray-500 rounded text-white">
    
    <hr class="mt-8 mb-4">

    <div class="mt-2 flex flex-row items-center justify-center">
        <input type="checkbox" name="dead" id="dead" class="px-2 border border-gray-500 rounded text-black" {{ old('dead') ? 'checked' : (isset($patient) && $patient->dead != null ? 'checked' : '') }}>
        <label for="dead" class="ml-2 text-white">Mort</label>
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
