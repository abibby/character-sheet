var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { findClass } from './5etools/index.js';
import { render } from './render.js';
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
    get classes() {
        return Array.from(this.classMap.keys());
    }
    toString() {
        return Array.from(this.classMap)
            .map(([className, level]) => `${className}: ${level}`)
            .join(', ');
    }
}
export class Stat {
    constructor(initial) {
        this.bonus = 0;
        this.override = 0;
        this.initial = initial;
    }
    add(amount) {
        this.bonus += amount;
    }
    set(value) {
        this.override = Math.max(value, this.override);
    }
    get() {
        return Math.max(this.initial + this.bonus, this.override);
    }
    mod() {
        return mod(this.get());
    }
    points() {
        var _a;
        const pointValues = {
            3: -9,
            4: -6,
            5: -4,
            6: -2,
            7: -1,
            8: 0,
            9: 1,
            10: 2,
            11: 3,
            12: 4,
            13: 5,
            14: 7,
            15: 9,
            16: 12,
            17: 15,
            18: 19,
        };
        if (this.initial > 15) {
            console.warn('point buy ability scores should be less than 15');
        }
        if (this.initial < 8) {
            console.warn('point buy ability scores should be greater than 8');
        }
        return (_a = pointValues[this.initial]) !== null && _a !== void 0 ? _a : 0;
    }
    toString() {
        return String(this.get());
    }
}
export const StatMap = {
    str: 'strength',
    dex: 'dexterity',
    con: 'constitution',
    int: 'intelligence',
    wis: 'wisdom',
    cha: 'charisma',
};
export const SkillsMap = {
    acrobatics: 'dex',
    'animal handling': 'wis',
    arcana: 'int',
    athletics: 'str',
    deception: 'cha',
    history: 'int',
    insight: 'wis',
    intimidation: 'cha',
    investigation: 'int',
    medicine: 'wis',
    nature: 'int',
    perception: 'wis',
    performance: 'cha',
    persuasion: 'cha',
    religion: 'int',
    'sleight of hand': 'dex',
    stealth: 'dex',
    survival: 'wis',
};
export class Character {
    constructor() {
        this.name = '';
        this.background = '';
        this.playerName = '';
        this.race = '';
        this.level = new Level();
        this.class = new Map();
        this.stats = {
            str: new Stat(10),
            dex: new Stat(10),
            con: new Stat(10),
            int: new Stat(10),
            wis: new Stat(10),
            cha: new Stat(10),
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
        this.spellAttackBonus = 0;
        this.feats = [];
        this.attacks = [];
    }
    get saves() {
        return Object.fromEntries(Object.keys(StatMap).map((stat) => [
            stat,
            this.stats[stat].mod() +
                Number(this.saveIsProficient(stat)) * this.proficiencyBonus,
        ]));
    }
    get skills() {
        return Object.fromEntries(Object.entries(SkillsMap).map(([skill, stat]) => [
            skill,
            this.stats[stat].mod() +
                this.skillProficiency.filter((p) => p === skill).length *
                    this.proficiencyBonus,
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
        return (this.hitDice[0] +
            this.stats.con.mod() * this.hitDice.length +
            this.hitDice
                .slice(1)
                .reduce((total, die) => total + (die / 2 + 1), 0));
    }
    get spellSaveDC() {
        if (this.spellSaveStat === undefined) {
            return 0;
        }
        return 8 + this.proficiencyBonus + this.spellAttackMod;
    }
    get spellAttackMod() {
        if (this.spellSaveStat === undefined) {
            return 0;
        }
        return this.stats[this.spellSaveStat].mod() + this.spellAttackBonus;
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
        this.stats = {
            str: new Stat(stats.str),
            dex: new Stat(stats.dex),
            con: new Stat(stats.con),
            int: new Stat(stats.int),
            wis: new Stat(stats.wis),
            cha: new Stat(stats.cha),
        };
    }
    setAC(ac) {
        this.acBase = Math.max(ac, this.acBase);
    }
    addAC(ac) {
        this.acMod += ac;
    }
    setSpellSaveStat(stat) {
        this.spellSaveStat = stat;
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
    addSubclass(className, subclass) {
        this.class.set(className, subclass);
    }
    levelUp(name, bonus) {
        this.level.add(name);
        const c = findClass(name);
        if (c !== undefined) {
            this.addHitDie(c.hd.faces);
        }
        this.applyBonus(bonus);
    }
    addSpell(spell, bonus) {
        this.spells.push(spell);
        if (bonus) {
            this.applyBonus(bonus);
        }
    }
    addFeature(feature, description) {
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
        if (bonus) {
            this.applyBonus(bonus);
        }
    }
    addFeat(name, bonus) {
        this.feats.push(name);
        this.applyBonus(bonus);
    }
    addAttack(attack) {
        this.attacks.push(attack);
    }
    render() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield render(this);
        });
    }
    pointBuy() {
        return (this.stats.str.points() +
            this.stats.dex.points() +
            this.stats.con.points() +
            this.stats.int.points() +
            this.stats.wis.points() +
            this.stats.cha.points());
    }
    assert(expect, actual, message) {
        const e = expect(this);
        const a = actual(this);
        if (e === a) {
            return;
        }
        const m = `${message}, expected ${e} got ${a}`;
        console.warn(m); //yellow
        return m;
    }
    applyBonus(bonus) {
        bonus(this);
    }
}
export function mod(num) {
    return Math.floor((num - 10) / 2);
}
//# sourceMappingURL=index.js.map