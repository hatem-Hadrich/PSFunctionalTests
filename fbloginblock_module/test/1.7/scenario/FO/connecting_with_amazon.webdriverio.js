'use strict';
var should = require('should');
var common = require('../../common.webdriverio');
var globals = require('../../globals.webdriverio');

describe('Connecting with amazon in front office', function() {
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

    describe('Check amazon connection', function() {
        it('should click on amazon button', function (done) {
            global.fctname = this.test.title;
            this.client
                .waitForExist(this.selector.amazon.first_amazon_logo, 90000)
                .click(this.selector.amazon.first_amazon_logo)
            //     .moveToObject(this.selector.amazon.first_amazon_url)
            //     .getAttribute(this.selector.amazon.first_amazon_url, 'onclick').then(function (url) {
            //     globals.amazon_location = (url.split('window.open(').pop().split(", 'login'").shift()).slice(1, -1);
            //     console.log(amazon_location);
            // })
                .call(done);

        });
    });

    describe('Connection on amazon site', function() {


        // it('should acces to amazon site', function (done) {
        //     global.fctname = this.test.title;
        //     this.client
        //         .url(amazon_location)
        //         .call(done);
        // });

        it('should connecting with amazon account', function (done) {
            global.fctname = this.test.title;
            this.client
                .waitForVisible(this.selector.amazon.username_input, 90000)
                .setValue(this.selector.amazon.username_input, 'prestotests+amazon@gmail.com')
                .setValue(this.selector.amazon.password_input, 'presto_tests')
                .waitForExist(this.selector.amazon.signin_button, 90000)
                .click(this.selector.amazon.signin_button)
                .call(done);
        });

    });

    describe('Access to the Front Office', function() {
        // it('should open the shop', function (done) {
        //     global.fctname = this.test.title;
        //     this.client
        //         .url('https://' + URL)
        //         .call(done);
        //
        // });
        it('should check the connection', function (done) {
            global.fctname = this.test.title;
            this.client
                .pause(2000)
                .waitForVisible(this.selector.amazon.user_connected_span, 90000)
                .moveToObject(this.selector.amazon.user_connected_span)
                .getText(this.selector.amazon.user_connected_span).then(function (user) {
                should(user).be.equal('Tests Presto');
            })
                .call(done);

        });
    });
});
