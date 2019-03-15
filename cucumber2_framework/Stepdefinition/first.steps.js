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
const cucumber_1 = require("cucumber");
const util_1 = require("../Utility/util");
const protractor_1 = require("protractor");
const menu9_PO_1 = require("../pageobjects/menu9.PO");
let utilobj = new util_1.utils();
let obj1 = new menu9_PO_1.homepageclass();
cucumber_1.Given('User opens Website', function () {
    return __awaiter(this, void 0, void 0, function* () {
        yield utilobj.launchURL(protractor_1.browser.params.url);
    });
});
cucumber_1.When('Click on EXW menu option', function () {
    return __awaiter(this, void 0, void 0, function* () {
        yield obj1.clickEXWmenu();
    });
});
cucumber_1.When('Click on WSSYSNDFK Daily Receivals menu', function () {
    return __awaiter(this, void 0, void 0, function* () {
        yield obj1.clickmenu9();
    });
});
cucumber_1.Then('Menu Nine homepage gets displayed', function () {
    console.log("Menu 9 option reached");
});
