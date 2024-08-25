<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>WickedLife ems - @yield('title')</title>
    <link rel="stylesheet" href="{{ asset('css/app.css') }}">
    <link rel="shortcut icon" type="image/png" href="{{ asset('img/logosansfd.png') }}">

    @yield('css')
</head>
<body class="bg-gray-900 text-white" style="font-family: Georgia, serif;">

    <nav class="bg-grey-900 py-6 px-12 md:py-2 font-opensans">
        <div class="px-8 mx-auto md:flex md:items-center">

            <div class="flex justify-between items-center">
                <a href="{{route('ems-archives.index')}}" class="font-bold text-xl text-yellow-600"><img src="/img/LSMS.png" class="w-20" alt=""></a>
                <button
                    class="border border-solid border-gray-600 px-3 py-1 rounded-2xl text-white opacity-50 hover:opacity-75 md:hidden"
                    id="navbar-toggle">
                    <i class="fas fa-bars"></i>
                </button>
            </div>

            <div class="hidden md:flex flex-col md:flex-row md:ml-auto mt-3 md:mt-0" id="navbar-collapse">
                <a href="{{ route('ems-archives.index') }}" class="p-2 lg:px-4 md:mx-2 text-white rounded-2xl @if(Request::is('ems-archives.index'))  bg-yellow-600 @else hover:bg-gray-200 hover:text-gray-700 @endif transition-colors duration-300">Accueil</a>
                <a href="{{ route('ems-patients.index') }}" class="p-2 lg:px-4 md:mx-2 text-white rounded-2xl @if(Request::is('ems-patients.index'))  bg-yellow-600 @else hover:bg-gray-200 hover:text-gray-700 @endif transition-colors duration-300">Dossiers patients</a>
                <a href="{{ route('ems-tarifs') }}" class="p-2 lg:px-4 md:mx-2 text-white rounded-2xl @if(Request::is('/'))  bg-yellow-600 @else hover:bg-gray-200 hover:text-gray-700 @endif transition-colors duration-300">Grille Tarifaire</a>
                <a href="{{ route('ppa.index') }}" class="p-2 lg:px-4 md:mx-2 text-white rounded-2xl @if(Request::is('ppa.index'))  bg-yellow-600 @else hover:bg-gray-200 hover:text-gray-700 @endif transition-colors duration-300">PPA</a>

                <a href="{{ route('index') }}" class="p-2 lg:px-4 md:mx-2 text-white rounded-2xl @if(Request::is('ems-tarifs'))  bg-yellow-600 @else hover:bg-gray-200 hover:text-gray-700 @endif transition-colors duration-300">Revenir sur le site</a>


                
            </div>
        </div>
    </nav>

    <main class="text-center mt-16">
        @yield('content')
    </main>

    @yield('js')
</body>
</html>