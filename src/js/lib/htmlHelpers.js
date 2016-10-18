function renderPokemonCard(pokemon) {
    return(
        "<div class='card-item'>" +
            "<img src=" + pokemon.image + "'width=64px' height='64px' />" +
            "<span class='card-item-title'>" + pokemon.name + "</span>" +
            "<p class='card-item-subtitle'>" + pokemon.type + "</p>" +
        "</div>"
    );
};

function renderSelectedPokemon(pokemon) {
};

function setContentTitle(title) {
    document.getElementById('content-title').innerText = title;
};

export {
    renderPokemonCard,
    renderSelectedPokemon,
    setContentTitle
};
