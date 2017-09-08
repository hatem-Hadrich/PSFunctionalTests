'use strict';
var should = require('should');
var common = require('../../common.webdriverio');
var globals = require('../../globals.webdriverio');

describe('Connecting with pinterest in front office', function() {
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

    describe('Check pinterest connection', function() {
        it('should click on pinterest button', function (done) {
            global.fctname = this.test.title;
            this.client
                .waitForExist(this.selector.pinterest.first_pinterest_logo, 90000)
                .moveToObject(this.selector.pinterest.first_pinterest_url)
                .getAttribute(this.selector.pinterest.first_pinterest_url, 'onclick').then(function (url) {
                globals.pinterest_location = (url.split('window.open(').pop().split(", 'login'").shift()).slice(1, -1);
            })
                .call(done);

        });
    });

    describe('Connection on pinterest site', function() {


        it('should acces to pinterest site', function (done) {
            global.fctname = this.test.title;
            this.client
                .url(globals.pinterest_location)
                .call(done);
        });

        it('should connecting with pinterest account', function (done) {
            global.fctname = this.test.title;
            this.client
                .waitForExist(this.selector.pinterest.username_input, 90000)
                .setValue(this.selector.pinterest.username_input, 'prestotests+pinterest@gmail.com')
                .setValue(this.selector.pinterest.password_input, 'presto_tests')
                .waitForExist(this.selector.pinterest.login_button, 90000)
                .click(this.selector.pinterest.login_button)
                .pause(5000)
                .waitForExist(this.selector.twitter.allow_button, 90000)
                .click(this.selector.twitter.allow_button)
                .pause(2000)
                .call(done);
        });

    });

    describe('Access to the Front Office', function() {
        it('should open the shop', function (done) {
            global.fctname = this.test.title;
            this.client
                .pause(2000)
                .url('https://' + URL)
                .call(done);

        });
        it('should linked account of pinterest', function (done) {
            global.fctname = this.test.title;
            this.client
                .pause(2000)
                .waitForVisible(this.selector.pinterest.linked_email_input, 90000)
                .setValue(this.selector.pinterest.linked_email_input, 'prestotests+pinterest@gmail.com')
                .waitForExist(this.selector.pinterest.send_button, 90000)
                .click(this.selector.pinterest.send_button)
                .getText(this.selector.pinterest.check_sent_email_p).then(function (value) {
                should(value).be.equal("Password has been sent to your mailbox: prestotests+pinterest@gmail.com")
            })
                .click(this.selector.clickOutSide)
                .call(done);

        });
        it('should check the connection', function (done) {
            global.fctname = this.test.title;
            this.client
                .pause(2000)
                .waitForVisible(this.selector.pinterest.user_connected_span, 90000)
                .moveToObject(this.selector.pinterest.user_connected_span)
                .getText(this.selector.pinterest.user_connected_span).then(function (user) {
                should(user).be.equal('Presto tests');
            })
                .call(done);

        });
    });
});
