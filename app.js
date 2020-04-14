// A template to describe an object aka a type of object
class Animal {

    // The method that runs when you type "new"
    constructor(name, dob) {
        this.isAlive = true;
        this.name = name;
        this.dob = dob;
    }

    breathe() {
        return "In.......and out.";
    }
 
    sleep() {
        return "zzzzZZ";
    }

    eat(food) {
        return "I just ate some " + food;
        
    }
}

// instantiation - making an Animal object / an instance of the class Animal
const ollie = new Animal("ollie", "12/11/64");
const ellen = new Animal("ellen", "02/01/97");

console.log(ollie.dob);
console.log(ellen.name);
console.log(ollie.breathe());
console.log(ollie.sleep());
console.log(ollie.eat("bacon"));


