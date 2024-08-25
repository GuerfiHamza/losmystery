@extends('jobs.ppa.app')


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
    <h3 class="text-3xl font-opensans mb-4">Dossiers de PPA</h3>
    {{-- @if (\Auth::user()->players->job == "police" || \Auth::user()->players->job == "armurier" )
        
    @else
    <a href="{{ route('ppa.create') }}" class="btn-primary transition duration-300 ease-in-out focus:outline-none focus:shadow-outline bg-yellow-600 hover:bg-yellow-900 text-white font-normal py-2 px-4 mr-1 rounded-2xl mt-15 mb-15 font-opensans">Créer un nouveaux dossier</a>

    @endif --}}

    <a href="{{ route('ppa.create') }}" class="btn-primary transition duration-300 ease-in-out focus:outline-none focus:shadow-outline bg-yellow-600 hover:bg-yellow-900 text-white font-normal py-2 px-4 mr-1 rounded-2xl mt-15 mb-15 font-opensans">Créer un nouveaux dossier</a>

    <div class="w-2/3 mx-auto bg-gray-900 text-white p-2 rounded font-opensans">
        <table id="ppa-table" class="bg-gray-900 text-white font-opensans">
            <thead class="bg-gray-900 text-white">
                <tr class="bg-gray-900 text-white">
                    <th class="bg-gray-900 text-white">Nom</th>
                    <th class="bg-gray-900 text-white">Test Psy</th>
                    <th class="bg-gray-900 text-white">Test Physique</th>
                    <th class="bg-gray-900 text-white">Casier</th>
                    <th class="bg-gray-900 text-white">PPA 1</th>
                    <th class="bg-gray-900 text-white">PPA 2</th>
                    <th class="bg-gray-900 text-white">PPA 3</th>
                </tr>
            </thead>
            <tbody>
                @foreach($ppa as $ppa)
                    <tr>
                        <td><a href="{{ route('ppa.show', compact('ppa')) }}">{{ $ppa->nom }}</a></td>
                        <td>{{ $ppa->psy ? "Oui" : "Non" }}</td>
                        <td>{{ $ppa->phys ? "Oui" : "Non" }}</td>
                        <td>{{ $ppa->casier ? "Oui" : "Non" }}</td>
                        <td>{{ $ppa->ppa1 ? "Oui" : "Non" }}</td>
                        <td>{{ $ppa->ppa2 ? "Oui" : "Non" }}</td>
                        <td>{{ $ppa->ppa3 ? "Oui" : "Non" }}</td>
                    </tr>
                @endforeach
            </tbody>
        </table>
    
    </div>
@endsection

@section('js')
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
<script src="//cdn.datatables.net/1.10.20/js/jquery.dataTables.min.js"></script>
<script>
$(document).ready( function () {
    $('#ppa-table').DataTable();
});
</script>
@endsection