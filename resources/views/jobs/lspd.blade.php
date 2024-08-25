@extends('layouts.app')

@section('title', 'LSPD')

@section('content')
    <section id="app">
        <lspd-event grades="{{ \App\Models\FiveM\Job::where('name', '=', 'police')->get()->first()->grades->sortByDesc('grade')->pluck('label') }}" name="{{ \Auth::user()->players->name }}" grade="{{ \Auth::user()->players->getJobGrade() }}"/>
    </section>
@endsection 

@push('js')
<script src="{{ asset('js/app.js') }}"></script>
@endpush