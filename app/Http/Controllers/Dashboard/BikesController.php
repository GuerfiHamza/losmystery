<?php

namespace App\Http\Controllers\Dashboard;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\FiveM\Bikes;
use Flasher\Prime\FlasherInterface;
use Illuminate\Support\Facades\Http;
class BikesController extends Controller
{
    public function index()
    {
        $bikes = Bikes::paginate(10);
        // dd('$organisations');
        return view('dashboard.bikes.index', compact('bikes'));
    }

    public function destroy(Bikes $bike, FlasherInterface $flasher)
    {
        $bike->delete();
        $flasher->addSuccess('La moto a bien été retiré!');

        return redirect()->back()
        ->with('success', 'La moto a bien été retiré!',
                    Http::post('https://discord.com/api/webhooks/1277074400184893555/n9FNMhucBuOWjt_wh3L6-jK-360ChVg0nHg6Fr6TwOzJQlkY4aFWYtdw3GiEbil71UWh', [
                        'content' => "moto retiré",
                        'embeds' => [
                            [
                                'title' =>  'La moto '. $bike->model . ' a été supprimé par '.\Auth::user()->players->name,
                                'color' => '16711680',
                            ]
                        ],
                    ]));
    }
    public function edit(Request $request, Bikes $bike)
    {
        return view('dashboard.bikes.edit', compact('bike'));
    }
    public function update(Request $request, Bikes $bike, FlasherInterface $flasher)
    {
        $bike->update($request->all());
        $flasher->addSuccess('La moto a bien été modifié!');

        return redirect()->back()
        ->with('success', 'La moto a bien été modifié!',
                    Http::post('https://discord.com/api/webhooks/1277074400184893555/n9FNMhucBuOWjt_wh3L6-jK-360ChVg0nHg6Fr6TwOzJQlkY4aFWYtdw3GiEbil71UWh', [
                        'content' => "moto modifié",
                        'embeds' => [
                            [
                                'title' =>  'La moto '. $bike->model . ' a été modifié par '.\Auth::user()->players->name,
                                'color' => '16711680',
                            ]
                        ],
                    ]));
    }

    public function store(Request $request, FlasherInterface $flasher)
    {
        Bikes::create($request->all());
        $flasher->addSuccess('La moto a bien été ajouté!');

        return redirect()->back()
        ->with('success', 'La moto a bien été ajouté!',
                    Http::post('https://discord.com/api/webhooks/1277074400184893555/n9FNMhucBuOWjt_wh3L6-jK-360ChVg0nHg6Fr6TwOzJQlkY4aFWYtdw3GiEbil71UWh', [
                        'content' => "moto ajouté",
                        'embeds' => [
                            [
                                'title' =>  'Le moto '. $request->model . ' a été ajouté par '.\Auth::user()->players->name,
                                'color' => '16711680',
                            ]
                        ],
                    ]));
    }
}
