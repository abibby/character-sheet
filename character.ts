export class Level {
    private classMap = new Map<string, number>()
    public add(className: string): void {
        const lvl = this.classMap.get(className) || 0
        this.classMap.set(className, lvl + 1)
    }
    public get(className: string): number {
        return this.classMap.get(className) || 0
    }
}

export class Stat {
    private value: number = 0
    private override: number = 0

    public add(amount: number): void {
        this.override += amount
    }
    public set(value: number): void {
        this.value = Math.max(value, this.value)
    }
    public get(): number {
        return Math.max(this.value, this.override)
    }
}

type Bonus = (c: Character) => void

interface Stats<T> {
    str: T
    dex: T
    con: T
    int: T
    wiz: T
    cha: T
}

interface Spell {
    name: string
    school: string
    ritual: boolean
    castingTime: string
    range: string
    components: string
    duration: string
    text: string
}

export default class Character {
    private name: string = ''
    private race: string = ''

    private readonly level: Level = new Level()

    public readonly stats: Readonly<Stats<Stat>> = {
        str: new Stat(),
        dex: new Stat(),
        con: new Stat(),
        int: new Stat(),
        wiz: new Stat(),
        cha: new Stat(),
    }

    private readonly spells: Spell[] = []

    public setName(name: string) {
        this.name = name
    }

    public setRace(race: string, bonus: Bonus): void {
        this.race = race
        this.applyBonus(bonus)
    }

    public setStats(stats: Stats<number>): void {
        this.stats.str.add(stats.str)
        this.stats.dex.add(stats.dex)
        this.stats.con.add(stats.con)
        this.stats.int.add(stats.int)
        this.stats.wiz.add(stats.wiz)
        this.stats.cha.add(stats.cha)
    }

    public levelUp(className: string, bonus: Bonus): void {
        this.level.add(className)
        this.applyBonus(bonus)
    }

    public addSpell(spell: Spell): void {
        // https://5e.tools/data/spells/index.json?ver=1.84.1
        // https://5e.tools/data/spells/spells-phb.json?ver=1.84.1
        this.spells.push(spell)
    }

    private applyBonus(bonus: Bonus): void {
        bonus(this)
    }
}