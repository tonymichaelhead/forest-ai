<?php

namespace App;

class Player
{
   
    // Creating some properties (variables tied to an object)
    public $isAlive = true;
    public $name = 'Tonz';
    public $hp = 15;
    public $money = 5;
    public $items = array(
        'cellphone'
    );
    
    // Assigning the values
    public function __construct($name) {
       $this->name = $name;
    }
    
    // Creating a method (function tied to an object)
    public function greet() {
        return "Hello, my name is " . $this->firstname . " " . $this->lastname . ". Nice to meet you! :-)";
    }
    

}

