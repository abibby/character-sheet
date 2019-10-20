import Character, { Stats, Stat, Skills, mod } from "./character"


async function html(strings: TemplateStringsArray, ...parts: unknown[]): Promise<string> {
    let out: string = ''
    for (let i = 0; i < strings.length; i++) {
        out += strings[i] + await renderPart(parts[i])
    }

    return out
}

async function renderPart(part: unknown): Promise<string> {
    switch (typeof part) {
        case 'number':
        case 'bigint':
        case 'string':
            return String(part)
        case 'boolean':
            return part ? 'true' : 'false'
        case 'object':
            if (part === null) {
                return ''
            }
            return renderObject(part)
        case 'symbol':
            return part.toString();
        case 'function':
            return part()
        case 'undefined':
            return ''
        default:
            throw new Error('unsupported type ' + typeof part)
    }
}
async function renderObject(a: object): Promise<string> {
    if (a instanceof Promise) {
        return renderPart(await a)
    }
    if (a instanceof Array) {
        return (await Promise.all(a.map(renderPart))).join('')
    }
    return a.toString()
}

function titleCase(s: string): string {
    let out: string = ''
    let cap = true
    for (const c of s) {
        if (cap) {
            out += c.toUpperCase()
            cap = false
        } else {
            out += c
        }
        if (c === ' ') {
            cap = true
        }
    }
    return out
}
function sign(num: number): string {
    if (num > 0) {
        return '+' + num
    }
    return '' + num
}

export async function render(c: Character): Promise<string> {
    return html`
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">

    <link rel="stylesheet" href="main.css">

    <title>${c.name}</title>
</head>
<body>
    <div class="character">
        <header>
            <div class="name">${c.name}</div>
            <div class="class-level">${c.level}</div>
            <div class="background">${c.background}</div>
            <div class="player-name">${c.playerName}</div>
            <div class="race">${c.race}</div>
            <div class="alignment">${c.alignment}</div>
            <div class="xp">${c.xp}</div>
        </header>
        <section class="prof-bonus">
            ${sign(c.proficiencyBonus)}
        </section>
        ${stats(c.stats)}
        ${skills(c.skills)}
        ${combat(c)}
        ${features(c)}
    </div>
</body>
</html>
`
}

async function stats(s: Stats<Stat>): Promise<string> {
    return html`
    <section class="stats">
        ${stat(s.str, 'str')}
        ${stat(s.dex, 'dex')}
        ${stat(s.con, 'con')}
        ${stat(s.int, 'int')}
        ${stat(s.wis, 'wis')}
        ${stat(s.cha, 'cha')}
    </section>
    `
}
async function stat(s: Stat, title: string): Promise<string> {
    return html`
    <div class="stat">
        <span class="title">
            ${title}
        </span>
        <span class="bonus">
            ${sign(mod(s.get()))}
        </span>
        <span class="value">
            ${s}
        </span>
    </div>
    `
}

async function skills(s: Skills<number>): Promise<string> {
    return html`
    <section class="skills">
        ${skill(s['acrobatics'], 'acrobatics')}
        ${skill(s['animal handling'], 'animal handling')}
        ${skill(s['arcana'], 'arcana')}
        ${skill(s['athletics'], 'athletics')}
        ${skill(s['deception'], 'deception')}
        ${skill(s['history'], 'history')}
        ${skill(s['insight'], 'insight')}
        ${skill(s['intimidation'], 'intimidation')}
        ${skill(s['investigation'], 'investigation')}
        ${skill(s['medicine'], 'medicine')}
        ${skill(s['nature'], 'nature')}
        ${skill(s['perception'], 'perception')}
        ${skill(s['performance'], 'performance')}
        ${skill(s['persuasion'], 'persuasion')}
        ${skill(s['religion'], 'religion')}
        ${skill(s['sleight of hand'], 'sleight of hand')}
        ${skill(s['stealth'], 'stealth')}
        ${skill(s['survival'], 'survival')}
    </section>
    `
}

async function skill(s: number, title: string): Promise<string> {
    return html`
    <div class="skill">
        <span class="value">
            ${sign(s)}
        </span>
        <span class="title">
            ${titleCase(title)}
        </span>
    </div>
    `
}
async function combat(c: Character): Promise<string> {
    const hitDice = Object.entries(c.hitDice
        .reduce((group, die) => ({ ...group, [die]: (group[die] || 0) + 1 }), {} as any))
        .map(([die, quantity]) => html`<span class="die">${quantity}d${die}</span> `)
    return html`
    <section class="combat">
        <div class="ac">${c.ac}</div>
        <div class="initiative">${c.initiative}</div>
        <div class="speed">${c.speed}ft</div>
        <div class="hp">
            <div class="max">${c.maxHP}</div>

        </div>
        <div class="hit-dice">
            ${hitDice}
        </div>
        <div class="death-saves">
        </div>
    </section>
    `
}

async function features(c: Character): Promise<string> {
    return html`
    <section class="features">
        ${c.classFeatures.map(f => html`<div>${f}</div>`)}
    </section>
    `
}