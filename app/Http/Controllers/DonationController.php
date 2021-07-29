<?php

namespace App\Http\Controllers;

use App\Models\Donation;
use Illuminate\Http\Request;

class DonationController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function index(Request  $request)
    {
        return Donation::join('users', 'donations.user_id', '=', 'users.id')
            ->select('donations.*', 'users.*', 'donations.id as donation_id')
            ->where('donations.accepted', $request->accepted ? true : false)
            ->get();
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
            Donation::create([
                'user_id' => $request['user_id'],
                'donation' => $request['donation'],
                'detail' => $request['detail'],
                'message_optional' => $request['message'],
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
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request)
    {
        try {
            $data = [
                'donation' => $request['donation'],
                'detail' => $request['detail'],
                'message_optional' => $request['message'],
                'destiny' => $request['destiny'],
                'accumulated_return' => $request['accumulated'],
                'accepted' => true,
            ];
            Donation::where('id', $request['id'])->update($data);
            $response['success'] = true;
        } catch (\Exception $e) {
            $response['error'] = $e->getMessage();
            $response['success'] = false;
        }
        return $response;
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
            Donation::where('id', $request['id'])->delete();
            $response['success'] = true;
        } catch (\Exception $e) {
            $response['error'] = $e->getMessage();
            $response['success'] = false;
        }
        return $response;
    }
}
