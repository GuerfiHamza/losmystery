@extends('dashboard.layouts.app')

@section('title')
    {{ $org->label }}
@endsection
@section('content_header')
    <h1>Les organisations</h1>
@stop

@section('css')
    <meta name="csrf-token" content="{{ csrf_token() }}">

@endsection

@section('content')
    <div class="container mx-auto">
        <div class="grid overflow-hiddengrid-cols-3  gap-2 mt-5">
            <div class="box row-span-1 dark:bg-gray-800 bg-gray-200 px-5 py-5 rounded-xl dark:text-white  border-blue-500 border">
                <h5 class="mb-3 font-medium text-center">{{ $org->label }} </h5>
                <h6>Gérant: {{ $org->members->sortByDesc('org_grade')->pluck('name')->first() }}</h6>
                <h6>Argent: {{ number_format($org->getTreasory(), 2) }} $</h6>
                <h6> Membres: {{ $org->members->count() }} </h6>
                <h6> Nombre de vehicules: A FAIRE</h6>
            </div>
            <div
                class="box col-start-2 col-span-2 dark:bg-gray-800 bg-gray-200 px-5 py-5 rounded-xl dark:text-white border-blue-500 border">
                <div id="organisation-treasory">
                    <canvas id="myChart" width="400" height="150"></canvas>
                </div>


            </div>
            <div class="box  dark:bg-gray-800  px-5 py-5 rounded-xl dark:text-white  border-blue-500 border">
                <h5 class="mb-3 font-medium text-center">Grades de {{ $org->label }} </h5>
                <table class="w-full text-gray-100 rounded-t-md dark:bg-gray-700">
                    <thead class="">
                        <tr class="text-center border-b-2 border-blue-500">
                            <th class="px-4 py-3">Emploie</th>
                            <th class="px-4 py-3">Salaire</th>
                            <th class="px-4 py-3">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        @foreach ($org->grades->sortByDesc('grade') as $grade)
                            @if ($loop->last)
                                <tr class="text-left border-b-2 border-blue-500">
                                    <td class="px-4 py-2 border border-gray-800">{{ $grade->label }}</td>
                                    <td class="px-4 py-2 border border-gray-800">{{ number_format($grade->salary, 2) }}$
                                    </td>
                                    <td class="px-4 py-2 border border-gray-800"><a data-turbolinks="false"
                                            onclick="toggleModalPost({posteId: '{{ $grade->id }}', posteLabel: `{{ $grade->label }}`, posteSalary: {{ $grade->salary }}})"
                                            class="inline-block px-4 py-2 mr-2 font-medium leading-6 text-center text-white transition duration-150 delay-150 ease-in-out rounded-md bg-green-500 md:inline-flex md:w-auto hover:bg-green-700 focus:outline-none focus:shadow-outline cursor-pointer">Modifier</a>
                                    </td>
                                </tr>
                            @else
                                <tr class="border">
                                    <td class="px-4 py-2 border border-gray-800">{{ $grade->label }}</td>
                                    <td class="px-4 py-2 border border-gray-800">{{ number_format($grade->salary, 2) }}$
                                    </td>
                                    <td class="px-4 py-2 border border-gray-800"><a data-turbolinks="false"
                                            onclick="toggleModalPost({posteId: '{{ $grade->id }}', posteLabel: `{{ $grade->label }}`, posteSalary: {{ $grade->salary }}})"
                                            class="inline-block px-4 py-2 mr-2 font-medium leading-6 text-center text-white transition duration-150 delay-150 ease-in-out rounded-md bg-green-500 md:inline-flex md:w-auto hover:bg-green-700 focus:outline-none focus:shadow-outline cursor-pointer">Modifier</a>
                                    </td>
                                </tr>
                            @endif
                        @endforeach
                    </tbody>
                </table>
            </div>
            <div
                class="box col-start-2 col-span-2 dark:bg-gray-800 bg-gray-200 px-5 py-5 rounded-xl dark:text-white border-blue-500 border">
                <h5 class="mb-3 font-medium text-center">Vehicules de {{ $org->label }} </h5>
{{-- 
                <form action="{{ route('dashboard-organisation-reattribution') }}" method="post" class="pl-5 my-4">
                    @csrf
                    <input type="hidden" name="org" value="{{ $org->name }}">
                    <button type="submit" class="px-4 py-2 text-white bg-blue-600 rounded shadow"
                        onclick="confirm('Etes-vous sur ?') ? true : event.preventDefault()">Réattribuer tous les
                        véhicules des personnes non employés</button>
                </form>

                <table class="w-full text-gray-100 rounded-t-md dark:bg-gray-700">
                    <thead class="">
                        <tr class="text-center border-b-2 border-blue-500">
                            <th class="px-4 py-3">Plaque</th>
                            <th class="px-4 py-3">Véhicule</th>
                            <th class="px-4 py-3">Attribution</th>
                            <th class="px-4 py-3">Fourrière</th>
                            <th class="px-4 py-3">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        @foreach ($org->vehicules as $vehicule)
                            @if ($loop->last)
                                <tr class="text-left border-b-2 border-blue-500">
                                    <td class="px-4 py-2 border border-gray-800">{{ $vehicule->plate }}</td>
                                    <td class="px-4 py-2 border border-gray-800">{{ $vehicule->vehicle_name() }}</td>
                                    <td class="px-4 py-2 border border-gray-800">
                                        {{ $vehicule->player && $vehicule->owner != '1' ? $vehicule->player->name . ' (' . ($org->isMember($vehicule->player) ? 'employé' : 'non employé') . ')' : 'Aucune attribution' }}
                                    </td>
                                    <td class="px-4 py-2 border border-gray-800">
                                        {{ $vehicule->stored == 0 ? 'Oui' : 'Non' }}</td>
                                    <td class="px-4 py-2 border border-gray-800"><a data-turbolinks="false"
                                            onclick="toggleModalVehicle({vehiculePlate: '{{ $vehicule->plate }}'})"
                                            class="inline-block px-4 py-2 mr-2 font-medium leading-6 text-center text-white transition duration-150 delay-150 ease-in-out rounded-md bg-green-500 md:inline-flex md:w-auto hover:bg-green-700 focus:outline-none focus:shadow-outline cursor-pointer">Modifier</a>
                                    </td>
                                </tr>
                            @else
                                <tr class="border">
                                    <td class="px-4 py-2 border border-gray-800">{{ $vehicule->plate }}</td>
                                    <td class="px-4 py-2 border border-gray-800">{{ $vehicule->vehicle_name() }}</td>
                                    <td class="px-4 py-2 border border-gray-800">
                                        {{ $vehicule->player && $vehicule->owner != '1' ? $vehicule->player->name . ' (' . ($org->isMember($vehicule->player) ? 'employé' : 'non employé') . ')' : 'Aucune attribution' }}
                                    </td>
                                    <td class="px-4 py-2 border border-gray-800">
                                        {{ $vehicule->stored == 0 ? 'Oui' : 'Non' }}</td>
                                    <td class="px-4 py-2 border border-gray-800"><a data-turbolinks="false"
                                            onclick="toggleModalVehicle({vehiculePlate: '{{ $vehicule->plate }}'})"
                                            class="inline-block px-4 py-2 mr-2 font-medium leading-6 text-center text-white transition duration-150 delay-150 ease-in-out rounded-md bg-green-500 md:inline-flex md:w-auto hover:bg-green-700 focus:outline-none focus:shadow-outline cursor-pointer">Modifier</a>
                                    </td>
                                </tr>
                            @endif
                        @endforeach
                    </tbody>
                </table> --}}


            </div>
            <div
                class="box dark:bg-gray-800 bg-gray-200 px-5 py-5 rounded-xl dark:text-white border-blue-500 border">
            INVENTAIRE A FAIRE
            </div>
            <div
                class="box col-start-2 col-span-2 dark:bg-gray-800 bg-gray-200 px-5 py-5 rounded-xl dark:text-white border-blue-500 border">
                <h5 class="mb-3 font-medium text-center">Employées de {{ $org->label }} </h5>

                <div id="organisation-employees" class="block select">
                    <table class="w-full text-gray-100 rounded-t-md dark:bg-gray-700">
                        <thead>
                            <tr class="text-center border-b-2 border-blue-500">
                                <th class="px-4 py-3">Employé(e)</th>
                                <th class="px-4 py-3">Poste</th>
                                <th class="px-4 py-3">Salaire</th>
                                <th class="px-4 py-3">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            @foreach ($org->members as $member)
                                @if ($loop->last)
                                    <tr class="text-left border-b-2 border-blue-500">
                                        <td class="px-4 py-2 border border-gray-800">{{ $member->name }}</td>
                                        <td class="px-4 py-2 border border-gray-800">
                                            {{ $member->getOrgGrade()->label ?? 'Erreur de grade || CHANGEZ LE GRADE IMMEDIATEMENT' }}
                                        </td>
                                        <td class="px-4 py-2 border border-gray-800">
                                            {{ $member->getOrgGrade()->salary ?? 'Erreur de grade || CHANGEZ LE GRADE IMMEDIATEMENT' }}$
                                        </td>
                                        @if ($member->identifier != \Auth::user()->players->identifier)
                                            <td class="px-4 py-2 text-center border border-gray-800">
                                                <a data-turbolinks="false"
                                                    onclick="toggleModalPromote({userName: '{{ $member->name }}', userId: '{{ $member->identifier }}'})"
                                                    class="inline-block px-4 py-2 mr-2 font-medium leading-6 text-center text-white transition duration-150 delay-150 ease-in-out rounded-md bg-green-500 md:inline-flex md:w-auto hover:bg-green-700 focus:outline-none focus:shadow-outline cursor-pointer">Promouvoir</a>
                                                <a data-turbolinks="false"
                                                    onclick="toggleModalRetire({userName: '{{ $member->name }}', userId: '{{ $member->identifier }}'})"
                                                    class="inline-block px-4 py-2 mr-2 font-medium leading-6 text-center text-white transition duration-150 delay-150 ease-in-out rounded-md bg-red-light md:inline-flex md:w-auto hover:bg-red-dark focus:outline-none focus:shadow-outline cursor-pointer">Virer</a>
                                            </td>
                                        @else
                                            <td class="px-4 py-2 text-center border border-gray-800">Aucune action...</td>
                                        @endif
                                    </tr>
                                @else
                                    <tr class="text-left border-b-2 border-gray-800">
                                        <td class="px-4 py-2 border border-gray-800">{{ $member->name }}</td>
                                        <td class="px-4 py-2 border border-gray-800">
                                            {{ $member->getOrgGrade()->label ?? 'Erreur de grade || CHANGEZ LE GRADE IMMEDIATEMENT' }}
                                        </td>
                                        <td class="px-4 py-2 border border-gray-800">
                                            {{ $member->getOrgGrade()->salary ?? 'Erreur de grade || CHANGEZ LE GRADE IMMEDIATEMENT' }}$
                                        </td>
                                        @if ($member->identifier != \Auth::user()->players->identifier)
                                            <td class="px-4 py-2 text-center border border-gray-800">
                                                <a data-turbolinks="false"
                                                    onclick="toggleModalPromote({userName: '{{ $member->name }}', userId: '{{ $member->identifier }}'})"
                                                    class="inline-block px-4 py-2 mr-2 font-medium leading-6 text-center text-white transition duration-150 delay-150 ease-in-out rounded-md bg-green-500 md:inline-flex md:w-auto hover:bg-green-700 focus:outline-none focus:shadow-outline cursor-pointer">Promouvoir</a>
                                                <a data-turbolinks="false"
                                                    onclick="toggleModalRetire({userName: '{{ $member->name }}', userId: '{{ $member->identifier }}'})"
                                                    class="inline-block px-4 py-2 mr-2 font-medium leading-6 text-center text-white transition duration-150 delay-150 ease-in-out rounded-md bg-red-light md:inline-flex md:w-auto hover:bg-red-dark focus:outline-none focus:shadow-outline cursor-pointer">Virer</a>
                                            </td>
                                        @else
                                            <td class="px-4 py-2 text-center border border-gray-800">Aucune action...</td>
                                        @endif
                                    </tr>
                                @endif
                            @endforeach
                        </tbody>
                    </table>
                </div>
            </div>
        </div>

    </div>
    <div id="modalPromote" class="fixed top-0 left-0 flex items-center justify-center w-full h-full opacity-0 pointer-events-none modal transition duration-150">
        <div class="absolute top-0 left-0 w-full h-full bg-black opacity-25 cursor-pointer modal-overlay" onclick="toggleModalPromote()"></div>
        <div class="absolute w-1/2 p-4 shadow-lg bg-gradient-to-l bg-gray-900 rounded-md border border-blue-500">
            <h3 class="mb-8 text-2xl text-center text-white font-lato">Changer le grade de <span id="user-promoted"></span></h3>
            <form action="{{ route('dashboard-organisation-promote') }}" method="post">
                @csrf
                <input type="hidden" name="user" id="promote-user">
                <input type="hidden" name="org" value="{{$org->name}}">
                <select name="grade" class="block w-full px-3 py-2 mb-2 border border-gray-500 rounded">
                    @foreach($org->grades->sortByDesc('grade') as $grade)
                        <option value="{{ $grade->id }}">{{ $grade->label }}</option>
                    @endforeach
                </select>

                <button type="submit" class="inline-block px-4 py-2 mr-2 font-medium leading-6 text-center text-white transition duration-150 delay-150 ease-in-out rounded-md bg-green-500 md:inline-flex md:w-auto hover:bg-green-700 focus:outline-none focus:shadow-outline cursor-pointer">Changer de grade</button>
                <a  data-turbolinks="false" onclick="toggleModalPromote()" class="inline-block px-4 py-2 mr-2 font-medium leading-6 text-center text-white transition duration-150 delay-150 ease-in-out rounded-md bg-red-light md:inline-flex md:w-auto hover:bg-red-dark focus:outline-none focus:shadow-outline cursor-pointer">Annuler</a>
            </form>
        </div>
    </div>

    <div id="modalRetire" class="fixed top-0 left-0 flex items-center justify-center w-full h-full opacity-0 pointer-events-none modal transition duration-150">
        <div class="absolute top-0 left-0 w-full h-full bg-black opacity-25 cursor-pointer modal-overlay" onclick="toggleModalRetire()"></div>
        <div class="absolute w-1/2 p-4 shadow-lg bg-gradient-to-l bg-gray-900 rounded-md border border-blue-500">
            <h3 class="mb-8 text-2xl text-center text-white font-lato">Virer <span id="user-retired"></span></h3>
            <form action="{{ route('dashboard-organisation-retire') }}" method="post" class="font-lato">
                @csrf

                <input type="hidden" name="user" id="retire-user">
                <input type="hidden" name="org" value="{{$org->name}}">

                <label for="retire-name " class="text-white">Nom de la personne <span class="text-red-500">*</span></label>
                <input type="text" name="name" id="retire-name" placeholder="Nom de la personne" class="block w-full px-3 py-2 my-2 border border-gray-500 rounded">
                <button type="submit" class="inline-block px-4 py-2 mr-2 font-medium leading-6 text-center text-white transition duration-150 delay-150 ease-in-out rounded-md bg-green-500 md:inline-flex md:w-auto hover:bg-green-700 focus:outline-none focus:shadow-outline cursor-pointer">Virer</button>
                <a data-turbolinks="false" onclick="toggleModalRetire()" class="inline-block px-4 py-2 mr-2 font-medium leading-6 text-center text-white transition duration-150 delay-150 ease-in-out rounded-md bg-red-light md:inline-flex md:w-auto hover:bg-red-dark focus:outline-none focus:shadow-outline cursor-pointer">Annuler</a>
            </form>
        </div>
    </div>
    <div id="modalPost"
        class="fixed top-0 left-0 flex items-center justify-center w-full h-full opacity-0 pointer-events-none modal transition duration-150">
        <div class="absolute top-0 left-0 w-full h-full bg-black opacity-25 cursor-pointer modal-overlay"
            onclick="toggleModalPost()"></div>
        <div class="absolute w-1/2 p-4 shadow-lg bg-gradient-to-l bg-gray-900 rounded-md border border-blue-500">
            <h3 class="mb-8 text-2xl text-center text-white font-lato">Changer le poste "<span id="name-poste"></span>"
            </h3>
            <form action="{{ route('dashboard-organisation-post') }}" method="post" class="font-lato">
                @csrf

                <input type="hidden" name="poste" id="poste-id">
                <input type="hidden" name="org" value="{{ $org->name }}">

                <label for="poste-name" class="text-white">Intitulé du poste <span class="text-red-500">*</span></label>
                <input type="text" name="name" id="poste-name"
                    class="block w-full px-3 py-2 my-2 border border-gray-500 rounded">

                <label for="poste-name" class="text-white">Salaire du poste <span class="text-red-500">*</span></label>
                <input type="number" min="1" name="salary" id="poste-salary"
                    class="block w-full px-3 py-2 my-2 border border-gray-500 rounded">

                <button type="submit"
                    class="inline-block px-4 py-2 mr-2 font-medium leading-6 text-center text-white transition duration-150 delay-150 ease-in-out rounded-md bg-green-500 md:inline-flex md:w-auto hover:bg-green-700 focus:outline-none focus:shadow-outline cursor-pointer">Changer</button>
                <a data-turbolinks="false" onclick="toggleModalPost()"
                    class="inline-block px-4 py-2 mr-2 font-medium leading-6 text-center text-white transition duration-150 delay-150 ease-in-out rounded-md bg-red-light md:inline-flex md:w-auto hover:bg-red-dark focus:outline-none focus:shadow-outline cursor-pointer">Annuler</a>
            </form>
        </div>
    </div>
    <div id="modalVehicle"
        class="fixed top-0 left-0 flex items-center justify-center w-full h-full opacity-0 pointer-events-none modal transition duration-150">
        <div class="absolute top-0 left-0 w-full h-full bg-black opacity-25 cursor-pointer modal-overlay"
            onclick="toggleModalVehicle()"></div>
        <div class="absolute w-1/2 p-4 shadow-lg bg-gradient-to-l bg-gray-900 rounded-md border border-blue-500">
            <h3 class="mb-8 text-2xl text-center text-white font-lato">Changer L'attribution de la voiture immatriculé
                <span id="vehicule-plate-string"></span></h3>
            <form action="{{ route('dashboard-organisation-vehicle') }}" method="post">
                @csrf
                <input type="hidden" name="vehicle" id="vehicle-plate">
                <input type="hidden" name="org" value="{{ $org->name }}">

                <select name="player" class="block w-full px-3 py-2 mb-2 border border-gray-500 rounded">
                    <option value="null">Aucune attribution</option>
                    @foreach ($org->members as $member)
                        <option value="{{ $member->identifier }}">{{ $member->name }}</option>
                    @endforeach
                </select>

                <button type="submit"
                    class="inline-block px-4 py-2 mr-2 font-medium leading-6 text-center text-white transition duration-150 delay-150 ease-in-out rounded-md bg-green-500 md:inline-flex md:w-auto hover:bg-green-700 focus:outline-none focus:shadow-outline cursor-pointer">Changer
                    l'attribution</button>
                <a data-turbolinks="false" onclick="toggleModalVehicle()"
                    class="inline-block px-4 py-2 mr-2 font-medium leading-6 text-center text-white transition duration-150 delay-150 ease-in-out rounded-md bg-red-light md:inline-flex md:w-auto hover:bg-red-dark focus:outline-none focus:shadow-outline cursor-pointer">Annuler</a>
            </form>
        </div>
    </div>
