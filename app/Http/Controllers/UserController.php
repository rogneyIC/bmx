<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @param  \Illuminate\Http\Request $request
     * @return \Illuminate\Http\Response
     */
    public function list(Request $request)
    {
        return [User::select('users.id', 'users.name', 'users.age', 'users.region', DB::raw('SUM(progress.point) as point'))
            ->join('role_user', 'users.id', '=', 'role_user.user_id')
            ->join('progress', 'users.id', '=', 'progress.user_id')
            ->where('users.competitor', true)
            ->where('role_user.role_id', 2)
            ->where('progress.accepted', true)
            ->groupBy('users.id', 'users.name', 'users.age', 'users.region')
            ->orderBy('region')
            ->get(), count(User::where('id', $request['id'])->where('competitor', true)->get()) == 0 ? false : true];
    }

    /**
     * Display a listing of the resource.
     *
     * @param  \Illuminate\Http\Request $request
     * @return \Illuminate\Http\Response
     */
    public function getUser(Request $request)
    {
        return User::select('users.id', 'users.name', 'users.age', 'users.region', DB::raw('SUM(progress.point) as point'))
            ->join('role_user', 'users.id', '=', 'role_user.user_id')
            ->join('progress', 'users.id', '=', 'progress.user_id')
            ->where('role_user.role_id', 2)
            ->where('users.id', $request['id'])
            ->groupBy('users.id', 'users.name', 'users.age', 'users.region')
            ->get();
    }

    /**
     * Display a listing of the resource.
     *
     * @param  \Illuminate\Http\Request $request
     * @return \Illuminate\Http\Response
     */
    public function filter(Request $request)
    {
        $user =  User::select('users.id', 'users.name', 'users.age', 'users.region', DB::raw('SUM(progress.point) as point'))
            ->join('role_user', 'users.id', '=', 'role_user.user_id')
            ->join('progress', 'users.id', '=', 'progress.user_id')
            ->where('users.competitor', true)
            ->where('role_user.role_id', 2);
        switch ($request['option']) {
            case 'region':
                if (count($request['region']) > 0) $user->whereIn('region', $request['region']);
                break;
            case 'category':
                if (count($request['category']) > 0) {
                    foreach ($request['category'] as $key => $category) {
                        switch ($category) {
                            case 'iniciante':
                                $user->where('point', '<', 2000);
                                break;
                            case 'intermedio':
                                $key > 0 ? $user->orWhereBetween('point', [2000, 3999]) : $user->whereBetween('point', [2000, 3999]);
                                break;
                            case 'experto':
                                $key > 0 ? $user->orWhereBetween('point', [4000, 7999]) : $user->whereBetween('point', [4000, 7999]);
                                break;
                            case 'pro':
                                $key > 0 ? $user->orWhere('point', '>', 7999) : $user->where('point', '>', 7999);
                                break;
                        }
                    }
                }
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
        $user->groupBy('users.id', 'users.name', 'users.age', 'users.region')->orderBy('region');
        return $user->get();
    }

    /**
     * Display a isCompetitor.
     *
     * @param  \Illuminate\Http\Request $request
     * @return \Illuminate\Http\Response
     */
    public function isCompetitor(Request $request)
    {
        count(User::where('id', $request['id'])->where('competitor', true)->get()) == 0 ? $response['competitor'] = false : $response['competitor'] = true;
        return $response;
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request $request
     * @return \Illuminate\Http\Response
     */
    public function makeCompetitor(Request $request)
    {
        try {
            User::where('id', $request['id'])->update(['competitor' => true]);
            $response['success'] = true;
        } catch (\Exception $e) {
            $response['error'] = $e->getMessage();
            $response['success'] = false;
        }
        return $response;
    }
}
