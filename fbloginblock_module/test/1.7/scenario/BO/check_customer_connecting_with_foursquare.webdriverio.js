'use strict';
var should = require('should');
var common = require('../../common.webdriverio');
var globals = require('../../globals.webdriverio');

describe('Check customer connecting with foursquare in back office', function() {
    common.initMocha.call(this);

    before(function (done) {
        this.selector = globals.selector;
        this.client.call(done);
    });
    process.on('uncaughtException', common.take_screenshot);
    process.on('ReferenceError', common.take_screenshot);
    after(common.after);

    describe('Log in in Back Office', function (done) {
        it('should log in successfully in BO', function (done) {
            global.fctname = this.test.title;
            this.client
                .url('https://' + URL + '/backoffice/')
                .waitForExist(this.selector.login, 120000)
                .setValue(this.selector.login, 'remi.gaillard@prestashop.com')
                .waitForExist(this.selector.password, 120000)
                .setValue(this.selector.password, 'abcd1234')
                .waitForExist(this.selector.login_btn, 90000)
                .click(this.selector.login_btn)
                .waitForExist(this.selector.menu, 60000)
                .call(done);
        });
    });

    describe('Access to the customer page', function (done) {
        it('should go to the customer page', function (done) {
            this.client
                .waitForExist(this.selector.customer_menu, 90000)
                .click(this.selector.customer_menu)
                .call(done);
        });
        it('should filter the list by address email', function (done) {
            this.client
                .waitForExist(this.selector.customer_address_email_input, 90000)
                .setValue(this.selector.customer_address_email_input, 'prestotests+foursquare@gmail.com')
                .call(done);
        });
        it('should click on search button', function (done) {
            this.client
                .pause(3000)
                .waitForExist(this.selector.customer_search_button, 90000)
                .click(this.selector.customer_search_button)
                .call(done);
        });

        it('should check new foursquare customer', function (done) {
            this.client
                .waitForExist(this.selector.foursquare.foursquare_logo_customer_page, 90000)
                .moveToObject(this.selector.foursquare.foursquare_logo_customer_page)
                .getAttribute(this.selector.foursquare.foursquare_logo_customer_page, 'title').then(function (title) {
                should(title).be.equal('Foursquare');
            })
                .getAttribute(this.selector.foursquare.foursquare_logo_customer_page, 'alt').then(function (alt) {
                should(alt).be.equal('Foursquare');
            })
                .call(done);
        });
        it('logout BO', function (done) {
            this.client
                .signoutBO()
                .call(done);
        });
    });

});
