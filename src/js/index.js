import ctrls from './ctrls/index';

const app = window.app = {};
app.controllers = {};

app.config = {
    "name": "PokeDex"
};

ctrls.forEach(ctrl => {
    app.controllers[ctrl.name] = ctrl;
    app.controllers[ctrl.name](app);
});
