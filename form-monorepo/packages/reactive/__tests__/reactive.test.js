'use strict';

const reactive = require('..');
const assert = require('assert').strict;

assert.strictEqual(reactive(), 'Hello from reactive');
console.info('reactive tests passed');
