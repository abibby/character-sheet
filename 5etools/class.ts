import { readJSON } from "./util"
import { Stats } from "character"
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

interface ClassFeature {
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
    classFeatures: ClassFeature[]
    subclassTitle: string
    subclasses: {
        name: string
        subclassFeatures: ClassFeature[]
        source: string
        shortName: string
        page: number
    }
    fluff: Entry[]
    page: number
}


let classCache: Class[] | undefined

async function allClasses(): Promise<Class[]> {
    if (classCache === undefined) {
        classCache = []
        const index: string[] = Object.values(await readJSON('class', 'index.json'))
        for (const file of index) {
            const result: { class: Class[] } = await readJSON('class', file)
            classCache = classCache.concat(result.class)
        }
    }
    return classCache
}
export async function findClass(name: string): Promise<Class | undefined> {
    return (await allClasses()).find(c => c.name === name)
}