@extends('jobs.bank.app')

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
<form action="{{ isset($bank) ? route('bank-bank.update', compact('bank')) : route('bank-bank.store') }}" class="w-1/3 font-opensans border-2 border-white rounded-md text-white rounded mx-auto p-4 flex flex-col mb-4" method="POST" enctype="multipart/form-data">
    @csrf

    @if (isset($bank))
        @method('PUT')
    @endif


    <label for="firstname" class="mt-2 text-text-white">First Name</label>
    <select name="firstname" id="type" class="block mb-5">
        @foreach ($player as $p)
        <option value="{{ $p->firstname }}"  @if (isset($bank->id))
            {{$p->identifier == $bank->firstname  ? 'selected' : '' ?? ''}}
        @endif >({{ $p->identifier }}) {{ $p->name }} | {{ $p->firstname }}</option>

        @endforeach
    </select>
    <label for="lastname" class="mt-2 text-text-white">Last Name</label>
    <select name="lastname" id="type2" class="block mb-5">
        @foreach ($player as $p)
        <option value="{{ $p->lastname }}"  @if (isset($bank->id))
            {{$p->identifier == $bank->lastname  ? 'selected' : '' ?? ''}}
        @endif >({{ $p->identifier }}) {{ $p->name }} | {{ $p->lastname }}</option>

        @endforeach
    </select>


    <label for="advisorFirstname" class="mt-2 text-white">advisorFirstname</label>
    <input type="text" name="advisorFirstname" id="advisorFirstname" class="px-2 border border-gray-500 rounded text-black" value="{{ old('advisorFirstname') ?: (isset($bank) ? $bank->advisorFirstname : '') }}" required>

    <label for="advisorLastname" class="mt-2 text-white">advisorLastname</label>
    <input type="text" name="advisorLastname" id="advisorLastname" class="px-2 border border-gray-500 rounded text-black" value="{{ old('advisorLastname') ?: (isset($bank) ? $bank->advisorLastname : '') }}" required>

    <label for="tot" class="mt-2 text-text-white">Montant</label>
    <input type="number" name="tot" id="tot" class="px-2 border border-gray-500 rounded text-black" value="{{ old('tot') ?: (isset($bank) ? $bank->tot : '') }}" required >

    <label for="rate" class="mt-2 text-text-white">Rate</label>
    <input type="number" name="rate" id="rate" class="px-2 border border-gray-500 rounded text-black" value="{{ old('rate') ?: (isset($bank) ? $bank->rate : '') }}" required >


    <label for="status" class="mt-2 text-text-white">Status</label>
    <select name="status" id="status" class="block mb-5">
        <option value="Ouvert"  @if (isset($bank->status))
            {{$p->identifier == $bank->status  ? 'selected' : '' ?? ''}}
        @endif >Ouvert</option>
        <option value="Clos"  @if (isset($bank->status))
            {{$p->identifier == $bank->status  ? 'selected' : '' ?? ''}}
        @endif >Fermé</option>

    </select>


    <button type="submit" class="btn-primary mt-5 transition duration-300 ease-in-out focus:outline-none focus:shadow-outline bg-yellow-600 hover:bg-yellow-900 text-white font-normal py-2 px-4 mr-1 rounded-2xl mt-15 mb-15 font-opensans">
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
    $('#type2').select2();
    $('#status').select2();
});
</script>
@endsection
