"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var ru_1 = __importDefault(require("./locales/ru"));
var locales = [
    { name: 'ru', locale: ru_1.default }
];
function getLocaledUi(locale) {
    if (locale === void 0) { locale = ''; }
    var loc = locales.find(function (_a) {
        var name = _a.name;
        return locale.includes(name);
    });
    if (loc) {
        return loc.locale;
    }
    else {
        return ru_1.default;
    }
}
exports.default = getLocaledUi;
//# sourceMappingURL=export.js.map