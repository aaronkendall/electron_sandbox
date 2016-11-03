import typeLookup from './typeLookup';

const htmlHelpers = {
    capitalise: function(string) {
        return string.charAt(0).toUpperCase() + string.slice(1, string.length);
    },

    renderPokemonCard: function(pokemon) {
        const type = typeLookup[pokemon.name].type;
        return `<div class="card-item ${type}">
                <img src="./assets/pokemon/${pokemon.name}.png" class="card-item-image" />
                <span class="card-item-title">${this.capitalise(pokemon.name)}</span>
                <p class="card-item-subtitle">${type}</p>
            </div>`;
    },

    renderSelectedPokemon: function(pokemon) {
    },

    setContentTitle: function(title) {
        document.getElementById('content-title').innerText = title;
    }
};

export default htmlHelpers;
