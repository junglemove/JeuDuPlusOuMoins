/**
 * Created by Administrateur on 13/12/2016.
 */
/*NodeJS requires*/
const readline = require('readline'); //penser à ordonner les require
/*specific requires*/
const random = require('./Random.js');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


class Jeu {
    constructor(options = {}) {
        this.min = options.min || 0;
        this.max = options.max || 100;
        this.entierAlea = random.getRandomIntInclusive(this.min, this.max);
        this.essais = [];
    }

    jouer() {
        if (this.essais.length) {
            console.log('Vous avez déjà joué : ' + this.essais.join(', '))
        }

        rl.question(`Saisir un entier entre ${this.min} et ${this.max} : `, answer => {

            const entierSaisi = Number.parseInt(answer);

            if (Number.isNaN(entierSaisi)) {
                console.log('Il faut saisir un entier');
                return this.jouer();
            }

            this.essais.push(entierSaisi);

            if (entierSaisi < this.entierAlea) {
                console.log('Trop petit');
                return this.jouer();
            }

            if (entierSaisi > this.entierAlea) {
                console.log('Trop grand');
                return this.jouer();
            }

            console.log('Gagné !!!!');
            rl.close();
        });

    }
}

module.exports = Jeu;

