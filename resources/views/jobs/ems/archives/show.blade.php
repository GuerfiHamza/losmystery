@extends('jobs.ems.layouts.app')

@section('title', 'Accueil')

@section('content')
    <h3 class="text-3xl font-opensans">{{ $archive->patient->name }}</h3>

    <div class="container mx-auto w-1/2 font-opensans border-2 border-white rounded-sm mb-10 py-5 mt-5" >
    <p><span class="underline">Medecin:</span> {{ $archive->who ?: 'Aucune' }}</p>
    <p><span class="underline">Amende (en $):</span> {{ $archive->amende ?: 'Aucune' }} $</p>
    <p><span class="underline">Informations supplémentaires:</span> {{ $archive->informations }}</p>
    <p><span class="underline">PPA:</span> {{ $archive->ppa ? 'Oui' : 'Non' }}</p>
</div>
    <a href="{{ route('ems-patients.show', ['patient' => $archive->patient]) }}" class="btn-primary transition duration-300 ease-in-out focus:outline-none focus:shadow-outline bg-yellow-600 hover:bg-yellow-900 text-white font-normal py-2 px-4 mr-1 rounded-2xl font-opensans">Retourner à la page du criminel</a>
@endsection
