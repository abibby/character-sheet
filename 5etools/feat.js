"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var feat_data_1 = __importDefault(require("./feat-data"));
function findFeat(name) {
    return feat_data_1.default.find(function (f) { return f.name === name; });
}
exports.findFeat = findFeat;
//# sourceMappingURL=feat.js.map