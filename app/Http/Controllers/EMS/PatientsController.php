<?php

namespace App\Http\Controllers\EMS;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\EMS\Patient;
use Illuminate\Support\Facades\Storage;

class PatientsController extends Controller
{
      /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $patients = Patient::all();
        return view('jobs.ems.patients.index', compact('patients'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return view('jobs.ems.patients.form');
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
            'name' => 'required|max:50',
            'birthdate' => 'nullable',
            'skin' => 'nullable',
            'country' => 'nullable',
            'identity_card' => 'nullable|file|max:2000',
            'tel' =>  'nullable',
            'dead' => 'nullable',
        ]);

        $patient = new Patient;

        $patient->name = $request->name;
        $patient->birthdate = $request->birthdate;
        $patient->color = $request->color;
        $patient->country = $request->country;
        $patient->dead = $request->dead ? true : false;
        $patient->tel = $request->tel ;

        $patient->save();

        if ($request->has('identity_card')) {
            $path = Storage::disk('public')->putFileAs(
                'public/patients', $request->file('identity_card'), $patient->id.'_card.'.$request->file('identity_card')->extension()
            );
            $patient->identity_card = $path;
        }
        

        $patient->save();

        return redirect()->route('ems-archives.create');
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\LSPD\Patient  $patient
     * @return \Illuminate\Http\Response
     */
    public function show(Patient $patient)
    {
        return view('jobs.ems.patients.show', compact('patient'));
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\LSPD\Patient  $patient
     * @return \Illuminate\Http\Response
     */
    public function edit(Patient $patient)
    {
        return view('jobs.ems.patients.form', compact('patient'));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\LSPD\Patient  $patient
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Patient $patient)
    {
        $request->validate([
            'name' => 'required|max:50',
            'birthdate' => 'nullable',
            'skin' => 'nullable',
            'country' => 'nullable',
            'identity_card' => 'nullable|file|max:2000',
            'dead' => 'nullable',
            'tel' => 'nullable',  
        ]);

        $patient = new Patient;

        $patient->name = $request->name;
        $patient->birthdate = $request->birthdate;
        $patient->color = $request->color;
        $patient->country = $request->country;
        $patient->dead = $request->dead ? true : false;
        $patient->tel = $request->tel;

        if ($request->has('identity_card')) {
            $path = \Storage::disk('public')->putFileAs(
                'patients', $request->file('identity_card'), $patient->id.'_card.'.$request->file('identity_card')->extension()
            );
            $patient->identity_card = $path;
        }
        

        $patient->save();

        return redirect()->route('ems-archives.create');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\LSPD\Patient  $patient
     * @return \Illuminate\Http\Response
     */
    public function destroy(Patient $patient)
    {}
}
