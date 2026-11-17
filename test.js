// Minimal smoke test for the element wheel and persistence module.
'use strict';
const assert = require('assert');
const E = require('./elements');
for (const el of E.WHEEL) {
  assert.equal(E.WHEEL.filter((other) => E.matchup(el, other) === 1).length, 2);
  assert.equal(E.WHEEL.filter((other) => E.matchup(el, other) === -1).length, 2);
}
assert.equal(E.dmgMult('umbra', 'pulse'), 1.5);
assert.equal(E.dmgMult('pulse', 'umbra'), 0.67);
console.log('Smoke tests passed.');
