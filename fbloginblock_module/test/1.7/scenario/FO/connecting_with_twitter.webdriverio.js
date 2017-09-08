'use strict';
var should = require('should');
var common = require('../../common.webdriverio');
var globals = require('../../globals.webdriverio');

describe('Connecting with twitter in front office', function() {
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

    describe('Check twitter connection', function() {
        it('should click on twitter button', function (done) {
            global.fctname = this.test.title;
            this.client
                .waitForExist(this.selector.twitter.first_twitter_logo, 90000)
                .moveToObject(this.selector.twitter.first_twitter_url)
                .getAttribute(this.selector.twitter.first_twitter_url, 'onclick').then(function (url) {
                globals.twitter_location = (url.split('window.open(').pop().split(", 'login'").shift()).slice(1, -1);
            })
                .call(done);
        });
    });

    describe('Connection on twitter site', function() {

        it('should acces to twitter site', function (done) {
            global.fctname = this.test.title;
            this.client
                .url(globals.twitter_location)
                .call(done);
        });

        it('should connecting with twitter account', function (done) {
            global.fctname = this.test.title;
            this.client
                .waitForExist(this.selector.twitter.username_input, 90000)
                .setValue(this.selector.twitter.username_input, 'prestotests+twitter@gmail.com')
                .setValue(this.selector.twitter.password_input, 'presto_tests')
                .waitForExist(this.selector.twitter.allow_button, 90000)
                .click(this.selector.twitter.allow_button)
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
        it('should linked account of twitter', function (done) {
            global.fctname = this.test.title;
            this.client
                .pause(2000)
                .waitForVisible(this.selector.twitter.linked_modale, 90000)
                .setValue(this.selector.twitter.email_input, 'prestotests+twitter@gmail.com')
                .waitForExist(this.selector.twitter.send_button, 90000)
                .click(this.selector.twitter.send_button)
                .pause(3000)
                .getText(this.selector.twitter.check_sent_email_p).then(function (value) {
                should(value).be.equal("Password has been sent to your mailbox: prestotests+twitter@gmail.com")
            })
                .click(this.selector.clickOutSide)
                .call(done);

        });
        it('should check the connection', function (done) {
            global.fctname = this.test.title;
            this.client
                .pause(2000)
                .waitForVisible(this.selector.twitter.user_connected_span, 90000)
                .moveToObject(this.selector.twitter.user_connected_span)
                .getText(this.selector.twitter.user_connected_span).then(function (user) {
                should(user).be.equal('prestotests prestotests');
            })
                .call(done);
        });
    });
});
