import Character from "./character"
import { render } from "./render"

const char = new Character()

char.name = 'Mark Karlson'
char.playerName = 'Adam Bibby'

char.setStats({
    str: 13,
    dex: 12,
    con: 14,
    int: 8,
    wis: 15,
    cha: 10,

    // str: 15,
    // dex: 8,
    // con: 15,
    // int: 8,
    // wis: 15,
    // cha: 8,
})

char.setRace('Firbolg', c => {
    c.stats.str.add(1)
    c.stats.wis.add(2)

    c.addSpell('Detect Magic')
    c.addSpell('Disguise Self')

    c.speed = 30
})


char.levelUp('Cleric', c => { // 1
    c.addHitDie(8)

    c.addSkillProficiency('insight')
    c.addSkillProficiency('medicine')

    c.addSpell('Bless')
    c.addSpell('Cure Wounds')
})

char.levelUp('Cleric', c => { // 2
    c.addHitDie(8)

    c.addClassFeature('Channel Divinity: Preserve Life')
})
char.levelUp('Cleric', c => { // 3
    c.addHitDie(8)

    c.addSpell('Lessor Restoration')
    c.addSpell('Spiritual Weapon')

})
char.levelUp('Cleric', c => { // 4
    c.addHitDie(8)

    c.stats.wis.add(2)
})
char.levelUp('Cleric', c => { // 5
    c.addHitDie(8)

    c.addSpell('Beacon of Hope')
    c.addSpell('Revivify')
})
char.levelUp('Cleric', c => { // 6
    c.addHitDie(8)

    c.addClassFeature('Blessed Healer')
})
char.levelUp('Cleric', c => { // 7
    c.addHitDie(8)

    c.addSpell('Death Ward')
    c.addSpell('Guardian of Faith')
})
char.levelUp('Cleric', c => { // 8
    c.addHitDie(8)

    c.addClassFeature('Divine Strike')
    c.stats.wis.add(1)
    c.stats.con.add(1)
})
char.levelUp('Cleric', c => { // 9
    c.addHitDie(8)

    c.addSpell('Mass Cure Wounds')
    c.addSpell('Raise Dead')
})
char.levelUp('Cleric', c => { // 10
    c.addHitDie(8)

})
char.levelUp('Cleric', c => { // 11
    c.addHitDie(8)

})
char.levelUp('Cleric', c => { // 12
    c.addHitDie(8)

    c.stats.str.add(1)
    c.stats.con.add(1)
})

char.addItem('Plate Armor', c => {
    c.setAC(18)
})

char.addItem('Light Shied', c => {
    c.addAC(1)
})

render(char).then(console.log)
