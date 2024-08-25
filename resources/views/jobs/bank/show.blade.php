@extends('jobs.bank.app')

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
    <h3 class="text-3xl font-bold font-opensans">Dossier de {{ $bank->firstname }} {{ $bank->lastname }}</h3>
    <div class="w-1/2 mx-auto font-opensans border-2 border-white rounded-md mt-5 mb-5">
        <p class="mt-1"><span class="underline">Nom :</span> {{ $bank->firstname }} {{ $bank->lastname }}</p>
        <p class="mt-1"><span class="underline">Rate :</span> {{ $bank->rate }}%</p>
        <p class="mt-1"><span class="underline">Argent :</span> {{ number_format($bank->tot)}} $</p>
        <p class="mt-1"><span class="underline">Status :</span> {{ $bank->status }} $</p>




</div>
<div class="container mx-auto flex justify-center">
<a href="{{ route('bank-bank.edit', compact('bank')) }}" class="btn-primary transition duration-300 ease-in-out focus:outline-none focus:shadow-outline bg-yellow-600 hover:bg-yellow-900 text-white font-normal py-2 px-4 mr-1 rounded-2xl font-opensans">Modifier le dossier</a>
<form action="" id="delete-form" method="post">
    @csrf
    @method('DELETE')
<button class="btn-primary transition duration-300 ease-in-out focus:outline-none focus:shadow-outline bg-red-600 hover:bg-yellow-900 text-white font-normal py-2 px-4 mr-1 rounded-2xl font-opensans" data-toggle="modal" data-target="#deleteModal" onclick="setModalDelete('{{ route('bank-bank.destroy', compact('bank')) }}')">Supprimer</button>
</form>
</div>
{{-- <div class="modal fade" id="deleteModal" role="dialog">
    <div class="modal-dialog">
        <!-- Modal content-->
        <div class="modal-content">

                <div class="modal-header">
                    <h4 class="modal-title">Supprimer une license</h4>
                    <button type="button" class="close" data-dismiss="modal">&times;</button>
                </div>
                <div class="modal-body">
                    <p>Etes-vous sur de vouloir supprimer la license de ce joueur ?</p>
                </div>
                <div class="modal-footer">
                    <button type="submit" class="btn btn-danger">Supprimer</button>
                    <button type="button" class="btn btn-default" data-dismiss="modal">Annuler</button>
                </div>
            </form>
        </div>
    </div>
</div> --}}
@endsection

@section('js')
<script src="{{ asset('vendor/jquery/jquery.min.js') }}"></script>
<script>
function setModalDelete(route) {
    document.getElementById("delete-form").setAttribute("action", route);
}
</script>
<script src="//cdn.datatables.net/1.10.20/js/jquery.dataTables.min.js"></script>
<script>
$(document).ready( function () {
    $('#delits-table').DataTable();
});

</script>
@endsection
