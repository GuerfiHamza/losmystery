<?php

namespace App\Http\Controllers\Dashboard;

use App\Http\Controllers\Controller;
use App\Models\FiveM\Job;
use App\Models\FiveM\JobGrade;
use App\Models\FiveM\Player;
use Illuminate\Http\Request;
use App\Models\FiveM\Organisation;
use Alert;
use Flasher\Prime\FlasherInterface;
use Illuminate\Support\Facades\Http;
use App\Models\FiveM\VehiculePossessed;

class JobController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $job=Job::when($request->has("name"),function($q)use($request){
            return $q->where("name","like","%".$request->get("name")."%");
        })->paginate(5);
        if($request->ajax()){
            return view('dashboard.job.job', compact('job'));
        } 
        return view('dashboard.job.job', compact('job'));
    }

    public function search(Request $request)
    {
        if($request->ajax())
     {
      $output = '';
      $query = $request->get('query');
      if($query != '')
      {
       $data = Job::where('name', 'like', '%'.$query.'%')
         ->orWhere('label', 'like', '%'.$query.'%')
         ->get();

         
      }
      else
      {
       $data = Job::orderBy('name', 'desc')
         ->get();
      }
      $total_row = $data->count();
      if($total_row > 0)
      {
       foreach($data as $row)
       {
        $output .= '
        <tr class="text-gray-700 dark:text-gray-400">
         <td class="px-4 py-3 text-sm"><a href="/dashboard/job/'.$row->name.'">'.$row->name.'</a></td>
         <td class="px-4 py-3 text-sm">'.$row->label.'</a></td>
         <td class="px-4 py-3 text-sm">'. $row->members->sortByDesc('job_grade')->pluck('name')->first().'</td>
         <td class="px-4 py-3 text-sm">'.number_format($row->getTreasory(),2) .'$'.'</td>
        
        </tr>
        ';
       }
      }
      else
      {
       $output = '
       <tr>
        <td align="center" class="px-4 py-3 text-sm text-white" colspan="5">Aucune donnée disponible</td>
       </tr>
       ';
      }
      $data = array(
       'table_data'  => $output,
       'total_data'  => $total_row
      );

      echo json_encode($data);
     }
    }

    public function show($id)
    {
        $job = Job::findOrFail($id);
        $treasories = $job->getTreasories()->sortByDesc('created_at')->take(24*30)->reverse();
        $treasoriesDifference = $job->getTreasories()->sortByDesc('created_at')->take(24*30)->reverse()->map(function ($item, $key) use ($treasories) {
            if ($key > 0) {
                $item->treasory = $item->treasory - $treasories->get($key-1)->treasory;
            } else {
                $item->treasory = 0;
            }

            return $item;
        });
        return view('dashboard.job.show', compact('job', 'treasories', 'treasoriesDifference'));
    }
    public function post(Request $request, FlasherInterface $flasher)
    {
        // Get the entreprise and player from request
        $entreprise = Job::findOrFail($request->job);

        $request->validate([
            'poste' => 'required|in:'.$entreprise->validationStringGrades(),
            'name' => 'required|string|min:2',
            'salary' => 'required|numeric|min:1'
        ]);

        $poste = JobGrade::findOrFail($request->poste);

        if ($poste->arePlayersOnline()) {
        Alert::toast('Vous ne pouvez pas modifier un poste si la/les personnes sont en ville.', 'error');

            return redirect()->back();
        }

        $poste->label = $request->name;
        $poste->salary = $request->salary;
        $poste->save();
        $flasher->addSuccess('Le poste a été mis a jour');

        return redirect()->back()->with('success', 'TEST.',
                    Http::post('https://discord.com/api/webhooks/1276998773528199401/SULQjwjEuKMBmSSHLu9UwknTvCjXqbugpyCQspSCwt4t9TcIzoqQtwJSdc1NGR5xEsAD', [
                        'content' => "Le grade". $poste->label ." a été modifié",
                        'embeds' => [
                            [
                                'title' =>  "Le grade ". $poste->label ." de ". $entreprise->label." (salaire: ". number_format($poste->salary, 2) ." $) a été modifié par ".\Auth::user()->players->name,
                                'color' => '16711680',
                            ]
                        ],
                    ]));;
    }

    public function allReattribute(Request $request, FlasherInterface $flasher)
    {
        // Get the entreprise and player from request
        $entreprise = Job::findOrFail($request->job);

        // Get all vehicules
        $vehicules = $entreprise->vehicules();

        $members = $entreprise->members;

        foreach ($members as $member) {
            $vehicules = $vehicules->where('owner', '!=', $member->identifier);
        }

        $owner = $entreprise->members->sortByDesc('job_grade')->first()->identifier;
        $vehicules->update([
            'owner' => $owner
        ]);
        $flasher->addSuccess('Les vehicules ont bien été réattribués.');

        return redirect()->back()->with('success', 'TEST.',
                    Http::post('https://discord.com/api/webhooks/1276998773528199401/SULQjwjEuKMBmSSHLu9UwknTvCjXqbugpyCQspSCwt4t9TcIzoqQtwJSdc1NGR5xEsAD', [
                        'content' => "Les vehicules de ". $entreprise->label ." ont été réattribuer à ". $entreprise->members->sortByDesc('job_grade')->first()->name ,
                        'embeds' => [
                            [
                                'title' =>  "Les vehicules de ". $entreprise->label ." ont été réattribuer à ". $entreprise->members->sortByDesc('job_grade')->first()->name. " par ". \Auth::user()->players->name,
                                'color' => '16711680',
                            ]
                        ],
                    ]));;
    }

    public function vehicle(Request $request, FlasherInterface $flasher)
    {
        // Get the entreprise and player from request
        $entreprise = Job::findOrFail($request->job);

        $request->validate([
            'vehicle' => 'required|in:'.$entreprise->validationStringVehicles(),
            'player' => 'required|in:'.$entreprise->validationStringMembers().',null',
        ]);

        // Get vehicle from request
        $vehicle = VehiculePossessed::findOrFail($request->vehicle);

        // If vehicle owner is online
        if ($vehicleOwner = $vehicle->player) {
            if ($vehicleOwner->isPlayerOnline()) {
        Alert::toast('Vous ne pouvez pas retirer le véhicule d\'une personne en ville.', 'error');

                return redirect()->back();
            }
        }

        if ($request->player != 'null') {
            $player = Player::findOrFail($request->player);

            if ($player->isPlayerOnline()) {
        Alert::toast('Vous ne pouvez pas attribué un véhicule à une personne en ville.', 'error');

                return redirect()->back();
            }
        }

        $vehicle->owner = ($request->player == "null" ? 1 : $request->player);
        $vehicle->save();
        $flasher->addSuccess('Le vehicule a bien été modifier.');

        return redirect()->back()->with('success', 'TEST.',
                    Http::post('https://discord.com/api/webhooks/1276998773528199401/SULQjwjEuKMBmSSHLu9UwknTvCjXqbugpyCQspSCwt4t9TcIzoqQtwJSdc1NGR5xEsAD', [
                        'content' => "Le vehicule " .$vehicle->plate." de ". $entreprise->label ." a été modifier " ,
                        'embeds' => [
                            [
                                'title' =>  "Le vehicule " .$vehicle->plate." de ". $entreprise->label ." a été modifier par ". \Auth::user()->players->name,
                                'color' => '16711680',
                            ]
                        ],
                    ]));;
    }
}
