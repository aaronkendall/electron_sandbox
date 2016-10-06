(function () {
'use strict';

function init(app) {
    console.log(app.config.name);
}

var ctrls = [init];

var app = window.app = {};
app.controllers = {};

app.config = {
    "name": "PokeDex"
};

ctrls.forEach(function (ctrl) {
    app.controllers[ctrl.name] = ctrl;
    app.controllers[ctrl.name](app);
});

}());
