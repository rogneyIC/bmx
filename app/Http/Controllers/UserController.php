<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;

class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return User::join('role_user', 'users.id', '=', 'role_user.user_id')
            ->where('role_user.role_id', 2)
            ->orderBy('user_region')
            ->get();
    }

    /**
     * Display a listing of the resource.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function filter(Request $request)
    {
        $user =  User::join('role_user', 'users.id', '=', 'role_user.user_id')
            ->where('role_user.role_id', 2);

        /* age */
        if ($request['age'][0]) {
            $user->where('user_age', '<', 13);
        } else if ($request['age'][1]) {
            $user->whereIn('user_age', [13, 14, 15, 16, 17]);
        } else if ($request['age'][2]) {
            $user->whereIn('user_age', [18, 19, 20, 21, 22, 23, 24]);
        } else if ($request['age'][3]) {
            $user->where('user_age', '>', 24);
        }


        /* region */
        if (count($request['region']) > 0) {
            $user->whereIn('user_region', $request['region']);
        }

        /* category */
        if (count($request['category']) > 0) {
            $user->whereIn('user_category', $request['category']);
        }

        $user->orderBy('user_region');
        return $user->get();
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\User  $user
     * @return \Illuminate\Http\Response
     */
    public function show(User $user)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\User  $user
     * @return \Illuminate\Http\Response
     */
    public function edit(User $user)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\User  $user
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, User $user)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\User  $user
     * @return \Illuminate\Http\Response
     */
    public function destroy(User $user)
    {
        //
    }
}
