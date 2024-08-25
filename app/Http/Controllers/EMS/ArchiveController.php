<?php

namespace App\Http\Controllers\EMS;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\EMS\Patient;
use App\Models\EMS\Archive;

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
        return view('jobs.ems.archives.index', compact('archives'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return view('jobs.ems.archives.form');
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
            'who' => 'nullable',
            'amende' => 'nullable',
            'informations' => 'nullable',
            'ppa' => 'nullable',
        ]);

        $archive = new Archive;

        $archive->who = $request->who;
        $archive->amende = $request->amende;
        $archive->informations = $request->informations;
        $archive->ppa = $request->ppa ? true : false;

        $archive->patient()->associate(Patient::find($request->user));

        $archive->save();

        return redirect()->route('ems-archives.show', compact('archive'));
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\EMS\Archive  $archives
     * @return \Illuminate\Http\Response
     */
    public function show(Archive $archive)
    {
        return view('jobs.ems.archives.show', compact('archive'));
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\EMS\Archive  $archives
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
     * @param  \App\Models\EMS\Archive  $archives
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Archive $archives)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\EMS\Archive  $archives
     * @return \Illuminate\Http\Response
     */
    public function destroy(Archive $archives)
    {
        //
    }
}