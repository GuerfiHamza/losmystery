<?php

namespace App\Http\Controllers\Server;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class LSPDController extends Controller
{
    public function triggerNewIntervention(Request $request)
    {
        event(new \App\Events\LSPD\InterventionEvent($request->message));

        return 'ok';
    }
}
