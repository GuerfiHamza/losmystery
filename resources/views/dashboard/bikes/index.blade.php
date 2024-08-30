@extends('dashboard.layouts.app')

@section('title', 'Liste des motos')

@section('content_header')
    <h1>Les motos</h1>
@stop

@section('content')
    <div class="container grid px-6 mx-auto">
        <div class="flex justify-between items-center">

            <h2 class="my-6 text-2xl font-semibold text-gray-700 dark:text-gray-200">
                Liste des motos
            </h2>
            <button
                class="w-full px-5 py-3 text-sm font-medium leading-5 text-white transition-colors duration-150 bg-green-600 border border-transparent rounded-lg sm:w-auto sm:px-4 sm:py-2 active:bg-green-600 hover:bg-green-700 focus:outline-none focus:shadow-outline-green"
                aria-label="Update" x-on:click="setModalUpdate('{{ route('dashboard-bikes.store') }}')" @click="openJob">
                Ajouter une moto
            </button>
        </div>
        <div class="w-full overflow-hidden rounded-lg shadow-xs">
            <div class="w-full overflow-x-auto  bg-gray-300 dark:bg-gray-800">
                <table class="w-full whitespace-no-wrap">
                    <thead>
                        <tr
                            class="text-xs font-semibold tracking-wide text-left text-gray-500 uppercase border-b dark:border-gray-700 bg-gray-300 dark:text-gray-400 dark:bg-gray-800">
                            <th class="px-4 py-3">Nom de la moto</th>
                            <th class="px-4 py-3">Model</th>
                            <th class="px-4 py-3">Prix</th>
                            <th class="px-4 py-3">Category</th>
                            <th class="px-4 py-3">Action</th>
                        </tr>
                    </thead>
                    <tbody class=" divide-y dark:divide-gray-700 dark:bg-gray-800">
                        @foreach ($bikes as $bike)
                            <tr class="text-gray-700 dark:text-gray-400">

                                <td class="px-4 py-3 text-sm">
                                    {{ $bike->name }}
                                </td>

                                <td class="px-4 py-3 text-sm">
                                    {{ $bike->model }}
                                </td>

                                <td class="px-4 py-3 text-sm">
                                    {{ number_format($bike->price) }} $
                                </td>
                                <td class="px-4 py-3">
                                    {{ $bike->category }}
                                </td>

                                <td class="px-4 py-3">
                                    <div class="flex">
                                        <button
                                            class="flex items-center justify-between px-2 py-2 text-sm font-medium leading-5 text-purple-600 rounded-lg dark:text-gray-400 focus:outline-none focus:shadow-outline-gray"
                                            aria-label="Delete" @click="openModal"
                                            x-on:click="setModalDelete('{{ route('dashboard-bikes.destroy', compact('bike')) }}')">
                                            <svg class="w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
                                                <path fill-rule="evenodd"
                                                    d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                                                    clip-rule="evenodd"></path>
                                            </svg>
                                        </button>

                                        <a href="{{ route('dashboard-bikes.edit', compact('bike')) }}"
                                                                                    class="flex items-center justify-between px-2 py-2 text-sm font-medium leading-5 text-purple-600 rounded-lg dark:text-gray-400 focus:outline-none focus:shadow-outline-gray"
