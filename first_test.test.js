const wdio = require('webdriverio');
const assert = require('chai').assert;
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

describe('first test case', function () {
    let client;

    before(async function () {
        client = await wdio.remote(opts);
    });

    after(async function () {
        return await client.deleteSession();
    });

    it('can open the Demo Android app', async function () {
        const current_package = await client.getCurrentPackage();
        assert.equal(current_package, 'io.appium.android.apis');

        const current_activity = await client.getCurrentActivity();
        assert.equal(current_activity, '.view.TextFields');
    });

    it('can input text', async function() {
        const element = await client.$('android.widget.EditText');
        await element.addValue('Hello World!');
        const value = await element.getText();
        assert.equal(value, 'Hello World!');
    })
});
