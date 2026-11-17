// store.js — atomic, local JSON persistence for game state.
'use strict';
const fs = require('fs');
const path = require('path');
const DIR = path.resolve(process.env.RIFTBOUND_DATA_DIR || __dirname);
fs.mkdirSync(DIR, { recursive: true });
const FILE = path.join(DIR, 'game-state.json');
function initial() { return { players: {}, world: { rifts: {}, trades: {}, cooldowns: {}, groups: {} } }; }
function load() {
  try {
    const parsed = JSON.parse(fs.readFileSync(FILE, 'utf8'));
    if (!parsed || typeof parsed !== 'object') return initial();
    parsed.players ||= {};
    parsed.world ||= initial().world;
    for (const k of ['rifts', 'trades', 'cooldowns', 'groups']) parsed.world[k] ||= {};
    return parsed;
  } catch (e) {
    if (e.code !== 'ENOENT') {
      try { fs.copyFileSync(FILE, `${FILE}.corrupt.${Date.now()}`); } catch {}
    }
    return initial();
  }
}
function withState(fn) {
  const state = load();
  const result = fn(state);
  const tmp = `${FILE}.tmp.${process.pid}`;
  fs.writeFileSync(tmp, JSON.stringify(state, null, 2), { mode: 0o600 });
  fs.renameSync(tmp, FILE);
  return result;
}
module.exports = { FILE, load, withState };
