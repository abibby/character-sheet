import { Entry } from "./5etools";
export declare class Level {
    private classMap;
    add(className: string): void;
    get(className: string): number;
    readonly total: number;
    readonly classes: string[];
    toString(): string;
}
export declare class Stat {
    private value;
    private override;
    add(amount: number): void;
    set(value: number): void;
    get(): number;
    mod(): number;
    toString(): string;
}
declare type Bonus = (c: Character) => void;
export interface Stats<T = number> {
    str: T;
    dex: T;
    con: T;
    int: T;
    wis: T;
    cha: T;
}
export interface Skills<T = number> {
    'acrobatics': T;
    'animal handling': T;
    'arcana': T;
    'athletics': T;
    'deception': T;
    'history': T;
    'insight': T;
    'intimidation': T;
    'investigation': T;
    'medicine': T;
    'nature': T;
    'perception': T;
    'performance': T;
    'persuasion': T;
    'religion': T;
    'sleight of hand': T;
    'stealth': T;
    'survival': T;
}
export declare const StatMap: Readonly<Stats<string>>;
export declare const SkillsMap: Readonly<Skills<keyof Stats<number>>>;
export interface LimitedFeature {
    name: string;
    uses: number;
    recharge: string;
}
export declare type Lazy<T> = () => T;
export declare type Attack = {
    name: string;
    damage: Lazy<string>;
    range?: string;
} & ({
    type: 'attack';
    attackBonus: Lazy<number>;
} | {
    type: 'save';
    save: keyof Stats;
    saveDC: Lazy<number>;
});
export declare class Character {
    name: string;
    background: string;
    playerName: string;
    race: string;
    alignment: string;
    xp: number;
    readonly level: Level;
    readonly class: Map<string, string>;
    readonly stats: Readonly<Stats<Stat>>;
    readonly saves: Stats;
    readonly spells: string[];
    readonly features: string[];
    readonly limitedFeatures: LimitedFeature[];
    readonly items: string[];
    private skillProficiency;
    private saveProficiency;
    readonly skills: Skills<number>;
    readonly proficiencyBonus: number;
    private acBase;
    private acMod;
    readonly ac: number;
    readonly initiative: number;
    speed: number;
    hitDice: number[];
    readonly maxHP: number;
    private spellSaveStat;
    readonly spellSaveDC: number;
    readonly spellAttackMod: number;
    feats: string[];
    attacks: Attack[];
    setRace(race: string, bonus: Bonus): void;
    setBackground(background: string, bonus: Bonus): void;
    setStats(stats: Stats<number>): void;
    setAC(ac: number): void;
    addAC(ac: number): void;
    setSpellSaveStat(stat: keyof Stats): void;
    addHitDie(hitDie: number): void;
    addSkillProficiency(skill: keyof Skills): void;
    isProficient(skill: keyof Skills): boolean;
    addSaveProficiency(save: keyof Stats): void;
    saveIsProficient(skill: keyof Stats): boolean;
    addSubclass(className: string, subclass: string): void;
    levelUp(name: string, bonus: Bonus): void;
    addSpell(spell: string, bonus?: Bonus): void;
    addFeature(feature: string, description?: Entry): void;
    addLimitedFeature(name: string, uses: number, recharge: string): void;
    updateLimitedFeature(name: string, feature: Partial<LimitedFeature>): void;
    addItem(item: string, bonus: Bonus): void;
    addFeat(name: string, bonus: Bonus): void;
    addAttack(attack: Attack): void;
    render(): Promise<string>;
    assert<T>(expect: (c: Character) => T, actual: (c: Character) => T, message: string): string | undefined;
    private applyBonus;
}
export declare function mod(num: number): number;
export {};
