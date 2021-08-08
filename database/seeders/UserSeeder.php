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
        $user->name = 'Sergio';
        $user->email = 'sergio@gmail.com';
        $user->email_verified_at = now();
        //$user->password = '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi'; // password
        $user->password = bcrypt('password');
        $user->age = 21;
        $user->phone = '+56 9 5209 6649';
        $user->region = 1;
        $user->instagram = 'instagram-sergio';
        $user->facebook = 'instagram-sergio';
        $user->photo = '../default-avatar.png';
        $user->category = 'iniciante';
        $user->competitor = false;
        $user->save();
        $user->roles()->attach(Role::where('name', 'admin')->first());
    }
}
