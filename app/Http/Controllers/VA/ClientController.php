<?php

namespace App\Http\Controllers\VA;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\VA\Client;

class ClientController extends Controller
{
         /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $clients = Client::all();
        return view('jobs.va.clients.index', compact('clients'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return view('jobs.va.clients.form');
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
            'org' => 'nullable',
            'tel' =>  'nullable',
        ]);

        $client = new Client;

        $client->name = $request->name;
        $client->org = $request->org;
        $client->tel = $request->tel ;

    
        $client->save();

        return redirect()->route('va-archives.create');
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\VA\Client  $client
     * @return \Illuminate\Http\Response
     */
    public function show(Client $client)
    {
        return view('jobs.va.clients.show', compact('client'));
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\VA\Client  $client
     * @return \Illuminate\Http\Response
     */
    public function edit(Client $client)
    {
        return view('jobs.va.clients.form', compact('client'));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\LSPD\Client  $client
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Client $client)
    {
        $request->validate([
            'name' => 'required|max:50',
            'org' => 'nullable',
            'tel' =>  'nullable',
        ]);

        $client->name = $request->name;
        $client->org = $request->org;
        $client->tel = $request->tel ;

    
        $client->save();

        return redirect()->route('va-archives.create');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\VA\Client  $client
     * @return \Illuminate\Http\Response
     */
    public function destroy(Client $client)
    {}
}
