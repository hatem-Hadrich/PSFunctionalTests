'use strict';
var should = require('should');
var common = require('../../common.webdriverio');
var globals = require('../../globals.webdriverio');

describe('Connecting with linkedin in front office', function() {
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

    describe('Check linkedin connection', function() {
        it('should click on linkedin button', function (done) {
            global.fctname = this.test.title;
            this.client
                .waitForExist(this.selector.linkedin.first_linkedin_logo, 90000)
                .moveToObject(this.selector.linkedin.first_linkedin_url)
                .getAttribute(this.selector.linkedin.first_linkedin_url, 'onclick').then(function (url) {
                globals.linkedin_location = (url.split('window.open(').pop().split(", 'login'").shift()).slice(1, -1);
            })
                .call(done);

        });
    });

    describe('Connection on linkedin site', function() {


        it('should acces to linkedin site', function (done) {
            global.fctname = this.test.title;
            this.client
                .url(globals.linkedin_location)
                .call(done);
        });

        it('should connecting with linkedin account', function (done) {
            global.fctname = this.test.title;
            this.client
                .waitForExist(this.selector.linkedin.username_input, 90000)
                .setValue(this.selector.linkedin.username_input, 'prestotestslinkedin@gmail.com')
                .setValue(this.selector.linkedin.password_input, 'presto_tests')
                .waitForExist(this.selector.linkedin.allow_button, 90000)
                .click(this.selector.linkedin.allow_button)
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
                .waitForVisible(this.selector.linkedin.user_connected_span, 90000)
                .moveToObject(this.selector.linkedin.user_connected_span)
                .getText(this.selector.linkedin.user_connected_span).then(function (user) {
                should(user).be.equal('Presto Tests');
            })
                .call(done);

        });
    });
});
