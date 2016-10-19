// Namespace shit
import {
    renderPokemonCard,
    renderSelectedPokemon,
    setContentTitle
} from '../lib/htmlHelpers';

export default class Pokedex {
    constructor(app) {
        this.pageCount = 1;
        this.increasePageCount = this.increasePageCount.bind(this);

        const button = document.querySelector('.search-button');
        button.addEventListener('click', this.requestPokemon.bind(this));
        setContentTitle(app.config.title);
    };

    insertPokemonToHtml(e) {
        const results = JSON.parse(e.currentTarget.response);
        let html = '';
        results.results.forEach((pokemon) => {
            html += renderPokemonCard(pokemon);
        });
        document.querySelector('#results').innerHTML = html;
    };

    increasePageCount() {
        this.pageCount++;
    };

    requestPokemon() {
        const req = new XMLHttpRequest();
        req.addEventListener('load', (e) => this.insertPokemonToHtml(e));
        req.open("GET", app.config.baseUrl + 'pokemon');
        req.send();
    };
};
