'use strict';
var common = require('./common.webdriverio');
var path = require('path');
var should = require('should');
var argv = require('minimist')(process.argv.slice(2));

global.date_time = new Date().getTime();
global.URL = argv.URL;
global.module_tech_name = argv.MODULE;
global.saucelabs = argv.SAUCELABS;
global.selenium_url = argv.SELENIUM;
global._projectdir = path.join(__dirname, '..', '..');
global.product_id = new Date().getTime();
global.new_customer_email = 'pub' + date_time + '@prestashop.com';

module.exports = {
    selector: {
        PrestashopAccount:{
            logo_img: '//*[@id="app"]/div[1]/div/div/div/a/img',
            email_input: '//*[@id="app"]/div[2]/div[2]/div[2]/form/div/div[1]/input',
            password_input: '//*[@id="app"]/div[2]/div[2]/div[2]/form/div/div[3]/input',
            next_button: '//*[@id="app"]/div[2]/div[2]/div[2]/form/div/button',
            firstname_input: '//*[@id="app"]/div[2]/div[2]/div[2]/form/div/div[1]/input',
            lastname_input: '//*[@id="app"]/div[2]/div[2]/div[2]/form/div/div[3]/input',
            store_name_input: '//*[@id="app"]/div[2]/div[2]/div[2]/form/div/div[1]/input',
            website_address_input: '//*[@id="app"]/div[2]/div[2]/div[2]/form/div/div[4]/input',
            pays_select: '//*[@id="app"]/div[2]/div[2]/div[2]/form/div/select[1]',
            language_select: '//*[@id="app"]/div[2]/div[2]/div[2]/form/div/select[2]',
            terms_of_service_checkbox: '//*[@id="gtc"]',
            create_store_button: '//*[@id="app"]/div[2]/div[2]/div[2]/form/div/button',
        },

        PrestashopOffre:{
            logo_img: '//*[@id="app"]/div[1]/div/div/div/a/img',
            email_input:'//*[@id="app"]/div[2]/div[2]/div[2]/form/div/div[2]/input',
            password_input:'//*[@id="app"]/div[2]/div[2]/div[2]/form/div/div[4]/input',
            signin_button:'//*[@id="app"]/div[2]/div[2]/div[2]/form/div/div[4]/input',
            choose_package_button: '//*[@id="app"]/div[2]/div[2]/div[2]/div/div[2]/div[1]/div[2]/a',
            select_button: '//*[@id="app"]/div[2]/div[2]/div[2]/div[1]/div/button',
            first_name_input: '//*[@id="first_name"]',
            last_name_input: '//*[@id="last_name"]',
            mobile_phone_input: '//*[@id="mobile_phone"]/input',
            office_phone_input: '//*[@id="office_phone"]/input',
            next_button: '//*[@id="app"]/div[2]/div[2]/div[2]/form/div[5]/button',
            campagny_name_input: '//*[@id="company_name"]',
            vat_number_input: '//*[@id="vat_number"]',
            nif_dni_nie_input: '//*[@id="nif_dni_nie"]',
            address_input: '//*[@id="address"]',
            address2_input: '//*[@id="address_2"]',
            zip_code_input: '//*[@id="zip_code"]',
            city_input: '//*[@id="city"]',
            country_select: '//*[@id="country"]',
            facturation_next_button: '//*[@id="app"]/div[2]/div[2]/div[2]/form/div[7]/div/button',
            card_number_input: '//*[@id="root"]/form/span/label/input',
            exp_date_input: '//*[@id="root"]/form/span/label/input[@name="exp-date"]',
            visual_cryptogram_input: '//*[@id="root"]/form/span/label/input[@name="cvc"]',
            terms_of_service_checkbox: '//*[@id="gtc"]',
            subscribe_button: '//*[@id="app"]/div[2]/div[2]/div[2]/form/button',
        },

    },
    shouldExist: function (err, existing) {
        should(err).be.not.defined;
        should(existing).be.true;
    }
};
