/* Create a function that returns the name of the winner in a fight between two fighters.

Each fighter takes turns attacking the other and whoever kills the other first is victorious. Death is defined as having health <= 0.

Each fighter will be a Fighter object/instance. See the Fighter class below in your chosen language.

Both health and damagePerAttack (damage_per_attack for python) will be integers larger than 0. You can mutate the Fighter objects.

Your function also receives a third argument, a string, with the name of the fighter that attacks first. /*

/*
P: fighter 1, fighter 2, first attacker
R: The fighter who wins
E: As above
Ps: 
- intialise the fighter 1 and fighter 2 classes
- declare the first attacker
- use a while loop to take in turns to attack until health <= 0
- return the name of the winner
*/

// initialise 2 fighters
function Fighter(name, health, damagePerAttack) {
    this.name = name;
    this.health = health;
    this.damagePerAttack = damagePerAttack;
    this.toString = function() { return this.name; }
}

const fighter1 = new Fighter("Lew", 10, 2);
const fighter2 = new Fighter("Harry", 5, 4)

function declareWinner(fighter1, fighter2, firstAttacker) {
// Decide the first attacker: either use the parameter or randomize if it's undefined
let attacker = firstAttacker === fighter1.name ? fighter1 : 
               firstAttacker === fighter2.name ? fighter2 : 
               Math.random() < 0.5 ? fighter1 : fighter2;

let defender = attacker === fighter1 ? fighter2 : fighter1;

// Fight loop
while (fighter1.health > 0 && fighter2.health > 0) {
    defender.health -= attacker.damagePerAttack;

    if (defender.health <= 0) {
        return attacker.name; // Winner
    }

    // Swap roles
    [attacker, defender] = [defender, attacker];
}
}
