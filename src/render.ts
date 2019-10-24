import { Character, Stats, Stat, Skills, LimitedFeature, StatMap, Attack } from "."
import { Entry, findSpell, Components, Duration, Spell, findFeat, Feat } from "./5etools"
import { promises as fs } from 'fs'
import { join } from "path"


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

    <style>
        ${fs.readFile(join(__dirname, 'main.css'))}
    </style>

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
        ${stats(c.stats)}
        ${saves(c.saves)}
        ${skills(c)}
        ${combat(c)}
        ${limitedFeatures(c.limitedFeatures)}
        ${items(c)}
        ${features(c)}
        ${attacks(c)}
    </div>
    <section class="lists">
        <h1>Feats</h1>
        <input type="checkbox">
        ${feats(c)}
        <h1>Spells</h1>
        <input type="checkbox">
        ${spells(c.spells)}
    </section>
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
            ${sign(s.mod())}
        </span>
        <span class="value">
            ${s}
        </span>
    </div>
    `
}

async function saves(s: Stats): Promise<string> {
    return html`
    <section class="saves">
        ${save(s.str, 'str')}
        ${save(s.dex, 'dex')}
        ${save(s.con, 'con')}
        ${save(s.int, 'int')}
        ${save(s.wis, 'wis')}
        ${save(s.cha, 'cha')}
    </section>
    `
}
async function save(s: number, title: keyof Stats): Promise<string> {
    return html`
    <div class="save">
        <span class="value">
            ${sign(s)}
        </span>
        <span class="title">
            ${titleCase(StatMap[title])}
        </span>
    </div>
    `
}

async function skills(c: Character): Promise<string> {
    return html`
    <section class="skills">
        ${skill(c, 'acrobatics')}
        ${skill(c, 'animal handling')}
        ${skill(c, 'arcana')}
        ${skill(c, 'athletics')}
        ${skill(c, 'deception')}
        ${skill(c, 'history')}
        ${skill(c, 'insight')}
        ${skill(c, 'intimidation')}
        ${skill(c, 'investigation')}
        ${skill(c, 'medicine')}
        ${skill(c, 'nature')}
        ${skill(c, 'perception')}
        ${skill(c, 'performance')}
        ${skill(c, 'persuasion')}
        ${skill(c, 'religion')}
        ${skill(c, 'sleight of hand')}
        ${skill(c, 'stealth')}
        ${skill(c, 'survival')}
    </section>
    `
}

async function skill(c: Character, skill: keyof Skills): Promise<string> {
    return html`
    <div class="skill">
        <span class="value">
            ${c.isProficient(skill) ? '*' : ''}
            ${sign(c.skills[skill])}
        </span>
        <span class="title">
            ${titleCase(skill)}
        </span>
    </div>
    `
}
async function combat(c: Character): Promise<string> {
    const hitDice = Object.entries(c.hitDice
        .reduce((group, die) => ({ ...group, [die]: (group[die] || 0) + 1 }), {} as any))
        .map(([die, quantity]) => html`<span class="die">${quantity}d${die}</span>`)
    return html`
    <section class="combat">
        <div class="prof-bonus">${sign(c.proficiencyBonus)}</div>
        <div class="ac">${c.ac}</div>
        <div class="initiative">${sign(c.initiative)}</div>
        <div class="speed">${c.speed}ft</div>
        <div class="max-hp">${c.maxHP}</div>
        <div class="hp"></div>
        <div class="hit-dice">${hitDice}</div>
        <div class="death-saves"></div>
    </section>
    `
}

async function limitedFeatures(features: LimitedFeature[]): Promise<string> {
    return html`
    <section class="limited-features">
        <table>
            <thead>
                <tr>
                    <th>Feature</th>
                    <th>Recover</th>
                    <th>Used</th>
                </tr>
            </thead>
            <tbody>
                ${features.map(f => html`
                <tr>
                    <td>${f.name}</td>
                    <td>${f.recharge}</td>
                    <td class="used"> / ${f.uses}</td>
                </tr>
                `)}
            </tbody>
        </table>
    </section>
    `
}
async function items(c: Character): Promise<string> {
    return html`
    <section class="items">
        ${c.items.map(f => html`<div>${f}</div>`)}
    </section>
    `
}

async function features(c: Character): Promise<string> {
    return html`
    <section class="features">
        ${c.features.map(feature)}
    </section>
    `
}
async function feature(f: string): Promise<string> {
    return html`<div>${f}</div>`
}

async function attacks(c: Character): Promise<string> {
    return html`
    <section class="attacks">
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Range</th>
                    <th>To Hit</th>
                    <th>Damage</th>
                </tr>
            </thead>
            <tbody>
                ${c.attacks.map(attack)}
            </tbody>
        </table>
    </section>
    `
}
async function attack(a: Attack): Promise<string> {
    let extra: Promise<string>
    if (a.type === 'attack') {
        extra = html`<td>${sign(a.attackBonus())} vs. AC</td>`
    } else {
        extra = html`<td>DC ${a.saveDC()} ${StatMap[a.save]} save</td>`
    }

    return html`
        <tr>
            <td>${a.name}</td>
            <td>${a.range}</td>
            ${extra}
            <td>${a.damage()}</td>
        </tr>
        `
}
async function feats(c: Character): Promise<string> {
    return html`
    <div class="feats">
        ${c.feats
            .map(findFeat)
            .filter((f): f is Feat => f !== undefined)
            .map(feat)}
    </div>
    `
}
async function feat(f: Feat): Promise<string> {
    return html`
    <div class="feat">
        <h2>${f.name}</h2>
        ${f.entries.map(entry)}
    </div>
    `
}
async function spells(s: string[]): Promise<string> {
    return html`
    <div class="spells">
        ${s.map(findSpell)
            .filter((spell): spell is Spell => spell !== undefined)
            .sort((a, b) => a.name.localeCompare(b.name))
            .sort((a, b) => a.level - b.level)
            .map(spell)}
    </div>
    `
}
async function spell(s: Spell): Promise<string> {
    return html`
    <div class="spell">
        <section>
            <h2>${s.name}</h2>
    
            <b>Level:</b>
            ${s.level || 'Cantrip'}
            <br />
            <b>Cast Time:</b>
            ${s.time.map(t => html`${t.number} ${t.unit}`)}
            <br />
            <b>Range:</b>
            ${s.range.distance.amount} ${s.range.distance.type}
            <br />
            <b>Components:</b>
            ${components(s.components)}
            <br />
            <b>Duration:</b>
            ${duration(s.duration)}
        </section>
        ${s.entries.map(entry)}
    </div>
    `
}

function components(cs: Components): string {
    return Object.entries(cs).map(([comp, extra]) => {
        let e = ''
        if (typeof extra === 'object') {
            e = ": " + extra.text
        }
        return comp.toUpperCase() + e
    }).join(', ')
}

function duration(ds: Duration[]): string {
    return ds.map((d): string => {
        switch (d.type) {
            case 'instant':
                return 'Instant'
            case 'timed':
                let out = ''
                if (d.concentration !== undefined) {
                    out += 'Concentration, '
                }
                out += d.duration.amount + ' ' + d.duration.type
                if (d.duration.amount !== 1) {
                    out += 's'
                }
                return out
        }
    }).join(', ')
}

async function entry(e: Entry): Promise<string> {
    if (typeof e === 'string') {
        return html`<p>${extractTemplates(e)}</p>`
    }
    if (e.type === 'entries') {
        return html`${e.entries.map(entry)}`
    }
    if (e.type === 'list') {
        return html`<ul>${e.items.map(item => html`<li>${extractTemplates(item)}</li>`)}</ul>`
    }
    return ''
}

function extractTemplates(str: string) {
    return str.replace(/{@\w+ (\w+)[^}]*}/g, (_, match) => match)
}