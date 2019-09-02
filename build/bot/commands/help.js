"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var export_1 = __importDefault(require("../ui/export"));
exports.default = (function (ctx) {
    return function (msg) {
        if (msg.from) {
            ctx.bot.sendMessage(msg.chat.id, export_1.default(msg.from.language_code).help.text());
        }
    };
});
//# sourceMappingURL=help.js.map