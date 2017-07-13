(function (root, factory) {
  'use strict';

  /* eslint-disable no-undef */
  if (typeof define === 'function' && define.amd) {
    define(function () {
      return factory(root);
    });
  } else if (typeof exports === 'object') {
    module.exports = factory;
  } else {
    root.fattureInCloud = factory(root);
  }
})(this, function () {
  'use strict';

  var API = 'https://api.fattureincloud.it/v1/';
  var ENDPOINTS = {
    create: API + 'clienti/nuovo'
  };

  /*
    * Create new User
    * @method _create
    * @param {object} user - object containing user details
    */
  var _create = function (user) {
    var request = new Request(ENDPOINTS.create, {
      method: 'POST',
      mode: 'no-cors',
      body: JSON.stringify(user),
      headers: new Headers({
        'Content-Type': 'application/json'
      })
    });

    return fetch(request);
  };

  return {
    create: _create
  };
});