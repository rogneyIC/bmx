@extends('layouts.app')

@section('content')
<div class="root d-flex align-items-center justify-content-center login">
    <div class="container">
        <div class="row justify-content-center mb-0">
            <div class="col-auto">
                <div class="card">
                    <div class="card-header">{{ __('Iniciar sesión') }}</div>
                    <div class="card-body p-4">
                        <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                            <!-- Form Login -->
                            <form method="POST" action="{{ route('login') }}">
                                @csrf
                                <label for="email" class="form-label">{{ __('Correo electrónico') }}</label>
                                <div class="input-group mb-3">
                                    <span class="input-group-text" id="emailIcon"><i class="fas fa-envelope"></i></span>
                                    <input id="email" type="email" class="form-control @error('email') is-invalid @enderror" name="email" value="{{ old('email') }}" required autocomplete="email" autofocus aria-describedby="emailIcon">
                                    @error('email')
                                    <span class="invalid-feedback" role="alert">
                                        <strong>{{ $message }}</strong>
                                    </span>
                                    @enderror
                                </div>
                                <label for="password" class="form-label">{{ __('Contraseña') }}</label>
                                <div class="input-group mb-3">
                                    <span class="input-group-text" id="passwordIcon"><i class="fas fa-lock"></i></span>
                                    <input id="password" type="password" class="form-control @error('password') is-invalid @enderror" name="password" required autocomplete="new-password" aria-describedby="passwordIcon">
                                    @error('password')
                                    <span class="invalid-feedback" role="alert">
                                        <strong>{{ $message }}</strong>
                                    </span>
                                    @enderror
                                </div>
                                <div class="row">
                                    <div class="col-auto mt-1">
                                        <div class="form-check">
                                            <input class="form-check-input" type="checkbox" name="remember" id="remember" {{ old('remember') ? 'checked' : '' }}>
                                            <label class="form-check-label" for="remember">
                                                {{ __('Recuérdame') }}
                                            </label>
                                        </div>
                                    </div>
                                    <div class="col-auto">
                                        @if (Route::has('password.request'))
                                        <a class="btn btn-link" href="{{ route('password.request') }}">
                                            {{ __('¿Olvidó su contraseña?') }}
                                        </a>
                                        @endif
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col d-grid">
                                        <button type="submit" class="btn btn-primary">
                                            {{ __('Iniciar sesión') }}
                                        </button>
                                    </div>
                                </div>
                                <div class="row text-center">
                                    <div class="col">
                                        <a href="/"><i class="fas fa-angle-left"></i> Regresar al inicio</a>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
@endsection

<script>
    function cambiar() {
        document.getElementById("photo-info").value = document.getElementById("photo").files[0].name;
    }
</script>