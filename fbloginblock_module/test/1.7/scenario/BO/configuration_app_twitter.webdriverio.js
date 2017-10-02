'use strict';
var should = require('should');
var common = require('../../common.webdriverio');
var globals = require('../../globals.webdriverio');

describe('Configuration app of twitter in back office', function() {
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

    describe('Access to the module configuration page', function (done) {
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

        it('should access to twitter configuration page', function (done) {
            this.client
                .waitForExist(this.selector.twitter.twitter_config_btn, 90000)
                .click(this.selector.twitter.twitter_config_btn)
                .call(done);
        });

        it('should go to twitter developers link', function (done) {

            this.client
                .waitForExist(this.selector.twitter.website_field_input, 90000)
                .getAttribute(this.selector.twitter.website_field_input, 'value').then(function (website) {
                    global.website_url = website;
                    console.log(global.website_url);
                })
                .waitForExist(this.selector.twitter.callback_field_input, 90000)
                .getAttribute(this.selector.twitter.callback_field_input, 'value').then(function (callback) {
                    global.callback_url = callback;
                    console.log(global.callback_url);
                })
                .waitForExist(this.selector.twitter.twitter_developers_link, 90000)
                .click(this.selector.twitter.twitter_developers_link)
                .call(done);
        });

        it('should click on signin button', function (done) {
            this.client
                .getTabIds().then(function (handles) {
                    return this.switchTab(handles[handles.length - 1])
                })
                .waitForExist(this.selector.twitter.signein_button, 3000)
                .click(this.selector.twitter.signein_button)
                .call(done);
        });

        it('should access to the account twitter', function (done) {
            this.client
                .waitForExist(this.selector.twitter.signein_login_input, 90000)
                .setValue(this.selector.twitter.signein_login_input,"prestotests+twitter@gmail.com" )
                .setValue(this.selector.twitter.signein_password_input,"presto_tests" )
                .waitForExist(this.selector.twitter.signein_connect_input, 90000)
                .click(this.selector.twitter.signein_connect_input)
                .call(done);
        });

        it('should access to the app PrestoAppSocialConnect', function (done) {
            this.client
                .waitForExist(this.selector.twitter.app_link, 90000)
                .click(this.selector.twitter.app_link)
                .call(done);
        });

        it('should click on settings tab', function (done) {
            this.client
                .waitForExist(this.selector.twitter.settings_tab, 90000)
                .click(this.selector.twitter.settings_tab)
                .call(done);
        });

        it('should enter the website url', function (done) {
            this.client
                .waitForExist(this.selector.twitter.website_url_input, 90000)
                .setValue(this.selector.twitter.website_url_input, global.website_url)
                .call(done);
        });

        it('should enter the callback url', function (done) {
            this.client
                .waitForExist(this.selector.twitter.callback_url_input, 90000)
                .setValue(this.selector.twitter.callback_url_input, global.callback_url)
                .call(done);
        });

        it('should click on update settings button', function (done) {
            this.client
                .waitForExist(this.selector.twitter.update_settings_button, 90000)
                .click(this.selector.twitter.update_settings_button)
                .pause(5000)
                .call(done);
        });

        it('should go to keys and access tokens', function (done) {
            this.client
                .waitForExist(this.selector.twitter.key_and_access_tokens_tab, 90000)
                .click(this.selector.twitter.key_and_access_tokens_tab)
                .waitForExist(this.selector.twitter.customer_api_key, 90000)
                .getText(this.selector.twitter.customer_api_key).then(function(key){
                    global.api_key = key;
                    console.log(global.api_key);
                })
                .waitForExist(this.selector.twitter.customer_api_secret, 90000)
                .getText(this.selector.twitter.customer_api_secret).then(function(secret){
                    global.api_secret= secret;
                    console.log(global.api_secret);
                })
                .getTabIds().then(function(handles){
                    return this.switchTab(handles[0])
                })
                .call(done);
        });

        it('should enter the customer key and secret', function (done) {
            this.client
                .waitForExist(this.selector.twitter.customer_key_input, 90000)
                .setValue(this.selector.twitter.customer_key_input, global.api_key)
                .setValue(this.selector.twitter.customer_secret_input, global.api_secret)
                .call(done);
        });

        it('should save twitter configurations', function (done) {
            this.client
                .waitForExist(this.selector.twitter.twitter_save_button, 90000)
                .click(this.selector.twitter.twitter_save_button)
                .call(done);
        });

        it('logout BO', function (done) {
            this.client
                .signoutBO()
                .call(done);
        });
    });
});
