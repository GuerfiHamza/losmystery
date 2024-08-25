<?php

namespace App\Http\Controllers\Dashboard;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\FiveM\Cars;
use Flasher\Prime\FlasherInterface;
use Illuminate\Support\Facades\Http;

class CarsController extends Controller
{
    public function index()
    {
        $cars = Cars::all();
        // dd('$organisations');
        return view('dashboard.cars.index', compact('cars'));
    }

    public function destroy(Cars $car, FlasherInterface $flasher)
    {
        $car->delete();
        $flasher->addSuccess('Le vehicule a bien été retiré!');

        return redirect()->back()
        ->with('success', 'La vehicule a bien été retiré!',
                    Http::post('https://discord.com/api/webhooks/1277074400184893555/n9FNMhucBuOWjt_wh3L6-jK-360ChVg0nHg6Fr6TwOzJQlkY4aFWYtdw3GiEbil71UWh', [
                        'content' => "vehicule retiré",
                        'embeds' => [
                            [
                                'title' =>  'La vehicule '. $car->model . ' a été supprimé par '.\Auth::user()->players->name,
                                'color' => '16711680',
                            ]
                        ],
                    ]));
    }
    public function edit(Request $request, Cars $car)
    {
        return view('dashboard.cars.edit', compact('car'));
    }
    public function update(Request $request, Cars $car, FlasherInterface $flasher)
    {
        $car->update($request->all());
        $flasher->addSuccess('Le vehicule a bien été modifié!');

        return redirect()->back()
        ->with('success', 'La vehicule a bien été modifié!',
                    Http::post('https://discord.com/api/webhooks/1277074400184893555/n9FNMhucBuOWjt_wh3L6-jK-360ChVg0nHg6Fr6TwOzJQlkY4aFWYtdw3GiEbil71UWh', [
                        'content' => "vehicule modifié",
                        'embeds' => [
                            [
                                'title' =>  'La vehicule '. $car->model . ' a été modifié par '.\Auth::user()->players->name,
                                'color' => '16711680',
                            ]
                        ],
                    ]));
    }

    public function store(Request $request, FlasherInterface $flasher)
    {
        Cars::create($request->all());
        $flasher->addSuccess('Le vehicule a bien été ajouté!');

        return redirect()->back()
        ->with('success', 'Le vehicule a bien été ajouté!',
                    Http::post('https://discord.com/api/webhooks/1277074400184893555/n9FNMhucBuOWjt_wh3L6-jK-360ChVg0nHg6Fr6TwOzJQlkY4aFWYtdw3GiEbil71UWh', [
                        'content' => "vehicule ajouté",
                        'embeds' => [
                            [
                                'title' =>  'Le vehicule '. $request->model . ' a été ajouté par '.\Auth::user()->players->name,
                                'color' => '16711680',
                            ]
                        ],
                    ]));
    }
}
