import { renderPokemonCard, renderSelectedPokemon } from '../lib/htmlHelpers';

export default class Pokedex {
    constructor(app) {
        console.log("Hello World", app.config.baseUrl, renderPokemonCard({}));
        this.pageCount = 1;
        this.pageCount = this.pageCount.bind(this);
    };

    loadPokemon() {
        this.pageCount++;
    };
};
