export class Level {
    constructor() {
        this.classMap = new Map();
    }
    add(className) {
        const lvl = this.classMap.get(className) || 0;
        this.classMap.set(className, lvl + 1);
    }
    get(className) {
        return this.classMap.get(className) || 0;
    }
    get total() {
        return Array.from(this.classMap).reduce((total, [, l]) => total + l, 0);
    }
    toString() {
        return Array.from(this.classMap)
            .map(([className, level]) => `${className}: ${level}`)
            .join(', ');
    }
}
export class Stat {
    constructor() {
        this.value = 0;
        this.override = 0;
    }
    add(amount) {
        this.override += amount;
    }
    set(value) {
        this.value = Math.max(value, this.value);
    }
    get() {
        return Math.max(this.value, this.override);
    }
    mod() {
        return mod(this.get());
    }
    toString() {
        return String(this.get());
    }
}
export const StatMap = {
    str: 'Strength',
    dex: 'Dexterity',
    con: 'Constitution',
    int: 'Intelligence',
    wis: 'Wisdom',
    cha: 'Charisma',
};
export const SkillsMap = {
    'acrobatics': 'dex',
    'animal handling': 'wis',
    'arcana': 'int',
    'athletics': 'str',
    'deception': 'cha',
    'history': 'int',
    'insight': 'wis',
    'intimidation': 'cha',
    'investigation': 'int',
    'medicine': 'wis',
    'nature': 'int',
    'perception': 'wis',
    'performance': 'cha',
    'persuasion': 'cha',
    'religion': 'int',
    'sleight of hand': 'dex',
    'stealth': 'dex',
    'survival': 'wis',
};
export default class Character {
    constructor() {
        this.name = '';
        this.background = '';
        this.playerName = '';
        this.race = '';
        this.level = new Level();
        this.stats = {
            str: new Stat(),
            dex: new Stat(),
            con: new Stat(),
            int: new Stat(),
            wis: new Stat(),
            cha: new Stat(),
        };
        this.spells = [];
        this.features = [];
        this.limitedFeatures = [];
        this.items = [];
        this.skillProficiency = [];
        this.saveProficiency = [];
        this.acBase = 0;
        this.acMod = 0;
        this.speed = 0;
        this.hitDice = [];
        this.feats = [];
    }
    get saves() {
        return Object.fromEntries(Object.keys(StatMap)
            .map((stat) => [
            stat,
            this.stats[stat].mod() + Number(this.saveIsProficient(stat)) * this.proficiencyBonus,
        ]));
    }
    get skills() {
        return Object.fromEntries(Object.entries(SkillsMap)
            .map(([skill, stat]) => [
            skill,
            this.stats[stat].mod() + (this.skillProficiency.filter(p => p === skill).length * this.proficiencyBonus),
        ]));
    }
    get proficiencyBonus() {
        if (this.level.total < 5) {
            return 2;
        }
        else if (this.level.total < 9) {
            return 3;
        }
        else if (this.level.total < 13) {
            return 4;
        }
        else if (this.level.total < 17) {
            return 5;
        }
        return 6;
    }
    get ac() {
        return this.acBase + this.acMod;
    }
    get initiative() {
        return this.stats.dex.mod();
    }
    get maxHP() {
        return this.hitDice[0]
            + this.stats.con.mod() * this.hitDice.length
            + this.hitDice.slice(1).reduce((total, die) => total + (die / 2 + 1), 0);
    }
    get spellSaveDC() {
        return 0;
    }
    get spellAttackMod() {
        return 0;
    }
    setRace(race, bonus) {
        this.race = race;
        this.applyBonus(bonus);
    }
    setBackground(background, bonus) {
        this.background = background;
        this.applyBonus(bonus);
    }
    setStats(stats) {
        this.stats.str.add(stats.str);
        this.stats.dex.add(stats.dex);
        this.stats.con.add(stats.con);
        this.stats.int.add(stats.int);
        this.stats.wis.add(stats.wis);
        this.stats.cha.add(stats.cha);
    }
    setAC(ac) {
        this.acBase = Math.max(ac, this.acBase);
    }
    addAC(ac) {
        this.acMod += ac;
    }
    addHitDie(hitDie) {
        this.hitDice.push(hitDie);
    }
    addSkillProficiency(skill) {
        this.skillProficiency.push(skill);
    }
    isProficient(skill) {
        return this.skillProficiency.includes(skill);
    }
    addSaveProficiency(save) {
        this.saveProficiency.push(save);
    }
    saveIsProficient(skill) {
        return this.saveProficiency.includes(skill);
    }
    levelUp(c, bonus) {
        this.level.add(c.name);
        this.addHitDie(c.hd.faces);
        this.applyBonus(bonus);
    }
    addSpell(spell) {
        // https://5e.tools/data/spells/index.json?ver=1.84.1
        // https://5e.tools/data/spells/spells-phb.json?ver=1.84.1
        this.spells.push(spell);
    }
    addFeature(feature) {
        this.features.push(feature);
    }
    addLimitedFeature(name, uses, recharge) {
        this.limitedFeatures.push({
            name: name,
            uses: uses,
            recharge: recharge,
        });
    }
    updateLimitedFeature(name, feature) {
        for (const f of this.limitedFeatures) {
            if (f.name !== name) {
                continue;
            }
            Object.assign(f, feature);
        }
    }
    addItem(item, bonus) {
        this.items.push(item);
        this.applyBonus(bonus);
    }
    addFeat(name, bonus) {
        this.feats.push(name);
        this.applyBonus(bonus);
    }
    applyBonus(bonus) {
        bonus(this);
    }
}
export function mod(num) {
    return Math.ceil((num - 10) / 2);
}
