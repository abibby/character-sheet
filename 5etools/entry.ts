
export type Entry =
    | string
    | {
        "type": "entries",
        "name": string,
        "entries": Entry[]
    }
    | {
        "type": "abilityDc"
        "name": string
        "attributes": string
    }
    | {
        "type": "table"
    }