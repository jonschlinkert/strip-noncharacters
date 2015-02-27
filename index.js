/*!
 * strip-noncharacters <https://github.com/jonschlinkert/strip-noncharacters>
 *
 * Copyright (c) 2015, Jon Schlinkert.
 * Licensed under the MIT License.
 */

'use strict';

var regex = require('noncharacter-regex');

module.exports = function (str) {
  if (typeof str !== 'string') {
    throw new Error('strip-noncharacters expects a string');
  }
  return str.replace(regex, '');
};
