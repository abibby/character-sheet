"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var spell_data_1 = __importDefault(require("./spell-data"));
function findSpell(name) {
    return spell_data_1.default.find(function (spell) { return spell.name === name; });
}
exports.findSpell = findSpell;
//# sourceMappingURL=spell.js.map