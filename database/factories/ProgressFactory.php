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
            'link_street' => 'https://link_street.com',
            'link_park' => 'https://link_park.com',
            'link_dirt' => 'https://link_dirt.com',
            'point' => $this->faker->numberBetween(40, 8000),
            'accepted' => true,
        ];
    }
}
