import ctrls from './ctrls/index';

const app = window.app = {};
app.controllers = {};

app.config = {
    "name": "PokeDex",
    "baseUrl": "http://pokeapi.co/api/v2/"
};

ctrls.forEach(ctrl => {
    app.controllers[ctrl.name] = ctrl;
    app.controllers[ctrl.name](app);
});
