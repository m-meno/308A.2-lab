
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
            leoCompanion: {
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
    constructor (name) {
        this.name = name;
        this.health = 100;
        this.inventory = [];
    }
    roll (mod = 0) {
        const result = Math.floor(Math.random() * 20) + 1 + mod;
        console.log(`${this.name} rolled a ${result}.`);
    }
    static MAX_HEALTH = "100";
 }

 const robin = new Adventurer("Robin");
    robin.inventory = ["sword", "potion", "artifact"];
    robin.companion = new Companion("Leo");
    robin.companion.type = "Cat";
    robin.companion.companion = new Companion ("Frank");
    robin.companion.companion.type = "Flea";
    robin.companion.companion.inventory = ["small hat", "sunglasses"];

   
robin.companion.roll();

class Adventurer extends Character {
    constructor (name, role) {
      super(name);
      // Adventurers have specialized roles.
      this.role = role;
      // Every adventurer starts with a bed and 50 gold coins.
      this.inventory.push("bedroll", "50 gold coins");
    }
    // Adventurers have the ability to scout ahead of them.
    scout () {
      console.log(`${this.name} is scouting ahead...`);
      super.roll();
    }
    static ROLES = [`Fighter`, `Healer`, `Wizard`];
    
  }

  class Companion extends Character {
    constructor(name, type) {
    super(name);
    //companions have types
    this.type = type;
    }
  }

//   Using the static keyword:
// Add a static MAX_HEALTH property to the Character class, equal to 100.
// Add a static ROLES array to the Adventurer class, with the values “Fighter,” “Healer,” and “Wizard.” Feel free to add other roles, if you desire!
// Add a check to the constructor of the Adventurer class that ensures the given role matches one of these values.