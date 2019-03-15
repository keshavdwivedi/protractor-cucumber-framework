"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
exports.config = {
    SELENIUM_PROMISE_MANAGER: false,
    framework: 'custom',
    frameworkPath: require.resolve('protractor-cucumber-framework'),
    directConnect: true,
    capabilities: {
        browserName: "chrome",
        chromeOptions: {
            args: ["--disable-notifications", "--disable-infobars", "--start-maximized"]
        }
    },
    cucumberOpts: {
        compiler: "ts:ts-node/register",
        strict: true,
        dryRun: false,
        require: ["./Stepdefinition/*.steps.js"]
    },
    specs: ["./features/test.feature"],
    params: {
        url: "http://192.168.172.21"
    },
    onPrepare: () => {
        protractor_1.browser.waitForAngularEnabled(false);
    }
};
