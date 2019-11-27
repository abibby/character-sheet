import spells from './spell-data';
export function findSpell(name) {
    return spells.find(function (spell) { return spell.name === name; });
}
//# sourceMappingURL=spell.js.map