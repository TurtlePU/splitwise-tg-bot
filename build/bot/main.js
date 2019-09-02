"use strict";
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var node_telegram_bot_api_1 = __importDefault(require("node-telegram-bot-api"));
var export_1 = __importDefault(require("./commands/export"));
function start(options) {
    var token = options.token, port = options.port;
    var bot = new node_telegram_bot_api_1.default(token, { webHook: { port: port } });
    export_1.default.forEach(function (_a) {
        var regexp = _a.regexp, callback = _a.callback;
        return bot.onText(regexp, callback(__assign({ bot: bot }, options)));
    });
    return bot.setWebHook(options.url + "/bot" + token);
}
exports.default = start;
//# sourceMappingURL=main.js.map