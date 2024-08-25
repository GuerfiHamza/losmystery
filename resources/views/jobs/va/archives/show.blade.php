@extends('jobs.va.layouts.app')

@section('title', 'Accueil')

@section('content')
    <h3 class="text-3xl font-opensans">Vente de {{ $archive->client->name }}</h3>

    <div class="container mx-auto w-1/2 font-opensans border-2 border-white rounded-sm mb-10 py-5 mt-5" >
    <p><span class="underline">Organisation:</span> {{ $archive->client->org ?: 'Aucune' }}</p>
    <p><span class="underline">Vendeur:</span> {{ $archive->vendeur ?: 'Aucune' }}</p>
    <p><span class="underline">Amende (en $):</span> {{ $archive->prix ?: 'Aucune' }} $</p>
    <p><span class="underline">Armes:</span> 
        @foreach ($archive->weapon as $key => $wp)
        {{ $wp }},
        @endforeach
    </p>
    <p><span class="underline">Informations supplémentaires:</span> {{ $archive->informations ?: 'Aucune' }}</p>
</div>
    <a href="{{ route('va-clients.show', ['client' => $archive->client]) }}" class="btn-primary transition duration-300 ease-in-out focus:outline-none focus:shadow-outline bg-yellow-600 hover:bg-yellow-900 text-white font-normal py-2 px-4 mr-1 rounded-2xl font-opensans">Retourner à la page du client</a>
@endsection
