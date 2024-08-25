<?php

namespace App\Http\Controllers\LSPD;

use App\Http\Controllers\Controller;
use App\Models\LSPD\Criminal;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class CriminalController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $criminals = Criminal::all();
        return view('jobs.lspd.criminals.index', compact('criminals'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return view('jobs.lspd.criminals.form');
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
            'front' => 'nullable|file|max:2000',
            'right' => 'nullable|file|max:2000',
            'left' => 'nullable|file|max:2000',
            'back' => 'nullable|file|max:2000',
            'dead' => 'nullable',
            'researched' => 'nullable',  
        ]);

        $criminal = new Criminal;

        $criminal->name = $request->name;
        $criminal->birthdate = $request->birthdate;
        $criminal->color = $request->color;
        $criminal->country = $request->country;
        $criminal->dead = $request->dead ? true : false;
        $criminal->researched = $request->researched ? true : false;

        $criminal->save();

        if ($request->has('identity_card')) {
            $path = Storage::disk('public')->putFileAs(
                'public/criminals', $request->file('identity_card'), $criminal->id.'_card.'.$request->file('identity_card')->extension()
            );
            $criminal->identity_card = $path;
        }
        if ($request->has('front')) {
            $path = $request->file('front')->storeAs(
                'public/criminals', $criminal->id.'_front.'.$request->file('front')->extension()
            );
            $criminal->front = $path;
        }
        if ($request->has('right')) {
            $path = $request->file('right')->storeAs(
                'public/criminals', $criminal->id.'_right.'.$request->file('right')->extension()
            );
            $criminal->right = $path;
        }
        if ($request->has('left')) {
            $path = $request->file('left')->storeAs(
                'public/criminals', $criminal->id.'_left.'.$request->file('left')->extension()
            );
            $criminal->left = $path;
        }
        if ($request->has('back')) {
            $path = $request->file('back')->storeAs(
                'public/criminals', $criminal->id.'_back.'.$request->file('back')->extension()
            );
            $criminal->back = $path;
        }

        $criminal->save();

        return redirect()->route('lspd-record.create');
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\LSPD\Criminal  $criminal
     * @return \Illuminate\Http\Response
     */
    public function show(Criminal $criminal)
    {
        return view('jobs.lspd.criminals.show', compact('criminal'));
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\LSPD\Criminal  $criminal
     * @return \Illuminate\Http\Response
     */
    public function edit(Criminal $criminal)
    {
        return view('jobs.lspd.criminals.form', compact('criminal'));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\LSPD\Criminal  $criminal
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Criminal $criminal)
    {
        $request->validate([
            'name' => 'required|max:50',
            'birthdate' => 'nullable',
            'skin' => 'nullable',
            'country' => 'nullable',
            'identity_card' => 'nullable|file|max:2000',
            'front' => 'nullable|file|max:2000',
            'right' => 'nullable|file|max:2000',
            'left' => 'nullable|file|max:2000',
            'back' => 'nullable|file|max:2000',
            'dead' => 'nullable',
            'researched' => 'nullable',  
        ]);

        $criminal->name = $request->name;
        $criminal->birthdate = $request->birthdate;
        $criminal->color = $request->color;
        $criminal->country = $request->country;
        $criminal->dead = $request->dead ? true : false;
        $criminal->researched = $request->researched ? true : false;

        if ($request->has('identity_card')) {
            $path = \Storage::disk('public')->putFileAs(
                'criminals', $request->file('identity_card'), $criminal->id.'_card.'.$request->file('identity_card')->extension()
            );
            $criminal->identity_card = $path;
        }
        if ($request->has('front')) {
            $path = $request->file('front')->storeAs(
                'public/criminals', $criminal->id.'_front.'.$request->file('front')->extension()
            );
            $criminal->front = $path;
        }
        if ($request->has('right')) {
            $path = $request->file('right')->storeAs(
                'public/criminals', $criminal->id.'_right.'.$request->file('right')->extension()
            );
            $criminal->right = $path;
        }
        if ($request->has('left')) {
            $path = $request->file('left')->storeAs(
                'public/criminals', $criminal->id.'_left.'.$request->file('left')->extension()
            );
            $criminal->left = $path;
        }
        if ($request->has('back')) {
            $path = $request->file('back')->storeAs(
                'public/criminals', $criminal->id.'_back.'.$request->file('back')->extension()
            );
            $criminal->back = $path;
        }

        $criminal->save();

        return redirect()->route('lspd-record.create');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\LSPD\Criminal  $criminal
     * @return \Illuminate\Http\Response
     */
    public function destroy(Criminal $criminal)
    {}
}
