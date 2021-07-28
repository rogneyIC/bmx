<?php

namespace App\Http\Controllers;

use App\Models\Progress;
use App\Models\User;
use Illuminate\Http\Request;

class ProgressController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        return Progress::join('users', 'progress.user_id', '=', 'users.id')
            ->select('progress.*', 'users.*', 'progress.id as progress_id')
            ->where('progress.accepted', false)
            ->get();
    }

    /**
     * Display a listing of the resource.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function isCompetitor(Request $request)
    {
        return Progress::where('user_id', $request['id'])->get();
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        try {
            Progress::create([
                'user_id' => $request['user_id'],
                'point' => 0,
                'accepted' => false
            ]);
            User::where('id', $request['user_id'])->update(['competitor' => true]);
            $response['success'] = true;
        } catch (\Exception $e) {
            $response['error'] = $e->getMessage();
            $response['success'] = false;
        }
        return $response;
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request)
    {
        try {
            $data = [
                'trick' => $request['trick'],
                'link' => $request['link'],
                'accepted' => $request['accepted'],
            ];
            if ($request['point']) $data['point'] = $request['point'];
            Progress::where('user_id', $request['user_id'])->update($data);
            $response['success'] = true;
        } catch (\Exception $e) {
            $response['error'] = $e->getMessage();
            $response['success'] = false;
        }
        return $response;
    }

    /**
     * Get resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function getProgress(Request $request)
    {
        return Progress::where('user_id', $request['user_id'])->get();
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function delete(Request $request)
    {
        try {
            Progress::destroy($request['id']);
            Progress::truncate();
            $response['success'] = true;
        } catch (\Exception $e) {
            $response['error'] = $e->getMessage();
            $response['success'] = false;
        }
        return $response;
    }
}
