import htmlHelpers from '../lib/htmlHelpers';
import Pokemon from './Pokemon';

export default class Pokedex {
    constructor(app) {
        new Pokemon(app);
        new Menu(app);
    };
};
