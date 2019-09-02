"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var start_1 = __importDefault(require("./start"));
var help_1 = __importDefault(require("./help"));
exports.default = [
    { regexp: /\/start/, callback: start_1.default },
    { regexp: /\/help/, callback: help_1.default }
];
//# sourceMappingURL=export.js.map