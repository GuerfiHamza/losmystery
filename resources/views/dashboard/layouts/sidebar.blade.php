      <!-- Desktop sidebar -->
      <aside
          class="z-20 hidden w-64 overflow-y-auto  bg-gray-50 dark:bg-gray-800 md:block flex-shrink-0 border-r border-red">
          <div class="py-4 text-gray-500 dark:text-gray-400">
              <a class="ml-6 text-lg font-bold text-gray-800 dark:text-gray-200" href="{{route('dashboard-index')}}">
                  <img src="{{asset('img/logolong.png')}}" alt="" class="img-responsive w-40 mx-auto">
              </a>
              @if(  \Auth::user()->players->group == "admin" || \Auth::user()->players->group == "superadmin" )
              <ul class="mt-6">
                  <li class="relative px-6 py-3">
                      @if (\Request::is('dashboard/accueil'))
                          <span class="absolute inset-y-0 left-0 w-1 bg-red-600 rounded-tr-lg rounded-br-lg"
                              aria-hidden="true"></span>
                      @endif

                      <a class="inline-flex items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200 {{ \Request::is('dashboard/accueil') ? 'dark:text-gray-100 text-gray-800 ' : '' }}"
                          href="{{ route('dashboard-index') }}">
                          <svg class="w-5 h-5" aria-hidden="true" fill="none" stroke-linecap="round"
                              stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor">
                              <path
                                  d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6">
                              </path>
                          </svg>
                          <span class="ml-4">Dashboard</span>
                      </a>
                  </li>
              </ul>
              <ul>
                  <li class="relative px-6 py-3">
                      @if (\Request::is('dashboard/connected'))
                          <span class="absolute inset-y-0 left-0 w-1 bg-red-600 rounded-tr-lg rounded-br-lg"
                              aria-hidden="true"></span>
                      @endif

                      <a class="inline-flex items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200 {{ \Request::is('dashboard/connected') ? 'dark:text-gray-100 text-gray-800 ' : '' }}"
                          href="{{ route('dashboard-connected_player') }}">
                          <svg class="w-5 h-5" aria-hidden="true" fill="none" stroke-linecap="round"
                              stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor">
                              <path
                                  d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01">
                              </path>
                          </svg>
                          <span class="ml-4">Joueurs Connectés</span>
                      </a>
                  </li>
                  <li class="relative px-6 py-3">
                      @if (\Request::is('dashboard/player') || \Request::is('dashboard/player/*'))
                          <span class="absolute inset-y-0 left-0 w-1 bg-red-600 rounded-tr-lg rounded-br-lg"
                              aria-hidden="true"></span>
                      @endif

                      <a class="inline-flex items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200 {{ \Request::is('dashboard/player') || \Request::is('dashboard/player/*')? 'dark:text-gray-100 text-gray-800 ': '' }}"
                          href="{{ route('dashboard-player.index') }}">
                          <svg class="w-5 h-5" aria-hidden="true" fill="none" stroke-linecap="round"
                              stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor">
                              <path
                                  d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10">
                              </path>
                          </svg>
                          <span class="ml-4">Liste des joueurs</span>
                      </a>
                  </li>
                  <li class="relative px-6 py-3">
                    @if (\Request::is('dashboard/cars') || \Request::is('dashboard/cars/*'))
                        <span class="absolute inset-y-0 left-0 w-1 bg-red-600 rounded-tr-lg rounded-br-lg"
                            aria-hidden="true"></span>
                    @endif

                    <a class="inline-flex items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200 {{ \Request::is('dashboard/cars') || \Request::is('dashboard/cars/*')? 'dark:text-gray-100 text-gray-800 ': '' }}"
                        href="{{ route('dashboard-cars.index') }}">
                        <svg class="w-5 h-5" aria-hidden="true" fill="none" stroke-linecap="round"
                            stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor">
                            <path d="M3 8L5.72187 10.2682C5.90158 10.418 6.12811 10.5 6.36205 10.5H17.6379C17.8719 10.5 18.0984 10.418 18.2781 10.2682L21 8M6.5 14H6.51M17.5 14H17.51M8.16065 4.5H15.8394C16.5571 4.5 17.2198 4.88457 17.5758 5.50772L20.473 10.5777C20.8183 11.1821 21 11.8661 21 12.5623V18.5C21 19.0523 20.5523 19.5 20 19.5H19C18.4477 19.5 18 19.0523 18 18.5V17.5H6V18.5C6 19.0523 5.55228 19.5 5 19.5H4C3.44772 19.5 3 19.0523 3 18.5V12.5623C3 11.8661 3.18166 11.1821 3.52703 10.5777L6.42416 5.50772C6.78024 4.88457 7.44293 4.5 8.16065 4.5ZM7 14C7 14.2761 6.77614 14.5 6.5 14.5C6.22386 14.5 6 14.2761 6 14C6 13.7239 6.22386 13.5 6.5 13.5C6.77614 13.5 7 13.7239 7 14ZM18 14C18 14.2761 17.7761 14.5 17.5 14.5C17.2239 14.5 17 14.2761 17 14C17 13.7239 17.2239 13.5 17.5 13.5C17.7761 13.5 18 13.7239 18 14Z"  stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>

                        </svg>
                        <span class="ml-4">Liste des vehicules</span>
                    </a>
                </li>
                  <li class="relative px-6 py-3">
                      @if (\Request::is('dashboard/billing'))
                          <span class="absolute inset-y-0 left-0 w-1 bg-red-600 rounded-tr-lg rounded-br-lg"
                              aria-hidden="true"></span>
                      @endif

                      <a class="inline-flex items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200 {{ \Request::is('dashboard/billing') ? 'dark:text-gray-100 text-gray-800 ' : '' }}"
                          href="{{ route('dashboard-billing.index') }}">
                          <svg class="w-5 h-5" aria-hidden="true" fill="none" stroke-linecap="round"
                          stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor">
                          <path
                              d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01">
                          </path>
                      </svg>
                          <span class="ml-4">Liste des factures</span>
                      </a>
                  </li>
                  <li class="relative px-6 py-3">
                      @if (\Request::is('dashboard/job') || \Request::is('dashboard/job/*'))
                          <span class="absolute inset-y-0 left-0 w-1 bg-red-600 rounded-tr-lg rounded-br-lg"
                              aria-hidden="true"></span>
                      @endif

                      <a class="inline-flex items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200 {{ \Request::is('dashboard/job') || \Request::is('dashboard/job/*') ? 'dark:text-gray-100 text-gray-800 ' : '' }}"
                          href="{{ route('dashboard-job.index') }}">
                          <svg class="w-5 h-5" aria-hidden="true" fill="none" stroke-linecap="round"
                              stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor">
                              <path d="M4 6h16M4 10h16M4 14h16M4 18h16"></path>
                          </svg>
                          <span class="ml-4">Liste des entreprises</span>
                      </a>
                  </li>
                  <li class="relative px-6 py-3">
                    @if (\Request::is('dashboard/organisation') || \Request::is('dashboard/organisation/*'))

                          <span class="absolute inset-y-0 left-0 w-1 bg-red-600 rounded-tr-lg rounded-br-lg"
                              aria-hidden="true"></span>
                      @endif

                      <a class="inline-flex items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200 {{ \Request::is('dashboard/organisation') || \Request::is('dashboard/organisation/*') ? 'dark:text-gray-100 text-gray-800 ' : '' }}"
                          href="{{ route('dashboard-organisation.index') }}">
                          <svg class="w-5 h-5" aria-hidden="true" fill="none" stroke-linecap="round"
                              stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor">
                              <path d="M4 6h16M4 10h16M4 14h16M4 18h16"></path>
                          </svg>
                          <span class="ml-4">Liste des organisations</span>
                      </a>
                  </li>
                  <li class="relative px-6 py-3">
                    @if (\Request::is('dashboard/forms') || \Request::is('dashboard/forms/*')) 
                        <span class="absolute inset-y-0 left-0 w-1 bg-red-600 rounded-tr-lg rounded-br-lg"
                            aria-hidden="true"></span>
                    @endif

                    <a class="inline-flex items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200 {{ \Request::is('dashboard/forms') || \Request::is('dashboard/forms/*') ? 'dark:text-gray-100 text-gray-800 ' : '' }}"
                        href="{{ route('formbuilder::forms.index') }}">
                        <svg class="w-5 h-5" aria-hidden="true" fill="none" stroke-linecap="round"
                            stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor">
                            <path
                                d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01">
                            </path>
                        </svg>
                        <span class="ml-4">Formulaires</span>
                    </a>
                </li>
                
            
              </ul>
              @else
              <ul>
                <li class="relative px-6 py-3">
                    @if (\Request::is('dashboard/forms') || \Request::is('dashboard/forms/*')) 
                        <span class="absolute inset-y-0 left-0 w-1 bg-red-600 rounded-tr-lg rounded-br-lg"
                            aria-hidden="true"></span>
                    @endif

                    <a class="inline-flex items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200 {{ \Request::is('dashboard/forms') || \Request::is('dashboard/forms/*') ? 'dark:text-gray-100 text-gray-800 ' : '' }}"
                        href="{{ route('formbuilder::forms.index') }}">
                        <svg class="w-5 h-5" aria-hidden="true" fill="none" stroke-linecap="round"
                            stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor">
                            <path
                                d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01">
                            </path>
                        </svg>
                        <span class="ml-4">Formulaires</span>
                    </a>
                </li>
                
                
              </ul>
              @endif
          </div>
      </aside>
      <!-- Mobile sidebar -->
      <!-- Backdrop -->
      <div x-show="isSideMenuOpen" x-transition:enter="transition ease-in-out duration-150"
          x-transition:enter-start="opacity-0" x-transition:enter-end="opacity-100"
          x-transition:leave="transition ease-in-out duration-150" x-transition:leave-start="opacity-100"
          x-transition:leave-end="opacity-0"
          class="fixed inset-0 z-10 flex items-end bg-black bg-opacity-50 sm:items-center sm:justify-center"></div>
      <aside class="fixed inset-y-0 z-20 flex-shrink-0 w-64 mt-16 overflow-y-auto  bg-white dark:bg-gray-800 md:hidden"
          x-show="isSideMenuOpen" x-transition:enter="transition ease-in-out duration-150"
          x-transition:enter-start="opacity-0 transform -translate-x-20" x-transition:enter-end="opacity-100"
          x-transition:leave="transition ease-in-out duration-150" x-transition:leave-start="opacity-100"
          x-transition:leave-end="opacity-0 transform -translate-x-20" @click.away="closeSideMenu"
          @keydown.escape="closeSideMenu">
          <div class="py-4 text-gray-500 dark:text-gray-400">
              <a class="ml-6 text-lg font-bold text-gray-800 dark:text-gray-200" href="#">
                  LosMystery
              </a>
              @if(\Auth::user()->players->group == "admin" || \Auth::user()->players->group == "superadmin" )

              <ul class="mt-6">
                  <li class="relative px-6 py-3">
                      @if (\Request::is('dashboard/accueil'))
                          <span class="absolute inset-y-0 left-0 w-1 bg-red-600 rounded-tr-lg rounded-br-lg"
                              aria-hidden="true"></span>
                      @endif

                      <a class="inline-flex items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200 {{ \Request::is('dashboard/accueil') ? 'dark:text-gray-100 text-gray-800 ' : '' }}"
                          href="{{ route('dashboard-index') }}">
                          <svg class="w-5 h-5" aria-hidden="true" fill="none" stroke-linecap="round"
                              stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor">
                              <path
                                  d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6">
                              </path>
                          </svg>
                          <span class="ml-4">Dashboard</span>
                      </a>
                  </li>
              </ul>
              <ul>
                  <li class="relative px-6 py-3">
                      @if (\Request::is('dashboard/connected'))
                          <span class="absolute inset-y-0 left-0 w-1 bg-red-600 rounded-tr-lg rounded-br-lg"
                              aria-hidden="true"></span>
                      @endif

                      <a class="inline-flex items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200 {{ \Request::is('dashboard/connected') ? 'dark:text-gray-100 text-gray-800 ' : '' }}"
                          href="{{ route('dashboard-connected_player') }}">
                          <svg class="w-5 h-5" aria-hidden="true" fill="none" stroke-linecap="round"
                              stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor">
                              <path
                                  d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01">
                              </path>
                          </svg>
                          <span class="ml-4">Joueurs Connectés</span>
                      </a>
                  </li>
                  <li class="relative px-6 py-3">
                      @if (\Request::is('dashboard/player'))
                          <span class="absolute inset-y-0 left-0 w-1 bg-red-600 rounded-tr-lg rounded-br-lg"
                              aria-hidden="true"></span>
                      @endif

                      <a class="inline-flex items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200 {{ \Request::is('dashboard/player') ? 'dark:text-gray-100 text-gray-800 ' : '' }}"
                          href="{{ route('dashboard-player.index') }}">
                          <svg class="w-5 h-5" aria-hidden="true" fill="none" stroke-linecap="round"
                              stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor">
                              <path
                                  d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10">
                              </path>
                          </svg>
                          <span class="ml-4">Liste des joueurs</span>
                      </a>
                  </li>
                  <li class="relative px-6 py-3">
                      @if (\Request::is('dashboard/billing'))
                          <span class="absolute inset-y-0 left-0 w-1 bg-red-600 rounded-tr-lg rounded-br-lg"
                              aria-hidden="true"></span>
                      @endif

                      <a class="inline-flex items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200 {{ \Request::is('dashboard/billing') ? 'dark:text-gray-100 text-gray-800 ' : '' }}"
                          href="{{ route('dashboard-billing.index') }}">
                          <svg class="w-5 h-5" aria-hidden="true" fill="none" stroke-linecap="round"
                              stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor">
                              <path d="M4 6h16M4 10h16M4 14h16M4 18h16"></path>
                          </svg>
                          <span class="ml-4">Liste des factures</span>
                      </a>
                  </li>
                  <li class="relative px-6 py-3">
                      @if (\Request::is('dashboard/job') || \Request::is('dashboard/job/*'))
                          <span class="absolute inset-y-0 left-0 w-1 bg-red-600 rounded-tr-lg rounded-br-lg"
                              aria-hidden="true"></span>
                      @endif

                      <a class="inline-flex items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200 {{ \Request::is('dashboard/job') || \Request::is('dashboard/job/*') ? 'dark:text-gray-100 text-gray-800 ' : '' }}"
                          href="{{ route('dashboard-job.index') }}">
                          <svg class="w-5 h-5" aria-hidden="true" fill="none" stroke-linecap="round"
                              stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor">
                              <path d="M4 6h16M4 10h16M4 14h16M4 18h16"></path>
                          </svg>
                          <span class="ml-4">Liste des entreprises</span>
                      </a>
                  </li>
                  <li class="relative px-6 py-3">
                    @if (\Request::is('dashboard/forms') || \Request::is('dashboard/forms/*')) 
                        <span class="absolute inset-y-0 left-0 w-1 bg-red-600 rounded-tr-lg rounded-br-lg"
                            aria-hidden="true"></span>
                    @endif

                    <a class="inline-flex items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200 {{ \Request::is('dashboard/forms') || \Request::is('dashboard/forms/*') ? 'dark:text-gray-100 text-gray-800 ' : '' }}"
                        href="{{ route('formbuilder::forms.index') }}">
                        <svg class="w-5 h-5" aria-hidden="true" fill="none" stroke-linecap="round"
                            stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor">
                            <path
                                d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01">
                            </path>
                        </svg>
                        <span class="ml-4">Formulaires</span>
                    </a>
                </li>
            
                
              </ul>
              @else
              <li class="relative px-6 py-3">
                @if (\Request::is('dashboard/forms') || \Request::is('dashboard/forms/*')) 
                    <span class="absolute inset-y-0 left-0 w-1 bg-red-600 rounded-tr-lg rounded-br-lg"
                        aria-hidden="true"></span>
                @endif

                <a class="inline-flex items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200 {{ \Request::is('dashboard/forms') || \Request::is('dashboard/forms/*') ? 'dark:text-gray-100 text-gray-800 ' : '' }}"
                    href="{{ route('formbuilder::forms.index') }}">
                    <svg class="w-5 h-5" aria-hidden="true" fill="none" stroke-linecap="round"
                        stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor">
                        <path
                            d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01">
                        </path>
                    </svg>
                    <span class="ml-4">Formulaires</span>
                </a>
            </li>
        
            
            @endif
          </div>
      </aside>
