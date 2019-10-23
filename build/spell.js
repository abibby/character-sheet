import { readJSON } from "./util";
let spellCache;
function allSpells() {
    if (spellCache === undefined) {
        spellCache = [];
        const index = Object.values(readJSON('spells', 'index.json'));
        for (const file of index) {
            const result = readJSON('spells', file);
            spellCache = spellCache.concat(result.spell);
        }
    }
    return spellCache;
}
export function findSpell(name) {
    const spells = allSpells();
    return spells.find(spell => spell.name === name);
}
