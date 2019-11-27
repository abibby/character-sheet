import { Stats } from "../index.js";
import { Entry } from "./entry.js";
interface StartingProficiencies {
    armor: string[];
    weapons: string[];
    skills: {
        choose: number;
        from: string[];
    };
}
interface HitDie {
    number: number;
    faces: number;
}
export interface ClassFeature {
    name: string;
    entries: Entry[];
}
export interface Class {
    name: string;
    source: string;
    hd: HitDie;
    proficiency: Array<keyof Stats>;
    spellcastingAbility?: keyof Stats;
    casterProgression?: "1/2" | "full";
    startingProficiencies: StartingProficiencies;
    classFeatures: ClassFeature[][];
    subclassTitle: string;
    subclasses: Array<{
        name: string;
        subclassFeatures: ClassFeature[][];
        source: string;
        shortName: string;
        page: number;
    }>;
    fluff: Entry[];
    page: number;
}
export declare function findClass(name: string): Class | undefined;
export {};
