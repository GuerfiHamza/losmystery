@extends('layouts.app')

@section('title', 'Formulaires')

@section('content')
 

@if (\restray\FormBuilder\Models\Submission::where('user_id', Auth::id())->count() > 0)
<section class="py-8 leading-7 text-white sm:py-12 md:py-16 lg:py-24">
    <div class="max-w-6xl px-10 mx-auto border-solid lg:px-12 bg-gray-900 py-16 rounded-md border border-blue-500">

    <strong class="font-bold text-red-500">Attention !</strong>
        <span class="block sm:inline">Vous avez déjà soumis un formulaire.</span>
    </div>
</section>
    
@else
    
        @foreach(\restray\FormBuilder\Models\Form::where('enabled', true)->get() as $form)
        <section class="py-8 leading-7 text-white sm:py-12 md:py-16 lg:py-24">
            <div class="max-w-6xl px-10 mx-auto border-solid lg:px-12 bg-gray-900 py-16 rounded-md border border-blue-500">
                <div class="flex flex-col items-start leading-7 text-white border-0 border-gray-200 lg:items-center lg:flex-row">
                    <div class="box-border flex-1 text-center border-solid sm:text-left">
                        <h2 class="m-0 text-4xl font-semibold leading-tight tracking-tight text-left text-white border-0 border-gray-200 sm:text-5xl">
                            {{ $form->name }}
                        </h2>

                    </div>
                    <div>
                        <a href="{{ route('formbuilder::form.render', ['identifier' => $form->identifier]) }}"  data-turbolinks="false" class="relative inline-block px-6 py-2 font-medium group">
                            <span class="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-red-bg group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
                            <span class="absolute inset-0 w-full h-full bg-yellow-bg border-2 border-red-bg group-hover:bg-red-bg"></span>
                            <span class="relative text-2xl text-black montserrat tracking-wider group-hover:text-white">S'inscrire</span>
                            </a>
                    
                </div>
                </div>
            </div>
        </section>
        @endforeach
        @endif

@endsection

{{-- 'tag-warning', 'tag-success', 'tag-danger', 'tag-default' --}}