@endsection


@section('css')
    <link rel="stylesheet" href="{{ asset('vendor/datatables/css/dataTables.bootstrap4.min.css') }}">
@stop

@section('js')
    <script src="https://cdn.jsdelivr.net/npm/chart.js@2.9.3/dist/Chart.min.js"></script>
    <script>
        var ctx = document.getElementById('myChart').getContext('2d');

        Chart.defaults.global.defaultFontColor = "#fff";
        var myChart = new Chart(ctx, {
            type: 'line',
            scaleFontColor: "#FFFFFF",
            data: {
                labels: [
                    @foreach ($treasories as $treasory)
                        '{{ $treasory->created_at->format('d/m/Y G') }}h',
                    @endforeach
                ],
                datasets: [{
                    label: 'Trésorerie',
                    data: [{{ $treasories->pluck('treasory')->implode(',') }}],
                    backgroundColor: ['rgba(255, 255, 255, 0.5)'],
                    borderColor: ['white'],
                    pointBackgroundColor: [
                        @foreach ($treasories as $treasory)
                            'white',
                        @endforeach
                    ],
                    borderWidth: 1
                }, {
                    label: 'Entrée/Sortie',
                    data: [{{ $treasoriesDifference->pluck('treasory')->implode(',') }}],
                    backgroundColor: ['rgba(255, 166, 0, 0.5)'],
                    borderColor: ['rgba(255, 166, 0, 1)'],
                    pointBackgroundColor: [
                        @foreach ($treasories as $treasory)
                            'rgba(255, 166, 0, 0.5)',
                        @endforeach
                    ],
                    borderWidth: 1
                }]
            },
        });
    </script>
    <script src="{{ asset('vendor/jquery/jquery.min.js') }}"></script>
    <script src="{{ asset('vendor/datatables/js/jquery.dataTables.min.js') }}"></script>
    <script src="{{ asset('vendor/datatables/js/dataTables.bootstrap4.min.js') }}"></script>
    <script>
        function disableAll() {
            var selects = document.getElementsByClassName("select");
            for (var i = 0; i < selects.length; i++) {
                item = selects.item(i);

                if (item.classList.contains('block')) {
                    item.classList.remove('block');
                }

                if (!item.classList.contains('hidden')) {
                    item.classList.add('hidden');
                }
            }
        }

        function disableAllLink() {
            var selects = document.getElementsByClassName("selector-link");
            for (var i = 0; i < selects.length; i++) {
                item = selects.item(i);

                if (item.classList.contains('active')) {
                    item.classList.remove('active');
                }
            }
        }

        function enable(event, id) {
            disableAllLink();
            disableAll();

            document.getElementById(id).classList.remove('hidden');
            document.getElementById(id).classList.add('block');

            event.target.classList.add('active');
        }

        function toggleModalPromote(infos = null) {
            const modal = document.querySelector('#modalPromote')

            if (infos) {
                document.getElementById('promote-user').value = infos['userId'];
                document.getElementById('user-promoted').innerHTML = infos['userName'];
            }

            modal.classList.toggle('opacity-0')
            modal.classList.toggle('pointer-events-none')
        }

        function toggleModalRetire(infos = null) {
            const modal = document.querySelector('#modalRetire')

            if (infos) {
                document.getElementById('retire-user').value = infos['userId'];
                document.getElementById('user-retired').innerHTML = infos['userName'];
            }

            modal.classList.toggle('opacity-0')
            modal.classList.toggle('pointer-events-none')
        }

        function toggleModalPost(infos = null) {
            const modal = document.querySelector('#modalPost')

            if (infos) {
                document.getElementById('name-poste').innerHTML = infos['posteLabel'];
                document.getElementById('poste-id').value = infos['posteId'];
                document.getElementById('poste-name').value = infos['posteLabel'];
                document.getElementById('poste-salary').value = infos['posteSalary'];
            }

            modal.classList.toggle('opacity-0')
            modal.classList.toggle('pointer-events-none')
        }

        function toggleModalVehicle(infos = null) {
            const modal = document.querySelector('#modalVehicle')

            if (infos) {
                document.getElementById('vehicule-plate-string').innerHTML = infos['vehiculePlate'];
                document.getElementById('vehicle-plate').value = infos['vehiculePlate'];
            }

            modal.classList.toggle('opacity-0')
            modal.classList.toggle('pointer-events-none')
        }
    </script>
@stop
