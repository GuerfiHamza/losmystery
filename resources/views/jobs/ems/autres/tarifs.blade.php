@extends('jobs.ems.layouts.app')

@section('title', 'Tarifs')

@section('content')

<h2 class="font-opensans text-3xl">Grille tarifaire</h2>
<div class="flex flex-col container mx-auto mt-5">
    <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
      <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
        <div class="shadow overflow-hidden border-2 border-yellow-600 sm:rounded-lg">
          <table class="min-w-full divide-y divide-yellow-600 font-opensans">
            <thead class="">
              <tr>
                <th scope="col" class="px-6 py-3 text-center text-xs font-opensans text-white uppercase tracking-wider">
                  Interventions
                </th>
                <th scope="col" class="px-6 py-3 text-center text-xs font-opensans text-white uppercase tracking-wider">
                  Prix
                </th>
                
              </tr>
            </thead>
            <tbody class=" divide-y divide-yellow-600 ">
                <tr>
                    <td class="px-6 py-4 whitespace-nowrap">
                      <div class="flex items-center">
                       
                        <div class="ml-4 ">
                          <div class="text-sm font-opensans text-white text-center">
                           Réanimation
                          </div>
                        
                        </div>
                      </div>
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap ">
                        <div class="flex items-center ">
                         
                          <div class="ml-4">
                           
                            <div class="text-sm text-white">
                              1.000 $
                            </div>
                          </div>
                        </div>
                      </td>
                   
                  </tr>
                  <tr>
                    <td class="px-6 py-4 whitespace-nowrap">
                      <div class="flex items-center">
                       
                        <div class="ml-4 ">
                          <div class="text-sm font-opensans text-white text-center">
                            Atèles / Plâtres
                          </div>
                        
                        </div>
                      </div>
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap ">
                        <div class="flex items-center ">
                         
                          <div class="ml-4">
                           
                            <div class="text-sm text-white">
                              200 $
                            </div>
                          </div>
                        </div>
                      </td>
                   
                  </tr>
                  <tr>
                    <td class="px-6 py-4 whitespace-nowrap">
                      <div class="flex items-center">
                       
                        <div class="ml-4 ">
                          <div class="text-sm font-opensans text-white text-center">
                            Béquilles / Cannes
                          </div>
                        
                        </div>
                      </div>
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap ">
                        <div class="flex items-center ">
                         
                          <div class="ml-4">
                           
                            <div class="text-sm text-white">
                              100 $
                            </div>
                          </div>
                        </div>
                      </td>
                   
                  </tr>
                  <tr>
                    <td class="px-6 py-4 whitespace-nowrap">
                      <div class="flex items-center">
                       
                        <div class="ml-4 ">
                          <div class="text-sm font-opensans text-white text-center">
                            Soins SPA
                          </div>
                        
                        </div>
                      </div>
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap ">
                        <div class="flex items-center ">
                         
                          <div class="ml-4">
                           
                            <div class="text-sm text-white">
                              400 $
                            </div>
                          </div>
                        </div>
                      </td>
                   
                  </tr>
                  <tr>
                    <td class="px-6 py-4 whitespace-nowrap">
                      <div class="flex items-center">
                       
                        <div class="ml-4 ">
                          <div class="text-sm font-opensans text-white text-center">
                            Soins Léger
                          </div>
                        
                        </div>
                      </div>
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap ">
                        <div class="flex items-center ">
                         
                          <div class="ml-4">
                           
                            <div class="text-sm text-white">
                              600 $
                            </div>
                          </div>
                        </div>
                      </td>
                   
                  </tr>
                  <tr>
                    <td class="px-6 py-4 whitespace-nowrap">
                      <div class="flex items-center">
                       
                        <div class="ml-4 ">
                          <div class="text-sm font-opensans text-white text-center">
                            Soins Lourd
                          </div>
                        
                        </div>
                      </div>
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap ">
                        <div class="flex items-center ">
                         
                          <div class="ml-4">
                           
                            <div class="text-sm text-white">
                              1.500 $
                            </div>
                          </div>
                        </div>
                      </td>
                   
                  </tr>
                  <tr>
                    <td class="px-6 py-4 whitespace-nowrap">
                      <div class="flex items-center">
                       
                        <div class="ml-4 ">
                          <div class="text-sm font-opensans text-white text-center">
                            Médicaments Tiers 
                        </div>
                        
                        </div>
                      </div>
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap ">
                        <div class="flex items-center ">
                         
                          <div class="ml-4">
                           
                            <div class="text-sm text-white">
                                100 $
                            </div>
                          </div>
                        </div>
                      </td>
                   
                  </tr>
                  <tr>
                    <td class="px-6 py-4 whitespace-nowrap">
                      <div class="flex items-center">
                       
                        <div class="ml-4 ">
                          <div class="text-sm font-opensans text-white text-center">
                            Chirurgie Légère 
                        </div>
                        
                        </div>
                      </div>
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap ">
                        <div class="flex items-center ">
                         
                          <div class="ml-4">
                           
                            <div class="text-sm text-white">
                                1.000 $
                            </div>
                          </div>
                        </div>
                      </td>
                   
                  </tr>
                  <tr>
                    <td class="px-6 py-4 whitespace-nowrap">
                      <div class="flex items-center">
                       
                        <div class="ml-4 ">
                          <div class="text-sm font-opensans text-white text-center">
                            Chirurgie Lourde 
                        </div>
                        
                        </div>
                      </div>
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap ">
                        <div class="flex items-center ">
                         
                          <div class="ml-4">
                           
                            <div class="text-sm text-white">
                                2.500 $
                            </div>
                          </div>
                        </div>
                      </td>
                   
                  </tr>
                  <tr>
                    <td class="px-6 py-4 whitespace-nowrap">
                      <div class="flex items-center">
                       
                        <div class="ml-4 ">
                          <div class="text-sm font-opensans text-white text-center">
                            Chirurgie Critique 
                        </div>
                        
                        </div>
                      </div>
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap ">
                        <div class="flex items-center ">
                         
                          <div class="ml-4">
                           
                            <div class="text-sm text-white">
                                4.000 $
                            </div>
                          </div>
                        </div>
                      </td>
                   
                  </tr>
                  <tr>
                    <td class="px-6 py-4 whitespace-nowrap">
                      <div class="flex items-center">
                       
                        <div class="ml-4 ">
                          <div class="text-sm font-opensans text-white text-center">
                            IRM / Radio 
                        </div>
                        
                        </div>
                      </div>
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap ">
                        <div class="flex items-center ">
                         
                          <div class="ml-4">
                           
                            <div class="text-sm text-white">
                                1.000 $
                                                        </div>
                          </div>
                        </div>
                      </td>
                   
                  </tr>
                  <tr>
                    <td class="px-6 py-4 whitespace-nowrap">
                      <div class="flex items-center">
                       
                        <div class="ml-4 ">
                          <div class="text-sm font-opensans text-white text-center">
                            RDV Psychologue
                                                  </div>
                        
                        </div>
                      </div>
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap ">
                        <div class="flex items-center ">
                         
                          <div class="ml-4">
                           
                            <div class="text-sm text-white">
                              1.500 $
                            </div>
                          </div>
                        </div>
                      </td>
                   
                  </tr>
                  <tr>
                    <td class="px-6 py-4 whitespace-nowrap">
                      <div class="flex items-center">
                       
                        <div class="ml-4 ">
                          <div class="text-sm font-opensans text-white text-center">
                            PPA(seulement après formation faites
                            par Directeur)

                        </div>
                        
                        </div>
                      </div>
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap ">
                        <div class="flex items-center ">
                         
                          <div class="ml-4">
                           
                            <div class="text-sm text-white">
                              6.000 $
                            </div>
                          </div>
                        </div>
                      </td>
                   
                  </tr>
                  <tr>
                    <td class="px-6 py-4 whitespace-nowrap">
                      <div class="flex items-center">
                       
                        <div class="ml-4 ">
                          <div class="text-sm font-opensans text-white text-center">
                            Formation Réa 
                                                  </div>
                        
                        </div>
                      </div>
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap ">
                        <div class="flex items-center ">
                         
                          <div class="ml-4">
                           
                            <div class="text-sm text-white">
                                5.000 $
                            </div>
                          </div>
                        </div>
                      </td>
                   
                  </tr>
                  
              
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>

@endsection

@section('js')

@endsection