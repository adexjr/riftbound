// elements.js — RiftBound element wheel.
'use strict';
const WHEEL = ['umbra', 'pulse', 'root', 'tide', 'ash', 'glass'];
const META = {
  umbra: { name: 'Umbra', icon: '🟣' }, pulse: { name: 'Pulse', icon: '🔵' },
  root: { name: 'Root', icon: '🟢' }, tide: { name: 'Tide', icon: '🔷' },
  ash: { name: 'Ash', icon: '🟠' }, glass: { name: 'Glass', icon: '⚪' },
};
function matchup(att, def) {
  const i = WHEEL.indexOf(att), j = WHEEL.indexOf(def);
  if (i < 0 || j < 0 || i === j) return 0;
  const d = (j - i + 6) % 6;
  return d === 1 || d === 2 ? 1 : d === 4 || d === 5 ? -1 : 0;
}
const MULT = { 1: 1.5, 0: 1, '-1': 0.67 };
const dmgMult = (a, b) => MULT[matchup(a, b)];
const chartLine = (el) => {
  const strong = WHEEL.filter((x) => matchup(el, x) === 1).map((x) => META[x].name);
  const weak = WHEEL.filter((x) => matchup(el, x) === -1).map((x) => META[x].name);
  return `${META[el].icon} *${META[el].name}* — strong vs ${strong.join(', ')} · weak vs ${weak.join(', ')}`;
};
const FULL_CHART = () => WHEEL.map(chartLine).join('\n');
module.exports = { WHEEL, META, matchup, dmgMult, chartLine, FULL_CHART };
