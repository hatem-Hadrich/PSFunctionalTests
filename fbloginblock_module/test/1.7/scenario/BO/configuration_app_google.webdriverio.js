'use strict';
var should = require('should');
var common = require('../../common.webdriverio');
var globals = require('../../globals.webdriverio');

describe('Configuration app of google in back office', function() {
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

        it('should access to google configuration page', function (done) {
            this.client
                .waitForExist(this.selector.google.google_config_btn, 90000)
                .click(this.selector.google.google_config_btn)
                .call(done);
        });

        it('should go to google developers link', function (done) {

            this.client
                .waitForExist(this.selector.google.authorized_javaScript_origins_input, 90000)
                .getAttribute(this.selector.google.authorized_javaScript_origins_input, 'value').then(function (javascript_url) {
                    global.authorized_javascript_url = javascript_url;
                    console.log(global.authorized_javascript_url);
                })
                .waitForExist(this.selector.google.authorized_redirect_uri_input, 90000)
                .getAttribute(this.selector.google.authorized_redirect_uri_input, 'value').then(function (redirect_uri) {
                    global.authorized_redirect_uri = redirect_uri;
                    console.log(global.authorized_redirect_uri);
                })
                .waitForExist(this.selector.google.google_developers_link, 90000)
                .click(this.selector.google.google_developers_link)
                .call(done);
        });

        it('should enter the google email', function (done) {
            global.fctname = this.test.title;
            this.client
                .getTabIds().then(function (handles) {
                    return this.switchTab(handles[handles.length - 1])
                })
                .waitForExist(this.selector.google.username_input, 90000)
                .setValue(this.selector.google.username_input, 'prestotests@gmail.com')
                .waitForExist(this.selector.google.identifier_next_button, 90000)
                .click(this.selector.google.identifier_next_button)
                .call(done);
        });

        it('should enter the google password', function (done) {
            global.fctname = this.test.title;
            this.client
                .waitForVisible(this.selector.google.password_input, 90000)
                .setValue(this.selector.google.password_input, 'presto_tests')
                .waitForExist(this.selector.google.password_next_button, 90000)
                .click(this.selector.google.password_next_button)
                .pause(5000)
                .call(done);
        });

        it('should access to the app PrestoAppSocialConnect', function (done) {
            this.client
                .waitForExist(this.selector.google.app_link, 90000)
                .click(this.selector.google.app_link)
                .call(done);
        });

        it('should go to identifiants menu', function (done) {
            this.client
                .waitForExist(this.selector.google.settings_button, 90000)
                .click(this.selector.google.settings_button)
                .waitForExist(this.selector.google.api_and_services_menu, 90000)
                .moveToObject(this.selector.google.api_and_services_menu)
                .waitForExist(this.selector.google.identifiants_submenu, 90000)
                .click(this.selector.google.identifiants_submenu)
                .pause(3000)
                .call(done);
        });

        it('should click on create identifiant', function (done) {
            this.client
                .waitForExist(this.selector.google.create_identifiant_button, 90000)
                .click(this.selector.google.create_identifiant_button)
                .pause(3000)
                .waitForExist(this.selector.google.identifiant_customer_oauth_link, 90000)
                .click(this.selector.google.identifiant_customer_oauth_link)
                .call(done);
        });

        it('should select web application', function (done) {
            this.client
                .waitForExist(this.selector.google.application_web_checkbox, 90000)
                .click(this.selector.google.application_web_checkbox)
                .call(done);
        });

        it('should enter the authorized javaScript origins', function (done) {
            this.client
                .waitForVisible(this.selector.google.authorized_javaScript_input, 90000)
                .pause(5000)
                .click(this.selector.google.authorized_javaScript_input)
                .keys(global.authorized_javascript_url)
                .click(this.selector.google.click_outside_p)
                .call(done);
        });

        it('should enter the authorized redirect uri', function (done) {
            this.client
                .waitForExist(this.selector.google.authorized_redirect_input, 90000)
                .pause(5000)
                .click(this.selector.google.authorized_redirect_input)
                .keys(global.authorized_redirect_uri)
                .click(this.selector.google.click_outside_p)
                .call(done);
        });

        it('should click on create button', function (done) {
            this.client
                .waitForExist(this.selector.google.create_button, 90000)
                .click(this.selector.google.create_button)
                .pause(5000)
                .call(done);
        });

        it('should click on OK button', function (done) {
            this.client
                .waitForExist(this.selector.google.api_key, 90000)
                .getText(this.selector.google.api_key).then(function(key){
                global.google_customer_key = key;
                console.log(global.google_customer_key);
            })
                .waitForExist(this.selector.google.api_secret, 90000)
                .getText(this.selector.google.api_secret).then(function(secret){
                global.google_customer_secret= secret;
                console.log(global.google_customer_secret);
            })
                .waitForExist(this.selector.google.ok_button, 90000)
                .click(this.selector.google.ok_button)
                .pause(5000)
                .getTabIds().then(function(handles){
                return this.switchTab(handles[0])
            })
                .call(done);
        });

        it('should enter the customer id and secret', function (done) {
            this.client
                .scroll(0, 900)
                .waitForExist(this.selector.google.google_customer_id_input, 90000)
                .setValue(this.selector.google.google_customer_id_input, global.google_customer_key)
                .setValue(this.selector.google.google_customer_secret_input, global.google_customer_secret)
                .call(done);
        });

        it('should save google configurations', function (done) {
            this.client
                .scroll(0, 1800)
                .waitForExist(this.selector.google.google_save_button, 90000)
                .click(this.selector.google.google_save_button)
                .call(done);
        });

        it('logout BO', function (done) {
            this.client
                .signoutBO()
                .call(done);
        });
    });
});
