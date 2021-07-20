<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\User;
use App\Models\Role;
use App\Models\Donation;

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
        User::factory(10)
            ->hasAttached(Role::where('name', 'user')->first())
            ->has(Donation::factory(3))
            ->create();
    }
}
