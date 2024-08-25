@extends('dashboard.layouts.app')

@section('title', 'Tous nos joueurs')

@section('content_header')
    <h1>Les vehicules</h1>
@stop

@section('content')
<div class="container grid px-6 mx-auto dark:bg-gray-800 my-6 py-8 rounded">

    <form action="{{ route('dashboard-cars.update', compact('car')) }}" method="post" id="update-car">
        @csrf
        @method('PUT')
        <div class="form-group">
            <span class="text-white">Nom :</span>
            <input type="text" class="mb-2 w-50 dark:bg-gray-800 dark:text-white border rounded-full border-red px-3 py-1"
            id="name" name="name" value="{{ $car->name }}">
            
        </div>
        <div class="form-group">
            <span class="text-white">Model :</span>
            <input type="text" class="mb-2 w-50 dark:bg-gray-800 dark:text-white border rounded-full border-red px-3 py-1"
            id="model" name="model" value="{{ $car->model }}">
        </div>
        <div class="form-group">
            <span class="text-white">Prix :</span>

            <input type="number" class="mb-2 w-50 dark:bg-gray-800 dark:text-white border rounded-full border-red px-3 py-1"
            id="price" name="price" value="{{ $car->price }}">
        </div>
        <div class="form-group">
            <span class="text-white">Category :</span>

            <select type="text" name="category"
                        class="mb-2 w-50 dark:bg-gray-800 dark:text-white border rounded-full border-red px-3 py-1"
                        required>
                        <option value="sports">Sports</option>
                        <option value="sportsclassics">Sports Classics</option>
                        <option value="super">Super</option>
                        <option value="suvs">Suv</option>
                        <option value="vans">Vans</option>
                    </select>
        </div>
        <button type="submit" class="w-full px-5 py-3 text-sm font-medium leading-5 text-white transition-colors duration-150 bg-green-600 border border-transparent rounded-lg sm:w-auto sm:px-4 sm:py-2 active:bg-green-600 hover:bg-green-700 focus:outline-none focus:shadow-outline-green">Modifier</button>
    </form>
</div>
@endsection

@section('css')
    <link rel="stylesheet" href="{{ asset('vendor/datatables/css/dataTables.bootstrap4.min.css') }}">
@stop

@section('js')
    <script src="{{ asset('vendor/jquery/jquery.min.js') }}"></script>
    <script src="{{ asset('vendor/datatables/js/jquery.dataTables.min.js') }}"></script>
    <script src="{{ asset('vendor/datatables/js/dataTables.bootstrap4.min.js') }}"></script>
    <script>
        $(document).ready(function() {
            $('#vehicule-user-table').DataTable();
            $('#license-table').DataTable();
        });

        function setModalDelete(route) {
            document.getElementById("delete-form").setAttribute("action", route);
        }
        function setModalUpdate(route) {
            document.getElementById("update-car").setAttribute("action", route);
        }
    </script>

@stop
