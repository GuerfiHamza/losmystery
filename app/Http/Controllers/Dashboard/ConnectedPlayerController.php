<?php

namespace App\Http\Controllers\Dashboard;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;
use Flasher\Prime\FlasherInterface;

class ConnectedPlayerController extends Controller
{
    public function index()
    {
        $players = \App\Helpers\OnlinePlayer::getOnlinePlayers();
        // dd($players->first()['steamhex']);
        return view('dashboard.connected_players', compact('players'));
    }

    public function kick(Request $request, FlasherInterface $flasher)
    {
        $rcon = new \App\Helpers\Q3Query;
        $rcon->rcon('clientkick ' . $request->player . ' ' . $request->reason);
        $flasher->addSuccess('Le joueur a bien été kick!');

        return redirect()->route('dashboard-connected_player')
                ->with('success','Le joueur a bien été kick!',
                Http::post('https://discord.com/api/webhooks/1277065260339040307/_iTf8cPX8b_xUpWqSA7KPahncnMA_ov7nbXkucWrTJ0fVgoOta6cre-HvJVCBF9eh-P7', [
                    'content' => "Un joueur viens d'etre kick",
                    'embeds' => [
                        [
                            'title' =>  $request->player.' a été kick par '.\Auth::user()->players->name. ' pour raison '.$request->reason,
                            'color' => '14177041',
                        ]
                    ],
                ]));
    }
    
    public function ban(Request $request, FlasherInterface $flasher)
    {
        if ($request->ban_confirmation == $request->player) {
            $rcon = new \App\Helpers\Q3Query;
            $rcon->rcon('tempbanclient ' . $request->player . ' ' . $request->reason);
            $flasher->addSuccess('Le joueur a bien été ban!');
    
            return redirect()->route('dashboard-connected_player')
                    ->with('success','Le joueur a bien été ban!',
                    Http::post('https://discord.com/api/webhooks/1277065331957043205/V6CpqqPR5e4oonM-6H0dWSoqUfD5PvwPw7lH6oCKdw_b-K_-Il4hNJzEg2hrf8U7CxZU', [
                        'content' => "Un joueur viens d'etre ban",
                        'embeds' => [
                            [
                                'title' =>  $request->player. ' a été ban par '.\Auth::user()->players->name.' pour raison '.$request->reason,
                                'color' => '14177041',
                            ]
                        ],
                    ]));
        }
        $flasher->addError('La confirmation est incorrect');

        return redirect()->route('dashboard-connected_player')
                ->with('error','La confirmation est incorrect');
    }
}
