'use strict';
var should = require('should');
var common = require('../../common.webdriverio');
var globals = require('../../globals.webdriverio.js');

describe('The Creation of an Account in Front Office', function () {
    common.initMocha.call(this);

    before(function (done) {
        this.selector = globals.selector;
        this.client.call(done);
    });
    process.on('uncaughtException', common.take_screenshot);
    process.on('ReferenceError', common.take_screenshot);
    after(common.after);

    describe('Create account in FO', function (done) {
        it('should acces to the sign up interface', function (done) {
            global.fctname = this.test.title;
            this.client
                .url('https://staging-tower.prestashop.net/signup')
                .waitForExist(this.selector.PrestashopAccount.logo_img, 90000)
                .pause(2000)
                .waitForExist(this.selector.PrestashopAccount.email_input, 90000)
                .setValue(this.selector.PrestashopAccount.email_input, 'demo@prestashop.com')
                .waitForExist(this.selector.PrestashopAccount.password_input, 90000)
                .setValue(this.selector.PrestashopAccount.password_input, 'prestashop123')
                .pause(5000)
                .call(done);
        });

        it('should go to the next step', function (done) {
            global.fctname = this.test.title;
            this.client
                .waitForExist(this.selector.PrestashopAccount.next_button, 90000)
                .click(this.selector.PrestashopAccount.next_button)
                .pause(2000)
                .call(done);
        });

        it('should fill the first name and last name', function (done) {
            global.fctname = this.test.title;
            this.client
                .waitForExist(this.selector.PrestashopAccount.firstname_input, 60000)
                .setValue(this.selector.PrestashopAccount.firstname_input, 'Demo')
                .waitForExist(this.selector.PrestashopAccount.lastname_input, 60000)
                .setValue(this.selector.PrestashopAccount.lastname_input, 'PrestaShop')
                .pause(5000)
                .call(done);
        });

        it('should go to the next step', function (done) {
            global.fctname = this.test.title;
            this.client
                .waitForExist(this.selector.PrestashopAccount.next_button, 90000)
                .click(this.selector.PrestashopAccount.next_button)
                .pause(2000)
                .call(done);
        });

        it('should fill the store name and website address', function (done) {
            global.fctname = this.test.title;
            this.client
                .waitForExist(this.selector.PrestashopAccount.store_name_input, 60000)
                .setValue(this.selector.PrestashopAccount.store_name_input, 's-2017')
                .waitForExist(this.selector.PrestashopAccount.website_address_input, 60000)
                .getAttribute(this.selector.PrestashopAccount.website_address_input, 'value').then(function (website_address) {
                should(website_address).be.equal("s-2017");
            })
                .pause(5000)
                .call(done);
        });

        it('should go to the next step', function (done) {
            global.fctname = this.test.title;
            this.client
                .waitForExist(this.selector.PrestashopAccount.next_button, 90000)
                .click(this.selector.PrestashopAccount.next_button)
                .pause(2000)
                .call(done);
        });

        it('should choose the pays and language', function (done) {
            global.fctname = this.test.title;
            this.client
                .waitForExist(this.selector.PrestashopAccount.pays_select, 90000)
                .selectByValue(this.selector.PrestashopAccount.pays_select, 'fr')
                .waitForExist(this.selector.PrestashopAccount.language_select, 90000)
                .selectByValue(this.selector.PrestashopAccount.language_select, 'fr')
                .pause(2000)
                .call(done);
        });

        it('should accept the terms of service', function (done) {
            global.fctname = this.test.title;
            this.client
                .waitForExist(this.selector.PrestashopAccount.terms_of_service_checkbox, 90000)
                .click(this.selector.PrestashopAccount.terms_of_service_checkbox)
                .pause(2000)
                .call(done);
        });

        it('should click on create store button', function (done) {
            global.fctname = this.test.title;
            this.client
                .waitForExist(this.selector.PrestashopAccount.create_store_button, 90000)
                .click(this.selector.PrestashopAccount.create_store_button)
                .pause(10000)
                .call(done);
        });
    });

});