const wdio = require('webdriverio');
// const assert = require('chai').assert;
const expect = require('chai').expect;

const opts = {
    path: '/wd/hub',
    port: 4723,
    capabilities: {
        platformName: "Android",
        platformVersion: "10",
        deviceName: "emulator-5554",
        app: "/Users/fengfeng/natives/ApiDemos-debug.apk",
        appPackage: "io.appium.android.apis",
        appActivity: ".view.TextFields",
        automationName: 'UiAutomator2'
    }
};

describe('first test', function () {
    it('can print out something', function () {
        expect(true).to.be.true;
    });
});

// describe('first test case', function () {
//     let client;
//
//     before(async function () {
//         client = await wdio.remote(opts);
//     });
//
//     after(async function () {
//         return await client.deleteSession();
//     });
//
//     it('can open the Android app', async function () {
//         const field = await client.$("android.widget.EditText");
//         await field.setValue("Hello World!");
//         const value = field.getText();
//         assert .equal(value, "Hello World!");
//     })
// });
