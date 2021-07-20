<?php

namespace Database\Factories;

use App\Models\Donation;
use Illuminate\Database\Eloquent\Factories\Factory;

class DonationFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Donation::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'donation' => $this->faker->sentence(3),
            'detail' => $this->faker->sentence(5),
            'message_optional' => $this->faker->sentence(7),
            'destiny' => 'Region ' . $this->faker->numberBetween(1, 16),
            'accumulated_return' => $this->faker->numerify()
        ];
    }
}
