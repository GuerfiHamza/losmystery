@extends('dashboard.layouts.app')

@section('title', 'Toutes les Licenses')

@section('content_header')
    <h1></h1>
@stop

@section('content')
    <div class="container grid px-6 mx-auto">
        <h2 class="my-6 text-2xl font-semibold text-gray-700 dark:text-gray-200">
            Tous les licenses
        </h2>

        <div class="w-full overflow-hidden rounded-lg shadow-xs">
            <div class="w-full overflow-x-auto  bg-gray-300 dark:bg-gray-800">
                <table class="w-full whitespace-no-wrap">
                    <thead>
                        <tr
                            class="text-xs font-semibold tracking-wide text-left text-gray-500 uppercase border-b dark:border-gray-700 bg-gray-300 dark:text-gray-400 dark:bg-gray-800">
                            <th class="px-4 py-3">Joueur</th>
                            <th class="px-4 py-3">License</th>
                            <th class="px-4 py-3">Action</th>
                        </tr>
                    </thead>
                    <tbody class=" divide-y dark:divide-gray-700 dark:bg-gray-800">
                        @foreach ($licenses as $license)
                            <tr class="text-gray-700 dark:text-gray-400">
                                @if ($license->player)
                                    <td class="px-4 py-3 text-sm">
                                        <a
                                            href="{{ route('dashboard-player.show', ['player' => $license->player]) }}">{{ $license->player->name }}</a>
                                    </td>
                                @else
                                <td class="px-4 py-3 text-sm">
                                    Aucun Joueur... ({{ $license->owner }})
                                </td>
                                @endif
                                <td class="px-4 py-3 text-sm">
                                    {{ $license->getNameAttribute() }}
                                </td>
                                <td class="px-4 py-3">
                                    <a class="flex items-center cursor-pointer justify-between px-2 py-2 text-sm font-medium leading-5 text-purple-600 rounded-lg dark:text-gray-400 focus:outline-none focus:shadow-outline-gray"
                                    aria-label="Delete" data-turbolinks="false"
                                    onclick="toggleModalPromote({licenseid: '{{ $license->id }}'})"                                
                                     >
                                     
                                        
                                        <svg class="w-5 h-5" aria-hidden="true" fill="currentColor"
                                            viewBox="0 0 20 20">
                                            <path fill-rule="evenodd"
                                                d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                                                clip-rule="evenodd"></path>
                                        </svg>
                                    </a>
                                </td>
                            </tr>
                        @endforeach

                    </tbody>
                </table>
            </div>
            {{ $licenses->links() }}
        </div>
    </div>
  
    <div id="modalPromote" class="fixed top-0 left-0 flex items-center justify-center w-full h-full opacity-0 pointer-events-none modal transition duration-150">
        <div class="absolute top-0 left-0 w-full h-full bg-black opacity-25 cursor-pointer modal-overlay" onclick="toggleModalPromote()"></div>
        <div class="absolute w-1/2 p-4 shadow-lg bg-gradient-to-l bg-gray-900 rounded-md border border-blue-500">            
            <form action="{{ route('dashboard-license.destroy', compact('license')) }}" id="delete-form" method="post">
                @csrf
                @method('DELETE')
            
              <!-- Modal body -->
              <div class="mt-4 mb-6">
                <input type="hidden" name="licenseid" id="licenseid">
                <!-- Modal title -->
                <p class="mb-2 text-lg font-semibold text-gray-700 dark:text-gray-300">
                    Supprimer une license
                </p>
                <!-- Modal description -->
                <p class="text-sm text-gray-700 dark:text-gray-400">
                    Etes-vous sur de vouloir supprimer la license de ce joueur ?
                </p>
              </div>
                <button data-turbolinks="false" onclick="toggleModalPromote()" type="button" class="w-full px-5 py-3 text-sm font-medium leading-5 text-white transition-colors duration-150 border border-red-500 rounded-lg dark:text-white sm:px-4 sm:py-2 sm:w-auto bg-red-600 active:bg-red-500 hover:border-red-700 hover:bg-red-700 focus:border-red-500 active:text-red-500 focus:outline-none focus:shadow-outline-red">
                  Annuler
                </button>
                <button type="submit"class="w-full px-5 py-3 text-sm font-medium leading-5 text-white transition-colors duration-150 bg-green-600 border border-transparent rounded-lg sm:w-auto sm:px-4 sm:py-2 active:bg-green-600 hover:bg-green-700 focus:outline-none focus:shadow-outline-green">
                  Confirmer
                </button>
            </form>
        </div>
    </div>
    
    
@stop

@section('css')
    <link rel="stylesheet" href="{{ asset('vendor/datatables/css/dataTables.bootstrap4.min.css') }}">
@stop

@section('js')
    <script src="{{ asset('vendor/jquery/jquery.min.js') }}"></script>
    <script src="{{ asset('vendor/datatables/js/jquery.dataTables.min.js') }}"></script>
    <script src="{{ asset('vendor/datatables/js/dataTables.bootstrap4.min.js') }}"></script>
    <script>
        $(document).ready(function() {
            $('#organisation-table').DataTable();
        });


        function toggleModalPromote(infos = null) {
            const modal = document.querySelector('#modalPromote')

            if (infos) {
                document.getElementById('licenseid').value = infos['licenseid'];
            }

            modal.classList.toggle('opacity-0')
            modal.classList.toggle('pointer-events-none')
        }

    </script>
@stop
