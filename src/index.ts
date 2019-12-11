import { findClass, Entry } from "./5etools/index.js"
import { render } from "./render.js"

export class Level {
    private classMap = new Map<string, number>()
    public add(className: string): void {
        const lvl = this.classMap.get(className) || 0
        this.classMap.set(className, lvl + 1)
    }
    public get(className: string): number {
        return this.classMap.get(className) || 0
    }

    public get total(): number {
        return Array.from(this.classMap).reduce((total, [, l]) => total + l, 0)
    }

    public get classes(): string[] {
        return Array.from(this.classMap.keys())
    }

    public toString(): string {
        return Array.from(this.classMap)
            .map(([className, level]) => `${className}: ${level}`)
            .join(', ')
    }
}

export class Stat {
    private bonus: number = 0
    private readonly initial: number
    private override: number = 0

    constructor(initial: number) {
        this.initial = initial
    }

    public add(amount: number): void {
        this.bonus += amount
    }
    public set(value: number): void {
        this.override = Math.max(value, this.override)
    }
    public get(): number {
        return Math.max(this.initial + this.bonus, this.override)
    }
    public mod(): number {
        return mod(this.get())
    }

    public points(): number {
        const pointValues: { [points: number]: number | undefined } = {
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
        }
        if (this.initial > 15) {
            console.warn('point buy ability scores should be less than 15')
        }
        if (this.initial < 8) {
            console.warn('point buy ability scores should be greater than 8')
        }
        return pointValues[this.initial] ?? 0
    }

    public toString(): string {
        return String(this.get())
    }
}

type Bonus = (c: Character) => void

export interface Stats<T = number> {
    str: T
    dex: T
    con: T
    int: T
    wis: T
    cha: T
}

export interface Skills<T = number> {
    'acrobatics': T
    'animal handling': T
    'arcana': T
    'athletics': T
    'deception': T
    'history': T
    'insight': T
    'intimidation': T
    'investigation': T
    'medicine': T
    'nature': T
    'perception': T
    'performance': T
    'persuasion': T
    'religion': T
    'sleight of hand': T
    'stealth': T
    'survival': T
}

export const StatMap: Readonly<Stats<string>> = {
    str: 'strength',
    dex: 'dexterity',
    con: 'constitution',
    int: 'intelligence',
    wis: 'wisdom',
    cha: 'charisma',
}

export const SkillsMap: Readonly<Skills<keyof Stats<number>>> = {
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
}

export interface LimitedFeature {
    name: string
    uses: number
    recharge: string
}
export type Lazy<T> = () => T

export type Attack = {
    name: string
    damage: Lazy<string>
    range?: string
} &
    ({
        type: 'attack',
        attackBonus: Lazy<number>
    } | {
        type: 'save'
        save: keyof Stats
        saveDC: Lazy<number>
    })

export class Character {
    public name: string = ''
    public background: string = ''
    public playerName: string = ''
    public race: string = ''
    public alignment: string
    public xp: number

    public readonly level: Level = new Level()
    public readonly class: Map<string, string> = new Map()

    public stats: Readonly<Stats<Stat>> = {
        str: new Stat(10),
        dex: new Stat(10),
        con: new Stat(10),
        int: new Stat(10),
        wis: new Stat(10),
        cha: new Stat(10),
    }
    public get saves(): Stats {
        return Object.fromEntries(
            Object.keys(StatMap)
                .map((stat: keyof Stats) => [
                    stat,
                    this.stats[stat].mod() + Number(this.saveIsProficient(stat)) * this.proficiencyBonus,
                ])
        ) as any
    }

    public readonly spells: string[] = []
    public readonly features: string[] = []
    public readonly limitedFeatures: LimitedFeature[] = []
    public readonly items: string[] = []

    private skillProficiency: Array<keyof Skills> = []
    private saveProficiency: Array<keyof Stats> = []

    public get skills(): Skills<number> {
        return Object.fromEntries(
            Object.entries(SkillsMap)
                .map(([skill, stat]) => [
                    skill,
                    this.stats[stat].mod() + (this.skillProficiency.filter(p => p === skill).length * this.proficiencyBonus),
                ])
        ) as any
    }

    public get proficiencyBonus(): number {
        if (this.level.total < 5) {
            return 2
        } else if (this.level.total < 9) {
            return 3
        } else if (this.level.total < 13) {
            return 4
        } else if (this.level.total < 17) {
            return 5
        }
        return 6
    }

