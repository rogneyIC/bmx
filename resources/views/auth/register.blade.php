@extends('layouts.app')

@section('content')
<div class="root d-flex align-items-center justify-content-center login">
    <div class="container">
        <div class="row justify-content-center mb-0">
            <div class="col-auto">
                <div class="card">
                    <div class="card-header">{{ __('Registrarse') }}</div>
                    <div class="card-body">
                        <form method="POST" action="{{ route('register') }}">
                            <div class="row">
                                <div class="col">
                                    @csrf
                                    <!-- Name -->
                                    <label for="user_name" class="form-label">{{ __('Nombre') }}</label>
                                    <div class="input-group mb-3">
                                        <span class="input-group-text" id="nameIcon"><i class="fas fa-id-card"></i></span>
                                        <input id="user_name" type="text" class="form-control @error('user_name') is-invalid @enderror" name="user_name" value="{{ old('user_name') }}" required autocomplete="name" autofocus>
                                        @error('user_name')
                                        <span class="invalid-feedback" role="alert">
                                            <strong>{{ $message }}</strong>
                                        </span>
                                        @enderror
                                    </div>
                                </div>
                                <div class="col">
                                    <!-- Email -->
                                    <label for="email" class="form-label">{{ __('Correo electrónico') }}</label>
                                    <div class="input-group mb-3">
                                        <span class="input-group-text"><i class="fas fa-envelope"></i></span>
                                        <input id="email" type="email" class="form-control @error('email') is-invalid @enderror" name="email" value="{{ old('email') }}" required autocomplete="email" autofocus>
                                        @error('email')
                                        <span class="invalid-feedback" role="alert">
                                            <strong>{{ $message }}</strong>
                                        </span>
                                        @enderror
                                    </div>
                                </div>
                                <div class="col-2">
                                    <!-- Age -->
                                    <label for="user_age" class="form-label">{{ __('Edad') }}</label>
                                    <div class="input-group mb-3">
                                        <span class="input-group-text"><i class="fas fa-id-card"></i></span>
                                        <input id="user_age" type="number" class="form-control @error('user_age') is-invalid @enderror" name="user_age" value="{{ old('user_age') }}" required autocomplete="number" autofocus>
                                        @error('user_age')
                                        <span class="invalid-feedback" role="alert">
                                            <strong>{{ $message }}</strong>
                                        </span>
                                        @enderror
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col">
                                    <!-- Photo -->
                                    <label class="form-label">{{ __('Foto') }}</label>
                                    <div class="input-group mb-3">
                                        <label for="user_photo" class="input-group-text" id="fileIcon"><i class="fas fa-cloud-upload-alt"></i></label>
                                        <input id="user_photo" name="user_photo" type="file" accept=".png, .jpg, .jpeg" onchange="cambiar()" style="display: none;" />
                                        <input id="user_photo-info" type="text" class="form-control" name="user_photo-info" disabled>
                                    </div>
                                </div>
                                <div class="col">
                                    <!-- Region -->
                                    <label for="user_region" class="form-label">{{ __('Región') }}</label>
                                    <div class="input-group mb-3">
                                        <span class="input-group-text"><i class="fas fa-globe-americas"></i></span>
                                        <select class="form-select" id="user_region" name="user_region">
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
                                <div class="col">
                                    <!-- Instagram -->
                                    <label for="user_instagram" class="form-label">{{ __('Usuario de instagram') }}</label>
                                    <div class="input-group mb-3">
                                        <span class="input-group-text"><i class="fab fa-instagram-square"></i></span>
                                        <input id="user_instagram" type="text" class="form-control @error('user_instagram') is-invalid @enderror" name="user_instagram" value="{{ old('user_instagram') }}" required autocomplete="name">
                                        @error('user_instagram')
                                        <span class="invalid-feedback" role="alert">
                                            <strong>{{ $message }}</strong>
                                        </span>
                                        @enderror
                                    </div>
                                </div>
                                <div class="col">
                                    <!-- Facebook -->
                                    <label for="user_facebook" class="form-label">{{ __('Usuario de facebook') }}</label>
                                    <div class="input-group mb-3">
                                        <span class="input-group-text"><i class="fab fa-facebook"></i></span>
                                        <input id="user_facebook" type="text" class="form-control @error('user_facebook') is-invalid @enderror" name="user_facebook" value="{{ old('user_facebook') }}" required autocomplete="name">
                                        @error('user_facebook')
                                        <span class="invalid-feedback" role="alert">
                                            <strong>{{ $message }}</strong>
                                        </span>
                                        @enderror
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col">
                                    <!-- Password -->
                                    <label for="password" class="form-label">{{ __('Contraseña') }}</label>
                                    <div class="input-group mb-3">
                                        <span class="input-group-text"><i class="fas fa-lock"></i></span>
                                        <input id="password" type="password" class="form-control @error('password') is-invalid @enderror" name="password" required autocomplete="new-password">
                                        @error('password')
                                        <span class="invalid-feedback" role="alert">
                                            <strong>{{ $message }}</strong>
                                        </span>
                                        @enderror
                                    </div>
                                </div>
                                <div class="col">
                                    <!-- Confirm Password -->
                                    <label for="password-confirm" class="form-label">{{ __('Confirmar contraseña') }}</label>
                                    <div class="input-group mb-3">
                                        <span class="input-group-text"><i class="fas fa-lock"></i></span>
                                        <input id="password-confirm" type="password" class="form-control" name="password_confirmation" required autocomplete="new-password">
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
@endsection