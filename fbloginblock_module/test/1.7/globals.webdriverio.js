'use strict';
var common = require('./common.webdriverio');
var path = require('path');
var should = require('should');
var argv = require('minimist')(process.argv.slice(2));

global.date_time = new Date().getTime();
global.URL = argv.URL;
global.module_tech_name = argv.MODULE;
global.browser = argv.browser;
global.saucelabs = argv.SAUCELABS;
global._projectdir = path.join(__dirname, '..', '..');
global.product_id=new Date().getTime();
global.new_customer_email = 'pub' + date_time + '@prestashop.com';

global.twitter_location = "";
global.amazon_location = "";
global.google_location = "";
global.pinterest_location = "";
global.yahoo_location = "";
global.paypal_location = "";
global.linkedin_location = "";
global.microsoft_location = "";
global.foursquare_location = "";
global.github_location = "";
global.disqus_location = "";
global.dropbox_location = "";
global.wordpress_location = "";
global.tumblr_location = "";
global.vkontakte_location = "";

module.exports = {
    selector: {

	 //BO
		login: '#email',
		password: '#passwd',
		login_btn: '[name="submitLogin"]',
        menu: '#nav-sidebar',
        modules_menu: '#subtab-AdminParentModulesSf',
        modules_installed: '(//div[@class="page-head-tabs"]/a)[2]',
        modules_page_loaded: '.module-search-result-wording',
        module_tech_name: '//div[@data-tech-name="' + module_tech_name + '" and not(@style)]',
        modules_search: '.pstaggerAddTagInput.module-tags-input',
        modules_search_button: '#main-div > div.content-div > div.row > div > div.row > div > div.module-top-menu > div > div.col-md-8 > div > button',
		module_conf_btn: '//*[@id="modules-list-container-all"]/div/div/div/div[5]/div[2]/form/button',
		facebook_config_btn: '//*[@id="navtabs16"]/li[4]/a',
		facebook_appl_id: '//*[@id="appid"]',
		facebook_secret_key: '//*[@id="secret"]',
		save_facebook_configuration_btn: '//*[@id="module_form_submit_btn_18"]/i',
		green_validation:'//div[@class="alert alert-success"]',
		customer_menu: '#subtab-AdminParentCustomer',
        customer_address_email_input: '//*[@id="form-customer"]/div/div[2]/table/thead/tr[2]/th[7]/input',
        customer_search_button: '#submitFilterButtoncustomer',
		facebook_logo_customer_page: '//*[@id="form-customer"]/div/div[2]/table/tbody/tr[1]/td[6]/img',

	//FO
		access_loginFO:'div.user-info > a',
		loginFO: '//*[@id="login-form"]/section/div[1]/div[1]/input',
		passwordFO: '//*[@id="login-form"]/section/div[2]/div[1]/div/input',
		login_btnFO: '//*[@id="login-form"]/footer/button',
		logoutFO: '.logout',
		clickOutSide: '//*[@id="index"]',

        twitter:{
		    //FO
            first_twitter_logo: '#follow-teaser > div > a.twitter.custom-social-button-all.custom-social-button-1 > i',
            first_twitter_url: '#follow-teaser > div > a.twitter.custom-social-button-all.custom-social-button-1',
		    username_input: '//*[@id="username_or_email"]',
		    password_input: '//*[@id="password"]',
            allow_button: '//*[@id="allow"]',
            linked_modale: '#fb-con-wrapper',
            email_input: '//*[@id="api-email"]',
            send_button: '//*[@id="fb-con-wrapper"]/a[2]',
            check_sent_email_p: '//*[@id="fb-con-wrapper"]/p',
            user_connected_span: '//*[@id="_desktop_user_info"]/div/a[2]/span',

            //BO
            twitter_logo_customer_page: '//*[@id="form-customer"]/div/div[2]/table/tbody/tr/td[6]/img',
        },

        amazon:{
            //FO
            first_amazon_logo: '#follow-teaser > div > a.amazon.custom-social-button-all.custom-social-button-1 > i',
            first_amazon_url: '#follow-teaser > div > a.amazon.custom-social-button-all.custom-social-button-1',
		    username_input: '//*[@id="ap_email"]',
		    password_input: '//*[@id="ap_password"]',
            signin_button: '//*[@id="signInSubmit"]/span/button',
            user_connected_span: '//*[@id="_desktop_user_info"]/div/a[2]/span',

            //BO
            amazon_logo_customer_page: '//*[@id="form-customer"]/div/div[2]/table/tbody/tr/td[6]/img',
        },

        google:{
            //FO
            first_google_logo: '#follow-teaser > div > a.google.custom-social-button-all.custom-social-button-1 > i',
            first_google_url: '#follow-teaser > div > a.google.custom-social-button-all.custom-social-button-1',
		    username_input: '//*[@id="identifierId"]',
            identifier_next_button: '//*[@id="identifierNext"]',
		    password_input: '//input[@type="password" and @name="password"]',
            password_next_button: '//*[@id="passwordNext"]',
            user_connected_span: '//*[@id="_desktop_user_info"]/div/a[2]/span',

            //BO
            google_logo_customer_page: '//*[@id="form-customer"]/div/div[2]/table/tbody/tr/td[6]/img',
        },

        pinterest:{
            //FO
            first_pinterest_logo: '#follow-teaser > div > a.pinterest.custom-social-button-all.custom-social-button-1 > i',
            first_pinterest_url: '#follow-teaser > div > a.pinterest.custom-social-button-all.custom-social-button-1',
		    username_input: '//input[@type="email" and @name="id"]',
		    password_input: '//input[@type="password" and @name="password"]',
            login_button: '.red.SignupButton.active',
            allow_button: '//*[@id="dialog_footer"]/button[2]',
            linked_email_input: '//*[@id="api-email"]',
            send_button: '//*[@id="fb-con-wrapper"]/a[2]',
            check_sent_email_p: '//*[@id="fb-con-wrapper"]/p',
            user_connected_span: '//*[@id="_desktop_user_info"]/div/a[2]/span',

            //BO
            pinterest_logo_customer_page: '//*[@id="form-customer"]/div/div[2]/table/tbody/tr/td[6]/img',
        },

        yahoo:{
            //FO
            first_yahoo_logo: '#follow-teaser > div > a.yahoo.custom-social-button-all.custom-social-button-1 > i',
            first_yahoo_url: '#follow-teaser > div > a.yahoo.custom-social-button-all.custom-social-button-1',
		    username_input: '//*[@id="login-username"]',
            password_input: '//*[@id="login-passwd"]',
            next_button: '//*[@id="login-signin"]',
            user_connected_span: '//*[@id="_desktop_user_info"]/div/a[2]/span',

            //BO
            yahoo_logo_customer_page: '//*[@id="form-customer"]/div/div[2]/table/tbody/tr/td[6]/img',
        },

        paypal:{
            //FO
            first_paypal_logo: '#follow-teaser > div > a.paypal.custom-social-button-all.custom-social-button-1 > i',
            first_paypal_url: '#follow-teaser > div > a.paypal.custom-social-button-all.custom-social-button-1',
		    username_input: '//*[@id="email"]',
            password_input: '//*[@id="password"]',
            login_button: '//*[@id="btnLogin"]',
            user_connected_span: '//*[@id="_desktop_user_info"]/div/a[2]/span',

            //BO
            paypal_logo_customer_page: '//*[@id="form-customer"]/div/div[2]/table/tbody/tr/td[6]/img',
        },

        linkedin:{
		    //FO
            first_linkedin_logo: '#follow-teaser > div > a.linkedin.custom-social-button-all.custom-social-button-1 > i',
            first_linkedin_url: '#follow-teaser > div > a.linkedin.custom-social-button-all.custom-social-button-1',
		    username_input: '//*[@id="session_key-oauthAuthorizeForm"]',
            password_input: '//*[@id="session_password-oauthAuthorizeForm"]',
            allow_button: '.allow.btn-primary',
            user_connected_span: '//*[@id="_desktop_user_info"]/div/a[2]/span',

            //BO
            linkedin_logo_customer_page: '//*[@id="form-customer"]/div/div[2]/table/tbody/tr/td[6]/img',
        },

        microsoft:{
            //FO
            first_microsoft_logo: '#follow-teaser > div > a.microsoft.custom-social-button-all.custom-social-button-1 > i',
            first_microsoft_url: '#follow-teaser > div > a.microsoft.custom-social-button-all.custom-social-button-1',
		    username_input: '//*[@id="i0116"]',
            password_input: '//*[@id="i0118"]',
            next_button: '//*[@id="idSIButton9"]',
            user_connected_span: '//*[@id="_desktop_user_info"]/div/a[2]/span',

            //BO
            microsoft_logo_customer_page: '//*[@id="form-customer"]/div/div[2]/table/tbody/tr/td[6]/img',
        },

        foursquare:{
            //FO
            first_foursquare_logo: '#follow-teaser > div > a.foursquare.custom-social-button-all.custom-social-button-1 > i',
            first_foursquare_url: '#follow-teaser > div > a.foursquare.custom-social-button-all.custom-social-button-1',
		    username_input: '//*[@id="username"]',
            password_input: '//*[@id="password"]',
            allow_button: '//*[@id="loginFormButton"]',
            user_connected_span: '//*[@id="_desktop_user_info"]/div/a[2]/span',

            //BO
            foursquare_logo_customer_page: '//*[@id="form-customer"]/div/div[2]/table/tbody/tr/td[6]/img',
        },

        github:{
            //FO
            first_github_logo: '#follow-teaser > div > a.github.custom-social-button-all.custom-social-button-1 > i',
            first_github_url: '#follow-teaser > div > a.github.custom-social-button-all.custom-social-button-1',
		    username_input: '//*[@id="login_field"]',
            password_input: '//*[@id="password"]',
            allow_button: '.btn.btn-primary.btn-block',
            user_connected_span: '//*[@id="_desktop_user_info"]/div/a[2]/span',

            //BO
            github_logo_customer_page: '//*[@id="form-customer"]/div/div[2]/table/tbody/tr/td[6]/img',
        },

        disqus:{
            //FO
            first_disqus_logo: '#follow-teaser > div > a.disqus.custom-social-button-all.custom-social-button-1 > i',
            first_disqus_url: '#follow-teaser > div > a.disqus.custom-social-button-all.custom-social-button-1',
		    username_input: '//*[@id="username"]',
            password_input: '//*[@id="password"]',
            allow_button: '.btn',
            user_connected_span: '//*[@id="_desktop_user_info"]/div/a[2]/span',

            //BO
            disqus_logo_customer_page: '//*[@id="form-customer"]/div/div[2]/table/tbody/tr/td[6]/img',
        },

        dropbox:{
            //FO
            first_dropbox_logo: '#follow-teaser > div > a.dropbox.custom-social-button-all.custom-social-button-1 > i',
            first_dropbox_url: '#follow-teaser > div > a.dropbox.custom-social-button-all.custom-social-button-1',
		    username_input: '//*[@id="regular-login-forms"]/div/form/div[1]/div[1]/div[2]/input',
            password_input: '//*[@id="regular-login-forms"]/div/form/div[1]/div[2]/div[2]/input',
            login_button: '.login-button.signin-button.button-primary',
            allow_button: '.auth-button.button-primary',
            user_connected_span: '//*[@id="_desktop_user_info"]/div/a[2]/span',

            //BO
            dropbox_logo_customer_page: '//*[@id="form-customer"]/div/div[2]/table/tbody/tr/td[6]/img',
        },

        wordpress:{
            //FO
            first_wordpress_logo: '#follow-teaser > div > a.wordpress.custom-social-button-all.custom-social-button-1 > i',
            first_wordpress_url: '#follow-teaser > div > a.wordpress.custom-social-button-all.custom-social-button-1',
            username_input: '//*[@id="usernameOrEmail"]',
            password_input: '//*[@id="password"]',
            login_button: '.button.form-button.is-primary',
            allow_button: '//*[@id="approve"]',
            user_connected_span: '//*[@id="_desktop_user_info"]/div/a[2]/span',

            //BO
            wordpress_logo_customer_page: '//*[@id="form-customer"]/div/div[2]/table/tbody/tr/td[6]/img',
        },

        tumblr:{
            //FO
            first_tumblr_logo: '#follow-teaser > div > a.tumblr.custom-social-button-all.custom-social-button-1 > i',
            first_tumblr_url: '#follow-teaser > div > a.tumblr.custom-social-button-all.custom-social-button-1',
            username_input: '//*[@id="signup_determine_email"]',
            password_input: '//*[@id="signup_password"]',
            next_button: '//*[@id="signup_forms_submit"]/span[2]',
            allow_button: '//*[@id="approve"]',
            user_connected_span: '//*[@id="_desktop_user_info"]/div/a[2]/span',

            //BO
            tumblr_logo_customer_page: '//*[@id="form-customer"]/div/div[2]/table/tbody/tr/td[6]/img',
        },

        vkontakte:{
            //FO
            first_vkontakte_logo: '#follow-teaser > div > a.vkontakte.custom-social-button-all.custom-social-button-1 > i',
            first_vkontakte_url: '#follow-teaser > div > a.vkontakte.custom-social-button-all.custom-social-button-1',
            username_input: '//*[@id="login_submit"]/div/div/input[6]',
            password_input: '//*[@id="login_submit"]/div/div/input[7]',
            login_button: '//*[@id="install_allow"]',
            user_connected_span: '//*[@id="_desktop_user_info"]/div/a[2]/span',

            //BO
            vkontakte_logo_customer_page: '//*[@id="form-customer"]/div/div[2]/table/tbody/tr/td[6]/img',
        },

		first_facebook_logo: '#follow-teaser > div > a.facebook.custom-social-button-all.custom-social-button-1 > i',


        second_facebook_logo: '#_desktop_user_info > div > span > a.facebook.custom-social-button-all.custom-social-button-4 > i',
        second_twitter_logo: '#_desktop_user_info > div > span > a.twitter.custom-social-button-all.custom-social-button-4 > i',
        second_amazon_logo: '#_desktop_user_info > div > span > a.amazon.custom-social-button-all.custom-social-button-4 > i',
        second_google_logo: '#_desktop_user_info > div > span > a.google.custom-social-button-all.custom-social-button-4 > i',
        second_pinterest_logo: '#_desktop_user_info > div > span > a.pinterest.custom-social-button-all.custom-social-button-4 > i',
        second_yahoo_logo: '#_desktop_user_info > div > span > a.yahoo.custom-social-button-all.custom-social-button-4 > i',
        second_paypal_logo: '#_desktop_user_info > div > span > a.paypal.custom-social-button-all.custom-social-button-4 > i',
        second_linkedin_logo: '#_desktop_user_info > div > span > a.linkedin.custom-social-button-all.custom-social-button-4 > i',
        second_microsoft_logo: '#_desktop_user_info > div > span > a.microsoft.custom-social-button-all.custom-social-button-4 > i',
        second_foursquare_logo: '#_desktop_user_info > div > span > a.foursquare.custom-social-button-all.custom-social-button-4 > i',
        second_github_logo: '#_desktop_user_info > div > span > a.github.custom-social-button-all.custom-social-button-4 > i',
        second_disqus_logo: '#_desktop_user_info > div > span > a.disqus.custom-social-button-all.custom-social-button-4 > i',
        second_dropbox_logo: '#_desktop_user_info > div > span > a.dropbox.custom-social-button-all.custom-social-button-4 > i',
        second_wordpress_logo: '#_desktop_user_info > div > span > a.wordpress.custom-social-button-all.custom-social-button-4 > i',
        second_tumblr_logo: '#_desktop_user_info > div > span > a.tumblr.custom-social-button-all.custom-social-button-4 > i',
        second_vkontakte_logo: '#_desktop_user_info > div > span > a.vkontakte.custom-social-button-all.custom-social-button-4 > i',

        third_facebook_logo: '#follow-teaser-footer > div > a.facebook.custom-social-button-all.custom-social-button-1 > i',
        third_twitter_logo: '#follow-teaser-footer > div > a.twitter.custom-social-button-all.custom-social-button-1 > i',
        third_amazon_logo: '#follow-teaser-footer > div > a.amazon.custom-social-button-all.custom-social-button-1 > i',
        third_google_logo: '#follow-teaser-footer > div > a.google.custom-social-button-all.custom-social-button-1 > i',
        third_pinterest_logo: '#follow-teaser-footer > div > a.pinterest.custom-social-button-all.custom-social-button-1 > i',
        third_yahoo_logo: '#follow-teaser-footer > div > a.yahoo.custom-social-button-all.custom-social-button-1 > i',
        third_paypal_logo: '#follow-teaser-footer > div > a.paypal.custom-social-button-all.custom-social-button-1 > i',
        third_linkedin_logo: '#follow-teaser-footer > div > a.linkedin.custom-social-button-all.custom-social-button-1 > i',
        third_microsoft_logo: '#follow-teaser-footer > div > a.microsoft.custom-social-button-all.custom-social-button-1 > i',
        third_foursquare_logo: '#follow-teaser-footer > div > a.foursquare.custom-social-button-all.custom-social-button-1 > i',
        third_github_logo: '#follow-teaser-footer > div > a.github.custom-social-button-all.custom-social-button-1 > i',
        third_disqus_logo: '#follow-teaser-footer > div > a.disqus.custom-social-button-all.custom-social-button-1 > i',
        third_dropbox_logo: '#follow-teaser-footer > div > a.dropbox.custom-social-button-all.custom-social-button-1 > i',
        third_wordpress_logo: '#follow-teaser-footer > div > a.wordpress.custom-social-button-all.custom-social-button-1 > i',
        third_tumblr_logo: '#follow-teaser-footer > div > a.tumblr.custom-social-button-all.custom-social-button-1 > i',
        third_vkontakte_logo: '#follow-teaser-footer > div > a.vkontakte.custom-social-button-all.custom-social-button-1 > i',

		Logout_btn: '//*[@id="_desktop_user_info"]/div/a[1]',
    },
    shouldExist: function(err, existing) {
        should(err).be.not.defined;
        should(existing).be.true;
    }
};