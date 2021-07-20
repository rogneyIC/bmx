@extends('layouts.app')

@section('content')

@php
if(!isset($data))
$data = "";
@endphp

@if (Auth::user()->hasRole('admin'))
<div id="main" class="wrapper" data-user="{{ Auth::user() }}" data-role="admin" data-donation="{{$data}}"></div>
@else
<div id="main" class="wrapper" data-user="{{ Auth::user() }}" data-role="user" data-donation="{{$data}}"></div>
@endif
@endsection