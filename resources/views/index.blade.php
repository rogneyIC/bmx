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
            <div class="row">
                @auth
                <a href="{{ url('/home') }}" class="text-sm text-gray-700 underline">Inicio</a>
                @else
                <div class="col-8">
                    <div class="row">
                        <div class="col">
                            <div class="textIndex">
                                El BMX (abreviación de su nombre en inglés: "Bicycle Motocross") es una disciplina del ciclismo
                                que se practica con bicicletas cross con ruedas de 20 pulgadas de diámetro. El BMX abarca dos
                                modalidades: carrera, cuyo objetivo es completar el recorrido en el menor tiempo posible, y estilo
                                libre (freestyle), cuyo objetivo es realizar acrobacias. El BMX es un deporte extremo que debe ser
                                practicado con la debida seguridad que nos brindan los siguientes objetos: casco, rodilleras, coderas,
                                guantes de tela o plástico y zapatos anchos. La bicicleta tiene que estar en buenas condiciones para
                                evitar accidentes.
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