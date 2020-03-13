var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { StatMap } from "./index.js";
import { findSpell, findFeat, findClass } from "./5etools/index.js";
import { range } from './functional.js';
function html(strings, ...parts) {
    return __awaiter(this, void 0, void 0, function* () {
        let out = '';
        for (let i = 0; i < strings.length; i++) {
            out += strings[i] + (yield renderPart(parts[i]));
        }
        return out;
    });
}
function renderPart(part) {
    return __awaiter(this, void 0, void 0, function* () {
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
    });
}
function renderObject(a) {
    return __awaiter(this, void 0, void 0, function* () {
        if (a instanceof Promise) {
            return renderPart(yield a);
        }
        if (a instanceof Array) {
            return (yield Promise.all(a.map(renderPart))).join('');
        }
        return a.toString();
    });
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
export function render(c) {
    return __awaiter(this, void 0, void 0, function* () {
        return html `
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
        ${spellList(c)}
    </div>
    <section class="lists">
        ${collapse('Limited Class Features', limitedClassFeatures(c))}
        ${collapse('Class Features', classFeatures(c))}
        ${collapse('Feats', feats(c))}
        ${collapse('Spells', spells(c.spells))}
    </section>
    `;
    });
}
function collapse(header, body) {
    return __awaiter(this, void 0, void 0, function* () {
        const key = Math.random();
        return html `
    <div class='collapse'>
        <input type="checkbox" id="${key}">
        <label class='collapse-header' for="${key}">
            <h1>${header}</h1>
        </label>
        <div class='collapse-body'>${body}</div>
    </div>
    `;
    });
}
function stats(s) {
    return __awaiter(this, void 0, void 0, function* () {
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
    });
}
function stat(s, title) {
    return __awaiter(this, void 0, void 0, function* () {
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
    });
}
function saves(s) {
    return __awaiter(this, void 0, void 0, function* () {
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
    });
}
function save(s, title) {
    return __awaiter(this, void 0, void 0, function* () {
        return html `
    <div class="save">
        <span class="value">
            ${sign(s)}
        </span>
        <span class="title">
            ${titleCase(StatMap[title])}
        </span>
    </div>
    `;
    });
}
function skills(c) {
    return __awaiter(this, void 0, void 0, function* () {
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
    });
}
function skill(c, skill) {
    return __awaiter(this, void 0, void 0, function* () {
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
    });
}
function combat(c) {
    return __awaiter(this, void 0, void 0, function* () {
        const hitDice = Object.entries(c.hitDice
            .reduce((group, die) => (Object.assign(Object.assign({}, group), { [die]: (group[die] || 0) + 1 })), {}))
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
    });
}
function limitedFeatures(features) {
    return __awaiter(this, void 0, void 0, function* () {
        return html `
    <section class="limited-features">
        <table>
            <thead>
                <tr>
                    <th>Feature</th>
                    <th>Recover</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                ${features.map(f => html `
                <tr>
                    <td>${f.name}</td>
                    <td>${f.recharge}</td>
                    <td class="used">
                        ${range(f.uses).map(() => html `<span class='use'></span>`)}
                    </td>
                </tr>
                `)}
            </tbody>
        </table>
    </section>
    `;
    });
}
function items(c) {
    return __awaiter(this, void 0, void 0, function* () {
        return html `
    <section class="items">
        ${c.items.map(f => html `<div>${f}</div>`)}
    </section>
    `;
    });
}
function features(c) {
    return __awaiter(this, void 0, void 0, function* () {
        return html `
    <section class="features">
        ${c.features.map(feature)}
    </section>
    `;
    });
}
function feature(f) {
    return __awaiter(this, void 0, void 0, function* () {
        return html `<div>${f}</div>`;
    });
}
function attacks(c) {
    return __awaiter(this, void 0, void 0, function* () {
        return html `
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
    `;
    });
}
function attack(a) {
    return __awaiter(this, void 0, void 0, function* () {
        let extra;
        if (a.type === 'attack') {
            extra = html `<td>${sign(a.attackBonus())} vs. AC</td>`;
        }
        else {
            extra = html `<td>DC ${a.saveDC()} ${StatMap[a.save]} save</td>`;
        }
        return html `
        <tr>
            <td>${a.name}</td>
            <td>${a.range}</td>
            ${extra}
            <td>${a.damage()}</td>
        </tr>
        `;
    });
}
function classFeatures(c) {
    return __awaiter(this, void 0, void 0, function* () {
        return html `
    <div class="class-features columns">
        ${c.features.map(classFeature(c))}
    </div>
    `;
    });
}
function limitedClassFeatures(c) {
    return __awaiter(this, void 0, void 0, function* () {
        return html `
    <div class="limited-class-features columns">
        ${c.limitedFeatures.map(f => classFeature(c)(f.name))}
    </div>
    `;
    });
}
function classFeature(c) {
    return (name) => __awaiter(this, void 0, void 0, function* () {
        const cls = findClass(c.level.classes[0]);
        const features = cls.classFeatures.flatMap(cf => getFeature(cf, name).map(entry))
            .concat(cls.subclasses
            .filter(sub => Array.from(c.class.values()).includes(sub.name))
            .flatMap(subClass => subClass.subclassFeatures.flatMap(cf => getFeature(cf, name).map(entry))));
        if (features.length === 0) {
            return '';
        }
        return html `
        <div class="class-feature column-item">
            <h2>${name}</h2>
            ${features}
        </div>
        `;
    });
}
function getFeature(entries, name) {
    for (const entry of entries) {
        if (typeof entry === 'string') {
            continue;
        }
        if (!('entries' in entry)) {
            continue;
        }
        if ('name' in entry && entry.name === name) {
            return entry.entries;
        }
        const feature = getFeature(entry.entries, name);
        if (feature.length > 0) {
            return feature;
        }
    }
    return [];
}
function feats(c) {
    return __awaiter(this, void 0, void 0, function* () {
        return html `
    <div class="feats columns">
        ${c.feats
            .map(findFeat)
            .filter((f) => f !== undefined)
            .map(feat)}
    </div>
    `;
    });
}
function feat(f) {
    return __awaiter(this, void 0, void 0, function* () {
        return html `
    <div class="feat column-item">
        <h2>${f.name}</h2>
        ${f.entries.map(entry)}
    </div>
    `;
    });
}
function spells(s) {
    return __awaiter(this, void 0, void 0, function* () {
        return html `
    <div class="spells columns">
        ${s.map(findSpell)
            .filter((spell) => spell !== undefined)
            .sort((a, b) => a.name.localeCompare(b.name))
            .sort((a, b) => a.level - b.level)
            .map(spell)}
    </div>
    `;
    });
}
function spell(s) {
    return __awaiter(this, void 0, void 0, function* () {
        return html `
    <div class="spell column-item">
        <section>
            <h2>${s.name}</h2>
    
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
    });
}
function isConcentration(s) {
    for (const d of s.duration) {
        if (d.type === 'timed' && d.concentration) {
            return true;
        }
    }
    return false;
}
const fullCaster = [
    [2, 0, 0, 0, 0, 0, 0, 0, 0],
    [3, 0, 0, 0, 0, 0, 0, 0, 0],
    [4, 2, 0, 0, 0, 0, 0, 0, 0],
    [4, 3, 0, 0, 0, 0, 0, 0, 0],
    [4, 3, 2, 0, 0, 0, 0, 0, 0],
    [4, 3, 3, 0, 0, 0, 0, 0, 0],
    [4, 3, 3, 1, 0, 0, 0, 0, 0],
    [4, 3, 3, 2, 0, 0, 0, 0, 0],
    [4, 3, 3, 3, 1, 0, 0, 0, 0],
    [4, 3, 3, 3, 2, 0, 0, 0, 0],
    [4, 3, 3, 3, 2, 1, 0, 0, 0],
    [4, 3, 3, 3, 2, 1, 0, 0, 0],
    [4, 3, 3, 3, 2, 1, 1, 0, 0],
    [4, 3, 3, 3, 2, 1, 1, 0, 0],
    [4, 3, 3, 3, 2, 1, 1, 1, 0],
    [4, 3, 3, 3, 2, 1, 1, 1, 0],
    [4, 3, 3, 3, 2, 1, 1, 1, 1],
    [4, 3, 3, 3, 3, 1, 1, 1, 1],
    [4, 3, 3, 3, 3, 2, 1, 1, 1],
    [4, 3, 3, 3, 3, 2, 2, 1, 1],
];
function spellList(c) {
    return __awaiter(this, void 0, void 0, function* () {
        const spells = c.spells.map(findSpell)
            .filter((spell) => spell !== undefined)
            .sort((a, b) => a.name.localeCompare(b.name));
        const spellsByLevel = [];
        for (let level = 0; level < 10; level++) {
            spellsByLevel.push(spells.filter(spell => spell.level === level));
        }
        return html `
    <div class="spell-list">
        ${spellsByLevel.filter(s => s.length > 0).map((spells, level) => html `
            <h3>
                Level ${level}
                <span class="used">
                    ${range(fullCaster[c.level.total - 1][level - 1]).map(() => html `<span class='use'></span>`)}
                </span>
            </h3>
            <ul>
                ${spells.map(spell => html `<li>${spell.name} ${isConcentration(spell) && '<span class="concentration">C</span>'}</li>`)}
            </ul>
        `)}
    </div>
    `;
    });
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
function entry(e) {
    return __awaiter(this, void 0, void 0, function* () {
        if (typeof e === 'string') {
            return html `<p>${extractTemplates(e)}</p>`;
        }
        if (e.type === 'entries') {
            return html `<h3>${e.name}</h3>${e.entries.map(entry)}`;
        }
        if (e.type === 'options') {
            return html `${e.entries.map(entry)}`;
        }
        if (e.type === 'list') {
            return html `<ul>${e.items.map(item => html `<li>${extractTemplates(item)}</li>`)}</ul>`;
        }
        if (e instanceof Array) {
            return html `${e.map(entry)}`;
        }
        console.log(e);
        return '';
    });
}
function extractTemplates(str) {
    return str.replace(/{@\w+ ([^|}]+)[^}]*}/g, (_, match) => match);
}
//# sourceMappingURL=render.js.map