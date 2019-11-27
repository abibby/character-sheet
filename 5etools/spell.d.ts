import { Entry } from "./entry.js";
declare type School = string;
export interface Time {
    unit: string;
    number: number;
}
export interface Range {
    type: string;
    distance: {
        type: string;
        amount?: string;
    };
}
export interface Components {
    v?: boolean;
    s?: boolean;
    m?: {
        text: string;
        cost: number;
        consume: boolean;
    };
}
export declare type Duration = {
    type: 'instant';
} | {
    type: 'timed';
    duration: {
        type: string;
        amount: number;
    };
    concentration?: boolean;
};
export interface Spell {
    name: string;
    level: number;
    school: School;
    time: Time[];
    range: Range;
    components: Components;
    duration: Duration[];
    classes: {
        fromClassList: Array<{
            name: string;
            source: string;
        }>;
    };
    source: string;
    entries: Entry[];
    page: number;
    damageInflict: string[];
    savingThrow: string[];
    areaTags: string[];
}
export declare function findSpell(name: string): Spell | undefined;
export {};