>
                                            <g id="Complete">

                                                <svg class="w-5 h-5 " aria-hidden="true"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    fill="none" viewBox="0 0 24 24">
                                                    <path stroke="currentColor" stroke-linecap="round"
                                                        stroke-linejoin="round" stroke-width="2"
                                                        d="m14.304 4.844 2.852 2.852M7 7H4a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-4.5m2.409-9.91a2.017 2.017 0 0 1 0 2.853l-6.844 6.844L8 14l.713-3.565 6.844-6.844a2.015 2.015 0 0 1 2.852 0Z" />
                                                </svg>

                                        </a>
                                    </div>
                                </td>

                            </tr>
                        @endforeach

                    </tbody>
                </table>
            </div>
            {{-- {{ $bikes->links() }} --}}
        </div>
    </div>
    <div x-show="isModalOpen" x-transition:enter="transition ease-out duration-150" x-transition:enter-start="opacity-0"
        x-transition:enter-end="opacity-100" x-transition:leave="transition ease-in duration-150"
        x-transition:leave-start="opacity-100" x-transition:leave-end="opacity-0"
        class="fixed inset-0 z-30 flex items-end bg-black bg-opacity-50 sm:items-center sm:justify-center"
        style="display: none;">
        <!-- Modal -->
        <div x-show="isModalOpen" x-transition:enter="transition ease-out duration-150"
            x-transition:enter-start="opacity-0 transform translate-y-1/2" x-transition:enter-end="opacity-100"
            x-transition:leave="transition ease-in duration-150" x-transition:leave-start="opacity-100"
            x-transition:leave-end="opacity-0  transform translate-y-1/2" @click.away="closeModal"
            @keydown.escape="closeModal"
            class="w-full px-6 py-4 overflow-hidden  rounded-t-lg dark:bg-gray-800 sm:rounded-lg sm:m-4 sm:max-w-xl"
            role="dialog" id="modal" style="display: none;">
            <!-- Remove header if you don't want a close icon. Use modal body to place modal tile. -->
            <header class="flex justify-end">
                <button
                    class="inline-flex items-center justify-center w-6 h-6 text-gray-400 transition-colors duration-150 rounded dark:hover:text-gray-200 hover: hover:text-gray-700"
                    aria-label="close" @click="closeModal">
                    <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" role="img" aria-hidden="true">
                        <path
                            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                            clip-rule="evenodd" fill-rule="evenodd"></path>
                    </svg>
                </button>
            </header>
            <form action="" id="delete-form" method="post">
                @csrf
                @method('DELETE')
                <!-- Modal body -->
                <div class="mt-4 mb-6">
                    <!-- Modal title -->
                    <p class="mb-2 text-lg font-semibold text-gray-700 dark:text-gray-300">
                        Supprimer la moto
                    </p>
                    <!-- Modal description -->
                    <p class="text-sm text-gray-700 dark:text-gray-400">
                        Etes-vous sur de vouloir supprimer la moto ?

                    </p>
                </div>
                <footer
                    class="flex flex-col items-center justify-end px-6 py-3 -mx-6 -mb-4 space-y-4 sm:space-y-0 sm:space-x-6 sm:flex-row bg-gray-50 dark:bg-gray-800">
                    <button @click="closeModal" type="button"
                        class="w-full px-5 py-3 text-sm font-medium leading-5 text-white transition-colors duration-150 border border-blue-500 rounded-lg dark:text-white sm:px-4 sm:py-2 sm:w-auto bg-blue-600 active:bg-blue-500 hover:border-blue-700 hover:bg-blue-700 focus:border-blue-500 active:text-blue-500 focus:outline-none focus:shadow-outline-blue">
                        Annuler
                    </button>
                    <button
                        type="submit"class="w-full px-5 py-3 text-sm font-medium leading-5 text-white transition-colors duration-150 bg-green-600 border border-transparent rounded-lg sm:w-auto sm:px-4 sm:py-2 active:bg-green-600 hover:bg-green-700 focus:outline-none focus:shadow-outline-green">
                        Confirmer
                    </button>
                </footer>
            </form>

        </div>
    </div>
    <div x-show="isJobOpen" x-transition:enter="transition ease-out duration-150" x-transition:enter-start="opacity-0"
        x-transition:enter-end="opacity-100" x-transition:leave="transition ease-in duration-150"
        x-transition:leave-start="opacity-100" x-transition:leave-end="opacity-0"
        class="fixed inset-0 z-30 flex items-end bg-black bg-opacity-50 sm:items-center sm:justify-center"
        style="display: none;">
        <div x-show="isJobOpen" x-transition:enter="transition ease-out duration-150"
            x-transition:enter-start="opacity-0 transform translate-y-1/2" x-transition:enter-end="opacity-100"
            x-transition:leave="transition ease-in duration-150" x-transition:leave-start="opacity-100"
            x-transition:leave-end="opacity-0  transform translate-y-1/2" @click.away="closeJob"
            @keydown.escape="closeJob"
            class="w-full px-6 py-4 overflow-hidden  rounded-t-lg bg-white dark:bg-gray-800 sm:rounded-lg sm:m-4 sm:max-w-xl"
            role="dialog" id="modal-add-wipe" style="display: none;">
            <header class="flex justify-between">
                <h5 class="font-medium dark:text-white">Ajouter une moto</h5>
                <button
                    class="inline-flex items-center justify-center w-6 h-6 text-gray-400 transition-colors duration-150 rounded dark:hover:text-gray-200 hover: hover:text-gray-700"
                    aria-label="close" @click="closeJob">
                    <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" role="img" aria-hidden="true">
                        <path
                            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                            clip-rule="evenodd" fill-rule="evenodd"></path>
                    </svg>
                </button>
            </header>

            <form action="" id="update-bike" method="post">
                @csrf

                <div class="mt-4 mb-6">

                    <input type="text" name="name" id="name" placeholder="Nom de la moto"
                        class="mb-2 w-full dark:bg-gray-800 dark:text-white border rounded-full border-blue px-3 py-1"
                        requiblue>
                    <input type="text" name="model" id="model" placeholder="Model"
                        class="mb-2 w-full dark:bg-gray-800 dark:text-white border rounded-full border-blue px-3 py-1"
                        requiblue>

                    <input type="number" name="price" value="" id="price" placeholder="Prix"
                        class="mb-2 w-full dark:bg-gray-800 dark:text-white border rounded-full border-blue px-3 py-1"
                        requiblue>

                    <select type="text" name="category"
                        class="mb-2 w-full dark:bg-gray-800 dark:text-white border rounded-full border-blue px-3 py-1"
                        requiblue>
                        <option value="motorcycles">Motos</option>
                        <option value="bike">Vélo</option>
                        
                    </select>
                </div>
                <footer
                    class="flex flex-col items-center justify-end px-6 py-3 -mx-6 -mb-4 space-y-4 sm:space-y-0 sm:space-x-6 sm:flex-row bg-gray-50 dark:bg-gray-800">
                    <button @click="closeJob" type="button"
                        class="w-full px-5 py-3 text-sm font-medium leading-5 text-white transition-colors duration-150 border border-red-500 rounded-lg dark:text-white sm:px-4 sm:py-2 sm:w-auto bg-red-600 active:bg-blue-500 hover:border-blue-700 hover:bg-blue-700 focus:border-blue-500 active:text-blue-500 focus:outline-none focus:shadow-outline-blue">
                        Annuler
                    </button>
                    <button type="submit"
                        class="w-full px-5 py-3 text-sm font-medium leading-5 text-white transition-colors duration-150 bg-green-600 border border-transparent rounded-lg sm:w-auto sm:px-4 sm:py-2 active:bg-green-600 hover:bg-green-700 focus:outline-none focus:shadow-outline-green">
                        Ajouter
                    </button>
                </footer>
            </form>

        </div>
    </div>
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
            document.getElementById("update-bike").setAttribute("action", route);
        }
    </script>

@stop
