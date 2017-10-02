'use strict';
var should = require('should');
var common = require('../../common.webdriverio');
var globals = require('../../globals.webdriverio');

describe('Configuration app of linkedin in back office', function() {
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

    describe('Access to the module page', function (done) {
        it('should go to modules installed page', function (done) {
            this.client
                .click(this.selector.modules_menu)
                .waitForExist(this.selector.modules_installed)
                .click(this.selector.modules_installed)
                .waitForExist(this.selector.modules_page_loaded, 90000)
                .call(done);
        });

        it('should go to the module', function (done) {
            if (global.nbr == 0) {
                done(new Error('The module you are searching for does not exist!'));
            }
            else {
                this.client
                    .setValue(this.selector.modules_search, module_tech_name)
                    .click(this.selector.modules_search_button)
                    .call(done);
            }
        });
    });

    describe('Access to the configuration page', function (done) {

        it('should click on configuration button', function (done) {
            if (global.nbr == 0) {
                done(new Error('The module you are searching for does not exist!'));
            }
            else {
                this.client
                    .waitForExist(this.selector.module_tech_name, 90000)
                    .waitForExist(this.selector.module_conf_btn,90000)
                    .click(this.selector.module_conf_btn)
                    .call(done);
            }
        });
        it('should access to linkedin configuration page', function (done) {
            this.client
                .waitForExist(this.selector.linkedin.linkedin_config_btn, 90000)
                .click(this.selector.linkedin.linkedin_config_btn)
                .call(done);
        });

        it('should go to linkedin developers link', function (done) {

            this.client
                .waitForExist(this.selector.linkedin.website_url_input, 90000)
                .getAttribute(this.selector.linkedin.website_url_input, 'value').then(function (url) {
                global.website_url = url;
            })
                .waitForExist(this.selector.linkedin.linkedin_developers_link, 90000)
                .click(this.selector.linkedin.linkedin_developers_link)
                .call(done);
        });

        it('should click on identify button', function (done) {
            global.fctname = this.test.title;
            this.client
                .getTabIds().then(function (handles) {
                return this.switchTab(handles[handles.length - 1])
            })
                .waitForExist(this.selector.linkedin.linkedin_identify_button, 90000)
                .click(this.selector.linkedin.linkedin_identify_button)
                .call(done);
        });

        it('should access to the linkedin account', function (done) {
            global.fctname = this.test.title;
            this.client
                .waitForExist(this.selector.linkedin.linkedin_username_input, 90000)
                .setValue(this.selector.linkedin.linkedin_username_input, 'prestotestslinkedin@gmail.com')
                .setValue(this.selector.linkedin.linkedin_password_input, 'presto_tests')
                .waitForExist(this.selector.linkedin.linkedin_signin_button, 90000)
                .click(this.selector.linkedin.linkedin_signin_button)
                .call(done);
        });

        it('should access to the app PrestoAppSocialConnect', function (done) {
            this.client
                .waitForExist(this.selector.linkedin.app_link, 90000)
                .click(this.selector.linkedin.app_link)
                .call(done);
        });

        it('should click on preferences menu', function (done) {
            this.client
                .getText(this.selector.linkedin.customer_id_span).then(function (key) {
                global.linkedin_customer_key = key;
                console.log(global.linkedin_customer_key);
            })
                .getText(this.selector.linkedin.customer_secret_span).then(function (secret) {
                global.linkedin_customer_secret = secret;
                console.log(global.linkedin_customer_secret);
            })
                .waitForExist(this.selector.linkedin.linkedin_preferences_button, 90000)
                .click(this.selector.linkedin.linkedin_preferences_button)
                .call(done);
        });

        it('should enter the website url', function (done) {
            this.client
                .waitForExist(this.selector.linkedin.linkedin_website_url_input, 90000)
                .click(this.selector.linkedin.linkedin_website_url_input)
                .setValue(this.selector.linkedin.linkedin_website_url_input, global.website_url)
                .call(done);
        });

        it('should click on update button', function (done) {
            this.client
                .moveToObject(this.selector.linkedin.linkedin_update_button)
                .click(this.selector.linkedin.linkedin_update_button)
                .pause(5000)
                .getTabIds().then(function(handles){
                return this.switchTab(handles[0])
            })
                .call(done);
        });

        it('should enter the customer id and secret', function (done) {
            this.client
                .waitForExist(this.selector.linkedin.linkedin_customer_id_input, 90000)
                .setValue(this.selector.linkedin.linkedin_customer_id_input, global.linkedin_customer_key)
                .setValue(this.selector.linkedin.linkedin_customer_secret_input, global.linkedin_customer_secret)
                .call(done);
        });

        it('should save linkedin configurations', function (done) {
            this.client
                .waitForExist(this.selector.linkedin.linkedin_save_button, 90000)
                .click(this.selector.linkedin.linkedin_save_button)
                .call(done);
        });
        it('logout BO', function (done) {
            this.client
                .signoutBO()
                .call(done);
        });
    });
});
