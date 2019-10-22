import Character from "./character"
import { render } from "./render"
import { promises as fs } from 'fs'
import { findSpell, findClass } from "./5etools"
(async () => {
    const char = new Character()

    char.name = 'Mark Karlson'
    char.playerName = 'Adam Bibby'

    char.setStats({
        str: 12,
        dex: 10,
        con: 14,
        int: 13,
        wis: 15,
        cha: 8,
    })

    char.setRace('Firbolg', c => {
        c.stats.str.add(1)
        c.stats.wis.add(2)

        c.addLimitedFeature('Detect Magic', 1, 'lr')
        c.addLimitedFeature('Disguise Self', 1, 'lr')
        c.addSpell('Detect Magic')
        c.addSpell('Disguise Self')

        c.speed = 30
    });

    char.setBackground('Acolyte', c => {
        c.addSkillProficiency('insight')
        c.addSkillProficiency('religion')
    })

    await findSpell('')
    const cleric = await findClass('Cleric')
    if (cleric === undefined) {
        console.warn('cleric not found')
        return
    }

    // https://5e.tools/classes.html#cleric_phb,sub:life%20domain~phb
    char.levelUp(cleric, c => { // 1
        c.addSkillProficiency('history')
        c.addSkillProficiency('medicine')

        c.addFeature('Turn Undead')

        c.addSpell('Bless')
        c.addSpell('Cure Wounds')
    })

    char.levelUp(cleric, c => { // 2
        c.addLimitedFeature('Channel Divinity: Preserve Life', 1, 'sr')
    })
    char.levelUp(cleric, c => { // 3
        c.addSpell('Lessor Restoration')
        c.addSpell('Spiritual Weapon')

    })
    char.levelUp(cleric, c => { // 4
        c.stats.wis.add(2)
    })
    char.levelUp(cleric, c => { // 5
        c.addFeature('Destroy Undead (CR 1/2)')

        c.addSpell('Beacon of Hope')
        c.addSpell('Revivify')
    })
    char.levelUp(cleric, c => { // 6
        c.addFeature('Blessed Healer')
        c.updateLimitedFeature('Channel Divinity: Preserve Life', { uses: 2 })
    })
    char.levelUp(cleric, c => { // 7
        c.addSpell('Death Ward')
        c.addSpell('Guardian of Faith')
    })
    char.levelUp(cleric, c => { // 8
        c.addFeature('Destroy Undead (CR 1)')

        c.addFeature('Divine Strike')
        c.stats.wis.add(1)
        c.stats.con.add(1)
    })
    char.levelUp(cleric, c => { // 9
        c.addSpell('Mass Cure Wounds')
        c.addSpell('Raise Dead')
    })
    char.levelUp(cleric, c => { // 10
        c.addLimitedFeature('Divine Intervention', 1, 'week')

    })
    char.levelUp(cleric, c => { // 11
        c.addFeature('Destroy Undead (CR 2)')
    })
    char.levelUp(cleric, c => { // 12
        // c.stats.con.add(2)
        c.addFeat('War Caster', c => { })
    })

    char.addItem('Shining Plate Armor', c => {
        c.setAC(18 + 1)
    })

    char.addItem('Shied', c => {
        c.addAC(2)
    })
    char.addItem('Shied', c => {
        c.addAC(2)
    })

    char.addItem('Light Hammer', c => { })
    char.addItem('Sickle', c => { })
    char.addItem('Holy Symbol', c => { })


    await fs.writeFile('index.html', await render(char))
})()