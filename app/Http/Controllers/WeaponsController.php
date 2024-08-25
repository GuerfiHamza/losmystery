<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Weapons;
use Illuminate\Support\Facades\Http;

class WeaponsController extends Controller
{
     /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $weapons = Weapons::all();
// dd($weapons);

        return view('jobs.weapons.index', compact('weapons'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return view('jobs.weapons.form');
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
            'vendeur' => 'nullable',
            'date' => 'nullable',
            'weapon' => 'nullable',
            'conf' => 'nullable',
        ]);

        $weapons = new Weapons;

        $weapons->nom = $request->nom;
        $weapons->vendeur = $request->vendeur;
        $weapons->date = $request->date;
        $weapons->weapon = $request->weapon;
        $weapons->conf = $request->conf ? true : false;
// dd($weapons);
        $weapons->save();



        return redirect()->route('weapons.index')->with('success', 'Dossier créer!',
        Http::post('https://discord.com/api/webhooks/831310284190384128/F8-bBm7-03XGnAQ2HD8ncSBwnkURsLFplOF5HgTSIpYnGjTkisO02xUba-sOue5LRRHn', [
            'content' => "Nouveaux dossier de Weapons!",
            'embeds' => [
                [
                    'title' =>  'Le dossier de '.$weapons->nom.' a était créer par '.\Auth::user()->players->name,
                    'color' => '14177041',
                ]
            ],
        ]),
        Http::post('https://discord.com/api/webhooks/831310454726983765/9swKcp6Owdjeg1tUyN82_8BDvoh55Uq8B0AQpEaWaMUxNIjlEQ4JPZVHejdyXpAttubb', [
            'content' => "Nouveaux dossier de Weapons!",
            'embeds' => [
                [
                    'title' =>  'Le dossier de '.$weapons->nom.' a était créer par '.\Auth::user()->players->name,
                    'color' => '14177041',
                ]
            ],
        ]),
        Http::post('https://discord.com/api/webhooks/831310570858086400/l0dEgaYVy-g795Iq_filMLGcxI9bscKgXBG4PX-2Gw7NZ13Gf-9wxGTz5gIjw6q1SMln', [
            'content' => "Nouveaux dossier de Weapons!",
            'embeds' => [
                [
                    'title' =>  'Le dossier de '.$weapons->nom.' a était créer par '.\Auth::user()->players->name,
                    'color' => '14177041',
                ]
            ],
        ])
                    );
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\LSPD\Weapons  $weapon
     * @return \Illuminate\Http\Response
     */
    public function show(Weapons $weapon)
    {
        return view('jobs.weapons.show', compact('weapon'));
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\LSPD\Weapons  $weapons
     * @return \Illuminate\Http\Response
     */
    public function edit(Weapons $weapon)
    {
        return view('jobs.weapons.form', compact('weapon'));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\LSPD\Weapons  $weapons
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Weapons $weapon)
    {
        $request->validate([
            'nom' => 'required|max:50',
            'vendeur' => 'nullable',
            'date' => 'nullable',
            'weapon' => 'nullable',
            'conf' => 'nullable',
        ]);


        $weapon->nom = $request->nom;
        $weapon->vendeur = $request->vendeur;
        $weapon->date = $request->date;
        $weapon->weapon = $request->json_encode($input['weapon']);
        $weapon->conf = $request->conf ? true : false;


        $weapon->save();

        return redirect()->route('weapons.index')->with('success', 'Dossier Modifier!',
        Http::post('https://discord.com/api/webhooks/831310284190384128/F8-bBm7-03XGnAQ2HD8ncSBwnkURsLFplOF5HgTSIpYnGjTkisO02xUba-sOue5LRRHn', [
            'content' => "Le dossier de ".$weapon->nom." a était modifier",
            'embeds' => [
                [
                    'title' =>  'Le dossier de '.$weapons->nom.' a était modifier par un '.\Auth::user()->players->getJob()->label. ' ( ' .\Auth::user()->players->name.' )',
                    'color' => '14177041',
                ]
            ],
        ]),
        Http::post('https://discord.com/api/webhooks/831310454726983765/9swKcp6Owdjeg1tUyN82_8BDvoh55Uq8B0AQpEaWaMUxNIjlEQ4JPZVHejdyXpAttubb', [
            'content' => "Le dossier de ".$weapons->nom." a était modifier",
            'embeds' => [
                [
                    'title' =>  'Le dossier de '.$weapons->nom.' a était modifier par un '.\Auth::user()->players->getJob()->label. ' ( ' .\Auth::user()->players->name.' )',
                    'color' => '14177041',
                ]
            ],
        ]),
        Http::post('https://discord.com/api/webhooks/831310570858086400/l0dEgaYVy-g795Iq_filMLGcxI9bscKgXBG4PX-2Gw7NZ13Gf-9wxGTz5gIjw6q1SMln', [
            'content' => "Le dossier de ".$weapons->nom." a était modifier",
            'embeds' => [
                [
                    'title' =>  'Le dossier de '.$weapons->nom.' a était modifier par un '.\Auth::user()->players->getJob()->label. ' ( ' .\Auth::user()->players->name. ' )',
                    'color' => '14177041',
                ]
            ],
        ])
        );
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\LSPD\Weapons  $weapons
     * @return \Illuminate\Http\Response
     */
    public function destroy(Weapons $weapon)
    {}
}
