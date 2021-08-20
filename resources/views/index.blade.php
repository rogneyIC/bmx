<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <title>{{ config('app.name', 'BMX') }}</title>
    <script src="{{ asset('js/app.js') }}" defer></script>
    <link href="{{ asset('css/app.css') }}" rel="stylesheet">
</head>

<body>
    <div class="root d-flex align-items-center justify-content-center">
        <div class="container">
            <div class="row mt-3">
                @auth
                <a href="{{ url('/home') }}" class="text-sm text-gray-700 underline">Usted ya inició sesión. Volver al inicio</a>
                @else
                <div class="col-8">
                    <div class="row">
                        <div class="col">
                            <div class="textIndex">
                                <p><strong>ComparteCompiteBMX</strong> es una iniciativa que busca dar a conocer el nivel de cada región del país y
                                motivarlo a través de competencias a distancia y en tiempo real.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-4 align-self-center">
                    <div class="row">
                        <div class="col">
                            <object data="{{ asset('images/logo-index.svg') }}" type="image/svg+xml"></object>
                        </div>
                    </div>
                    <div class=" row">
                        @if (Route::has('login'))
                        <div class="col d-grid">
                            <a class="btn btn-primary" href="{{ route('login') }}" role="button">{{ __('Iniciar sesión') }}</a>
                        </div>
                        @endif
                        @if (Route::has('register'))
                        <div class="col d-grid">
                            <a class="btn btn-primary" href="{{ route('register') }}" role="button">{{ __('Registrarse') }}</a>
                        </div>
                        @endif
                    </div>
                    <form method="POST" action="{{ route('login') }}">
                        @csrf
                        <input id="invite" type="hidden" class="form-control" name="email" value="invite@invite.invite">
                        <input id="password" type="hidden" class="form-control" name="password" value="invite">
                        <div class="row mt-3">
                            <div class="col d-grid">
                                <button type="submit" class="btn btn-primary">{{ __('Iniciar sesión como invitado') }}</button>
                            </div>
                        </div>
                    </form>
                </div>
                @endauth
            </div>
        </div>
    </div>
</body>

</html>