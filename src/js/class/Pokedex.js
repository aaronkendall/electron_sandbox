import htmlHelpers from '../lib/htmlHelpers';
import Pokemon from './Pokemon';
import Menu from './Menu';

export default class Pokedex {
    constructor(app) {
        new Pokemon(app);
        new Menu(app);
    };
};
