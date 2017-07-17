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

  const API = 'https://api.fattureincloud.it/v1/';
  const ENDPOINTS = {
    create: API + 'clienti/nuovo'
  };

  const _setupRequest = function (type, body) {
    return new Request(ENDPOINTS[type], {
      method: 'POST',
      mode: 'no-cors',
      body: JSON.stringify(body),
      headers: new Headers({
        'Content-Type': 'application/json'
      })
    });
  };

  /*
    * Create new User
    * @method _create
    * @param {object} user - object containing user details
    */
  const _create = function (user) {
    const request = _setupRequest('create', user);
    return fetch(request);
  };

  return function (credentials) {
    this.credentials = credentials;
    return {
      create: _create
    };
  };
});