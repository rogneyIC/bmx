@extends('layouts.app')

@section('content')
@if (Auth::user()->hasRole('admin'))
<div id="main" class="wrapper" data-user="{{ Auth::user() }}" data-role="admin"></div>
@else
<div id="main" class="wrapper" data-user="{{ Auth::user() }}" data-role="user"></div>
@endif
@endsection