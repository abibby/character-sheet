import { Entry } from "./entry";
export interface Feat {
    name: string;
    source: string;
    page: number;
    entries: Entry[];
}
export declare function findFeat(name: string): Feat | undefined;
