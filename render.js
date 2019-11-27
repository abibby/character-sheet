var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
import { StatMap } from ".";
import { findSpell, findFeat, findClass } from "./5etools";
import { promises as fs } from 'fs';
import { join } from "path";
import { range } from './functional';
function html(strings) {
    var parts = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        parts[_i - 1] = arguments[_i];
    }
    return __awaiter(this, void 0, void 0, function () {
        var out, i, _a, _b;
        return __generator(this, function (_c) {
            switch (_c.label) {
                case 0:
                    out = '';
                    i = 0;
                    _c.label = 1;
                case 1:
                    if (!(i < strings.length)) return [3 /*break*/, 4];
                    _a = out;
                    _b = strings[i];
                    return [4 /*yield*/, renderPart(parts[i])];
                case 2:
                    out = _a + (_b + (_c.sent()));
                    _c.label = 3;
                case 3:
                    i++;
                    return [3 /*break*/, 1];
                case 4: return [2 /*return*/, out];
            }
        });
    });
}
function renderPart(part) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (typeof part) {
                case 'number':
                case 'bigint':
                case 'string':
                    return [2 /*return*/, String(part)];
                case 'boolean':
                    return [2 /*return*/, part ? 'true' : 'false'];
                case 'object':
                    if (part === null) {
                        return [2 /*return*/, ''];
                    }
                    return [2 /*return*/, renderObject(part)];
                case 'symbol':
                    return [2 /*return*/, part.toString()];
                case 'function':
                    return [2 /*return*/, part()];
                case 'undefined':
                    return [2 /*return*/, ''];
                default:
                    throw new Error('unsupported type ' + typeof part);
            }
            return [2 /*return*/];
        });
    });
}
function renderObject(a) {
    return __awaiter(this, void 0, void 0, function () {
        var _a;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    if (!(a instanceof Promise)) return [3 /*break*/, 2];
                    _a = renderPart;
                    return [4 /*yield*/, a];
                case 1: return [2 /*return*/, _a.apply(void 0, [_b.sent()])];
                case 2:
                    if (!(a instanceof Array)) return [3 /*break*/, 4];
                    return [4 /*yield*/, Promise.all(a.map(renderPart))];
                case 3: return [2 /*return*/, (_b.sent()).join('')];
                case 4: return [2 /*return*/, a.toString()];
            }
        });
    });
}
function titleCase(s) {
    var out = '';
    var cap = true;
    for (var _i = 0, s_1 = s; _i < s_1.length; _i++) {
        var c = s_1[_i];
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
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, html(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n<!DOCTYPE html>\n<html lang=\"en\">\n\n<head>\n    <meta charset=\"UTF-8\">\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n    <meta http-equiv=\"X-UA-Compatible\" content=\"ie=edge\">\n\n    <style>\n        ", "\n    </style>\n\n    <title>", "</title>\n</head>\n\n<body>\n    <div class=\"character\">\n        <header>\n            <div class=\"name\">", "</div>\n            <div class=\"class-level\">", "</div>\n            <div class=\"background\">", "</div>\n            <div class=\"player-name\">", "</div>\n            <div class=\"race\">", "</div>\n            <div class=\"alignment\">", "</div>\n            <div class=\"xp\">", "</div>\n        </header>\n        ", "\n        ", "\n        ", "\n        ", "\n        ", "\n        ", "\n        ", "\n        ", "\n    </div>\n    <section class=\"lists\">\n        ", "\n        ", "\n        ", "\n        ", "\n    </section>\n</body>\n\n</html>\n"], ["\n<!DOCTYPE html>\n<html lang=\"en\">\n\n<head>\n    <meta charset=\"UTF-8\">\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n    <meta http-equiv=\"X-UA-Compatible\" content=\"ie=edge\">\n\n    <style>\n        ", "\n    </style>\n\n    <title>", "</title>\n</head>\n\n<body>\n    <div class=\"character\">\n        <header>\n            <div class=\"name\">", "</div>\n            <div class=\"class-level\">", "</div>\n            <div class=\"background\">", "</div>\n            <div class=\"player-name\">", "</div>\n            <div class=\"race\">", "</div>\n            <div class=\"alignment\">", "</div>\n            <div class=\"xp\">", "</div>\n        </header>\n        ", "\n        ", "\n        ", "\n        ", "\n        ", "\n        ", "\n        ", "\n        ", "\n    </div>\n    <section class=\"lists\">\n        ", "\n        ", "\n        ", "\n        ", "\n    </section>\n</body>\n\n</html>\n"])), fs.readFile(join(__dirname, 'main.css')), c.name, c.name, c.level, c.background, c.playerName, c.race, c.alignment, c.xp, stats(c.stats), saves(c.saves), skills(c), combat(c), limitedFeatures(c.limitedFeatures), items(c), features(c), attacks(c), collapse('Limited Class Features', limitedClassFeatures(c)), collapse('Class Features', classFeatures(c)), collapse('Feats', feats(c)), collapse('Spells', spells(c.spells)))];
        });
    });
}
function collapse(header, body) {
    return __awaiter(this, void 0, void 0, function () {
        var key;
        return __generator(this, function (_a) {
            key = Math.random();
            return [2 /*return*/, html(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n    <div class='collapse'>\n        <input type=\"checkbox\" id=\"", "\">\n        <label class='collapse-header' for=\"", "\">\n            <h1>", "</h1>\n        </label>\n        <div class='collapse-body'>", "</div>\n    </div>\n    "], ["\n    <div class='collapse'>\n        <input type=\"checkbox\" id=\"", "\">\n        <label class='collapse-header' for=\"", "\">\n            <h1>", "</h1>\n        </label>\n        <div class='collapse-body'>", "</div>\n    </div>\n    "])), key, key, header, body)];
        });
    });
}
function stats(s) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, html(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n    <section class=\"stats\">\n        ", "\n        ", "\n        ", "\n        ", "\n        ", "\n        ", "\n    </section>\n    "], ["\n    <section class=\"stats\">\n        ", "\n        ", "\n        ", "\n        ", "\n        ", "\n        ", "\n    </section>\n    "])), stat(s.str, 'str'), stat(s.dex, 'dex'), stat(s.con, 'con'), stat(s.int, 'int'), stat(s.wis, 'wis'), stat(s.cha, 'cha'))];
        });
    });
}
function stat(s, title) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, html(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n    <div class=\"stat\">\n        <span class=\"title\">\n            ", "\n        </span>\n        <span class=\"bonus\">\n            ", "\n        </span>\n        <span class=\"value\">\n            ", "\n        </span>\n    </div>\n    "], ["\n    <div class=\"stat\">\n        <span class=\"title\">\n            ", "\n        </span>\n        <span class=\"bonus\">\n            ", "\n        </span>\n        <span class=\"value\">\n            ", "\n        </span>\n    </div>\n    "])), title, sign(s.mod()), s)];
        });
    });
}
function saves(s) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, html(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n    <section class=\"saves\">\n        ", "\n        ", "\n        ", "\n        ", "\n        ", "\n        ", "\n    </section>\n    "], ["\n    <section class=\"saves\">\n        ", "\n        ", "\n        ", "\n        ", "\n        ", "\n        ", "\n    </section>\n    "])), save(s.str, 'str'), save(s.dex, 'dex'), save(s.con, 'con'), save(s.int, 'int'), save(s.wis, 'wis'), save(s.cha, 'cha'))];
        });
    });
}
function save(s, title) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, html(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n    <div class=\"save\">\n        <span class=\"value\">\n            ", "\n        </span>\n        <span class=\"title\">\n            ", "\n        </span>\n    </div>\n    "], ["\n    <div class=\"save\">\n        <span class=\"value\">\n            ", "\n        </span>\n        <span class=\"title\">\n            ", "\n        </span>\n    </div>\n    "])), sign(s), titleCase(StatMap[title]))];
        });
    });
}
function skills(c) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, html(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n    <section class=\"skills\">\n        ", "\n        ", "\n        ", "\n        ", "\n        ", "\n        ", "\n        ", "\n        ", "\n        ", "\n        ", "\n        ", "\n        ", "\n        ", "\n        ", "\n        ", "\n        ", "\n        ", "\n        ", "\n    </section>\n    "], ["\n    <section class=\"skills\">\n        ", "\n        ", "\n        ", "\n        ", "\n        ", "\n        ", "\n        ", "\n        ", "\n        ", "\n        ", "\n        ", "\n        ", "\n        ", "\n        ", "\n        ", "\n        ", "\n        ", "\n        ", "\n    </section>\n    "])), skill(c, 'acrobatics'), skill(c, 'animal handling'), skill(c, 'arcana'), skill(c, 'athletics'), skill(c, 'deception'), skill(c, 'history'), skill(c, 'insight'), skill(c, 'intimidation'), skill(c, 'investigation'), skill(c, 'medicine'), skill(c, 'nature'), skill(c, 'perception'), skill(c, 'performance'), skill(c, 'persuasion'), skill(c, 'religion'), skill(c, 'sleight of hand'), skill(c, 'stealth'), skill(c, 'survival'))];
        });
    });
}
function skill(c, skill) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, html(templateObject_8 || (templateObject_8 = __makeTemplateObject(["\n    <div class=\"skill\">\n        <span class=\"value\">\n            ", "\n            ", "\n        </span>\n        <span class=\"title\">\n            ", "\n        </span>\n    </div>\n    "], ["\n    <div class=\"skill\">\n        <span class=\"value\">\n            ", "\n            ", "\n        </span>\n        <span class=\"title\">\n            ", "\n        </span>\n    </div>\n    "])), c.isProficient(skill) ? '*' : '', sign(c.skills[skill]), titleCase(skill))];
        });
    });
}
function combat(c) {
    return __awaiter(this, void 0, void 0, function () {
        var hitDice;
        return __generator(this, function (_a) {
            hitDice = Object.entries(c.hitDice
                .reduce(function (group, die) {
                var _a;
                return (__assign(__assign({}, group), (_a = {}, _a[die] = (group[die] || 0) + 1, _a)));
            }, {}))
                .map(function (_a) {
                var die = _a[0], quantity = _a[1];
                return html(templateObject_9 || (templateObject_9 = __makeTemplateObject(["<span class=\"die\">", "d", "</span>"], ["<span class=\"die\">", "d", "</span>"])), quantity, die);
            });
            return [2 /*return*/, html(templateObject_10 || (templateObject_10 = __makeTemplateObject(["\n    <section class=\"combat\">\n        <div class=\"prof-bonus\">", "</div>\n        <div class=\"ac\">", "</div>\n        <div class=\"initiative\">", "</div>\n        <div class=\"speed\">", "ft</div>\n        <div class=\"max-hp\">", "</div>\n        <div class=\"hp\"></div>\n        <div class=\"hit-dice\">", "</div>\n        <div class=\"death-saves\"></div>\n    </section>\n    "], ["\n    <section class=\"combat\">\n        <div class=\"prof-bonus\">", "</div>\n        <div class=\"ac\">", "</div>\n        <div class=\"initiative\">", "</div>\n        <div class=\"speed\">", "ft</div>\n        <div class=\"max-hp\">", "</div>\n        <div class=\"hp\"></div>\n        <div class=\"hit-dice\">", "</div>\n        <div class=\"death-saves\"></div>\n    </section>\n    "])), sign(c.proficiencyBonus), c.ac, sign(c.initiative), c.speed, c.maxHP, hitDice)];
        });
    });
}
function limitedFeatures(features) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, html(templateObject_13 || (templateObject_13 = __makeTemplateObject(["\n    <section class=\"limited-features\">\n        <table>\n            <thead>\n                <tr>\n                    <th>Feature</th>\n                    <th>Recover</th>\n                    <th></th>\n                </tr>\n            </thead>\n            <tbody>\n                ", "\n            </tbody>\n        </table>\n    </section>\n    "], ["\n    <section class=\"limited-features\">\n        <table>\n            <thead>\n                <tr>\n                    <th>Feature</th>\n                    <th>Recover</th>\n                    <th></th>\n                </tr>\n            </thead>\n            <tbody>\n                ",
                    "\n            </tbody>\n        </table>\n    </section>\n    "])), features.map(function (f) { return html(templateObject_12 || (templateObject_12 = __makeTemplateObject(["\n                <tr>\n                    <td>", "</td>\n                    <td>", "</td>\n                    <td class=\"used\">\n                        ", "\n                    </td>\n                </tr>\n                "], ["\n                <tr>\n                    <td>", "</td>\n                    <td>", "</td>\n                    <td class=\"used\">\n                        ", "\n                    </td>\n                </tr>\n                "])), f.name, f.recharge, range(f.uses).map(function () { return html(templateObject_11 || (templateObject_11 = __makeTemplateObject(["<span class='use'></span>"], ["<span class='use'></span>"]))); })); }))];
        });
    });
}
function items(c) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, html(templateObject_15 || (templateObject_15 = __makeTemplateObject(["\n    <section class=\"items\">\n        ", "\n    </section>\n    "], ["\n    <section class=\"items\">\n        ", "\n    </section>\n    "])), c.items.map(function (f) { return html(templateObject_14 || (templateObject_14 = __makeTemplateObject(["<div>", "</div>"], ["<div>", "</div>"])), f); }))];
        });
    });
}
function features(c) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, html(templateObject_16 || (templateObject_16 = __makeTemplateObject(["\n    <section class=\"features\">\n        ", "\n    </section>\n    "], ["\n    <section class=\"features\">\n        ", "\n    </section>\n    "])), c.features.map(feature))];
        });
    });
}
function feature(f) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, html(templateObject_17 || (templateObject_17 = __makeTemplateObject(["<div>", "</div>"], ["<div>", "</div>"])), f)];
        });
    });
}
function attacks(c) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, html(templateObject_18 || (templateObject_18 = __makeTemplateObject(["\n    <section class=\"attacks\">\n        <table>\n            <thead>\n                <tr>\n                    <th>Name</th>\n                    <th>Range</th>\n                    <th>To Hit</th>\n                    <th>Damage</th>\n                </tr>\n            </thead>\n            <tbody>\n                ", "\n            </tbody>\n        </table>\n    </section>\n    "], ["\n    <section class=\"attacks\">\n        <table>\n            <thead>\n                <tr>\n                    <th>Name</th>\n                    <th>Range</th>\n                    <th>To Hit</th>\n                    <th>Damage</th>\n                </tr>\n            </thead>\n            <tbody>\n                ", "\n            </tbody>\n        </table>\n    </section>\n    "])), c.attacks.map(attack))];
        });
    });
}
function attack(a) {
    return __awaiter(this, void 0, void 0, function () {
        var extra;
        return __generator(this, function (_a) {
            if (a.type === 'attack') {
                extra = html(templateObject_19 || (templateObject_19 = __makeTemplateObject(["<td>", " vs. AC</td>"], ["<td>", " vs. AC</td>"])), sign(a.attackBonus()));
            }
            else {
                extra = html(templateObject_20 || (templateObject_20 = __makeTemplateObject(["<td>DC ", " ", " save</td>"], ["<td>DC ", " ", " save</td>"])), a.saveDC(), StatMap[a.save]);
            }
            return [2 /*return*/, html(templateObject_21 || (templateObject_21 = __makeTemplateObject(["\n        <tr>\n            <td>", "</td>\n            <td>", "</td>\n            ", "\n            <td>", "</td>\n        </tr>\n        "], ["\n        <tr>\n            <td>", "</td>\n            <td>", "</td>\n            ", "\n            <td>", "</td>\n        </tr>\n        "])), a.name, a.range, extra, a.damage())];
        });
    });
}
function classFeatures(c) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, html(templateObject_22 || (templateObject_22 = __makeTemplateObject(["\n    <div class=\"class-features columns\">\n        ", "\n    </div>\n    "], ["\n    <div class=\"class-features columns\">\n        ", "\n    </div>\n    "])), c.features.map(classFeature(c)))];
        });
    });
}
function limitedClassFeatures(c) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, html(templateObject_23 || (templateObject_23 = __makeTemplateObject(["\n    <div class=\"limited-class-features columns\">\n        ", "\n    </div>\n    "], ["\n    <div class=\"limited-class-features columns\">\n        ", "\n    </div>\n    "])), c.limitedFeatures.map(function (f) { return classFeature(c)(f.name); }))];
        });
    });
}
function classFeature(c) {
    var _this = this;
    return function (name) { return __awaiter(_this, void 0, void 0, function () {
        var cls, features;
        return __generator(this, function (_a) {
            cls = findClass(c.level.classes[0]);
            features = cls.classFeatures.flatMap(function (cf) { return getFeature(cf, name).map(entry); })
                .concat(cls.subclasses
                .filter(function (sub) { return Array.from(c.class.values()).includes(sub.name); })
                .flatMap(function (subClass) { return subClass.subclassFeatures.flatMap(function (cf) { return getFeature(cf, name).map(entry); }); }));
            if (features.length === 0) {
                return [2 /*return*/, ''];
            }
            return [2 /*return*/, html(templateObject_24 || (templateObject_24 = __makeTemplateObject(["\n        <div class=\"class-feature column-item\">\n            <h2>", "</h2>\n            ", "\n        </div>\n        "], ["\n        <div class=\"class-feature column-item\">\n            <h2>", "</h2>\n            ", "\n        </div>\n        "])), name, features)];
        });
    }); };
}
function getFeature(entries, name) {
    for (var _i = 0, entries_1 = entries; _i < entries_1.length; _i++) {
        var entry_1 = entries_1[_i];
        if (typeof entry_1 === 'string') {
            continue;
        }
        if (('type' in entry_1) && entry_1.type !== 'entries') {
            continue;
        }
        if (entry_1.name === name) {
            return entry_1.entries;
        }
        var feature_1 = getFeature(entry_1.entries, name);
        if (feature_1 !== undefined) {
            return feature_1;
        }
    }
    return [];
}
function feats(c) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, html(templateObject_25 || (templateObject_25 = __makeTemplateObject(["\n    <div class=\"feats columns\">\n        ", "\n    </div>\n    "], ["\n    <div class=\"feats columns\">\n        ",
                    "\n    </div>\n    "])), c.feats
                    .map(findFeat)
                    .filter(function (f) { return f !== undefined; })
                    .map(feat))];
        });
    });
}
function feat(f) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, html(templateObject_26 || (templateObject_26 = __makeTemplateObject(["\n    <div class=\"feat column-item\">\n        <h2>", "</h2>\n        ", "\n    </div>\n    "], ["\n    <div class=\"feat column-item\">\n        <h2>", "</h2>\n        ", "\n    </div>\n    "])), f.name, f.entries.map(entry))];
        });
    });
}
function spells(s) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, html(templateObject_27 || (templateObject_27 = __makeTemplateObject(["\n    <div class=\"spells columns\">\n        ", "\n    </div>\n    "], ["\n    <div class=\"spells columns\">\n        ",
                    "\n    </div>\n    "])), s.map(findSpell)
                    .filter(function (spell) { return spell !== undefined; })
                    .sort(function (a, b) { return a.name.localeCompare(b.name); })
                    .sort(function (a, b) { return a.level - b.level; })
                    .map(spell))];
        });
    });
}
function spell(s) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, html(templateObject_29 || (templateObject_29 = __makeTemplateObject(["\n    <div class=\"spell column-item\">\n        <section>\n            <h2>", "</h2>\n    \n            <b>Level:</b>\n            ", "\n            <br />\n            <b>Cast Time:</b>\n            ", "\n            <br />\n            <b>Range:</b>\n            ", " ", "\n            <br />\n            <b>Components:</b>\n            ", "\n            <br />\n            <b>Duration:</b>\n            ", "\n        </section>\n        ", "\n    </div>\n    "], ["\n    <div class=\"spell column-item\">\n        <section>\n            <h2>", "</h2>\n    \n            <b>Level:</b>\n            ", "\n            <br />\n            <b>Cast Time:</b>\n            ", "\n            <br />\n            <b>Range:</b>\n            ", " ", "\n            <br />\n            <b>Components:</b>\n            ", "\n            <br />\n            <b>Duration:</b>\n            ", "\n        </section>\n        ", "\n    </div>\n    "])), s.name, s.level || 'Cantrip', s.time.map(function (t) { return html(templateObject_28 || (templateObject_28 = __makeTemplateObject(["", " ", ""], ["", " ", ""])), t.number, t.unit); }), s.range.distance.amount, s.range.distance.type, components(s.components), duration(s.duration), s.entries.map(entry))];
        });
    });
}
function components(cs) {
    return Object.entries(cs).map(function (_a) {
        var comp = _a[0], extra = _a[1];
        var e = '';
        if (typeof extra === 'object') {
            e = ": " + extra.text;
        }
        return comp.toUpperCase() + e;
    }).join(', ');
}
function duration(ds) {
    return ds.map(function (d) {
        switch (d.type) {
            case 'instant':
                return 'Instant';
            case 'timed':
                var out = '';
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
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            if (typeof e === 'string') {
                return [2 /*return*/, html(templateObject_30 || (templateObject_30 = __makeTemplateObject(["<p>", "</p>"], ["<p>", "</p>"])), extractTemplates(e))];
            }
            if (e.type === 'entries') {
                return [2 /*return*/, html(templateObject_31 || (templateObject_31 = __makeTemplateObject(["", ""], ["", ""])), e.entries.map(entry))];
            }
            if (e.type === 'list') {
                return [2 /*return*/, html(templateObject_33 || (templateObject_33 = __makeTemplateObject(["<ul>", "</ul>"], ["<ul>", "</ul>"])), e.items.map(function (item) { return html(templateObject_32 || (templateObject_32 = __makeTemplateObject(["<li>", "</li>"], ["<li>", "</li>"])), extractTemplates(item)); }))];
            }
            return [2 /*return*/, ''];
        });
    });
}
function extractTemplates(str) {
    return str.replace(/{@\w+ ([^|}]+)[^}]*}/g, function (_, match) { return match; });
}
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8, templateObject_9, templateObject_10, templateObject_11, templateObject_12, templateObject_13, templateObject_14, templateObject_15, templateObject_16, templateObject_17, templateObject_18, templateObject_19, templateObject_20, templateObject_21, templateObject_22, templateObject_23, templateObject_24, templateObject_25, templateObject_26, templateObject_27, templateObject_28, templateObject_29, templateObject_30, templateObject_31, templateObject_32, templateObject_33;
//# sourceMappingURL=render.js.map