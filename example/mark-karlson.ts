import { Character } from "../dist"
import { writeFileSync } from "fs";
const char = new Character()

char.name = 'Mark Karlson'
char.playerName = 'Adam Bibby'

char.setStats({
    str: 11,
    dex: 10,
    con: 15,
    int: 12,
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
    c.addSubclass('Cleric', 'Life Domain')
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
    c.updateLimitedFeature('Channel Divinity: Preserve Life', { uses: 2 })
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
    c.addFeat('War Caster', c => { })
})
char.levelUp('Cleric', c => { // 13
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

char.addFeature('Tattoo: Hammer and Sickle', `you emit an aura within five feet
of you and anybody in this aura can use anybody else's saving throw modifier in
place of their own when they have to make a save, so long as they are within the
aura as well `)

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
// char.addSpell('Ceremony')
char.addSpell('Healing Word')
char.addSpell('Sanctuary')
char.addSpell('Shield of Faith')

// Level 2
char.addSpell('Blindness/Deafness')
char.addSpell('Silence')

// Level 3
char.addSpell('Zone of Truth')
char.addSpell('Mass Healing Word')
char.addSpell('Water Walk')
char.addSpell('Meld into Stone')

// Level 4
char.addSpell('Control Water')
char.addSpell('Death Ward')
char.addSpell('Stone Shape')

// Level 5
char.addSpell('Flame Strike')
char.addSpell('Greater Restoration')
char.addSpell('Holy Weapon')

// Level 6
char.addSpell('Harm')
char.addSpell('Planar Ally')

// level 7
char.addSpell('Regenerate')

char.assert(
    c => c.level.get('Cleric') + c.stats.wis.mod() + 5 /* cantrips */ + 2/* firbolg */ + 10 /* cleric */,
    c => c.spells.length,
    'Number of spells',
)

char.render().then(html => writeFileSync('index.html', html))
