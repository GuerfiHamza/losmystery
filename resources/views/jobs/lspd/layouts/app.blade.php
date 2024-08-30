<!DOCTYPE html>
<html lang="fr">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>LosMystery LSPD - @yield('title')</title>
    <link rel="stylesheet" href="{{ asset('css/app.css') }}">
    <link rel="shortcut icon" type="image/png" href="{{ asset('img/logosansfd.png') }}">
    <script src="{{ asset('js/app.js') }}"></script>

    @yield('css')
</head>

<body>
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
    {{-- <nav class="bg-grey-900 py-6 px-12 md:py-2 font-opensans">
        <div class="px-8 mx-auto md:flex md:items-center">

            <div class="flex justify-between items-center">
                <a href="{{route('lspd-record.index')}}" class="font-bold text-xl text-yellow-600"><img src="/img/LSPD.png" class="w-20" alt=""></a>
                <button
                    class="border border-solid border-gray-600 px-3 py-1 rounded-2xl text-white opacity-50 hover:opacity-75 md:hidden"
                    id="navbar-toggle">
                    <i class="fas fa-bars"></i>
                </button>
            </div>

            <div class="hidden md:flex flex-col md:flex-row md:ml-auto mt-3 md:mt-0" id="navbar-collapse">
                <a href="{{ route('lspd-criminal.index') }}" class="p-2 lg:px-4 md:mx-2 text-white rounded-2xl @if (Request::is('lspd-criminal.index'))  bg-yellow-600 @else hover:bg-gray-200 hover:text-gray-700 @endif transition-colors duration-300">Accueil</a>
                <a href="{{ route('lspd-record.index') }}" class="p-2 lg:px-4 md:mx-2 text-white rounded-2xl @if (Request::is('lspd-record.index'))  bg-yellow-600 @else hover:bg-gray-200 hover:text-gray-700 @endif transition-colors duration-300">Dossiers des délits</a>
                <a href="{{ route('ppa.index') }}" class="p-2 lg:px-4 md:mx-2 text-white rounded-2xl @if (Request::is('ppa.index'))  bg-yellow-600 @else hover:bg-gray-200 hover:text-gray-700 @endif transition-colors duration-300">PPA</a>
                <a href="{{ route('index') }}" class="p-2 lg:px-4 md:mx-2 text-white rounded-2xl @if (Request::is('/'))  bg-yellow-600 @else hover:bg-gray-200 hover:text-gray-700 @endif transition-colors duration-300">Revenir sur le site</a>


                
            </div>
        </div>
    </nav> --}}
    <div x-data="{ sidebarOpen: true }" class="flex h-screen bg-gray-200 font-roboto">
        <div x-cloak :class="sidebarOpen ? 'block' : 'hidden'" @click="sidebarOpen = false" class="fixed inset-0 z-20 transition-opacity bg-gray-900 opacity-50 lg:hidden"></div>
    
        <div x-cloak :class="sidebarOpen ? 'translate-x-0 ease-out' : '-translate-x-full ease-in'" class="fixed inset-y-0 left-0 z-30 w-64 overflow-y-auto transition duration-300 transform bg-gray-900 lg:translate-x-0 lg:static lg:inset-0">
            <div class="flex items-center justify-center mt-8">
                <div class="flex items-center">
                    <svg class="w-12 h-12" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M364.61 390.213C304.625 450.196 207.37 450.196 147.386 390.213C117.394 360.22 102.398 320.911 102.398 281.6C102.398 242.291 117.394 202.981 147.386 172.989C147.386 230.4 153.6 281.6 230.4 307.2C230.4 256 256 102.4 294.4 76.7999C320 128 334.618 142.997 364.608 172.989C394.601 202.981 409.597 242.291 409.597 281.6C409.597 320.911 394.601 360.22 364.61 390.213Z" fill="#4C51BF" stroke="#4C51BF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M201.694 387.105C231.686 417.098 280.312 417.098 310.305 387.105C325.301 372.109 332.8 352.456 332.8 332.8C332.8 313.144 325.301 293.491 310.305 278.495C295.309 263.498 288 256 275.2 230.4C256 243.2 243.201 320 243.201 345.6C201.694 345.6 179.2 332.8 179.2 332.8C179.2 352.456 186.698 372.109 201.694 387.105Z" fill="white"/>
                    </svg>
        
                    <span class="mx-2 text-2xl font-semibold text-white">LSPD</span>
                </div>
            </div>
        
            <nav class="mt-10">
                <a class="flex items-center px-6 py-2 mt-4 text-gray-100 bg-gray-700 bg-opacity-25" href="/">
                    <svg class="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
                    </svg>
        
                    <span class="mx-3">Accueil</span>
                </a>
        
                <a class="flex items-center px-6 py-2 mt-4 text-gray-500 hover:bg-gray-700 hover:bg-opacity-25 hover:text-gray-100" href="/ui-elements">
                    <svg class="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 14v6m-3-3h6M6 10h2a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2zm10 0h2a2 2 0 002-2V6a2 2 0 00-2-2h-2a2 2 0 00-2 2v2a2 2 0 002 2zM6 20h2a2 2 0 002-2v-2a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2z" />
                    </svg>
        
                    <span class="mx-3">Plaintes</span>
                </a>
        
                <a class="flex items-center px-6 py-2 mt-4 text-gray-500 hover:bg-gray-700 hover:bg-opacity-25 hover:text-gray-100" href="/tables">
                    <svg class="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                    </svg>
        
                    <span class="mx-3">Convocations</span>
                </a>
        
                <a class="flex items-center px-6 py-2 mt-4 text-gray-500 hover:bg-gray-700 hover:bg-opacity-25 hover:text-gray-100" href="/forms">
                    <svg class="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                    </svg>
        
                    <span class="mx-3">Citoyens</span>
                </a>   
                 <a class="flex items-center px-6 py-2 mt-4 text-gray-500 hover:bg-gray-700 hover:bg-opacity-25 hover:text-gray-100" href="/forms">
                    <svg class="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                    </svg>
        
                    <span class="mx-3">Immatriculation</span>
                </a>
                <a class="flex items-center px-6 py-2 mt-4 text-gray-500 hover:bg-gray-700 hover:bg-opacity-25 hover:text-gray-100" href="/forms">
                    <svg class="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                    </svg>
        
                    <span class="mx-3">Amendes</span>
                </a>
                
                <a class="flex items-center px-6 py-2 mt-4 text-gray-500 hover:bg-gray-700 hover:bg-opacity-25 hover:text-gray-100" href="/forms">
                    <svg class="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                    </svg>
        
                    <span class="mx-3">Agents</span>
                </a>
                
                <a class="flex items-center px-6 py-2 mt-4 text-gray-500 hover:bg-gray-700 hover:bg-opacity-25 hover:text-gray-100" href="/forms">
                    <svg class="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                    </svg>
        
                    <span class="mx-3">Heures de services</span>
                </a>
                <a class="flex items-center px-6 py-2 mt-4 text-gray-500 hover:bg-gray-700 hover:bg-opacity-25 hover:text-gray-100" href="/forms">
                    <svg class="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                    </svg>
        
                    <span class="mx-3">PPA</span>
                </a>
            </nav>
        </div>

        <div class="flex-1 flex flex-col overflow-hidden">
            <header class="flex items-center justify-between px-6 py-4 bg-gray-900 border-b-4 border-blue-500">
                <div class="flex items-center">
                    
                
                </div>
                
                <div class="flex items-center">
                    
                    
                    <div x-data="{ dropdownOpen: false }"  class="relative">
                        <button @click="dropdownOpen = ! dropdownOpen" class="relative block w-8 h-8 overflow-hidden rounded-full shadow focus:outline-none">
                            <img class="object-cover w-full h-full" src="{{ asset(\Auth::user()->avatar) }}" >
                        </button>
            
                        <div x-cloak x-show="dropdownOpen" @click="dropdownOpen = false" class="fixed inset-0 z-10 w-full h-full"></div>
            
                        <div x-cloak x-show="dropdownOpen" class="absolute right-0 z-10 w-48 mt-2 overflow-hidden bg-gray-900 rounded-md shadow-xl">
                            <a href="{{ route('index')}}" class="block px-4 py-2 text-sm text-white hover:bg-blue-500 ">Revenir sur le site</a>
                        </div>
                    </div>
                </div>
            </header>
            <main class="flex-1 overflow-x-hidden overflow-y-auto bg-gray-800">
                <div class="container mx-auto px-6 py-8">
                    @yield('content')
                </div>
            </main>
        </div>
    </div>

    @yield('js')
</body>

</html>
