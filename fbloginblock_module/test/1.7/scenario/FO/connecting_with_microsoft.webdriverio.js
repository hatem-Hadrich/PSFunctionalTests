'use strict';
var should = require('should');
var common = require('../../common.webdriverio');
var globals = require('../../globals.webdriverio');

describe('Connecting with microsoft in front office', function() {
    common.initMocha.call(this);

    before(function (done) {
        this.selector = globals.selector;
        this.client.call(done);
    });
    process.on('uncaughtException', common.take_screenshot);
    process.on('ReferenceError', common.take_screenshot);
    after(common.after);

    describe('Access to the Front Office', function() {
        it('should open the shop', function (done) {
            global.fctname = this.test.title;
            this.client
                .url('https://' + URL)
                .call(done);

        });
    });

    describe('Check microsoft connection', function() {
        it('should click on microsoft button', function (done) {
            global.fctname = this.test.title;
            this.client
                .waitForExist(this.selector.microsoft.first_microsoft_logo, 90000)
                .moveToObject(this.selector.microsoft.first_microsoft_url)
                .getAttribute(this.selector.microsoft.first_microsoft_url, 'onclick').then(function (url) {
                globals.microsoft_location = (url.split('window.open(').pop().split(", 'login'").shift()).slice(1, -1);
            })
                .call(done);

        });
    });

    describe('Connection on microsoft site', function() {


        it('should acces to microsoft site', function (done) {
            global.fctname = this.test.title;
            this.client
                .url(globals.microsoft_location)
                .call(done);
        });

        it('should enter the email of microsoft account', function (done) {
            global.fctname = this.test.title;
            this.client
                .waitForVisible(this.selector.microsoft.username_input, 90000)
                .setValue(this.selector.microsoft.username_input, 'prestotests@outlook.com')
                .waitForExist(this.selector.microsoft.next_button, 90000)
                .click(this.selector.microsoft.next_button)
                .call(done);
        });

        it('should enter the password of microsoft account', function (done) {
            global.fctname = this.test.title;
            this.client
                .waitForVisible(this.selector.microsoft.password_input, 90000)
                .setValue(this.selector.microsoft.password_input, 'presto_tests')
                .waitForExist(this.selector.microsoft.next_button, 90000)
                .click(this.selector.microsoft.next_button)
                .pause(2000)
                .call(done);
        });

    });

    describe('Access to the Front Office', function() {
        it('should open the shop', function (done) {
            global.fctname = this.test.title;
            this.client
                .url('https://' + URL)
                .call(done);

        });
        it('should check the connection', function (done) {
            global.fctname = this.test.title;
            this.client
                .pause(2000)
                .waitForVisible(this.selector.microsoft.user_connected_span, 90000)
                .moveToObject(this.selector.microsoft.user_connected_span)
                .getText(this.selector.microsoft.user_connected_span).then(function (user) {
                should(user).be.equal('Tests Presto');
            })
                .call(done);

        });
    });
});
