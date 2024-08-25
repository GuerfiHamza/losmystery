@extends('jobs.lspd.layouts.app')

@section('title', 'Accueil')

@section('content')
    <h3 class="text-3xl font-opensans">{{ $record->getHumanType() }} pour {{ $record->criminal->name }}</h3>

    <div class="container mx-auto w-1/2 font-opensans border-2 border-white rounded-sm mb-10 py-5 mt-5" >
    <p><span class="underline">Temps de cellule (en min):</span> {{ $record->cell ?: 'Aucune' }}</p>
    <p><span class="underline">Amende (en $):</span> {{ $record->penalty ?: 'Aucune' }} $</p>
    <p><span class="underline">Informations supplémentaires:</span> {{ $record->informations }}</p>
    <p><span class="underline">Fouillé:</span> {{ $record->search ? 'Oui' : 'Non' }}</p>
    <p><span class="underline">Objets trouvées:</span> {{ $record->captured ?: "Aucun" }}</p>
    <p><span class="underline ">Récidive:</span> {{ $record->recidivism ? 'Oui' : 'Non' }}</p>
</div>
    <a href="{{ route('lspd-criminal.show', ['criminal' => $record->criminal]) }}" class="btn-primary transition duration-300 ease-in-out focus:outline-none focus:shadow-outline bg-yellow-600 hover:bg-yellow-900 text-white font-normal py-2 px-4 mr-1 rounded-2xl font-opensans">Retourner à la page du criminel</a>
@endsection
