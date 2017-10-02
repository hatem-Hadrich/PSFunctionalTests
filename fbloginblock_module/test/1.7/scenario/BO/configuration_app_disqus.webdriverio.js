'use strict';
var should = require('should');
var common = require('../../common.webdriverio');
var globals = require('../../globals.webdriverio');

describe('Configuration app of disqus in back office', function() {
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
        it('should access to disqus configuration page', function (done) {
            this.client
                .waitForExist(this.selector.disqus.disqus_config_btn, 90000)
                .click(this.selector.disqus.disqus_config_btn)
                .call(done);
        });

        it('should go to disqus developers link', function (done) {
            this.client
                .waitForExist(this.selector.disqus.website_url_input, 90000)
                .getAttribute(this.selector.disqus.website_url_input, 'value').then(function (url) {
                global.website_url = url;
                console.log(global.website_url)
            })
                .waitForExist(this.selector.disqus.callback_url_input, 90000)
                .getAttribute(this.selector.disqus.callback_url_input, 'value').then(function (url) {
                global.callback_url = url;
                console.log(global.callback_url)
            })
                .waitForExist(this.selector.disqus.terms_of_service_url_input, 90000)
                .getAttribute(this.selector.disqus.terms_of_service_url_input, 'value').then(function (url) {
                global.terms_of_service_url = url;
                console.log(global.terms_of_service_url)
            })
                .waitForExist(this.selector.disqus.developers_link, 90000)
                .click(this.selector.disqus.developers_link)
                .pause(3000)
                .call(done);
        });

        it('should access to disqus account', function (done) {
            global.fctname = this.test.title;
            this.client
                .getTabIds().then(function (handles) {
                return this.switchTab(handles[handles.length - 1])
            })
                .waitForExist(this.selector.disqus.disqus_username_input, 90000)
                .setValue(this.selector.disqus.disqus_username_input, 'prestotests+disqus@gmail.com')
                .setValue(this.selector.disqus.disqus_password_input, 'presto_tests')
                .waitForExist(this.selector.disqus.disqus_login_button, 90000)
                .click(this.selector.disqus.disqus_login_button)
                .pause(5000)
                .call(done);
        });

        it('should access to the app PrestoAppSocialConnect', function (done) {
            this.client
                .waitForExist(this.selector.disqus.app_link, 90000)
                .click(this.selector.disqus.app_link)
                .pause(5000)
                .call(done);
        });

        it('should access to the settings', function (done) {
            this.client
                .waitForExist(this.selector.disqus.api_key_pre, 90000)
                .getText(this.selector.disqus.api_key_pre).then(function (key) {
                global.disqus_customer_key = key;
                console.log(global.disqus_customer_key)
            })
                .waitForExist(this.selector.disqus.api_secret_pre, 90000)
                .getText(this.selector.disqus.api_secret_pre).then(function (secret) {
                global.disqus_customer_secret = secret;
                console.log(global.disqus_customer_secret)
            })
                .waitForExist(this.selector.disqus.settings_subtab, 90000)
                .click(this.selector.disqus.settings_subtab)
                .pause(5000)
                .call(done);
        });

        it('should enter the website url', function (done) {
            this.client
                .waitForExist(this.selector.disqus.website_input, 90000)
                .setValue(this.selector.disqus.website_input, global.website_url)
                .pause(5000)
                .call(done);
        });

        it('should enter the callback url', function (done) {
            this.client
                .waitForExist(this.selector.disqus.callback_input, 90000)
                .setValue(this.selector.disqus.callback_input, global.callback_url)
                .pause(5000)
                .call(done);
        });

        it('should enter the terms of service url', function (done) {
            this.client
                .waitForExist(this.selector.disqus.terms_of_service_input, 90000)
                .setValue(this.selector.disqus.terms_of_service_input, global.terms_of_service_url)
                .pause(5000)
                .call(done);
        });

        it('should click on save changes button', function (done) {
            this.client
                .waitForExist(this.selector.disqus.save_changes_button, 90000)
                .click(this.selector.disqus.save_changes_button)
                .pause(5000)
                .getTabIds().then(function(handles){
                this.close(handles[handles.length - 1]);
                return this.switchTab(handles[0])
            })
                .call(done);
        });

        it('should enter the customer id and secret', function (done) {
            this.client
                .waitForExist(this.selector.disqus.api_key_input, 90000)
                .setValue(this.selector.disqus.api_key_input, global.disqus_customer_key)
                .setValue(this.selector.disqus.api_secret_input, global.disqus_customer_secret)
                .call(done);
        });

        it('should save disqus configurations', function (done) {
            this.client
                .waitForExist(this.selector.disqus.disqus_save_button, 90000)
                .click(this.selector.disqus.disqus_save_button)
                .call(done);
        });
        it('logout BO', function (done) {
            this.client
                .signoutBO()
                .call(done);
        });
    });
});
