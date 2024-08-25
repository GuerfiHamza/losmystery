<?php

namespace App\Http\Middleware;

use Closure;

class ArmurierMiddleware
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {
        if (\Auth::user()->players->job == "armurier" || \Auth::user()->players->job == "ambulance" || \Auth::user()->players->job == "police" ) {
            return $next($request);
        }

        return redirect()->back()
                ->with('error', 'Vous ne faites pas partie de la police.');
    }
}
