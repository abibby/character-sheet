import { readJSON } from "./util"
import { Entry } from "./entry"

type School = string
export interface Time {
    unit: string
    number: number
}

export interface Range {
    type: string,
    distance: {
        type: string,
        amount?: string
    }
}
export interface Components {
    v?: boolean
    s?: boolean
    m?: {
        text: string
        cost: number
        consume: boolean
    }
}
export type Duration =
    | {
        type: 'instant'
    }
    | {
        type: 'timed'
        duration: {
            type: string
            amount: number
        }
        concentration?: boolean
    }

export interface Spell {
    name: string
    level: number
    school: School
    time: Time[]
    range: Range
    components: Components
    duration: Duration[],
    classes: {
        fromClassList: Array<{
            name: string,
            source: string
        }>
    },
    source: string,
    entries: Entry[]
    page: number,
    damageInflict: string[]
    savingThrow: string[]
    areaTags: string[]
}

let spellCache: Spell[] | undefined
async function allSpells(): Promise<Spell[]> {
    if (spellCache === undefined) {
        spellCache = []
        const index: string[] = Object.values(await readJSON('spells', 'index.json'))
        for (const file of index) {
            const result: { spell: Spell[] } = await readJSON('spells', file)
            spellCache = spellCache.concat(result.spell)
        }
    }
    return spellCache
}

export async function findSpell(name: string): Promise<Spell | undefined> {
    const spells = await allSpells()
    return spells.find(spell => spell.name === name)
}