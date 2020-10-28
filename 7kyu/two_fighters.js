// Create a function that returns the name of the winner in a fight between two fighters.

// Each fighter takes turns attacking the other and whoever kills the other first is victorious. Death is defined as having health <= 0.


function Fighter(name, health, damagePerAttack) {
    this.name = name;
    this.health = health;
    this.damagePerAttack = damagePerAttack;
    this.toString = function() { return this.name; }
}


function declareWinner(fighter1, fighter2, firstAttacker) {
    if (firstAttacker == fighter1.name) {
        for (let x = 0; ; x++) {
            if (x % 2 == 0) {
                fighter2.health -= fighter1.damagePerAttack;
                if (fighter2.health <= 0) {
                    return fighter1.name;
                }
            } else {
                fighter1.health -= fighter2.damagePerAttack;
                if (fighter1.health <= 0) {
                    return fighter2.name;
                }
            }
        }
    } else {
        for (let x = 0; ; x++) {
            if (x % 2 == 0) {
                fighter1.health -= fighter2.damagePerAttack;
                if (fighter1.health <= 0) {
                    return fighter2.name;
                }
            } else {
                fighter2.health -= fighter1.damagePerAttack;
                if (fighter2.health <= 0) {
                    return fighter1.name;
                }
            }
        }
    }
}


console.log(declareWinner(new Fighter("Lew", 10, 2), new Fighter("Harry", 5, 4), "Lew")); //, "Lew"