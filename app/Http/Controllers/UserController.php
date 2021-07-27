<?php

namespace App\Http\Controllers;

use App\Models\Progress;
use App\Models\User;
use Illuminate\Http\Request;

class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function index(Request  $request)
    {
        return [User::join('role_user', 'users.id', '=', 'role_user.user_id')
            ->where('role_user.role_id', 2)
            ->orderBy('region')
            ->get(), count(Progress::where('user_id', $request['id'])->get()) == 0 ? false : true];
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

        switch ($request['option']) {
            case 'region':
                $user->whereIn('region', $request['region']);
                break;
            case 'category':
                $user->whereIn('category', $request['category']);
                break;
            case 'age':
                switch ($request['age']) {
                    case 1:
                        $user->where('age', '<', 13);
                        break;
                    case 2:
                        $user->whereIn('age', [13, 14, 15, 16, 17]);
                        break;
                    case 3:
                        $user->whereIn('age', [18, 19, 20, 21, 22, 23, 24]);
                        break;
                    case 4:
                        $user->where('age', '>', 24);
                        break;
                }
                break;
        }

        /* age 
        if ($request['age'][0]) {
            $user->where('age', '<', 13);
        } else if ($request['age'][1]) {
            $user->whereIn('age', [13, 14, 15, 16, 17]);
        } else if ($request['age'][2]) {
            $user->whereIn('age', [18, 19, 20, 21, 22, 23, 24]);
        } else if ($request['age'][3]) {
            $user->where('age', '>', 24);
        }*/


        /* region 
        if (count($request['region']) > 0) {
            $user->whereIn('region', $request['region']);
        }*/

        /* category 
        if (count($request['category']) > 0) {
            $user->whereIn('category', $request['category']);
        }*/

        $user->orderBy('region');
        return $user->get();
    }
}
