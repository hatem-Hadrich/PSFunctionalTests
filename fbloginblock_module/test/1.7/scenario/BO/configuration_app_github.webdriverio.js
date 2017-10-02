'use strict';
var should = require('should');
var common = require('../../common.webdriverio');
var globals = require('../../globals.webdriverio');

describe('Configuration app of github in back office', function() {
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
        it('should access to github configuration page', function (done) {
            this.client
                .waitForExist(this.selector.github.github_config_btn, 90000)
                .click(this.selector.github.github_config_btn)
                .call(done);
        });

        it('should go to github developers link', function (done) {
            this.client
                .waitForExist(this.selector.github.home_page_url_input, 90000)
                .getAttribute(this.selector.github.home_page_url_input, 'value').then(function (url) {
                global.home_page = url;
                console.log(global.home_page)
            })
                .waitForExist(this.selector.github.callback_url_input, 90000)
                .getAttribute(this.selector.github.callback_url_input, 'value').then(function (url) {
                global.callback_url = url;
                console.log(global.callback_url)
            })
                .waitForExist(this.selector.github.github_developers_link, 90000)
                .click(this.selector.github.github_developers_link)
                .pause(3000)
                .call(done);
        });

        it('should access to github account', function (done) {
            global.fctname = this.test.title;
            this.client
                .getTabIds().then(function (handles) {
                return this.switchTab(handles[handles.length - 1])
            })
                .waitForExist(this.selector.github.username_input, 90000)
                .setValue(this.selector.github.username_input, 'prestotests+github@gmail.com')
                .setValue(this.selector.github.password_input, 'presto_tests1')
                .waitForExist(this.selector.github.allow_button, 90000)
                .click(this.selector.github.allow_button)
                .pause(5000)
                .call(done);
        });

        it('should click on button cancel', function (done) {
            this.client
                .waitForExist(this.selector.github.github_cancel_button, 90000)
                .click(this.selector.github.github_cancel_button)
                .pause(5000)
                .call(done);
        });

        it('should access to the app PrestoAppSocialConnect', function (done) {
            this.client
                .waitForExist(this.selector.github.app_link, 90000)
                .click(this.selector.github.app_link)
                .pause(5000)
                .call(done);
        });

        it('should enter the application uri', function (done) {
            this.client
                .waitForExist(this.selector.github.github_customer_id_dd, 90000)
                .getText(this.selector.github.github_customer_id_dd).then(function (key) {
                global.github_customer_key = key;
                console.log(global.github_customer_key)
            })
                .waitForExist(this.selector.github.github_customer_key_dd, 90000)
                .getText(this.selector.github.github_customer_key_dd).then(function (secret) {
                global.github_customer_secret = secret;
                console.log(global.github_customer_secret)
            })
                .moveToObject(this.selector.github.github_update_button, 90000)
                .waitForExist(this.selector.github.github_application_url_input, 90000)
                .setValue(this.selector.github.github_application_url_input, global.home_page)
                .pause(5000)
                .call(done);
        });

        it('should enter the callback url', function (done) {
            this.client
                .waitForExist(this.selector.github.github_application_callback_url_input, 90000)
                .setValue(this.selector.github.github_application_callback_url_input, global.callback_url)
                .pause(5000)
                .call(done);
        });

        it('should click on update button', function (done) {
            this.client
                .waitForExist(this.selector.github.github_update_button, 90000)
                .click(this.selector.github.github_update_button)
                .pause(5000)
                .getTabIds().then(function(handles){
                this.close(handles[handles.length - 1]);
                return this.switchTab(handles[0])
            })
                .call(done);
        });

        it('should enter the customer id and secret', function (done) {
            this.client
                .waitForExist(this.selector.github.customer_id_input, 90000)
                .setValue(this.selector.github.customer_id_input, global.github_customer_key)
                .setValue(this.selector.github.customer_key_input, global.github_customer_secret)
                .call(done);
        });

        it('should save github configurations', function (done) {
            this.client
                .waitForExist(this.selector.github.github_save_button, 90000)
                .click(this.selector.github.github_save_button)
                .call(done);
        });
        it('logout BO', function (done) {
            this.client
                .signoutBO()
                .call(done);
        });
    });
});
