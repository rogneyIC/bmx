@extends('layouts.app')

@section('content')
@if (Auth::user()->hasRole('admin'))
<div id="main" class="wrapper" user="{{Auth::user()->user_name}}" role="admin"></div>
@else
<div id="main" class="wrapper" user="{{Auth::user()->user_name}}" role="user"></div>
@endif
@endsection