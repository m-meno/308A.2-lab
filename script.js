
// const adventurer = {
//     name: "Robin",
//     health: 10,
//     inventory: ["sword", "potion", "artifact"]
//     }
    
    // From the adventurer object, we can access Robin’s inventory using a combination of dot notation and square bracket syntax. For example, we could find a sword at adventurer.inventory[0].
    // As an additional practice exercise, create a loop that logs each item in Robin’s inventory


//  Add a “companion” sub-object to “Leo” with the following properties:
// The companion’s name is “Frank.”
// The companion’s type is “Flea.”
// The companion has its own belongings, which includes a small hat and sunglasses.
    
    const adventurer = {
        name: "Robin",
        health: 10,
        inventory: ["sword", "potion", "artifact"],
        companion: {
            name: "Leo",
            type: "Cat",
            subCompanion: {
                name: "Frank",
                type: "Flea",
                belongings: ["small hat", "sunglasses"]
            }
        },
        roll (mod = 0) {
            const result = Math.floor(Math.random() * 20) + 1 + mod;
            console.log(`${this.name} rolled a ${result}.`);
        }
    }

    
//  adventurer.inventory.forEach(item => {
//     console.log(item)
//  })

 //adventurer.roll()

 class Character {
    static MAX_HEALTH = "100";
    constructor (name) {
        this.name = name;
        this.health = 100;
        this.inventory = [];
    }
    roll (mod = 0) {
        const result = Math.floor(Math.random() * 20) + 1 + mod;
        console.log(`${this.name} rolled a ${result}.`);
    }
 }

//  const robin = new Adventurer("Robin");
//     robin.inventory = ["sword", "potion", "artifact"];
//     robin.companion = new Companion("Leo");
//     robin.companion.type = "Cat";
//     robin.companion.companion = new Companion ("Frank");
//     robin.companion.companion.type = "Flea";
//     robin.companion.companion.inventory = ["small hat", "sunglasses"];

   
//robin.companion.roll();

class Adventurer extends Character {
    static ROLES = [`Fighter`, `Healer`, `Wizard`];
    constructor (name, role = `Fighter`) {
      super(name);
      // Adventurers have specialized roles.
      this.role = role;
      if (!Adventurer.ROLES.includes(this.role)){
        console.log(`Error - not a valid role`);
        this.role = "Fighter";                          
      // Every adventurer starts with a bed and 50 gold coins.
        } 
    this.inventory.push("bedroll", "50 gold coins");
    }
    // Adventurers have the ability to scout ahead of them.
    scout () {
      console.log(`${this.name} is scouting ahead...`);
      super.roll();
    }

    duel (opponent) {
        while (this.health > 50 && opponent.health > 50){
            let thisRoll = this.roll();
            let opponentRoll = opponent.roll();

            console.log(`${this.name} rolled ${thisRoll}!`);
            console.log(`${opponent.name} rolled ${opponentRoll}!`);

            if (thisRoll < opponentRoll){
              this.health -= 1;                                  //let newThisHealth = this.health - 1; WRONG
                console.log(`${this.name} lost 1 health. Their new health is ${this.health}`);
            } else if (opponentRoll < thisRoll) {
              opponent.health -= 1;                                                      //let newOppHealth = opponent.health - 1; WRONG
                console.log(`${opponent.name} lost 1 health. Their new health is ${opponent.health}.`);
            } else {
                console.log(`Tie - Roll again!`);
            }
            console.log(`Results of this round: ${this.name} rolled ${thisRoll} and their health is ${this.health}. ${opponent.name} rolled ${opponentRoll} and their health is ${opponent.health}.`);
            
            if (this.health < 50) {
                console.log(`${this.name}'s health fell below 50! ${opponent.name}, you are the winner of this duel!`);
            } else if (opponent.health < 50) {
                console.log(`${opponent.name}'s health fell below 50! ${this.name}, you have won this duel!`);
            }
        }      
     }
    
  }



//   Create an additional method, duel(), for the Adventurer class with the following functionality:
// Accept an Adventurer as a parameter.
// Use the roll() functionality to create opposing rolls for each adventurer.
// Subtract 1 from the adventurer with the lower roll.
// Log the results of this “round” of the duel, including the rolls and current health values.
// Repeat this process until one of the two adventurers reaches 50 health.
// Log the winner of the duel: the adventurer still above 50 health.

  class Companion extends Character {
    constructor(name, type) {
    super(name);
    //companions have types
    this.type = type;
    }
  }

  const robin = new Adventurer("Robin");
    robin.inventory = ["sword", "potion", "artifact"];
    robin.companion = new Companion("Leo");
    robin.companion.type = "Cat";
    robin.companion.companion = new Companion ("Frank");
    robin.companion.companion.type = "Flea";
    robin.companion.companion.inventory = ["small hat", "sunglasses"];


 
//   Using the static keyword:
// Add a static MAX_HEALTH property to the Character class, equal to 100.
// Add a static ROLES array to the Adventurer class, with the values “Fighter,” “Healer,” and “Wizard.” Feel free to add other roles, if you desire!
// Add a check to the constructor of the Adventurer class that ensures the given role matches one of these values.


class AdventurerFactory {  
    constructor (role) {
      this.role = role;
      this.adventurers = [];
    }
    generate (name) {
      const newAdventurer = new Adventurer(name, this.role);
      this.adventurers.push(newAdventurer);
    }
    findByIndex (index) {
      return this.adventurers[index];
    }
    findByName (name) {
      return this.adventurers.find((a) => a.name === name);
    }
  }
  
  const healers = new AdventurerFactory("Healer");
//   const robin = healers.generate("Robin");

