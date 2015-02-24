/*!
 * strip-noncharacters <https://github.com/jonschlinkert/strip-noncharacters>
 *
 * Copyright (c) 2015, Jon Schlinkert.
 * Licensed under the MIT License.
 */

'use strict';

var assert = require('assert');
var strip = require('./');

describe('strip non-characters', function () {
  it('should strip non characters from a string:', function () {
    assert(strip('abc_\uFFFE_xyz') === 'abc__xyz');
    assert(strip('abc_\uFFFF_xyz') === 'abc__xyz');
  });
});
