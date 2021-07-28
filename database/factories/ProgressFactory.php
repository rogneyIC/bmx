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
            'trick' => "{'data':'truco1, truco2, truco3'}",
            'link' => "link_default",
            'point' => $this->faker->numberBetween(10, 100),
            'accepted' => true,
        ];
    }
}
