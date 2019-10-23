import { StatMap } from "./character";
import { findSpell } from "./5etools";
async function html(strings, ...parts) {
    let out = '';
    for (let i = 0; i < strings.length; i++) {
        out += strings[i] + await renderPart(parts[i]);
    }
    return out;
}
async function renderPart(part) {
    switch (typeof part) {
        case 'number':
        case 'bigint':
        case 'string':
            return String(part);
        case 'boolean':
            return part ? 'true' : 'false';
        case 'object':
            if (part === null) {
                return '';
            }
            return renderObject(part);
        case 'symbol':
            return part.toString();
        case 'function':
            return part();
        case 'undefined':
            return '';
        default:
            throw new Error('unsupported type ' + typeof part);
    }
}
async function renderObject(a) {
    if (a instanceof Promise) {
        return renderPart(await a);
    }
    if (a instanceof Array) {
        return (await Promise.all(a.map(renderPart))).join('');
    }
    return a.toString();
}
function titleCase(s) {
    let out = '';
    let cap = true;
    for (const c of s) {
        if (cap) {
            out += c.toUpperCase();
            cap = false;
        }
        else {
            out += c;
        }
        if (c === ' ') {
            cap = true;
        }
    }
    return out;
}
function sign(num) {
    if (num > 0) {
        return '+' + num;
    }
    return '' + num;
}
export async function render(c) {
    return html `
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
        ${stats(c.stats)}
        ${saves(c.saves)}
        ${skills(c)}
        ${combat(c)}
        ${limitedFeatures(c.limitedFeatures)}
        ${items(c)}
        ${features(c)}
    </div>
    ${spells(c.spells)}
</body>

</html>
`;
}
async function stats(s) {
    return html `
    <section class="stats">
        ${stat(s.str, 'str')}
        ${stat(s.dex, 'dex')}
        ${stat(s.con, 'con')}
        ${stat(s.int, 'int')}
        ${stat(s.wis, 'wis')}
        ${stat(s.cha, 'cha')}
    </section>
    `;
}
async function stat(s, title) {
    return html `
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
    `;
}
async function saves(s) {
    return html `
    <section class="saves">
        ${save(s.str, 'str')}
        ${save(s.dex, 'dex')}
        ${save(s.con, 'con')}
        ${save(s.int, 'int')}
        ${save(s.wis, 'wis')}
        ${save(s.cha, 'cha')}
    </section>
    `;
}
async function save(s, title) {
    return html `
    <div class="save">
        <span class="value">
            ${sign(s)}
        </span>
        <span class="title">
            ${StatMap[title]}
        </span>
    </div>
    `;
}
async function skills(c) {
    return html `
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
    `;
}
async function skill(c, skill) {
    return html `
    <div class="skill">
        <span class="value">
            ${c.isProficient(skill) ? '*' : ''}
            ${sign(c.skills[skill])}
        </span>
        <span class="title">
            ${titleCase(skill)}
        </span>
    </div>
    `;
}
async function combat(c) {
    const hitDice = Object.entries(c.hitDice
        .reduce((group, die) => ({ ...group, [die]: (group[die] || 0) + 1 }), {}))
        .map(([die, quantity]) => html `<span class="die">${quantity}d${die}</span>`);
    return html `
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
    `;
}
async function limitedFeatures(features) {
    return html `
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
                ${features.map(f => html `
                <tr>
                    <td>${f.name}</td>
                    <td>${f.recharge}</td>
                    <td class="used"> / ${f.uses}</td>
                </tr>
                `)}
            </tbody>
        </table>
    </section>
    `;
}
async function items(c) {
    return html `
    <section class="items">
        ${c.items.map(f => html `<div>${f}</div>`)}
    </section>
    `;
}
async function features(c) {
    return html `
    <section class="features">
        ${c.features.map(feature)}
    </section>
    `;
}
async function feature(f) {
    return html `<div>${f}</div>`;
}
async function spells(s) {
    return html `
    <div class="spells">
        ${Array.from(new Set(s))
        .map(findSpell)
        .filter((spell) => spell !== undefined)
        .sort((a, b) => a.name.localeCompare(b.name))
        .sort((a, b) => a.level - b.level)
        .map(spell)}
    </div>
    `;
}
async function spell(s) {
    return html `
    <div class="spell">
        <section>
            <h1>${s.name}</h1>
    
            <b>Level:</b>
            ${s.level || 'Cantrip'}
            <br />
            <b>Cast Time:</b>
            ${s.time.map(t => html `${t.number} ${t.unit}`)}
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
    `;
}
function components(cs) {
    return Object.entries(cs).map(([comp, extra]) => {
        let e = '';
        if (typeof extra === 'object') {
            e = ": " + extra.text;
        }
        return comp.toUpperCase() + e;
    }).join(', ');
}
function duration(ds) {
    return ds.map((d) => {
        switch (d.type) {
            case 'instant':
                return 'Instant';
            case 'timed':
                let out = '';
                if (d.concentration !== undefined) {
                    out += 'Concentration, ';
                }
                out += d.duration.amount + ' ' + d.duration.type;
                if (d.duration.amount !== 1) {
                    out += 's';
                }
                return out;
        }
    }).join(', ');
}
async function entry(e) {
    if (typeof e === 'string') {
        return html `<p>${e}</p>`;
    }
    if (e.type === 'entries') {
        return html `${e.entries.map(entry)}`;
    }
    return '';
}
