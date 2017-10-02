'use strict';
var should = require('should');
var common = require('../../common.webdriverio');
var globals = require('../../globals.webdriverio');

describe('Configuration app of microsoft in back office', function() {
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
        it('should access to microsoft configuration page', function (done) {
            this.client
                .waitForExist(this.selector.microsoft.microsoft_config_btn, 90000)
                .click(this.selector.microsoft.microsoft_config_btn)
                .call(done);
        });

        it('should go to microsoft developers link', function (done) {

            this.client
                .waitForExist(this.selector.microsoft.redirect_url_input, 90000)
                .getAttribute(this.selector.microsoft.redirect_url_input, 'value').then(function (url) {
                global.redirect_url = url;
                console.log(global.redirect_url)
            })
                .waitForExist(this.selector.microsoft.microsoft_developers_link, 90000)
                .click(this.selector.microsoft.microsoft_developers_link)
                .pause(5000)
                .call(done);
        });

        it('should enter the email of microsoft account', function (done) {
            global.fctname = this.test.title;
            this.client
                .getTabIds().then(function (handles) {
                return this.switchTab(handles[handles.length - 1])
            })
                .waitForExist(this.selector.microsoft.username_input, 90000)
                .setValue(this.selector.microsoft.username_input, 'prestotests@outlook.com')
                .waitForExist(this.selector.microsoft.next_button, 90000)
                .click(this.selector.microsoft.next_button)
                .pause(5000)
                .call(done);
        });

        it('should enter the password of microsoft account', function (done) {
            global.fctname = this.test.title;
            this.client
                .waitForExist(this.selector.microsoft.password_input, 90000)
                .setValue(this.selector.microsoft.password_input, 'presto_tests')
                .waitForExist(this.selector.microsoft.next_button, 90000)
                .click(this.selector.microsoft.next_button)
                .pause(5000)
                .call(done);
        });

        it('should click on cancel button', function (done) {
            this.client
                .waitForVisible(this.selector.microsoft.cancel_button, 90000)
                .click(this.selector.microsoft.cancel_button)
                .pause(5000)
                .call(done);
        });

        it('should access to the app PrestoAppSocialConnect', function (done) {
            this.client
                .waitForExist(this.selector.microsoft.app_link, 90000)
                .click(this.selector.microsoft.app_link)
                .pause(5000)
                .call(done);
        });

        it('should enter the redirect url', function (done) {
            this.client
                .moveToObject(this.selector.microsoft.customer_id_div)
                .getText(this.selector.microsoft.customer_id_div).then(function (key) {
                global.microsoft_customer_key = key;
                console.log(global.microsoft_customer_key);
            })
                .pause(5000)
                .moveToObject(this.selector.microsoft.customer_secret_td)
                .getText(this.selector.microsoft.customer_secret_td).then(function (secret) {
                global.microsoft_customer_secret = secret[1];
                console.log(global.microsoft_customer_secret);
            })
                .moveToObject(this.selector.microsoft.add_profile_button, 90000)
                .setValue(this.selector.microsoft.microsoft_redirect_url_input, global.redirect_url)
                .pause(5000)
                .call(done);
        });

        it('should click on save button', function (done) {
            this.client
                .moveToObject(this.selector.microsoft.save_button)
                .click(this.selector.microsoft.save_button)
                .pause(7000)
                .getTabIds().then(function(handles){
                    this.close(handles[handles.length - 1]);
                return this.switchTab(handles[0])
            })
                .call(done);
        });

        it('should enter the customer id and secret', function (done) {
            this.client
                .waitForExist(this.selector.microsoft.microsoft_customer_id_input, 90000)
                .setValue(this.selector.microsoft.microsoft_customer_id_input, global.microsoft_customer_key)
                .pause(3000)
                .setValue(this.selector.microsoft.microsoft_customer_secret_input, global.microsoft_customer_secret)
                .call(done);
        });

        it('should save microsoft configurations', function (done) {
            this.client
                .waitForExist(this.selector.microsoft.microsoft_save_button, 90000)
                .click(this.selector.microsoft.microsoft_save_button)
                .call(done);
        });
        it('logout BO', function (done) {
            this.client
                .signoutBO()
                .call(done);
        });
    });
});