'use strict';
var should = require('should');
var common = require('../../common.webdriverio');
var globals = require('../../globals.webdriverio');

describe('Connecting with paypal in front office', function() {
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

    describe('Check paypal connection', function() {
        it('should click on paypal button', function (done) {
            global.fctname = this.test.title;
            this.client
                .waitForExist(this.selector.paypal.first_paypal_logo, 90000)
                .moveToObject(this.selector.paypal.first_paypal_url)
                .getAttribute(this.selector.paypal.first_paypal_url, 'onclick').then(function (url) {
                globals.paypal_location = (url.split('window.open(').pop().split(", 'login'").shift()).slice(1, -1);
            })
                .call(done);

        });
    });

    describe('Connection on paypal site', function() {


        it('should acces to paypal site', function (done) {
            global.fctname = this.test.title;
            this.client
                .url(globals.paypal_location)
                .call(done);
        });

        it('should connecting with paypal account', function (done) {
            global.fctname = this.test.title;
            this.client
                .waitForExist(this.selector.paypal.username_input, 90000)
                .setValue(this.selector.paypal.username_input, 'prestotests+paypal@gmail.com')
                .setValue(this.selector.paypal.password_input, 'presto_tests')
                .waitForExist(this.selector.paypal.login_button, 90000)
                .click(this.selector.paypal.login_button)
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
                .waitForVisible(this.selector.paypal.user_connected_span, 90000)
                .moveToObject(this.selector.paypal.user_connected_span)
                .getText(this.selector.paypal.user_connected_span).then(function (user) {
                should(user).be.equal('Presto Tests');
            })
                .call(done);

        });
    });
});
