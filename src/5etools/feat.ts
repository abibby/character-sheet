import { Entry } from "./entry";
import feats from './feat-data.json'

export interface Feat {
    name: string,
    // prerequisite: [
    //     {
    //         race: [
    //             {
    //                 name: "tiefling"
    //             }
    //         ]
    //     }
    // ],
    source: string
    page: number
    entries: Entry[]
    // ability: [
    //     {
    //         choose: {
    //             from: Array<keyof Stats>,
    //             amount: number
    //         }
    //     }
    // ]
}


export function findFeat(name: string): Feat | undefined {
    return (feats as Feat[]).find(f => f.name === name)
}