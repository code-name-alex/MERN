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

class Sensei extends Ninja{

constructor(nameInput, healthInput){
    super(nameInput, healthInput);
    this.speed = 10;
    this.strength = 10;
    this.wisdom = 10;
}

    speakWisdom(){
        console.log("I speaketh wisdom!");
    }

}

let bob = new Ninja("Bob", 100);
let jedi = new Sensei("Jedi", 100);

jedi.speakWisdom();