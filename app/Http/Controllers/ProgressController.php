<?php

namespace App\Http\Controllers;

use App\Models\Progress;
use Illuminate\Http\Request;

class ProgressController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function list()
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
    public function progressWait(Request $request)
    {
        count(Progress::where('user_id', $request['id'])
            ->where('progress.accepted', false)
            ->get()) > 0 ? $response['wait'] = true : $response['wait'] = false;
        return $response;
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
                'street' => $request['street'],
                'park' => $request['park'],
                'dirt' => $request['dirt'],
                'link_street' => $request['link_street'],
                'link_park' => $request['link_park'],
                'link_dirt' => $request['link_dirt'],
                'point' => 0,
                'accepted' => false
            ]);
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
     * @param  \Illuminate\Http\Request $request
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request)
    {
        try {
            Progress::where('id', $request['id'])
                ->update([
                    'street' => $request['street'],
                    'park' => $request['park'],
                    'dirt' => $request['dirt'],
                    'link_street' => $request['link_street'],
                    'link_park' => $request['link_park'],
                    'link_dirt' => $request['link_dirt'],
                    'point' => $request['point'],
                    'accepted' => true,
                ]);
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
            Progress::where('id', $request['id'])->delete();
            $response['success'] = true;
        } catch (\Exception $e) {
            $response['error'] = $e->getMessage();
            $response['success'] = false;
        }
        return $response;
    }
}
