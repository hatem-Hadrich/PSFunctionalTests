'use strict';
var should = require('should');
var common = require('../../common.webdriverio');
var globals = require('../../globals.webdriverio');

describe('Configuration app of foursquare in back office', function() {
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
        it('should access to foursquare configuration page', function (done) {
            this.client
                .waitForExist(this.selector.foursquare.foursquare_config_btn, 90000)
                .click(this.selector.foursquare.foursquare_config_btn)
                .call(done);
        });

        it('should go to foursquare developers link', function (done) {
            this.client
                .waitForExist(this.selector.foursquare.welcome_page_url_input, 90000)
                .getAttribute(this.selector.foursquare.welcome_page_url_input, 'value').then(function (url) {
                global.welcome_page = url;
                console.log(global.welcome_page)
            })
                .waitForExist(this.selector.foursquare.privacy_policy_url_input, 90000)
                .getAttribute(this.selector.foursquare.privacy_policy_url_input, 'value').then(function (url) {
                global.privacy_policy = url;
                console.log(global.privacy_policy)
            })
                .waitForExist(this.selector.foursquare.redirect_url_input, 90000)
                .getAttribute(this.selector.foursquare.redirect_url_input, 'value').then(function (url) {
                global.redirect_url = url;
                console.log(global.redirect_url)
            })
                .waitForExist(this.selector.foursquare.foursquare_developers_link, 90000)
                .click(this.selector.foursquare.foursquare_developers_link)
                .pause(3000)
                .call(done);
        });

        it('should access to foursquare account', function (done) {
            global.fctname = this.test.title;
            this.client
                .getTabIds().then(function (handles) {
                return this.switchTab(handles[handles.length - 1])
            })
                .waitForExist(this.selector.foursquare.username_input, 90000)
                .setValue(this.selector.foursquare.username_input, 'prestotests+foursquare@gmail.com')
                .setValue(this.selector.foursquare.password_input, 'presto_tests')
                .waitForExist(this.selector.foursquare.allow_button, 90000)
                .click(this.selector.foursquare.allow_button)
                .pause(5000)
                .call(done);
        });

        it('should access to the app PrestoAppSocialConnect', function (done) {
            this.client
                .waitForExist(this.selector.foursquare.app_link, 90000)
                .click(this.selector.foursquare.app_link)
                .pause(5000)
                .call(done);
        });

        it('should click on update button', function (done) {
            this.client
                .waitForExist(this.selector.foursquare.foursquare_customer_id_pre, 90000)
                .getText(this.selector.foursquare.foursquare_customer_id_pre).then(function (key) {
                global.foursquare_customer_key = key;
                console.log(global.foursquare_customer_key)
            })
                .waitForExist(this.selector.foursquare.foursquare_customer_secret_pre, 90000)
                .getText(this.selector.foursquare.foursquare_customer_secret_pre).then(function (secret) {
                global.foursquare_customer_secret = secret;
                console.log(global.foursquare_customer_secret)
            })
                .waitForExist(this.selector.foursquare.foursquare_update_button, 90000)
                .click(this.selector.foursquare.foursquare_update_button)
                .pause(5000)
                .call(done);
        });

        it('should enter the application uri', function (done) {
            this.client
                .waitForExist(this.selector.foursquare.foursquare_application_uri_input, 90000)
                .setValue(this.selector.foursquare.foursquare_application_uri_input, global.welcome_page)
                .pause(5000)
                .call(done);
        });

        it('should enter the privacy policy url', function (done) {
            this.client
                .waitForExist(this.selector.foursquare.foursquare_privacy_policy_url_input, 90000)
                .setValue(this.selector.foursquare.foursquare_privacy_policy_url_input, global.privacy_policy)
                .pause(5000)
                .call(done);
        });

        it('should enter the redirect url', function (done) {
            this.client
                .waitForExist(this.selector.foursquare.foursquare_redirect_url_input, 90000)
                .setValue(this.selector.foursquare.foursquare_redirect_url_input, global.redirect_url)
                .pause(5000)
                .call(done);
        });

        it('should click on save button', function (done) {
            this.client
                .moveToObject(this.selector.foursquare.save_button)
                .click(this.selector.foursquare.save_button)
                .pause(5000)
                .getTabIds().then(function(handles){
                    this.close(handles[handles.length - 1]);
                return this.switchTab(handles[0])
            })
                .call(done);
        });

        it('should enter the customer id and secret', function (done) {
            this.client
                .waitForExist(this.selector.foursquare.foursquare_customer_id_input, 90000)
                .setValue(this.selector.foursquare.foursquare_customer_id_input, global.foursquare_customer_key)
                .setValue(this.selector.foursquare.foursquare_customer_secret_input, global.foursquare_customer_secret)
                .call(done);
        });

        it('should save foursquare configurations', function (done) {
            this.client
                .waitForExist(this.selector.foursquare.foursquare_save_button, 90000)
                .click(this.selector.foursquare.foursquare_save_button)
                .call(done);
        });
        it('logout BO', function (done) {
            this.client
                .signoutBO()
                .call(done);
        });
    });
});
