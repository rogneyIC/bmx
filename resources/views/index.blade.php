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
    <div class="root fond">
        <div class="container">
            @if (Route::has('login'))
            <div class="row justify-content-md-center">
                @auth
                <a href="{{ url('/home') }}" class="text-sm text-gray-700 underline">Inicio</a>
                @else
                <div class="col-5">
                    <div class="row padding20">
                        <div class="col">
                            <textarea class="form-control noresize" rows="5" disabled></textarea>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col">
                            <div id="carouselIndex" class="carousel slide carousel-fade" data-ride="carousel">
                                <div class="carousel-inner">
                                    <div class="carousel-item active">
                                        <img src="{{ asset('images/bmx1.jpg') }}" class="d-block w-100" alt="...">
                                    </div>
                                    <div class="carousel-item">
                                        <img src="{{ asset('images/bmx2.jpg') }}" class="d-block w-100" alt="...">
                                    </div>
                                    <div class="carousel-item">
                                        <img src="{{ asset('images/bmx3.jpg') }}" class="d-block w-100" alt="...">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-3 align-self-center">
                    <div class="row">
                        <div class="col">
                            <object data="{{ asset('images/logo.svg') }}" type="image/svg+xml" id="objectSVG"></object>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col d-grid">
                            <a class="btn btn-primary" href="{{ route('login') }}" role="button">Iniciar sesión</a>
                        </div>
                        @if (Route::has('register'))
                        <div class="col d-grid">
                            <a class="btn btn-primary" href="{{ route('register') }}" role="button">Registrarse</a>
                        </div>
                        @endif
                    </div>
                    @endauth
                </div>
            </div>
            @endif
        </div>
    </div>
</body>

</html>