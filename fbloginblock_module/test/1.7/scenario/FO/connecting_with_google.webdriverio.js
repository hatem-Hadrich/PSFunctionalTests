'use strict';
var should = require('should');
var common = require('../../common.webdriverio');
var globals = require('../../globals.webdriverio');

describe('Connecting with google in front office', function() {
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

    describe('Check google connection', function() {
        it('should click on google button', function (done) {
            global.fctname = this.test.title;
            this.client
                .waitForExist(this.selector.google.first_google_logo, 90000)
                .moveToObject(this.selector.google.first_google_url)
                .getAttribute(this.selector.google.first_google_url, 'onclick').then(function (url) {
                globals.google_location = (url.split('window.open(').pop().split(", 'login'").shift()).slice(1, -1);
            })
                .call(done);

        });
    });

    describe('Connection on google site', function() {


        it('should acces to google site', function (done) {
            global.fctname = this.test.title;
            this.client
                .url(globals.google_location)
                .call(done);
        });

        it('should enter the google email', function (done) {
            global.fctname = this.test.title;
            this.client
                .waitForExist(this.selector.google.username_input, 90000)
                .setValue(this.selector.google.username_input, 'prestotests@gmail.com')
                .waitForExist(this.selector.google.identifier_next_button, 90000)
                .click(this.selector.google.identifier_next_button)
                .call(done);
        });

        it('should enter the google password', function (done) {
            global.fctname = this.test.title;
            this.client
                .waitForVisible(this.selector.google.password_input, 90000)
                .setValue(this.selector.google.password_input, 'presto_tests')
                .waitForExist(this.selector.google.password_next_button, 90000)
                .click(this.selector.google.password_next_button)
                .pause(5000)
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
                .waitForVisible(this.selector.google.user_connected_span, 90000)
                .moveToObject(this.selector.google.user_connected_span)
                .getText(this.selector.google.user_connected_span).then(function (user) {
                should(user).be.equal('Presto Tests');
            })
                .call(done);

        });
    });
});
