<?php

namespace App\Http\Controllers\LSPD;

use App\Http\Controllers\Controller;
use App\Models\LSPD\Record;
use App\Models\LSPD\Criminal;
use Illuminate\Http\Request;

class RecordController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {


        $records = Record::All();

        return view('jobs.lspd.records.index', compact('records'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return view('jobs.lspd.records.form');
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
            'type' => 'required',
            'cell' => 'nullable',
            'penalty' => 'nullable',
            'informations' => 'nullable',
            'search' => 'nullable',
            'recidivism' => 'nullable',
            'captured' => 'nullable',
        ]);

        $record = new Record;

        $record->type = $request->type;
        $record->cell = $request->cell;
        $record->penalty = $request->penalty;
        $record->informations = $request->informations;
        $record->captured = $request->captured;
        $record->search = $request->search ? true : false;
        $record->recidivism = $request->recidivism ? true : false;

        $record->criminal()->associate(Criminal::find($request->user));

        $record->save();

        return redirect()->route('lspd-record.show', compact('record'));
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\LSPD\Record  $record
     * @return \Illuminate\Http\Response
     */
    public function show(Record $record)
    {
        return view('jobs.lspd.records.show', compact('record'));
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\LSPD\Record  $record
     * @return \Illuminate\Http\Response
     */
    public function edit(Record $record)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\LSPD\Record  $record
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Record $record)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\LSPD\Record  $record
     * @return \Illuminate\Http\Response
     */
    public function destroy(Record $record)
    {
        //
    }
}
