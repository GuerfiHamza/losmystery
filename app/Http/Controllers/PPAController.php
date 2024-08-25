<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\PPA;
use Illuminate\Support\Facades\Http;

class PPAController extends Controller
{
      /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $ppa = PPA::all();
        return view('jobs.ppa.index', compact('ppa'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return view('jobs.ppa.form');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $request->validate([
            'nom' => 'required|max:50',
            'psy' => 'nullable',
            'phys' => 'nullable',
            'casier' => 'nullable',
            'ppa1' => 'nullable',
            'ppa2' => 'nullable',
            'ppa3' => 'nullable',
        ]);

        $ppa = new PPA;

        $ppa->nom = $request->nom;
        $ppa->psy = $request->psy ? true : false;
        $ppa->phys = $request->phys ? true : false;
        $ppa->casier = $request->casier ? true : false;
        $ppa->ppa1 = $request->ppa1 ? true : false;
        $ppa->ppa2 = $request->ppa2 ? true : false;
        $ppa->ppa3 = $request->ppa3 ? true : false;


        $ppa->save();

        

        return redirect()->route('ppa.index')->with('success', 'Dossier créer!',
        Http::post('https://discord.com/api/webhooks/831288306389483561/hquzatU4OBW-k6MTs16YAod-yVNGr2b63pdP-3Nk-cOAUAEl1T9LtSr1ovRHAY47CSP_', [
            'content' => "Nouveaux dossier de PPA!",
            'embeds' => [
                [
                    'title' =>  'Le dossier de '.$ppa->nom.' a était créer par '.\Auth::user()->players->name,
                    'color' => '14177041',
                ]
            ],
        ]),
        Http::post('https://discord.com/api/webhooks/831295943831060571/O_1wcve5fNv2NhWETi0nrvQ33YOJDX6LTF3DE9iRD41HeikEiwa7RTxY7K6Ze9BdTO9I', [
            'content' => "Nouveaux dossier de PPA!",
            'embeds' => [
                [
                    'title' =>  'Le dossier de '.$ppa->nom.' a était créer par '.\Auth::user()->players->name,
                    'color' => '14177041',
                ]
            ],
        ]),
        Http::post('https://discord.com/api/webhooks/831296390977028147/rv1W-gwwqoRT15q5tNMut0MUAcWFm1KOPkLuwHjyMt3usWsTwJMGS5vkQZG13k80PkSh', [
            'content' => "Nouveaux dossier de PPA!",
            'embeds' => [
                [
                    'title' =>  'Le dossier de '.$ppa->nom.' a était créer par '.\Auth::user()->players->name,
                    'color' => '14177041',
                ]
            ],
        ])
                    );
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\LSPD\PPA  $ppa
     * @return \Illuminate\Http\Response
     */
    public function show(PPA $ppa)
    {
        return view('jobs.ppa.show', compact('ppa'));
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\LSPD\PPA  $ppa
     * @return \Illuminate\Http\Response
     */
    public function edit(PPA $ppa)
    {
        return view('jobs.ppa.form', compact('ppa'));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\LSPD\PPA  $ppa
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, PPA $ppa)
    {
        $request->validate([
            'nom' => 'required|max:50',
            'psy' => 'nullable',
            'phys' => 'nullable',
            'casier' => 'nullable',
            'ppa1' => 'nullable',
            'ppa2' => 'nullable',
            'ppa3' => 'nullable',
        ]);

        $ppa->nom = $request->nom;
        $ppa->psy = $request->psy ? true : false;
        $ppa->phys = $request->phys ? true : false;
        $ppa->casier = $request->casier ? true : false;
        $ppa->ppa1 = $request->ppa1 ? true : false;
        $ppa->ppa2 = $request->ppa2 ? true : false;
        $ppa->ppa3 = $request->ppa3 ? true : false;

        

        $ppa->save();

        return redirect()->route('ppa.index')->with('success', 'Dossier Modifier!',
        Http::post('https://discord.com/api/webhooks/831288306389483561/hquzatU4OBW-k6MTs16YAod-yVNGr2b63pdP-3Nk-cOAUAEl1T9LtSr1ovRHAY47CSP_', [
            'content' => "Le dossier de ".$ppa->nom." a était modifier",
            'embeds' => [
                [
                    'title' =>  'Le dossier de '.$ppa->nom.' a était modifier par un '.\Auth::user()->players->getJob()->label. ' ( ' .\Auth::user()->players->name.' )',
                    'color' => '14177041',
                ]
            ],
        ]),
        Http::post('https://discord.com/api/webhooks/831295943831060571/O_1wcve5fNv2NhWETi0nrvQ33YOJDX6LTF3DE9iRD41HeikEiwa7RTxY7K6Ze9BdTO9I', [
            'content' => "Le dossier de ".$ppa->nom." a était modifier",
            'embeds' => [
                [
                    'title' =>  'Le dossier de '.$ppa->nom.' a était modifier par un '.\Auth::user()->players->getJob()->label. ' ( ' .\Auth::user()->players->name.' )',
                    'color' => '14177041',
                ]
            ],
        ]),
        Http::post('https://discord.com/api/webhooks/831296390977028147/rv1W-gwwqoRT15q5tNMut0MUAcWFm1KOPkLuwHjyMt3usWsTwJMGS5vkQZG13k80PkSh', [
            'content' => "Le dossier de ".$ppa->nom." a était modifier",
            'embeds' => [
                [
                    'title' =>  'Le dossier de '.$ppa->nom.' a était modifier par un '.\Auth::user()->players->getJob()->label. ' ( ' .\Auth::user()->players->name. ' )',
                    'color' => '14177041',
                ]
            ],
        ])
        );
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\LSPD\PPA  $ppa
     * @return \Illuminate\Http\Response
     */
    public function destroy(PPA $ppa)
    {}
}
