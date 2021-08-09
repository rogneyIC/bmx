<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\User;
use App\Models\Role;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        $this->call(RoleTableSeeder::class);
        $this->call(UserSeeder::class);
        User::factory(160)
            ->hasAttached(Role::where('name', 'user')->first())
            //->has(Donation::factory(1))
            //->has(Progress::factory(1))
            ->create();
    }
}
