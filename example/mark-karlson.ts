import { Character } from "../dist"
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

char.levelUp('Cleric', c => { // 1
    c.addSkillProficiency('history')
    c.addSkillProficiency('medicine')
    c.addSaveProficiency('wis')
    c.addSaveProficiency('cha')

    c.addFeature('Turn Undead')

    c.addSpell('Bless')
    c.addSpell('Cure Wounds')

    c.setSpellSaveStat('wis')
})

char.levelUp('Cleric', c => { // 2
    c.addLimitedFeature('Channel Divinity: Preserve Life', 1, 'sr')
})
char.levelUp('Cleric', c => { // 3
    c.addSpell('Lesser Restoration')
    c.addSpell('Spiritual Weapon')

})
char.levelUp('Cleric', c => { // 4
    c.stats.wis.add(2)
})
char.levelUp('Cleric', c => { // 5
    c.addFeature('Destroy Undead (CR 1/2)')

    c.addSpell('Beacon of Hope')
    c.addSpell('Revivify')
})
char.levelUp('Cleric', c => { // 6
    c.addFeature('Blessed Healer')
    c.updateLimitedFeature('Channel Divinity: Preserve Life', {
        uses: 2
    })
})
char.levelUp('Cleric', c => { // 7
    c.addSpell('Death Ward')
    c.addSpell('Guardian of Faith')
})
char.levelUp('Cleric', c => { // 8
    c.addFeature('Destroy Undead (CR 1)')

    c.addFeature('Divine Strike')
    c.stats.wis.add(1)
    c.stats.con.add(1)
})
char.levelUp('Cleric', c => { // 9
    c.addSpell('Mass Cure Wounds')
    c.addSpell('Raise Dead')
})
char.levelUp('Cleric', c => { // 10
    c.addLimitedFeature('Divine Intervention', 1, 'week')

})
char.levelUp('Cleric', c => { // 11
    c.addFeature('Destroy Undead (CR 2)')
})
char.levelUp('Cleric', c => { // 12
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

char.addItem('Light Hammer', c => {
    c.addAttack({
        name: 'Light Hammer',
        damage: () => `1d4 + ${c.stats.str.mod()}`,
        type: 'attack',
        attackBonus: () => c.stats.str.mod() + c.proficiencyBonus,
        range: '20/60',
    })
})
char.addItem('Sickle', c => {
    c.addAttack({
        name: 'Sickle',
        damage: () => `1d4 + ${c.stats.str.mod()}`,
        type: 'attack',
        attackBonus: () => c.stats.str.mod() + c.proficiencyBonus
    })
})
char.addItem('Holy Symbol', c => { })

// Cantrips
char.addSpell('Guidance')
char.addSpell('Light')
char.addSpell('Spare the Dying')
char.addSpell('Thaumaturgy')
char.addSpell('Toll the Dead', c => {
    c.addAttack({
        name: 'Toll the Dead',
        damage: () => '3d8 (3d12)',
        type: 'save',
        save: 'wis',
        saveDC: () => c.spellSaveDC,
        range: '60',
    })
})

// Level 1
char.addSpell('Ceremony')
char.addSpell('Healing Word')
char.addSpell('Sanctuary')
char.addSpell('Shield of Faith')

// Level 2
char.addSpell('Blindness/Deafness')
char.addSpell('Silence')
char.addSpell('Beacon of Hope')
char.addSpell('Zone of Truth')

// Level 3
char.addSpell('Mass Healing Word')
char.addSpell('Water Walk')

// Level 4
char.addSpell('Control Water')
char.addSpell('Death Ward')
char.addSpell('Guardian of Faith')
char.addSpell('Stone Shape')

// Level 5
char.addSpell('Flame Strike')
char.addSpell('Greater Restoration')
char.addSpell('Holy Weapon')

// Level 6
char.addSpell('Harm')
char.addSpell('Planar Ally')

char.save('index.html')