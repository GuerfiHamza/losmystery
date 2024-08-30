<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>LosMystery LSPD - @yield('title')</title>
    <link rel="stylesheet" href="{{ asset('css/app.css') }}">
    <link rel="shortcut icon" type="image/png" href="{{ asset('img/logosansfd.png') }}">

    @yield('css')
</head>
<body class="bg-gray-900 text-white" style="font-family: Georgia, serif;">
    {{-- <header class="w-full p-8 flex flex-row items-center">
        <img src="{{ asset('img/LSPD.png') }}" class="h-auto w-32 -mt-4" alt="LSPD">
        <div class="mx-auto">
            <h1 class="text-2xl text-center">
                LSPD <br>
                <small class="text-sm">"Protéger et servir"</small>
            </h1>
            <nav class="w-full mt-8">
                <a href="{{ route('lspd-record.index') }}" class="mx-8 underline">Accueil</a>
                <a href="{{ route('lspd-criminal.index') }}" class="mx-8 underline">Dossiers Criminels</a>
                <a href="#" class="mx-8 underline">Délits</a>
            </nav>
        </div>
    </header> --}}
    <nav class="bg-grey-900 py-6 px-12 md:py-2 font-opensans">
        <div class="px-8 mx-auto md:flex md:items-center">

            <div class="flex justify-between items-center">
                <a href="{{route('ppa.index')}}" class="font-bold text-xl text-yellow-600"><img src="/img/logo.png" class="w-20" alt=""></a>
                <button
                    class="border border-solid border-gray-600 px-3 py-1 rounded-2xl text-white opacity-50 hover:opacity-75 md:hidden"
                    id="navbar-toggle">
                    <i class="fas fa-bars"></i>
                </button>
            </div>

            <div class="hidden md:flex flex-col md:flex-row md:ml-auto mt-3 md:mt-0" id="navbar-collapse">
                <a href="{{ route('ppa.index') }}" class="p-2 lg:px-4 md:mx-2 text-white rounded-2xl @if(Request::is('ppa.index'))  bg-yellow-600 @else hover:bg-gray-200 hover:text-gray-700 @endif transition-colors duration-300">Accueil</a>
                @if (\Auth::user()->players->job == "armurier" )                       
                <a href="{{ route('weapons.index') }}"
                class="p-2 lg:px-4 md:mx-2 text-white rounded-2xl hover:bg-gray-200 hover:text-gray-700  transition-colors duration-300">Armes</a>
              @else
                @endif
                <a href="{{ route('ppa.create') }}" class="p-2 lg:px-4 md:mx-2 text-white rounded-2xl @if(Request::is('ppa.create'))  bg-yellow-600 @else hover:bg-gray-200 hover:text-gray-700 @endif transition-colors duration-300">Créer un dossier</a>
                <a href="{{ route('index') }}" class="p-2 lg:px-4 md:mx-2 text-white rounded-2xl @if(Request::is('/'))  bg-yellow-600 @else hover:bg-gray-200 hover:text-gray-700 @endif transition-colors duration-300">Revenir sur le site</a>


                
            </div>
        </div>
    </nav>

    <main class="text-center mt-16">
        @yield('content')
    </main>

    @if(session('error'))
    <div
        class="absolute top-0 right-0 mt-16 mr-8 bg-white border-t-4 border-red-500 rounded-2xl-b text-red-900 px-4 py-3 shadow-md"
        onclick="this.remove()" id="alert-error" role="alert">
        <div class="flex">
            <div class="py-1">
                <svg class="fill-current h-6 w-6 text-red-500 mr-4" xmlns="http://www.w3.org/2000/svg"
                     viewBox="0 0 20 20">
                    <path
                        d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z"/>
                </svg>
            </div>
            <div>
                <p class="font-opensans">Une erreur est survenu...</p>
                <p class="text-sm font-opensans">{{ session('error') }}</p>
            </div>
        </div>
    </div>
@endif

@if(session('success'))
    <div
        class="absolute top-0 right-0 mt-16 mr-8 bg-white border-t-4 border-green-500 rounded-2xl-b text-green-900 px-4 py-3 shadow-md"
        onclick="this.remove()" id="alert-success" role="alert">
        <div class="flex items-center">
            <div class="py-1">
                <svg class="fill-current h-6 w-6 text-green-500 mr-4" xmlns="http://www.w3.org/2000/svg"
                     viewBox="0 0 20 20">
                    <path
                        d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z"/>
                </svg>
            </div>
            <div>
                <p class="font-opensans">{{ session('success') }}</p>
            </div>
        </div>
    </div>
@endif

@if($errors->any())
    <div
        class="absolute top-0 right-0 mt-16 mr-8 bg-white border-t-4 border-red-500 rounded-2xl-b text-red-900 px-4 py-3 shadow-md"
        onclick="this.remove()" id="alert-error" role="alert">
        <div class="flex">
            <div class="py-1">
                <svg class="fill-current h-6 w-6 text-red-500 mr-4" xmlns="http://www.w3.org/2000/svg"
                     viewBox="0 0 20 20">
                    <path
                        d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z"/>
                </svg>
            </div>
            <div>
                <p class="font-opensans">Une erreur est survenu...</p>
                <p class="text-sm font-opensans">
                    {{ implode(', ', $errors->all()) }}
                </p>
            </div>
        </div>
    </div>
@endif

    @yield('js')
</body>
</html>