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
<form action="{{ isset($client) ? route('va-clients.update', compact('client')) : route('va-clients.store') }}" class="w-1/3 font-opensans border-2 border-white rounded-md text-white rounded mx-auto p-4 flex flex-col mb-4" method="POST" enctype="multipart/form-data">
    @csrf
 
    @if (isset($client))
        @method('PUT')
    @endif

    <label for="name" class="mt-2 text-white">NOM Prénom</label>
    <input type="text" name="name" id="name" class="px-2 border border-gray-500 rounded text-black" value="{{ old('name') ?: (isset($client) ? $client->name : '') }}" required>


    <label for="org" class="mt-2 text-white">Organisation</label>
    <input type="text" name="org" id="org" value="{{ old('org') ?: (isset($client) ? $client->org : '') }}" class="px-2 border border-gray-500 rounded text-black">
    

    <label for="tel" class="mt-2 text-white">Numéro de telephone</label>
    <input type="tel" name="tel" id="tel" value="{{ old('tel') ?: (isset($client) ? $client->tel : '') }}" class="px-2 border border-gray-500 mb-10 rounded text-black">


    

 
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
