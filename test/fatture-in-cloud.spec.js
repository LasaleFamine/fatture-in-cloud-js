/* eslint-disable no-undef */
(function (root) {
  'use strict';

  describe('fattureInCloud', () => {
    it('namespace available in global scope', () => {
      expect(typeof root.fattureInCloud).toBe('object');
    });

    it('create() method available in global scope', () => {
      expect(typeof root.fattureInCloud.create).toBe('function');
    });

    it('create() method returns a Promise', () => {
      expect(typeof root.fattureInCloud.create()).toBe('object');
    });
  });
})(this);