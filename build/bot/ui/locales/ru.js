"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var locale = {
    start: {
        text: function (name, authLink) {
            if (authLink) {
                return "\u041F\u0440\u0438\u0432\u0435\u0442, " + name + "!\n" +
                    ("\u041F\u0440\u0435\u0436\u0434\u0435 \u0447\u0435\u043C \u043D\u0430\u0447\u0430\u0442\u044C \u0440\u0430\u0431\u043E\u0442\u0443, \u0432\u043E\u0439\u0434\u0438 \u0432 Splitwise <a href=\"" + authLink + "\">\u043F\u043E \u044D\u0442\u043E\u0439 \u0441\u0441\u044B\u043B\u043A\u0435</a>.");
            }
            else {
                return "\u0421\u043D\u043E\u0432\u0430 \u043F\u0440\u0438\u0432\u0435\u0442, " + name + "!\n" +
                    "\u0422\u044B \u0443\u0436\u0435 \u0432\u043E\u0448\u0451\u043B \u0432 Splitwise. \u0427\u0442\u043E\u0431\u044B \u0443\u0437\u043D\u0430\u0442\u044C, \u043A\u0430\u043A \u043C\u043D\u043E\u0439 \u0443\u043F\u0440\u0430\u0432\u043B\u044F\u0442\u044C, \u0432\u0432\u0435\u0434\u0438 /help.";
            }
        }
    },
    help: {
        text: function () {
            return "\u0412\u043E\u0442 \u0441\u043F\u0438\u0441\u043E\u043A \u043C\u043E\u0438\u0445 \u043A\u043E\u043C\u0430\u043D\u0434:\n\n" +
                "/start \u2014 \u043D\u0430\u0447\u0430\u043B\u043E \u0440\u0430\u0431\u043E\u0442\u044B.\n" +
                "/help \u2014 \u043F\u043E\u043A\u0430\u0437\u0430\u0442\u044C \u044D\u0442\u043E \u0441\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u0435.";
        }
    }
};
exports.default = locale;
//# sourceMappingURL=ru.js.map