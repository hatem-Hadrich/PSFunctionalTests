'use strict';
var should = require('should');
var common = require('../../common.webdriverio');
var globals = require('../../globals.webdriverio.js');

describe('The Creation of an Account Prestashop in Front Office', function () {
    common.initMocha.call(this);

    before(function (done) {
        this.selector = globals.selector;
        this.client.call(done);
    });
    process.on('uncaughtException', common.take_screenshot);
    process.on('ReferenceError', common.take_screenshot);
    after(common.after);

    describe('Create account in FO', function (done) {
        it('should acces to the sign in interface', function (done) {
            global.fctname = this.test.title;
            this.client
                .url('https://ready.prestashop.com/signin')
                .waitForExist(this.selector.PrestashopOffre.logo_img, 90000)
                .pause(2000)
                .waitForExist(this.selector.PrestashopOffre.email_input, 90000)
                .setValue(this.selector.PrestashopOffre.email_input, 'demo@prestashop.com')
                .waitForExist(this.selector.PrestashopOffre.password_input, 90000)
                .setValue(this.selector.PrestashopOffre.password_input, 'prestashop123')
                .pause(5000)
                .call(done);
        });

        it('should click on choose a package', function (done) {
            global.fctname = this.test.title;
            this.client
                .waitForExist(this.selector.PrestashopOffre.choose_package_button, 90000)
                .click(this.selector.PrestashopOffre.choose_package_button)
                .pause(2000)
                .call(done);
        });

        it('should click on select button', function (done) {
            global.fctname = this.test.title;
            this.client
                .waitForExist(this.selector.PrestashopOffre.select_button, 90000)
                .click(this.selector.PrestashopOffre.select_button)
                .pause(2000)
                .call(done);
        });

        it('should fill the form', function (done) {
            global.fctname = this.test.title;
            this.client
                .waitForExist(this.selector.PrestashopOffre.first_name_input, 60000)
                .setValue(this.selector.PrestashopOffre.first_name_input, 'Demo')
                .waitForExist(this.selector.PrestashopOffre.last_name_input, 60000)
                .setValue(this.selector.PrestashopOffre.last_name_input, 'PrestaShop')
                .waitForExist(this.selector.PrestashopOffre.mobile_phone_input, 60000)
                .setValue(this.selector.PrestashopOffre.mobile_phone_input, '+3123456987')
                .waitForExist(this.selector.PrestashopOffre.office_phone_input, 60000)
                .setValue(this.selector.PrestashopOffre.office_phone_input, '+3123456987')
                .pause(5000)
                .call(done);
        });

        it('should go to the next step', function (done) {
            global.fctname = this.test.title;
            this.client
                .waitForExist(this.selector.PrestashopOffre.next_button, 90000)
                .click(this.selector.PrestashopOffre.next_button)
                .pause(2000)
                .call(done);
        });

        it('should fill the form', function (done) {
            global.fctname = this.test.title;
            this.client
                .waitForExist(this.selector.PrestashopOffre.campagny_name_input, 60000)
                .setValue(this.selector.PrestashopOffre.campagny_name_input, 'Test')
                .waitForExist(this.selector.PrestashopOffre.vat_number_input, 60000)
                .setValue(this.selector.PrestashopOffre.vat_number_input, '123456')
                .waitForExist(this.selector.PrestashopOffre.nif_dni_nie_input, 60000)
                .setValue(this.selector.PrestashopOffre.nif_dni_nie_input, 'dni2017')
                .waitForExist(this.selector.PrestashopOffre.address_input, 60000)
                .setValue(this.selector.PrestashopOffre.address_input, 'Rue Edouard VAILLANT')
                .waitForExist(this.selector.PrestashopOffre.address2_input, 60000)
                .setValue(this.selector.PrestashopOffre.address2_input, 'Rue Edouard')
                .waitForExist(this.selector.PrestashopOffre.zip_code_input, 60000)
                .setValue(this.selector.PrestashopOffre.zip_code_input, '92001')
                .waitForExist(this.selector.PrestashopOffre.city_input, 60000)
                .setValue(this.selector.PrestashopOffre.city_input, 'Paris')
                .waitForExist(this.selector.PrestashopOffre.country_select, 60000)
                .selectByValue(this.selector.PrestashopOffre.country_select, 'fr')
                .pause(5000)
                .call(done);
        });

        it('should go to the next step', function (done) {
            global.fctname = this.test.title;
            this.client
                .waitForExist(this.selector.PrestashopOffre.facturation_next_button, 90000)
                .click(this.selector.PrestashopOffre.facturation_next_button)
                .pause(2000)
                .call(done);
        });

        it('should fill the form', function (done) {
            global.fctname = this.test.title;
            this.client
                .waitForExist(this.selector.PrestashopOffre.card_number_input, 60000)
                .setValue(this.selector.PrestashopOffre.card_number_input, '4242424242424242')
                .waitForExist(this.selector.PrestashopOffre.exp_date_input, 60000)
                .setValue(this.selector.PrestashopOffre.exp_date_input, '0722')
                .waitForExist(this.selector.PrestashopOffre.visual_cryptogram_input, 60000)
                .setValue(this.selector.PrestashopOffre.visual_cryptogram_input, '357')
                .pause(5000)
                .call(done);
        });

        it('should accept the terms of service', function (done) {
            global.fctname = this.test.title;
            this.client
                .waitForExist(this.selector.PrestashopOffre.terms_of_service_checkbox, 90000)
                .click(this.selector.PrestashopOffre.terms_of_service_checkbox)
                .pause(2000)
                .call(done);
        });

        it('should click on create store button', function (done) {
            global.fctname = this.test.title;
            this.client
                .waitForExist(this.selector.PrestashopOffre.subscribe_button, 90000)
                .click(this.selector.PrestashopOffre.subscribe_button)
                .pause(10000)
                .call(done);
        });
    });

});