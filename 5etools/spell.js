import spells from './spell-data.js';
export function findSpell(name) {
    return spells.find(spell => spell.name === name);
}
//# sourceMappingURL=spell.js.map