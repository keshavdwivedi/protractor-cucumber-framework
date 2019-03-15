"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
class utils {
    launchURL(url) {
        protractor_1.browser.get(url);
    }
}
exports.utils = utils;
