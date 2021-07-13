@extends('layouts.app')

@section('content')
<div class="root d-flex align-items-center justify-content-center login">
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-auto">
                <div class="card">
                    <div class="card-header">
                        <ul class="nav nav-tabs" id="myTab" role="tablist">
                            <li class="nav-item" role="presentation">
                                <button class="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab" aria-controls="home" aria-selected="true">Iniciar sesión</button>
                            </li>
                            <li class="nav-item" role="presentation">
                                <button class="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false">Registrarse</button>
                            </li>
                        </ul>
                    </div>
                    <div class="card-body p-4 p-lg-5">
                        <div class="tab-content" id="myTabContent">
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
                                </form>
                            </div>
                            <!-- Form Register -->
                            <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                                <form method="POST" action="{{ route('register') }}">
                                    <div class="row">
                                        <div class="col">
                                            @csrf
                                            <label for="name" class="form-label">{{ __('Nombre') }}</label>
                                            <div class="input-group mb-3">
                                                <span class="input-group-text" id="emailIcon"><i class="fas fa-id-card"></i></span>
                                                <input id="name" type="text" class="form-control @error('name') is-invalid @enderror" name="name" value="{{ old('name') }}" required autocomplete="name" autofocus>
                                                @error('name')
                                                <span class="invalid-feedback" role="alert">
                                                    <strong>{{ $message }}</strong>
                                                </span>
                                                @enderror
                                            </div>
                                            <label for="email" class="form-label">{{ __('Correo electrónico') }}</label>
                                            <div class="input-group mb-3">
                                                <span class="input-group-text" id="passwordIcon"><i class="fas fa-envelope"></i></span>
                                                <input id="email" type="email" class="form-control @error('email') is-invalid @enderror" name="email" value="{{ old('email') }}" required autocomplete="email">
                                                @error('email')
                                                <span class="invalid-feedback" role="alert">
                                                    <strong>{{ $message }}</strong>
                                                </span>
                                                @enderror
                                            </div>
                                            <label for="password" class="form-label">{{ __('Contraseña') }}</label>
                                            <div class="input-group mb-3">
                                                <span class="input-group-text" id="passwordIcon1"><i class="fas fa-lock"></i></span>
                                                <input id="password" type="password" class="form-control @error('password') is-invalid @enderror" name="password" required autocomplete="new-password">
                                                @error('password')
                                                <span class="invalid-feedback" role="alert">
                                                    <strong>{{ $message }}</strong>
                                                </span>
                                                @enderror
                                            </div>
                                            <label for="password-confirm" class="form-label">{{ __('Confirmar contraseña') }}</label>
                                            <div class="input-group mb-3">
                                                <span class="input-group-text" id="passwordIcon2"><i class="fas fa-lock"></i></span>
                                                <input id="password-confirm" type="password" class="form-control" name="password_confirmation" required autocomplete="new-password">
                                            </div>
                                        </div>
                                        <div class="col">
                                            <label for="password-confirm" class="form-label">{{ __('Región') }}</label>
                                            <div class="input-group mb-3">
                                                <span class="input-group-text"><i class="fas fa-globe-americas"></i></span>
                                                <select class="form-select" aria-label="Default select example">
                                                    <option selected>{{ __('Seleccione...') }}</option>
                                                    <option value="1">{{ __('Región 1') }}</option>
                                                    <option value="2">{{ __('Región 2') }}</option>
                                                    <option value="3">{{ __('Región 3') }}</option>
                                                    <option value="4">{{ __('Región 4') }}</option>
                                                    <option value="5">{{ __('Región 5') }}</option>
                                                    <option value="6">{{ __('Región 6') }}</option>
                                                    <option value="7">{{ __('Región 7') }}</option>
                                                    <option value="8">{{ __('Región 8') }}</option>
                                                    <option value="9">{{ __('Región 9') }}</option>
                                                    <option value="10">{{ __('Región 10') }}</option>
                                                    <option value="11">{{ __('Región 11') }}</option>
                                                    <option value="12">{{ __('Región 12') }}</option>
                                                    <option value="13">{{ __('Región 13') }}</option>
                                                    <option value="14">{{ __('Región 14') }}</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col d-grid">
                                            <button type="submit" class="btn btn-primary">
                                                {{ __('Registrarse') }}
                                            </button>
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
</div>
@endsection