    private acBase: number = 0
    private acMod: number = 0
    public get ac(): number {
        return this.acBase + this.acMod
    }

    public get initiative(): number {
        return this.stats.dex.mod()
    }

    public speed: number = 0

    public hitDice: number[] = []
    public get maxHP(): number {
        return this.hitDice[0]
            + this.stats.con.mod() * this.hitDice.length
            + this.hitDice.slice(1).reduce((total, die) => total + (die / 2 + 1), 0)
    }

    private spellSaveStat: keyof Stats | undefined
    public get spellSaveDC(): number {
        if (this.spellSaveStat === undefined) {
            return 0
        }
        return 8 + this.proficiencyBonus + this.stats[this.spellSaveStat].mod()
    }
    public get spellAttackMod(): number {
        return 0
    }

    public feats: string[] = []
    public attacks: Attack[] = []

    public setRace(race: string, bonus: Bonus): void {
        this.race = race
        this.applyBonus(bonus)
    }

    public setBackground(background: string, bonus: Bonus): void {
        this.background = background
        this.applyBonus(bonus)
    }

    public setStats(stats: Stats<number>): void {
        this.stats = {
            str: new Stat(stats.str),
            dex: new Stat(stats.dex),
            con: new Stat(stats.con),
            int: new Stat(stats.int),
            wis: new Stat(stats.wis),
            cha: new Stat(stats.cha),
        }
    }

    public setAC(ac: number): void {
        this.acBase = Math.max(ac, this.acBase)
    }
    public addAC(ac: number): void {
        this.acMod += ac
    }

    public setSpellSaveStat(stat: keyof Stats): void {
        this.spellSaveStat = stat
    }

    public addHitDie(hitDie: number): void {
        this.hitDice.push(hitDie)
    }

    public addSkillProficiency(skill: keyof Skills) {
        this.skillProficiency.push(skill)
    }
    public isProficient(skill: keyof Skills): boolean {
        return this.skillProficiency.includes(skill)
    }

    public addSaveProficiency(save: keyof Stats) {
        this.saveProficiency.push(save)
    }
    public saveIsProficient(skill: keyof Stats): boolean {
        return this.saveProficiency.includes(skill)
    }

    public addSubclass(className: string, subclass: string): void {
        this.class.set(className, subclass)
    }

    public levelUp(name: string, bonus: Bonus): void {
        this.level.add(name)
        const c = findClass(name)
        if (c !== undefined) {
            this.addHitDie(c.hd.faces)
        }
        this.applyBonus(bonus)
    }

    public addSpell(spell: string, bonus?: Bonus): void {
        this.spells.push(spell)
        if (bonus) {
            this.applyBonus(bonus)
        }
    }

    public addFeature(feature: string, description?: Entry) {
        this.features.push(feature)
    }
    public addLimitedFeature(name: string, uses: number, recharge: string) {
        this.limitedFeatures.push({
            name: name,
            uses: uses,
            recharge: recharge,
        })
    }
    public updateLimitedFeature(name: string, feature: Partial<LimitedFeature>) {
        for (const f of this.limitedFeatures) {
            if (f.name !== name) {
                continue
            }
            Object.assign(f, feature)
        }
    }
    public addItem(item: string, bonus?: Bonus) {
        this.items.push(item)

        if (bonus) {
            this.applyBonus(bonus)
        }
    }

    public addFeat(name: string, bonus: Bonus) {
        this.feats.push(name)

        this.applyBonus(bonus)
    }

    public addAttack(attack: Attack): void {
        this.attacks.push(attack)
    }

    public async render() {
        return await render(this)
    }

    public pointBuy(): number {
        return this.stats.str.points() +
            this.stats.dex.points() +
            this.stats.con.points() +
            this.stats.int.points() +
            this.stats.wis.points() +
            this.stats.cha.points()
    }

    public assert<T>(expect: (c: Character) => T, actual: (c: Character) => T, message: string): string | undefined {
        const e = expect(this)
        const a = actual(this)
        if (e === a) {
            return
        }
        const m = `${message}, expected ${e} got ${a}`
        console.warn(m);  //yellow
        return m
    }

    private applyBonus(bonus: Bonus): void {
        bonus(this)
    }
}

export function mod(num: number): number {
    return Math.floor((num - 10) / 2)
}