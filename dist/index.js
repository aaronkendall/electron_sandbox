(function () {
'use strict';

var htmlHelpers = {
    capitalise: function capitalise(string) {
        return string.charAt(0).toUpperCase() + string.slice(1, string.length);
    },

    renderPokemonCard: function renderPokemonCard(pokemon) {
        return '<div class="card-item">\n                <img src="./assets/charmander.png" width="64px" height="64px" class="card-item-image" />\n                <span class="card-item-title">' + this.capitalise(pokemon.name) + '</span>\n                <p class="card-item-subtitle">' + pokemon.type + '</p>\n            </div>';
    },

    renderSelectedPokemon: function renderSelectedPokemon(pokemon) {},

    setContentTitle: function setContentTitle(title) {
        document.getElementById('content-title').innerText = title;
    }
};

var request = {
    get: function get(url) {
        var request = new Promise(function (resolve, reject) {
            var req = new XMLHttpRequest();

            req.open("GET", url);
            req.send();

            req.onload = function () {
                if (this.status >= 200 && this.status < 300) {
                    resolve(this.response);
                } else {
                    reject(this.statusText);
                }
            };

            req.onerror = function () {
                reject(this.statusText);
            };
        });

        return request;
    }
};

var asyncGenerator = function () {
  function AwaitValue(value) {
    this.value = value;
  }

  function AsyncGenerator(gen) {
    var front, back;

    function send(key, arg) {
      return new Promise(function (resolve, reject) {
        var request = {
          key: key,
          arg: arg,
          resolve: resolve,
          reject: reject,
          next: null
        };

        if (back) {
          back = back.next = request;
        } else {
          front = back = request;
          resume(key, arg);
        }
      });
    }

    function resume(key, arg) {
      try {
        var result = gen[key](arg);
        var value = result.value;

        if (value instanceof AwaitValue) {
          Promise.resolve(value.value).then(function (arg) {
            resume("next", arg);
          }, function (arg) {
            resume("throw", arg);
          });
        } else {
          settle(result.done ? "return" : "normal", result.value);
        }
      } catch (err) {
        settle("throw", err);
      }
    }

    function settle(type, value) {
      switch (type) {
        case "return":
          front.resolve({
            value: value,
            done: true
          });
          break;

        case "throw":
          front.reject(value);
          break;

        default:
          front.resolve({
            value: value,
            done: false
          });
          break;
      }

      front = front.next;

      if (front) {
        resume(front.key, front.arg);
      } else {
        back = null;
      }
    }

    this._invoke = send;

    if (typeof gen.return !== "function") {
      this.return = undefined;
    }
  }

  if (typeof Symbol === "function" && Symbol.asyncIterator) {
    AsyncGenerator.prototype[Symbol.asyncIterator] = function () {
      return this;
    };
  }

  AsyncGenerator.prototype.next = function (arg) {
    return this._invoke("next", arg);
  };

  AsyncGenerator.prototype.throw = function (arg) {
    return this._invoke("throw", arg);
  };

  AsyncGenerator.prototype.return = function (arg) {
    return this._invoke("return", arg);
  };

  return {
    wrap: function (fn) {
      return function () {
        return new AsyncGenerator(fn.apply(this, arguments));
      };
    },
    await: function (value) {
      return new AwaitValue(value);
    }
  };
}();





var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();







var get$1 = function get$1(object, property, receiver) {
  if (object === null) object = Function.prototype;
  var desc = Object.getOwnPropertyDescriptor(object, property);

  if (desc === undefined) {
    var parent = Object.getPrototypeOf(object);

    if (parent === null) {
      return undefined;
    } else {
      return get$1(parent, property, receiver);
    }
  } else if ("value" in desc) {
    return desc.value;
  } else {
    var getter = desc.get;

    if (getter === undefined) {
      return undefined;
    }

    return getter.call(receiver);
  }
};

















var set = function set(object, property, value, receiver) {
  var desc = Object.getOwnPropertyDescriptor(object, property);

  if (desc === undefined) {
    var parent = Object.getPrototypeOf(object);

    if (parent !== null) {
      set(parent, property, value, receiver);
    }
  } else if ("value" in desc && desc.writable) {
    desc.value = value;
  } else {
    var setter = desc.set;

    if (setter !== undefined) {
      setter.call(receiver, value);
    }
  }

  return value;
};

var Pokemon = function () {
    function Pokemon(app) {
        classCallCheck(this, Pokemon);

        this.pageCount = 1;

        this.requestPokemon();
        htmlHelpers.setContentTitle(app.config.title);
    }

    createClass(Pokemon, [{
        key: 'insertPokemonToHtml',
        value: function insertPokemonToHtml(data) {
            var html = '';
            data.results.forEach(function (pokemon) {
                html += htmlHelpers.renderPokemonCard(pokemon);
            });
            document.querySelector('#results').innerHTML = html;
        }
    }, {
        key: 'increasePageCount',
        value: function increasePageCount() {
            this.pageCount++;
        }
    }, {
        key: 'requestPokemon',


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

        value: function requestPokemon() {
            var _this = this;

            var url = app.config.baseUrl + 'pokemon';
            request.get(url).then(function (response) {
                _this.insertPokemonToHtml(JSON.parse(response));
                _this.increasePageCount();
            }).catch(function (error) {
                console.log("request failed", error);
            });
        }
    }]);
    return Pokemon;
}();

var Pokedex = function Pokedex(app) {
    classCallCheck(this, Pokedex);

    new Pokemon(app);
    new Menu(app);
};

function init(app) {
    new Pokedex(app);
}

var ctrls = [init];

var app$1 = window.app = {};
app$1.controllers = {};

app$1.config = {
    "name": "PokeDex",
    "baseUrl": "http://pokeapi.co/api/v2/",
    "title": "Pokemon"
};

ctrls.forEach(function (ctrl) {
    app$1.controllers[ctrl.name] = ctrl;
    app$1.controllers[ctrl.name](app$1);
});

}());
