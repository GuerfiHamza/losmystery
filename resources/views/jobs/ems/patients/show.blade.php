@extends('jobs.ems.layouts.app')

@section('title', 'Accueil')

@section('css')
<link rel="stylesheet" href="//cdn.datatables.net/1.10.20/css/jquery.dataTables.min.css">
<style>
/*Form fields*/
.dataTables_wrapper select,
.dataTables_wrapper .dataTables_filter input {
    color: #000; 			/*text-gray-700*/
    padding-left: 1rem; 		/*pl-4*/
    padding-right: 1rem; 		/*pl-4*/
    padding-top: .5rem; 		/*pl-2*/
    padding-bottom: .5rem; 		/*pl-2*/
    line-height: 1.25; 			/*leading-tight*/
    border-width: 2px; 			/*border-2*/
    border-radius: .25rem; 		
    border-color: #edf2f7; 		/*border-gray-200*/
    background-color: #edf2f7; 	/*bg-gray-200*/
}

th, td {
    color: black;
}

/*Row Hover*/
table.dataTable.hover tbody tr:hover, table.dataTable.display tbody tr:hover {
    background-color: #111827;	/*bg-indigo-100*/
}

/*Pagination Buttons*/
.dataTables_wrapper .dataTables_paginate .paginate_button		{
    font-weight: 700;				/*font-bold*/
    border-radius: .25rem;			/*rounded*/
    border: 1px solid transparent;	/*border border-transparent*/
}

/*Pagination Buttons - Current selected */
.dataTables_wrapper .dataTables_paginate .paginate_button.current	{
    color: #fff !important;				/*text-white*/
    box-shadow: 0 1px 3px 0 rgba(0,0,0,.1), 0 1px 2px 0 rgba(0,0,0,.06); 	/*shadow*/
    font-weight: 700;					/*font-bold*/
    border-radius: .25rem;				/*rounded*/
    background: #111827 !important;		/*bg-indigo-500*/
    border: 1px solid transparent;		/*border border-transparent*/
}

/*Pagination Buttons - Hover */
.dataTables_wrapper .dataTables_paginate .paginate_button:hover		{
    color: #fff !important;				/*text-white*/
    box-shadow: 0 1px 3px 0 rgba(0,0,0,.1), 0 1px 2px 0 rgba(0,0,0,.06);	 /*shadow*/
    font-weight: 700;					/*font-bold*/
    border-radius: .25rem;				/*rounded*/
    background: #fff !important;		/*bg-indigo-500*/
    border: 1px solid transparent;		/*border border-transparent*/
}

/*Add padding to bottom border */
table.dataTable.no-footer {
    border-bottom: 1px solid #e2e8f0;	/*border-b-1 border-gray-300*/
    margin-top: 0.75em;
    margin-bottom: 0.75em;
}

/*Change colour of responsive icon*/
table.dataTable.dtr-inline.collapsed>tbody>tr>td:first-child:before, table.dataTable.dtr-inline.collapsed>tbody>tr>th:first-child:before {
    background-color: #111827 !important; /*bg-indigo-500*/
}
table.dataTable tbody tr {
    background-color: #111827 !important;
    color: #fff !important;
}
td, .dataTables_info, .dataTables_length, .dataTables_filter, .dataTables_paginate {
    color: #fff!important;
}

thead {
    border-bottom: 1px solid #fff;
}
</style>
@endsection

@section('content')
    <h3 class="text-3xl font-bold font-opensans">Dossier de {{ $patient->name }}</h3>
    <div class="w-1/2 mx-auto font-opensans border-2 border-white rounded-md mt-5 mb-5">
    <p class="mt-16 font-opensans"><span class="underline">Pays d'origine:</span> {{ $patient->country ?: 'N/A' }}</p>
    <p><span class="underline">Couleur de peau:</span> {{ $patient->color ?: 'N/A' }}</p>
    <p><span class="underline">Date de naissance:</span> {{ $patient->birthdate ?: 'N/A' }}</p>
    <p><span class="underline">Pays:</span> {{ $patient->country ?: 'N/A' }}</p>
    
    <p class="mt-16"><span class="underline">Numéro de télèphone:</span> {{ $patient->tel ?: 'Aucun' }}</p>
    <p><span class="underline">Mort:</span> {{ $patient->dead ? 'Oui' : 'Non' }}</p>

    <div class="text-center w-full mt-16">

        <p>Carte d'identité</p>
        <img src="{{ asset('storage/'.$patient->identity_card) }}" alt="Carte d'identité non-existant..." class="mx-auto w-1/2 h-auto mb-6">
    </div>

    {{-- <div class="w-2/3 mx-auto bg-gray-900 text-white p-2 rounded my-16">
        <table id="delits-table" class="text-white">
            <thead>
                <tr>
                    <th class="text-white">Type</th>
                    <th class="text-white">Cellule</th>
                    <th class="text-white">Amende</th>
                </tr>
            </thead>
            <tbody>
                @foreach($patient->archives as $ss)
                    <tr>
                        <td><a href="{{ route('ems-archives.show', compact('ss')) }}">{{ $ss->getHumanType() }}</a></td>
                        <td>{{ $ss->cell ?: 'Non' }}</td>
                        <td>{{ $ss->penalty ?: "Non" }}</td>
                    </tr>
                @endforeach
            </tbody>
        </table>
    </div> --}}
</div>
    <a href="{{ route('ems-patients.edit', compact('patient')) }}" class="btn-primary transition duration-300 ease-in-out focus:outline-none focus:shadow-outline bg-yellow-600 hover:bg-yellow-900 text-white font-normal py-2 px-4 mr-1 rounded-2xl font-opensans">Modifier le dossier</a>
@endsection

@section('js')
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
<script src="//cdn.datatables.net/1.10.20/js/jquery.dataTables.min.js"></script>
<script>
$(document).ready( function () {
    $('#delits-table').DataTable();
});
</script>
@endsection