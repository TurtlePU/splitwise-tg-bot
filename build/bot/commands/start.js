"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var _ui_1 = __importDefault(require("@ui"));
exports.default = (function (ctx) { return function (msg) {
    if (msg.from) {
        ctx.bot.sendMessage(msg.chat.id, _ui_1.default(msg.from.language_code).start.text(msg.from.first_name, ctx.authLink), { parse_mode: 'HTML' });
    }
}; });
//# sourceMappingURL=start.js.map