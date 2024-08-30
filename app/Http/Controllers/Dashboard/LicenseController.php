<?php

namespace App\Http\Controllers\Dashboard;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\FiveM\License;
use Flasher\Prime\FlasherInterface;

class LicenseController extends Controller
{
    public function index()
    {
        $licenses = License::paginate(10);
        return view('dashboard.license.index', compact('licenses'));
    }

    public function destroy(Request $request, FlasherInterface $flasher)
    {
        $license = License::find($request->licenseid);
        $license->delete();
        $flasher->addSuccess('La license a bien été retiré!');

        return redirect()->back();
    }
}
