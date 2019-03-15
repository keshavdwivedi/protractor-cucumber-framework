"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
class homepageclass {
    constructor() {
        this.EXWenquirymenu = protractor_1.element(protractor_1.by.css('div#first-level>div:first-child>div:nth-child(2)>a'));
        this.menu9option = protractor_1.element(protractor_1.by.css('div#third-level>div:first-child>div:nth-child(4)'));
    }
    clickEXWmenu() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.EXWenquirymenu.click();
        });
    }
    clickmenu9() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.menu9option.click();
        });
    }
}
exports.homepageclass = homepageclass;
