<?php

namespace Database\Factories;

use App\Models\Progress;
use Illuminate\Database\Eloquent\Factories\Factory;

class ProgressFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Progress::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'street' => 'truco1',
            'park' => 'truco2',
            'dirt' => 'truco3',
            'link' => 'https://link_truco.com',
            'point' => $this->faker->numberBetween(40, 8000),
            'accepted' => true,
        ];
    }
}
