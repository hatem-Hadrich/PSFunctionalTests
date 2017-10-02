'use strict';
var should = require('should');
var common = require('../../common.webdriverio');
var globals = require('../../globals.webdriverio');

describe('Connecting with github in front office', function() {
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

    describe('Check github connection', function() {
        it('should click on github button', function (done) {
            global.fctname = this.test.title;
            this.client
                .waitForExist(this.selector.github.first_github_logo, 90000)
                .click(this.selector.github.first_github_logo)
                .call(done);

        });
    });

    describe('Connection on github site', function() {


        it('should acces to github site', function (done) {
            global.fctname = this.test.title;
            this.client
                .windowHandles().then(function (handles) {
                return this.switchTab(handles.value[handles.value.length - 1]);
            })
                .call(done);
        });

        it('should connecting with github account', function (done) {
            global.fctname = this.test.title;
            this.client
                .waitForExist(this.selector.github.username_input, 90000)
                .setValue(this.selector.github.username_input, 'prestotests+github@gmail.com')
                .setValue(this.selector.github.password_input, 'presto_tests1')
                .waitForExist(this.selector.github.allow_button, 90000)
                .click(this.selector.github.allow_button)
                .pause(2000)
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
                .waitForVisible(this.selector.github.user_connected_span, 90000)
                .moveToObject(this.selector.github.user_connected_span)
                .getText(this.selector.github.user_connected_span).then(function (user) {
                should(user).be.equal('prestotests prestotests');
            })
                .call(done);

        });
    });
});
