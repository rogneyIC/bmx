<?php

namespace Database\Seeders;

use App\Models\User;
use App\Models\Role;
use Illuminate\Database\Seeder;

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
        $user->name = 'Sergio Arroyo';
        $user->email = 'sergio@gmail.com';
        $user->password = bcrypt('sergio456#');
        $user->age = 21;
        $user->phone = '+56 9 5209 6649';
        $user->region = 1;
        $user->instagram = 'instagram-sergio';
        $user->facebook = 'facebook-sergio';
        $user->photo = '../default-avatar.png';
        $user->competitor = false;
        $user->save();
        $user->roles()->attach(Role::where('name', 'admin')->first());

        $user = new User();
        $user->name = 'Rogney Cañizares';
        $user->email = 'rogneycanizares@gmail.com';
        $user->password = bcrypt('RogneyinChrist*');
        $user->age = 21;
        $user->phone = '+595 991 769740';
        $user->region = 1;
        $user->instagram = 'rogneycanizares';
        $user->photo = 'rogneycanizares@gmail.com.png';
        $user->competitor = false;
        $user->save();
        $user->roles()->attach(Role::where('name', 'admin')->first());

        $user = new User();
        $user->name = 'Invitado';
        $user->email = 'invite@invite.invite';
        $user->password = bcrypt('invite');
        $user->age = 0;
        $user->phone = '';
        $user->region = 1;
        $user->photo = '../default-avatar.png';
        $user->competitor = false;
        $user->save();
        $user->roles()->attach(Role::where('name', 'user')->first());
    }
}
