'use strict';
var should = require('should');
var common = require('../../common.webdriverio');
var globals = require('../../globals.webdriverio');

describe('Connecting with dropbox in front office', function() {
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

    describe('Check dropbox connection', function() {
        it('should click on dropbox button', function (done) {
            global.fctname = this.test.title;
            this.client
                .waitForExist(this.selector.dropbox.first_dropbox_logo, 90000)
                .moveToObject(this.selector.dropbox.first_dropbox_url)
                .getAttribute(this.selector.dropbox.first_dropbox_url, 'onclick').then(function (url) {
                globals.dropbox_location = (url.split('window.open(').pop().split(", 'login'").shift()).slice(1, -1);
            })
                .call(done);

        });
    });

    describe('Connection on dropbox site', function() {


        it('should acces to dropbox site', function (done) {
            global.fctname = this.test.title;
            this.client
                .url(globals.dropbox_location)
                .call(done);
        });

        it('should connecting with dropbox account', function (done) {
            global.fctname = this.test.title;
            this.client
                .waitForExist(this.selector.dropbox.username_input, 90000)
                .setValue(this.selector.dropbox.username_input, 'prestotests+dropbox@gmail.com')
                .setValue(this.selector.dropbox.password_input, 'presto_tests')
                .waitForExist(this.selector.dropbox.login_button, 90000)
                .click(this.selector.dropbox.login_button)
                .pause(5000)
                .waitForExist(this.selector.dropbox.allow_button, 90000)
                .click(this.selector.dropbox.allow_button)
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
                .waitForVisible(this.selector.dropbox.user_connected_span, 90000)
                .moveToObject(this.selector.dropbox.user_connected_span)
                .getText(this.selector.dropbox.user_connected_span).then(function (user) {
                should(user).be.equal('Tests Presto');
            })
                .call(done);

        });
    });

    // describe('Log out in Front Office', function (done) {
    //     it('should logout successfully in FO', function (done) {
    //         global.fctname = this.test.title;
    //         this.client
    //             .waitForExist(this.selector.logoutFO, 90000)
    //             .click(this.selector.logoutFO)
    //             .waitForExist(this.selector.access_loginFO, 90000)
    //             .call(done);
    //
    //     });
    // });
    //
    // describe('Log in in Back Office', function (done) {
    //     it('should log in successfully in BO', function (done) {
    //         this.client
    //             .signinBO()
    //             .waitForExist(this.selector.menu, 90000)
    //             .call(done);
    //     });
    // });
    //
    // describe('Access to the customer page', function (done) {
    //     it('should go to the customer page', function (done) {
    //         this.client
    //             .waitForExist(this.selector.customer_menu, 90000)
    //             .click(this.selector.customer_menu)
    //             .call(done);
    //     });
    //
    //     it('should check new dropbox customer', function (done) {
    //         this.client
    //             .waitForExist(this.selector.dropbox_logo_customer_page, 90000)
    //             .click(this.selector.dropbox_logo_customer_page)
    //             .call(done);
    //     });
    // });
    //
    // describe('Access to the Front Office', function() {
    //     it('should check the dropbox customer connection ', function (done) {
    //         global.fctname = this.test.title;
    //         this.client
    //             .url('http://' + URL)
    //             .waitForExist(this.selector.access_loginFO, 90000)
    //             .click(this.selector.access_loginFO)
    //             .waitForExist(this.selector.loginFO, 90000)
    //             .setValue(this.selector.loginFO, 'prestotests+dropbox@gmail.com')
    //             .setValue(this.selector.passwordFO, 'presto_tests1')
    //             .click(this.selector.login_btnFO)
    //             .call(done);
    //
    //     });
    // });
    //
    // describe('Log out in Front Office', function (done) {
    //     it('should logout successfully in FO', function (done) {
    //         global.fctname = this.test.title;
    //         this.client
    //             .waitForExist(this.selector.logoutFO, 90000)
    //             .click(this.selector.logoutFO)
    //             .waitForExist(this.selector.access_loginFO, 90000)
    //             .call(done);
    //
    //     });
    // });
});
