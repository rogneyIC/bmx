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
            @if (Route::has('login'))
            <div class="row mt-3">
                @auth
                <a href="{{ url('/home') }}" class="text-sm text-gray-700 underline">Inicio</a>
                @else
                <div class="col-8">
                    <div class="row">
                        <div class="col">
                            <div class="textIndex">
                                <p><strong>ComparteCompiteBMX</strong> es una iniciativa que busca mostrar el nivel de cada región de país y
                                    motivar el deporte con ideas nuevas de competencia y apoyo ideales para fechas sin campeonatos.</p>
                                <p>En la plataforma podrás conocer tu nivel aproximado, proponerte metas y referenciarlas según tu región o a
                                    nivel nacional.</p>
                                <p>Tendras información técnica, podras hacer consultar y publicar tus experiencias (de repuestos, tips de trucos,
                                    cuidadado de lesiones, y mas).</p>
                                <p>Nace de la idea de dar a conocer a los biker dedicados. Al mismo tiempo busca potenciar y consolidar el bmx
                                    nacional.</p>
                                <p>Nos gustaría ser una especie de ventana web donde las marcas puedan descubrir riders potencialmente
                                    competitivos.</p>
                                <p><strong><em>Comparte</em></strong> -> Viene de la idea de buscar apoyo entre nosotros, marcas y en cualquier persona que quiera
                                    aportar con el deporte. </p>
                                <p><strong><em>Compite</em></strong> -> Viene de la idea de generar una “competencia” a distancia y en tiempo real que pueda potencie
                                    el bmx en diferentes partes del país al mismo tiempo.</p>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col">
                            <div id="carouselIndex" class="carousel slide carousel-fade" data-bs-ride="carousel">
                                <div class="carousel-inner">
                                    <div class="carousel-item active">
                                        <img src="{{ asset('images/index1.jpg') }}" class="d-block w-100">
                                    </div>
                                    <div class="carousel-item">
                                        <img src="{{ asset('images/index2.jpg') }}" class="d-block w-100">
                                    </div>
                                    <div class="carousel-item">
                                        <img src="{{ asset('images/index3.jpg') }}" class="d-block w-100">
                                    </div>
                                </div>
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
                            <a class="btn btn-primary" href="{{ route('login') }}" role="button">Iniciar sesión</a>
                        </div>
                        @endif
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
</body>

</html>