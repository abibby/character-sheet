"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var class_data_1 = __importDefault(require("./class-data"));
function findClass(name) {
    return class_data_1.default.find(function (c) { return c.name === name; });
}
exports.findClass = findClass;
//# sourceMappingURL=class.js.map