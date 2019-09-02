"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("module-alias/register");
var main_1 = __importDefault(require("./bot/main"));
var authLink = process.env.AUTH_LINK || 'none';
var port = +(process.env.PORT || 8080);
var token = process.env.TG_TOKEN || 'none';
var url = process.env.APP_URL || 'none';
console.log("\nauthLink: " + authLink + "\nport: " + port + "\ntoken: " + token + "\nurl: " + url + "\n");
main_1.default({ authLink: authLink, port: port, token: token, url: url });
//# sourceMappingURL=server.js.map