'use strict';
var should = require('should');
var common = require('../../common.webdriverio');
var globals = require('../../globals.webdriverio');

describe('Connecting with wordpress in front office', function() {
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

    describe('Check wordpress connection', function() {
        it('should click on wordpress button', function (done) {
            global.fctname = this.test.title;
            this.client
                .waitForExist(this.selector.wordpress.first_wordpress_logo, 90000)
                .moveToObject(this.selector.wordpress.first_wordpress_url)
                .getAttribute(this.selector.wordpress.first_wordpress_url, 'onclick').then(function (url) {
                globals.wordpress_location = (url.split('window.open(').pop().split(", 'login'").shift()).slice(1, -1);
            })
                .call(done);

        });
    });

    describe('Connection on wordpress site', function() {


        it('should acces to wordpress site', function (done) {
            global.fctname = this.test.title;
            this.client
                .url(globals.wordpress_location)
                .call(done);
        });

        it('should connecting with wordpress account', function (done) {
            global.fctname = this.test.title;
            this.client
                .pause(3000)
                .waitForExist(this.selector.wordpress.username_input, 90000)
                .click(this.selector.wordpress.username_input)
                .setValue(this.selector.wordpress.username_input, 'prestotests+wordpress@gmail.com')
                .click(this.selector.wordpress.password_input)
                .setValue(this.selector.wordpress.password_input, 'presto_tests')
                .waitForExist(this.selector.wordpress.login_button, 90000)
                .click(this.selector.wordpress.login_button)
                .pause(2000)
                .call(done);
        });

        it('should click on approve button', function (done) {
            global.fctname = this.test.title;
            this.client
                .pause(3000)
                .waitForExist(this.selector.wordpress.allow_button, 90000)
                .click(this.selector.wordpress.allow_button)
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
                .waitForVisible(this.selector.wordpress.user_connected_span, 90000)
                .moveToObject(this.selector.wordpress.user_connected_span)
                .getText(this.selector.wordpress.user_connected_span).then(function (user) {
                should(user).be.equal('prestotests prestotests');
            })
                .call(done);

        });
    });
});
