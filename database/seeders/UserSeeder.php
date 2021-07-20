<?php

namespace Database\Seeders;

use App\Models\User;
use App\Models\Role;
use Illuminate\Database\Seeder;
use Illuminate\Support\Str;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $user = new User();
        $user->user_name = 'Sergio';
        $user->email = 'sergio@gmail.com';
        $user->email_verified_at = now();
        $user->password = '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi'; // password
        $user->user_age = 21;
        $user->user_phone = '+11 563548 895';
        $user->user_region = 1;        
        $user->user_instagram = 'instagram-sergio';
        $user->user_facebook = 'instagram-sergio';
        $user->user_photo = '../default-avatar.png';
        $user->user_point = 0;
        $user->remember_token = Str::random(10);
        $user->save();
        $user->roles()->attach(Role::where('name', 'admin')->first());
    }
}
