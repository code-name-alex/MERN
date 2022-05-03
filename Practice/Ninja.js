class Ninja{

    constructor(nameInput, healthInput){

    this.name = nameInput;
    this.health = healthInput;
    this.speed = 3;
    this.strength = 3;
    }

    sayName(){
        let name = this.name;
        console.log(name);
    }

    showStats(){
        let stats = `Name: ${this.name}, Health: ${this.health}, Speed: ${this.speed}, Strength: ${this.strength}`;
        console.log(stats);
    }

    drinkSake(){
        console.log("The ninja drank some sake!")
        this.health += 10;
    }

}

let bob = new Ninja("Bob", 100);
bob.showStats();