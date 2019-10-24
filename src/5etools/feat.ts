import { readJSON } from "./util";
import { Entry } from "./entry";
import { Stats } from "..";

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

const feats: Feat[] = readJSON('feats.json').feat

export function findFeat(name: string): Feat | undefined {
    return feats.find(f => f.name === name)
}