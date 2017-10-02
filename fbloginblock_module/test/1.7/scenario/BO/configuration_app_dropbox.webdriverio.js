'use strict';
var should = require('should');
var common = require('../../common.webdriverio');
var globals = require('../../globals.webdriverio');

describe('Configuration app of dropbox in back office', function() {
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
        it('should access to dropbox configuration page', function (done) {
            this.client
                .waitForExist(this.selector.dropbox.dropbox_config_btn, 90000)
                .click(this.selector.dropbox.dropbox_config_btn)
                .call(done);
        });

        it('should go to dropbox developers link', function (done) {
            this.client
                .waitForExist(this.selector.dropbox.redirect_uri_input, 90000)
                .getAttribute(this.selector.dropbox.redirect_uri_input, 'value').then(function (url) {
                global.redirect_uri = url;
                console.log(global.redirect_uri)
            })
                .waitForExist(this.selector.dropbox.developers_link, 90000)
                .click(this.selector.dropbox.developers_link)
                .pause(3000)
                .call(done);
        });

        it('should access to dropbox account', function (done) {
            global.fctname = this.test.title;
            this.client
                .getTabIds().then(function (handles) {
                return this.switchTab(handles[handles.length - 1])
            })
                .waitForExist(this.selector.dropbox.dropbox_username_input, 90000)
                .setValue(this.selector.dropbox.dropbox_username_input, 'prestotests+dropbox@gmail.com')
                .setValue(this.selector.dropbox.dropbox_password_input, 'presto_tests')
                .waitForExist(this.selector.dropbox.dropbox_login_button, 90000)
                .click(this.selector.dropbox.dropbox_login_button)
                .pause(5000)
                .call(done);
        });

        it('should access to the app PrestoAppSocialConnect', function (done) {
            this.client
                .waitForExist(this.selector.dropbox.app_link, 90000)
                .click(this.selector.dropbox.app_link)
                .pause(5000)
                .call(done);
        });

        it('should delete the old redirect uri', function (done) {
            this.client
                .waitForExist(this.selector.dropbox.dropbox_app_key_div, 90000)
                .getText(this.selector.dropbox.dropbox_app_key_div).then(function (key) {
                global.dropbox_customer_key = key;
                console.log(global.dropbox_customer_key)
            })
                .waitForExist(this.selector.dropbox.dropbox_app_secret_div, 90000)
                .getAttribute(this.selector.dropbox.dropbox_app_secret_div, 'data-app-secret').then(function (secret) {
                global.dropbox_customer_secret = secret;
                console.log(global.dropbox_customer_secret)
            })
                .waitForExist(this.selector.dropbox.delete_redirect_uri, 90000)
                .click(this.selector.dropbox.delete_redirect_uri)
                .pause(5000)
                .call(done);
        });

        it('should enter the redirect uri', function (done) {
            this.client
                .waitForExist(this.selector.dropbox.dropbox_redirect_uri_input, 90000)
                .setValue(this.selector.dropbox.dropbox_redirect_uri_input, global.redirect_uri)
                .click(this.selector.dropbox.dropbox_redirect_uri_add_button)
                .pause(5000)
                .getTabIds().then(function(handles){
                this.close(handles[handles.length - 1]);
                return this.switchTab(handles[0])
            })
                .call(done);
        });

        it('should enter the customer id and secret', function (done) {
            this.client
                .waitForExist(this.selector.dropbox.api_key_input, 90000)
                .setValue(this.selector.dropbox.api_key_input, global.dropbox_customer_key)
                .setValue(this.selector.dropbox.api_secret_input, global.dropbox_customer_secret)
                .call(done);
        });

        it('should save dropbox configurations', function (done) {
            this.client
                .waitForExist(this.selector.dropbox.dropbox_save_button, 90000)
                .click(this.selector.dropbox.dropbox_save_button)
                .call(done);
        });
        it('logout BO', function (done) {
            this.client
                .signoutBO()
                .call(done);
        });
    });
});
