'use strict';
var should = require('should');
var common = require('../../common.webdriverio');
var globals = require('../../globals.webdriverio');

describe('Configuration app of wordpress in back office', function() {
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
        it('should access to wordpress configuration page', function (done) {
            this.client
                .waitForExist(this.selector.wordpress.wordpress_config_btn, 90000)
                .click(this.selector.wordpress.wordpress_config_btn)
                .call(done);
        });

        it('should go to wordpress developers link', function (done) {
            this.client
                .waitForExist(this.selector.wordpress.website_url_input, 90000)
                .getAttribute(this.selector.wordpress.website_url_input, 'value').then(function (url) {
                global.website_url = url;
                console.log(global.website_url)
            })
                .waitForExist(this.selector.wordpress.redirect_uri_input, 90000)
                .getAttribute(this.selector.wordpress.redirect_uri_input, 'value').then(function (url) {
                global.redirect_uri = url;
                console.log(global.redirect_uri)
            })
                .waitForExist(this.selector.wordpress.javascript_origins_input, 90000)
                .getAttribute(this.selector.wordpress.javascript_origins_input, 'value').then(function (url) {
                global.javascript_origins = url;
                console.log(global.javascript_origins)
            })
                .waitForExist(this.selector.wordpress.developers_link, 90000)
                .click(this.selector.wordpress.developers_link)
                .pause(3000)
                .call(done);
        });

        it('should access to wordpress account', function (done) {
            global.fctname = this.test.title;
            this.client
                .getTabIds().then(function (handles) {
                return this.switchTab(handles[handles.length - 1])
            })
                .waitForExist(this.selector.wordpress.username_input, 90000)
                .setValue(this.selector.wordpress.username_input, 'prestotests+wordpress@gmail.com')
                .setValue(this.selector.wordpress.password_input, 'presto_tests')
                .waitForExist(this.selector.wordpress.login_button, 90000)
                .click(this.selector.wordpress.login_button)
                .pause(5000)
                .call(done);
        });

        it('should access to the app PrestoAppSocialConnect', function (done) {
            this.client
                .waitForExist(this.selector.wordpress.app_link, 90000)
                .click(this.selector.wordpress.app_link)
                .pause(5000)
                .call(done);
        });

        it('should access to the manage settings', function (done) {
            this.client
                .waitForExist(this.selector.wordpress.customer_id_td, 90000)
                .getText(this.selector.wordpress.customer_id_td).then(function (key) {
                global.wordpress_customer_key = key;
                console.log(global.wordpress_customer_key)
            })
                .waitForExist(this.selector.wordpress.customer_secret_td, 90000)
                .getText(this.selector.wordpress.customer_secret_td).then(function (secret) {
                global.wordpress_customer_secret = secret.substring(0, secret.lastIndexOf("Reset Key"));
                console.log(global.wordpress_customer_secret)
            })
                .waitForExist(this.selector.wordpress.manage_settings_subtab, 90000)
                .click(this.selector.wordpress.manage_settings_subtab)
                .pause(5000)
                .call(done);
        });

        it('should enter the website url', function (done) {
            this.client
                .waitForExist(this.selector.wordpress.wordpress_website_url_input, 90000)
                .setValue(this.selector.wordpress.wordpress_website_url_input, global.website_url)
                .pause(5000)
                .call(done);
        });

        it('should enter the redirect uri', function (done) {
            this.client
                .waitForExist(this.selector.wordpress.wordpress_redirect_uri_input, 90000)
                .setValue(this.selector.wordpress.wordpress_redirect_uri_input, global.redirect_uri)
                .pause(5000)
                .call(done);
        });

        it('should enter the terms of service url', function (done) {
            this.client
                .waitForExist(this.selector.wordpress.wordpress_javascript_origins_input, 90000)
                .setValue(this.selector.wordpress.wordpress_javascript_origins_input, global.javascript_origins)
                .pause(5000)
                .call(done);
        });

        it('should click on save changes button', function (done) {
            this.client
                .waitForExist(this.selector.wordpress.wordpress_update_button, 90000)
                .click(this.selector.wordpress.wordpress_update_button)
                .pause(5000)
                .getTabIds().then(function(handles){
                this.close(handles[handles.length - 1]);
                return this.switchTab(handles[0])
            })
                .call(done);
        });

        it('should enter the customer id and secret', function (done) {
            this.client
                .waitForExist(this.selector.wordpress.customer_id_input, 90000)
                .setValue(this.selector.wordpress.customer_id_input, global.wordpress_customer_key)
                .setValue(this.selector.wordpress.customer_key_input, global.wordpress_customer_secret)
                .pause(5000)
                .call(done);
        });

        it('should save wordpress configurations', function (done) {
            this.client
                .waitForExist(this.selector.wordpress.save_button, 90000)
                .click(this.selector.wordpress.save_button)
                .call(done);
        });
        it('logout BO', function (done) {
            this.client
                .signoutBO()
                .call(done);
        });
    });
});
