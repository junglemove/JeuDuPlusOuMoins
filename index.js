/**
 * Created by Administrateur on 13/12/2016.
 */
const Jeu = require('./Jeu.js');    // si c'est un module que l'on a créé, indiquer l'arboressence (../ ou ./ etc.)
                                    // les module node.js ou importés par npm sont automatiquement proposés par ctrl+space
const jeu = new Jeu({
    min: 0,
    max: 100
});

jeu.jouer();