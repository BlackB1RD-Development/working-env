// Working-Env By BlackB1RD-Development. All rights reserved ©
// Project: https://github.com/BlackB1RD-Development/working-env
// License: MIT

/* eslint-disable no-undef */

// Requires - Packages
const { assert } = require('chai');

// Requires - Files
const index = require('..');

describe('Index', () => {
  describe('#test', () => {
    it('should return true', () => {
      assert.deepStrictEqual(index.test, true);
    });
  });
});
