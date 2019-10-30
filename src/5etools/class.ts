import { readJSON } from "./util"
import { Stats } from ".."
import { Entry } from "./entry"

interface StartingProficiencies {
    armor: string[],
    weapons: string[],
    skills: {
        choose: number,
        from: string[]
    }
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
    casterProgression?: "1/2" | "full"
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


let classCache: Class[] | undefined

function allClasses(): Class[] {
    if (classCache === undefined) {
        classCache = []
        const index: string[] = Object.values(readJSON('class', 'index.json'))
        for (const file of index) {
            const result: { class: Class[] } = readJSON('class', file)
            classCache = classCache.concat(result.class)
        }
    }
    return classCache
}
export function findClass(name: string): Class | undefined {
    return allClasses().find(c => c.name === name)
}