/* jshint esversion: 6 */
'use strict';

/* Set environment variables based on current branch */
if (process.env.TRAVIS_BRANCH !== 'master' || process.env.TRAVIS_PULL_REQUEST) {
	process.env.SAUCE_ACCESS_KEY = process.env.SAUCE_ACCESS_KEY_NOT_MASTER;
	process.env.SAUCE_USERNAME = process.env.SAUCE_USERNAME_NOT_MASTER;
}

var testSauceLabs = require('test-saucelabs');

// https://github.com/SeleniumHQ/selenium/wiki/DesiredCapabilities
var platforms = [{
	browserName: 'internet explorer',
	platform: 'Windows 7',
	version: '9'
}, {
	browserName: 'internet explorer',
	platform: 'Windows 8',
	version: '10.0'
}, {
	browserName: 'internet explorer',
	platform: 'Windows 10',
	version: '11.0'
}, {
	browserName: 'safari',
	platform: 'OS X 10.12',
	version: 'latest'
}, {
	browserName: 'MicrosoftEdge',
	platform: 'Windows 10'
}, {
	browserName: 'firefox',
	platform: 'Windows 10',
	version: 'latest'
}, {
	browserName: 'googlechrome',
	platform: 'Windows 10',
	version: 'latest'
}, {
	browserName: 'Safari',
	'appium-version': '1.6.3',
	platformName: 'iOS',
	platformVersion: '10.0',
	deviceName: 'iPhone 7 Simulator'
}];

var url = 'http://localhost:3000/test/index.html?hidepassed';

testSauceLabs({
	urls: [{ name: "canjs", url : url }],
	platforms: platforms
});
