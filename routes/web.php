<?php

use App\Http\Controllers\Auth\SteamLoginController;
use App\Http\Controllers\Bank\BankController;
use App\Http\Controllers\Bank\BankLentController;
use App\Http\Controllers\Dashboard\BillingController;
use App\Http\Controllers\Dashboard\ConnectedPlayerController;
use App\Http\Controllers\Dashboard\EntrepriseController;
use App\Http\Controllers\Dashboard\IndexController as DashboardIndexController;
use App\Http\Controllers\Dashboard\JobController as DashboardJobController;
use App\Http\Controllers\Dashboard\OrganisationController;
use App\Http\Controllers\Dashboard\PlayerController;
use App\Http\Controllers\Dashboard\SearchController;
use App\Http\Controllers\Dashboard\VehiculeController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\PPAController;
use App\Http\Controllers\EMS\ArchiveController;
use App\Http\Controllers\EMS\PatientsController;
use App\Http\Livewire\Index;
use App\Http\Livewire\Rules;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\JobController;
use App\Http\Controllers\OrgController;
use App\Http\Controllers\Dashboard\CarsController;

// Static routes
Route::get('/',  Index::class )->name('index');
Route::get('/rules', Rules::class)->name('rules');

// Auth
Route::get('auth/steam', [SteamLoginController::class, 'redirectToSteam'])->name('login');
Route::get('auth/steam/handle', [SteamLoginController::class, 'handle'])->name('auth.steam.handle');
Route::get('logout', function() {
    \Auth::logout();
    return redirect()->route('index');
})->middleware('auth')->name('logout');



// Profile
Route::middleware('auth')->prefix('profile')->group(function() {
    Route::get('profile', [ProfileController::class, 'index'])->name('profile');

    // Entreprise
    Route::middleware(['player', 'boss'])->prefix('entreprise')->name('entreprise-')->group(function() {
        Route::get('', [ProfileController::class, 'entreprise'])->name('index');
        Route::post('promote', [JobController::class,'promote'])->name('promote');
        Route::post('retire', [JobController::class,'retire'])->name('retire');
        Route::post('post', [JobController::class,'post'])->name('post');
        Route::post('vehicle', [JobController::class,'vehicle'])->name('vehicle');
        Route::post('reattribution', [JobController::class,'allReattribute'])->name('reattribution');
    });   // org
    Route::middleware(['player', 'org'])->prefix('organisation')->name('org-')->group(function() {
        Route::get('', [ProfileController::class, 'org'])->name('index');
        Route::post('promote', [OrgController::class,'promote'])->name('promote');
        Route::post('retire',[ OrgController::class,'retire'])->name('retire');
        Route::post('post', [OrgController::class,'post'])->name('post');
        Route::post('vehicle', [OrgController::class,'vehicle'])->name('vehicle');
        Route::post('reattribution', [OrgController::class,'allReattribute'])->name('reattribution');
    });

});

//jobs 
Route::middleware(['auth', 'player', 'ems'])->prefix('ems')->name('ems-')->group(function() {
    Route::resource('archives', ArchiveController::class)->except(['edit', 'update', 'delete']);
    Route::resource('patients', PatientsController::class)->except(['delete']);
    Route::resource('ppa', PPAController::class);

    Route::get('image', function(\Illuminate\Http\Request $request) {
        return File::get(storage_path('app/'.$request->get('image')));
    });
    Route::view('tarif', 'jobs.ems.autres.tarifs')->name('tarifs');
});
Route::middleware(['auth', 'player', 'arm'])->prefix('ppa')->group(function() {
    Route::resource('ppa', PPAController::class);

});

// Forms
Route::view('formulaires', 'forms')->middleware('auth')->name('forms');

Route::name('formbuilder::')->prefix('form/')->group(function () {
    Route::get('{identifier}', [\restray\FormBuilder\Controllers\RenderFormController::class , 'render'])->name('form.render');
    Route::post('{identifier}', [\restray\FormBuilder\Controllers\RenderFormController::class, 'submit'])->name('form.submit');
    Route::redirect('{identifier}/feedback', '/')->name('form.feedback');
});

Route::middleware(['auth', 'dashboard'])->prefix('dashboard')->name('dashboard-')->group(function() {
    Route::middleware('staff')->group(function () {
        Route::resource('billing', BillingController::class);
        Route::get('/accueil',[DashboardIndexController::class, 'index'])->name('index');
        Route::resource('player', PlayerController::class);
        Route::resource('cars', CarsController::class);
        Route::POST('player/jobedit', [ PlayerController::class, 'jobedit'])->name('player.jobedit');
        Route::POST('player/orgedit', [ PlayerController::class, 'orgedit'])->name('player.orgedit');
        Route::get('player/{player}/billings', [PlayerController::class, 'showBillings'])->name('player.show-billings');
        Route::get('organisation', [OrganisationController::class, 'index'])->name('organisation.index');
        Route::resource('job', DashboardJobController::class);
        Route::get('jobs/search', [DashboardJobController::class, 'search'])->name('live_search');
        Route::get('organisation/search', [OrganisationController::class, 'search'])->name('org_search');
        Route::get('recherche', [PlayerController::class, 'search'])->name('recherche');
        Route::get('connected', [ConnectedPlayerController::class, 'index'])->name('connected_player');
        Route::post('connected/kick', [ConnectedPlayerController::class, 'kick'])->name('connected_player.kick');
        Route::post('connected/ban', [ConnectedPlayerController::class, 'ban'])->name('connected_player.ban');

    });

    Route::name('formbuilder::forms.')->group(function () {
        Route::resource('forms', \restray\FormBuilder\Controllers\FormController::class)->only(['create', 'store', 'edit', 'update', 'destroy'])->middleware('superadmin');
        Route::resource('forms', \restray\FormBuilder\Controllers\FormController::class)->only(['index', 'show']);
        Route::resource('/forms/{fid}/submissions', \restray\FormBuilder\Controllers\SubmissionController::class);
    });

});
