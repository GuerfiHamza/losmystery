<?php

namespace App\Http\Controllers\Jobs;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class LSPDController extends Controller
{
    public function index()
    {
        if (\Auth::user()->players->job != 'police') {
            return redirect()->route('index')
                    ->with('error', 'Vous ne pouvez pas accéder à cette page.');
        }

        return view('jobs.lspd');
    }

    public function sendMessage(Request $request) 
    {
        $request->validate([
            'message' => 'required|string|max:255',
        ]);

        broadcast(new \App\Events\LSPD\RadioMessageEvent(\Auth::user(), $request->message))->toOthers();

        return 'ok';
    }

    public function sendAlert()
    {
        if (\Auth::user()->getGradeNameAttribute() != \Auth::user()->players->getJob()->higherGrade()->label) {
            return abort(403);
        }

        event(new \App\Events\LSPD\InterventionEvent("ALERTE! Tous les agents sont nécessités en radio!"));

        return 'ok';
    }
    public function sendQG()
    {
        if (\Auth::user()->getGradeNameAttribute() != \Auth::user()->players->getJob()->higherGrade()->label) {
            return abort(403);
        }

        event(new \App\Events\LSPD\InterventionEvent("Tous les agents sont appelés au quartier général."));

        return 'ok';
    }
}
