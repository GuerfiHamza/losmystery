<?php

namespace App\Http\Controllers\VA;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\VA\Client;
use App\Models\VA\Archive;

class ArchiveController extends Controller
{
     /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {



        $archives = Archive::all();
        return view('jobs.va.archives.index', compact('archives'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return view('jobs.va.archives.form');
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
            'user' => 'required',
            'prix' => 'nullable',
            'vendeur' => 'nullable',
            'weapon' => 'nullable',
            'date' => 'nullable',
            'informations' => 'nullable',
        ]);

        $archive = new Archive;

        $archive->prix = $request->prix;
        $archive->vendeur = $request->vendeur;
        $archive->weapon = $request->weapon;
        $archive->date = $request->date;
        $archive->informations = $request->informations;

        $archive->client()->associate(Client::find($request->user));

        $archive->save();

        return redirect()->route('va-archives.show', compact('archive'));
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\VA\Archive  $archives
     * @return \Illuminate\Http\Response
     */
    public function show(Archive $archive)
    {
        return view('jobs.va.archives.show', compact('archive'));
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\VA\Archive  $archives
     * @return \Illuminate\Http\Response
     */
    public function edit(Archive $archives)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\VA\Archive  $archives
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Archive $archives)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\VA\Archive  $archives
     * @return \Illuminate\Http\Response
     */
    public function destroy(Archive $archives)
    {
        //
    }
}
