class House {
    constructor(occupants, rooms, roof, windows) {
        this.occupants = [occupants];
        this.rooms = rooms;
        this.roof = roof;
        this.windows = windows;
        this.isBuilt = true;
    }
    shelter() {
        return "I provide warmth for my " + this.occupants + " occupants";
    }
    createBill(billType, amount) {
        return `Pay your ${billType} that amounts to £${amount}, pay up`;
    }
    fallDown() {
        this.occupants = 0;
        this.rooms = 0;
        this.roof = 0;
        this.windows = 0;
        this.isBuilt = false;
        return "Your house has fallen down! You now have " + this.occupants + " occupants. You also have " + this.rooms + " Rooms and " + this.windows + " windows. Your door is also a ";
    }
    reBuild(occupants, rooms, roof, windows) {
        if (this.isBuilt) {
            return "Your house is okay"
        } else {
            this.occupants = occupants;
            this.rooms = rooms;
            this.roof = roof;
            this.windows = windows;
            this.isBuilt = true;
            return `Your house has magically been rebuilt!`
        }
    }
    addName(newName) {
        this.occupants.push(newName);
        



    }

}
const myHouse = new House("johnny, louis", 4, "flat", 1700);
console.log(myHouse.occupants)
console.log(myHouse.shelter());
console.log(myHouse.createBill("gas", 50));
console.log(myHouse.fallDown());
console.log(myHouse.windows);
console.log(myHouse.reBuild(5, 9, "round", 1222))
console.log(myHouse.windows);
console.log(myHouse.addName("stephen"));

// Change your code so that occupants is an array of names. 
// Add two methods:
    // - One adds a new housemate to the house
    // - Another removes a housemate from the house
// EXTENSION:
    // Change the array to be an array of Person objects


