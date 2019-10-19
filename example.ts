import Character from "./character"
import spells from './spells.json'

const char = new Character()

char.setName('Mark Karlson')

char.setStats({
    str: 13,
    dex: 12,
    con: 14,
    int: 8,
    wiz: 15,
    cha: 10,
})

char.setRace('Firbolg', c => {
    c.stats.str.add(1)
    c.stats.wiz.add(2)

    c.addSpell(spells.detect_magic)
    c.addSpell(spells.disguise_self)
})

char.levelUp('Cleric', c => {
})

console.log(char);
