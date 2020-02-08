import { Stats } from "../index.js"
import { Entry } from "./entry.js"
import classes from './class-data.js'

interface StartingProficiencies {
    armor?: string[],
    weapons: string[],
    skills: {
        choose: {
            from: Array<keyof Stats>,
            count: 2
        }
    }[]
}
interface HitDie {
    number: number
    faces: number
}

export interface ClassFeature {
    name: string
    entries: Entry[]
}

export interface Class {
    name: string
    source: string
    hd: HitDie
    proficiency: Array<keyof Stats>
    spellcastingAbility?: keyof Stats
    casterProgression?: "1/2" | "1/3" | "full" | "pact"
    startingProficiencies: StartingProficiencies
    classFeatures: ClassFeature[][]
    subclassTitle: string
    subclasses: Array<{
        name: string
        subclassFeatures: ClassFeature[][]
        source: string
        shortName: string
        page: number
    }>
    fluff: Entry[]
    page: number
}

export function findClass(name: string): Class | undefined {
    return (classes as Class[]).find(c => c.name === name)
}