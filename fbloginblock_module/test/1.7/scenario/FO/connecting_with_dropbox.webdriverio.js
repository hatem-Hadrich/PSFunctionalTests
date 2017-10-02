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
                .click(this.selector.dropbox.first_dropbox_logo)
                .call(done);

        });
    });

    describe('Connection on dropbox site', function() {


        it('should acces to dropbox site', function (done) {
            global.fctname = this.test.title;
            this.client
                .windowHandles().then(function (handles) {
                return this.switchTab(handles.value[handles.value.length - 1]);
            })
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
                // .waitForExist(this.selector.dropbox.allow_button, 90000)
                // .click(this.selector.dropbox.allow_button)
                // .pause(2000)
                .call(done);
        });

    });

    describe('Access to the Front Office', function() {
        it('should open the shop', function (done) {
            global.fctname = this.test.title;
            this.client
                .windowHandles().then(function (handles) {
                this.close(handles.value[handles.value.length - 1]);
                return this.switchTab(handles.value[0]);
            })
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
});
