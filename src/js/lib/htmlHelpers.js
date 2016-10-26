const htmlHelpers = {
    capitalise: function(string) {
        return string.charAt(0).toUpperCase() + string.slice(1, string.length);
    },

    renderPokemonCard: function(pokemon) {
        return `<div class="card-item">
                <img src="./assets/charmander.png" width="64px" height="64px" class="card-item-image" />
                <span class="card-item-title">${this.capitalise(pokemon.name)}</span>
                <p class="card-item-subtitle">${pokemon.type}</p>
            </div>`;
    },

    renderSelectedPokemon: function(pokemon) {
    },

    setContentTitle: function(title) {
        document.getElementById('content-title').innerText = title;
    }
};

export default htmlHelpers;
