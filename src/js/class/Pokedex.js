import { renderPokemonCard, renderSelectedPokemon } from '../lib/htmlHelpers';

export default class Pokedex {
    constructor(app) {
        console.log("Hello World", app.config.baseUrl, renderPokemonCard({}));
        this.pageCount = 1;
        this.loadPokemon = this.loadPokemon.bind(this);

        const button = document.getElementsByClassName('search-button');
        button[0].addEventListener('click', this.loadPokemon);
    };

    loadPokemon() {
        this.pageCount++;
        console.log(this.pageCount);
    };
};
