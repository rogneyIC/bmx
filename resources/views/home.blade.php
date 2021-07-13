@extends('layouts.app')

@section('content')
@if (Auth::user()->hasRole('admin'))
<div id="main" class="wrapper" user="{{Auth::user()->name}}" role="admin"></div>
@else
<div id="main" class="wrapper" user="{{Auth::user()->name}}" role="user"></div>
@endif
@endsection