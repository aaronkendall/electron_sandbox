import {
    renderPokemonCard,
    renderSelectedPokemon,
    setContentTitle
} from '../lib/htmlHelpers';

export default class Pokedex {
    constructor(app) {
        console.log(renderPokemonCard({}));
        this.pageCount = 1;
        this.loadPokemon = this.loadPokemon.bind(this);

        const button = document.getElementsByClassName('search-button');
        button[0].addEventListener('click', this.loadPokemon);
        setContentTitle(app.config.title);
    };

    loadPokemon() {
        this.pageCount++;
        console.log(this.pageCount);
    };
};
