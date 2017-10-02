'use strict';
var should = require('should');
var common = require('../../common.webdriverio');
var globals = require('../../globals.webdriverio');

describe('Configuration app of paypal in back office', function() {
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
        it('should access to paypal configuration page', function (done) {
            this.client
                .waitForExist(this.selector.paypal.paypal_config_btn, 90000)
                .click(this.selector.paypal.paypal_config_btn)
                .call(done);
        });

        it('should go to paypal developers link', function (done) {

            this.client
                .waitForExist(this.selector.paypal.return_url_input, 90000)
                .getAttribute(this.selector.paypal.return_url_input, 'value').then(function (url) {
                global.return_url = url;
            })
                .waitForExist(this.selector.paypal.privacy_policy_url_input, 90000)
                .getAttribute(this.selector.paypal.privacy_policy_url_input, 'value').then(function (url) {
                global.privacy_policy_url = url;
            })
                .waitForExist(this.selector.paypal.user_agreement_url_input, 90000)
                .getAttribute(this.selector.paypal.user_agreement_url_input, 'value').then(function (url) {
                global.user_agreement_url = url;
            })
                .waitForExist(this.selector.paypal.paypal_developers_link, 90000)
                .click(this.selector.paypal.paypal_developers_link)
                .call(done);
        });

        it('should click on log into dashboard button', function (done) {
            global.fctname = this.test.title;
            this.client
                .getTabIds().then(function (handles) {
                return this.switchTab(handles[handles.length - 1])
            })
                .waitForExist(this.selector.paypal.log_inti_dashboard_button, 90000)
                .click(this.selector.paypal.log_inti_dashboard_button)
                .call(done);
        });

        it('should access to the paypal account', function (done) {
            global.fctname = this.test.title;
            this.client
                .waitForVisible(this.selector.paypal.username_input, 90000)
                .setValue(this.selector.paypal.username_input, 'prestotests+paypal@gmail.com')
                .setValue(this.selector.paypal.password_input, 'presto_tests')
                .waitForExist(this.selector.paypal.login_button, 90000)
                .click(this.selector.paypal.login_button)
                .pause(5000)
                .call(done);
        });

        it('should access to the app PrestoAppSocialConnect', function (done) {
            this.client
                .moveToObject(this.selector.paypal.manage_api_button)
                .waitForExist(this.selector.paypal.app_link, 90000)
                .click(this.selector.paypal.app_link)
                .call(done);
        });

        it('should click on live button', function (done) {
            this.client
                .pause(3000)
                .moveToObject(this.selector.paypal.live_button, 90000)
                .click(this.selector.paypal.live_button)
                .pause(7000)
                .call(done);
        });

        it('should click on show secret button', function (done) {
            this.client
                .moveToObject(this.selector.paypal.customer_id, 90000)
                .getText(this.selector.paypal.customer_id).then(function (id) {
                global.paypal_customer_key = id;
                console.log(global.paypal_customer_key);
            })
                .moveToObject(this.selector.paypal.show_secret_button)
                .click(this.selector.paypal.show_secret_button)
                .pause(5000)
                .moveToObject(this.selector.paypal.customer_secret)
                .getText(this.selector.paypal.customer_secret).then(function (value) {
                global.paypal_customer_secret = value;
                console.log(global.paypal_customer_secret);
            })
                .call(done);
        });

        it('should click on show secret button', function (done) {
            this.client
                .moveToObject(this.selector.paypal.log_in_with_paypal_checkbox, 90000)
                .click(this.selector.paypal.show_return_url_button)
                .pause(5000)
                .call(done);
        });

        it('should enter the return url', function (done) {
            this.client
                .waitForExist(this.selector.paypal.live_return_url_input, 90000)
                .click(this.selector.paypal.live_return_url_input)
                .setValue(this.selector.paypal.live_return_url_input, global.return_url)
                .call(done);
        });

        it('should click on advanced options button', function (done) {
            this.client
                .moveToObject(this.selector.paypal.feedback_button)
                .waitForExist(this.selector.paypal.advanced_options_button, 90000)
                .click(this.selector.paypal.advanced_options_button)
                .call(done);
        });

        it('should configure the informations requested from customers', function (done) {
            this.client
                .pause(5000)
                .moveToObject(this.selector.paypal.live_privacy_policy_url_input, 90000)
                .click(this.selector.paypal.personnal_information_checkbox)
                .click(this.selector.paypal.address_information_checkbox)
                .click(this.selector.paypal.account_information_checkbox)
                .call(done);
        });

        it('should configure the links shown on customer consent page', function (done) {
            this.client
                .waitForVisible(this.selector.paypal.live_privacy_policy_url_input, 90000)
                .setValue(this.selector.paypal.live_privacy_policy_url_input, global.privacy_policy_url)
                .waitForVisible(this.selector.paypal.live_user_agreement_url_input, 90000)
                .setValue(this.selector.paypal.live_user_agreement_url_input, global.user_agreement_url)
                .call(done);
        });

        it('should click on save button', function (done) {
            this.client
                .moveToObject(this.selector.paypal.feedback_button)
                .waitForExist(this.selector.paypal.live_save_button, 90000)
                .click(this.selector.paypal.live_save_button)
                .pause(5000)
                .getTabIds().then(function(handles){
                return this.switchTab(handles[0])
            })
                .call(done);
        });

        it('should enter the customer id and secret', function (done) {
            this.client
                .waitForExist(this.selector.paypal.paypal_customer_id_input, 90000)
                .setValue(this.selector.paypal.paypal_customer_id_input, global.paypal_customer_key)
                .setValue(this.selector.paypal.paypal_customer_secret_input, global.paypal_customer_secret)
                .call(done);
        });

        it('should save paypal configurations', function (done) {
            this.client
                .waitForExist(this.selector.paypal.paypal_save_button, 90000)
                .click(this.selector.paypal.paypal_save_button)
                .call(done);
        });
        it('logout BO', function (done) {
            this.client
                .signoutBO()
                .call(done);
        });
    });
});
