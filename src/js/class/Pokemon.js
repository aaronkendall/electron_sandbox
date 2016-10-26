import htmlHelpers from '../lib/htmlHelpers';
import request from '../lib/request';

export default class Pokemon {
    constructor(app) {
        this.pageCount = 1;

        this.requestPokemon();
        htmlHelpers.setContentTitle(app.config.title);
    };

    insertPokemonToHtml(data) {
        let html = '';
        data.results.forEach((pokemon) => {
            html += htmlHelpers.renderPokemonCard(pokemon);
        });
        document.querySelector('#results').innerHTML = html;
    };

    increasePageCount() {
        this.pageCount++;
    };

    // async requestPokemon() {
    //     try {
    //         let url = app.config.baseUrl + 'pokemon';
    //         let response = await request.get(url);
    //         insertPokemonToHtml(JSON.parse(response));
    //     }
    //     catch (rejection) {
    //         console.log("request failed lol" + rejection);
    //     }
    // };

    requestPokemon() {
        let url = app.config.baseUrl + 'pokemon';
        request.get(url)
            .then((response) => {
                this.insertPokemonToHtml(JSON.parse(response));
                this.increasePageCount();
            })
            .catch((error) => {
                console.log("request failed", error);
            })
    };
};
