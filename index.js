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
import { findClass } from "./5etools";
import { render } from "./render";
if (!Object.fromEntries) {
    require('object.fromentries').shim();
}
var Level = /** @class */ (function () {
    function Level() {
        this.classMap = new Map();
    }
    Level.prototype.add = function (className) {
        var lvl = this.classMap.get(className) || 0;
        this.classMap.set(className, lvl + 1);
    };
    Level.prototype.get = function (className) {
        return this.classMap.get(className) || 0;
    };
    Object.defineProperty(Level.prototype, "total", {
        get: function () {
            return Array.from(this.classMap).reduce(function (total, _a) {
                var l = _a[1];
                return total + l;
            }, 0);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Level.prototype, "classes", {
        get: function () {
            return Array.from(this.classMap.keys());
        },
        enumerable: true,
        configurable: true
    });
    Level.prototype.toString = function () {
        return Array.from(this.classMap)
            .map(function (_a) {
            var className = _a[0], level = _a[1];
            return className + ": " + level;
        })
            .join(', ');
    };
    return Level;
}());
export { Level };
var Stat = /** @class */ (function () {
    function Stat() {
        this.value = 0;
        this.override = 0;
    }
    Stat.prototype.add = function (amount) {
        this.override += amount;
    };
    Stat.prototype.set = function (value) {
        this.value = Math.max(value, this.value);
    };
    Stat.prototype.get = function () {
        return Math.max(this.value, this.override);
    };
    Stat.prototype.mod = function () {
        return mod(this.get());
    };
    Stat.prototype.toString = function () {
        return String(this.get());
    };
    return Stat;
}());
export { Stat };
export var StatMap = {
    str: 'strength',
    dex: 'dexterity',
    con: 'constitution',
    int: 'intelligence',
    wis: 'wisdom',
    cha: 'charisma',
};
export var SkillsMap = {
    'acrobatics': 'dex',
    'animal handling': 'wis',
    'arcana': 'int',
    'athletics': 'str',
    'deception': 'cha',
    'history': 'int',
    'insight': 'wis',
    'intimidation': 'cha',
    'investigation': 'int',
    'medicine': 'wis',
    'nature': 'int',
    'perception': 'wis',
    'performance': 'cha',
    'persuasion': 'cha',
    'religion': 'int',
    'sleight of hand': 'dex',
    'stealth': 'dex',
    'survival': 'wis',
};
var Character = /** @class */ (function () {
    function Character() {
        this.name = '';
        this.background = '';
        this.playerName = '';
        this.race = '';
        this.level = new Level();
        this.class = new Map();
        this.stats = {
            str: new Stat(),
            dex: new Stat(),
            con: new Stat(),
            int: new Stat(),
            wis: new Stat(),
            cha: new Stat(),
        };
        this.spells = [];
        this.features = [];
        this.limitedFeatures = [];
        this.items = [];
        this.skillProficiency = [];
        this.saveProficiency = [];
        this.acBase = 0;
        this.acMod = 0;
        this.speed = 0;
        this.hitDice = [];
        this.feats = [];
        this.attacks = [];
    }
    Object.defineProperty(Character.prototype, "saves", {
        get: function () {
            var _this = this;
            return Object.fromEntries(Object.keys(StatMap)
                .map(function (stat) { return [
                stat,
                _this.stats[stat].mod() + Number(_this.saveIsProficient(stat)) * _this.proficiencyBonus,
            ]; }));
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Character.prototype, "skills", {
        get: function () {
            var _this = this;
            return Object.fromEntries(Object.entries(SkillsMap)
                .map(function (_a) {
                var skill = _a[0], stat = _a[1];
                return [
                    skill,
                    _this.stats[stat].mod() + (_this.skillProficiency.filter(function (p) { return p === skill; }).length * _this.proficiencyBonus),
                ];
            }));
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Character.prototype, "proficiencyBonus", {
        get: function () {
            if (this.level.total < 5) {
                return 2;
            }
            else if (this.level.total < 9) {
                return 3;
            }
            else if (this.level.total < 13) {
                return 4;
            }
            else if (this.level.total < 17) {
                return 5;
            }
            return 6;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Character.prototype, "ac", {
        get: function () {
            return this.acBase + this.acMod;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Character.prototype, "initiative", {
        get: function () {
            return this.stats.dex.mod();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Character.prototype, "maxHP", {
        get: function () {
            return this.hitDice[0]
                + this.stats.con.mod() * this.hitDice.length
                + this.hitDice.slice(1).reduce(function (total, die) { return total + (die / 2 + 1); }, 0);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Character.prototype, "spellSaveDC", {
        get: function () {
            if (this.spellSaveStat === undefined) {
                return 0;
            }
            return 8 + this.proficiencyBonus + this.stats[this.spellSaveStat].mod();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Character.prototype, "spellAttackMod", {
        get: function () {
            return 0;
        },
        enumerable: true,
        configurable: true
    });
    Character.prototype.setRace = function (race, bonus) {
        this.race = race;
        this.applyBonus(bonus);
    };
    Character.prototype.setBackground = function (background, bonus) {
        this.background = background;
        this.applyBonus(bonus);
    };
    Character.prototype.setStats = function (stats) {
        this.stats.str.add(stats.str);
        this.stats.dex.add(stats.dex);
        this.stats.con.add(stats.con);
        this.stats.int.add(stats.int);
        this.stats.wis.add(stats.wis);
        this.stats.cha.add(stats.cha);
    };
    Character.prototype.setAC = function (ac) {
        this.acBase = Math.max(ac, this.acBase);
    };
    Character.prototype.addAC = function (ac) {
        this.acMod += ac;
    };
    Character.prototype.setSpellSaveStat = function (stat) {
        this.spellSaveStat = stat;
    };
    Character.prototype.addHitDie = function (hitDie) {
        this.hitDice.push(hitDie);
    };
    Character.prototype.addSkillProficiency = function (skill) {
        this.skillProficiency.push(skill);
    };
    Character.prototype.isProficient = function (skill) {
        return this.skillProficiency.includes(skill);
    };
    Character.prototype.addSaveProficiency = function (save) {
        this.saveProficiency.push(save);
    };
    Character.prototype.saveIsProficient = function (skill) {
        return this.saveProficiency.includes(skill);
    };
    Character.prototype.addSubclass = function (className, subclass) {
        this.class.set(className, subclass);
    };
    Character.prototype.levelUp = function (name, bonus) {
        this.level.add(name);
        var c = findClass(name);
        if (c !== undefined) {
            this.addHitDie(c.hd.faces);
        }
        this.applyBonus(bonus);
    };
    Character.prototype.addSpell = function (spell, bonus) {
        this.spells.push(spell);
        if (bonus) {
            this.applyBonus(bonus);
        }
    };
    Character.prototype.addFeature = function (feature, description) {
        this.features.push(feature);
    };
    Character.prototype.addLimitedFeature = function (name, uses, recharge) {
        this.limitedFeatures.push({
            name: name,
            uses: uses,
            recharge: recharge,
        });
    };
    Character.prototype.updateLimitedFeature = function (name, feature) {
        for (var _i = 0, _a = this.limitedFeatures; _i < _a.length; _i++) {
            var f = _a[_i];
            if (f.name !== name) {
                continue;
            }
            Object.assign(f, feature);
        }
    };
    Character.prototype.addItem = function (item, bonus) {
        this.items.push(item);
        this.applyBonus(bonus);
    };
    Character.prototype.addFeat = function (name, bonus) {
        this.feats.push(name);
        this.applyBonus(bonus);
    };
    Character.prototype.addAttack = function (attack) {
        this.attacks.push(attack);
    };
    Character.prototype.render = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, render(this)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    Character.prototype.assert = function (expect, actual, message) {
        var e = expect(this);
        var a = actual(this);
        if (e === a) {
            return;
        }
        var m = message + ", expected " + e + " got " + a;
        console.log('\x1b[33m%s\x1b[0m', m); //yellow
        return m;
    };
    Character.prototype.applyBonus = function (bonus) {
        bonus(this);
    };
    return Character;
}());
export { Character };
export function mod(num) {
    return Math.floor((num - 10) / 2);
}
//# sourceMappingURL=index.js.map