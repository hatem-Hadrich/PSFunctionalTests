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
        //modules_installed: '(//div[@class="page-head-tabs"]/a)[2]',
        modules_installed: '(//div[@class="page-head-tabs"]/a)[1]',
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
        nbr_module: '[class="module-sorting-search-wording"]',
        red_validation: '[class="growl growl-error growl-medium"]',
        close_validation: '.growl-close',
        validation_msg: '//*[@id="growls"]/div/div[3]',
        modules_validate_uninstall: '//a[@class="btn btn-primary uppercase module_action_modal_uninstall"]',
        install_module_btn: '//div[@data-tech-name="' + module_tech_name + '" and not(@style)]//button[@data-confirm_modal="module-modal-confirm-' + module_tech_name + '-install"]',
        uninstall_module_list: '//div[@data-tech-name="' + module_tech_name + '" and not(@style)]//button[@class="btn btn-primary-outline  dropdown-toggle"]',
        uninstall_module_btn: '//div[@data-tech-name="' + module_tech_name + '" and not(@style)]//button[@class="dropdown-item module_action_menu_uninstall"]',
        modal_confirm_uninstall: '//*[@id="module-modal-confirm-' + module_tech_name + '-uninstall" and @class="modal modal-vcenter fade in"]//a[@class="btn btn-primary uppercase module_action_modal_uninstall"]',

	//FO
		access_loginFO:'div.user-info > a',
		loginFO: '//*[@id="login-form"]/section/div[1]/div[1]/input',
		passwordFO: '//*[@id="login-form"]/section/div[2]/div[1]/div/input',
		login_btnFO: '//*[@id="login-form"]/footer/button',
		logoutFO: '.logout',
		clickOutSide: '//*[@id="index"]',

        product:{
            logo_home_pageFO: '.logo.img-responsive',
            first_product_home_page: '.thumbnail.product-thumbnail',
            add_to_cart: '.btn.btn-primary.add-to-cart',
            first_product_home_page_name: '[itemprop="name"]',
            product_image: '#content',
            product_name_details: '[itemprop="name"]',
            product_price_details: '[itemprop="price"]',
            product_quantity_details: '#quantity_wanted',
            layer_cart: '//div[@id="blockcart-modal" and @style="display: block;"]',
            layer_cart_name_details: '//div[@id="blockcart-modal"]/div/div/div[2]/div/div[1]/div/div[2]/h6',
            layer_cart_price_details: '//div[@id="blockcart-modal"]/div/div/div[2]/div/div[1]/div/div[2]/p[1]',
            layer_cart_quantity_details: '//div[@id="blockcart-modal"]/div/div/div[2]/div/div[1]/div/div[2]/p[2]',
            layer_cart_command_button: '//*[@id="blockcart-modal"]/div/div/div[2]/div/div[2]/div/div/a',
            command_product_name: '(//div[@class="product-line-info"])[1]/a',
            command_product_price: '//span[@class="price"]',
            command_button_checkout: '//*[@id="main"]/div/div[2]/div[1]/div[3]/div/a',
            checkout_step2_continue_button: '//*[@id="checkout-addresses-step"]/div/div/form/div[2]/button',
            // checkout_step2_continue_button: '//*[@id="delivery-address"]/div/footer/button',
            checkout_step3_continue_button: '//*[@id="js-delivery"]/button',
            checkout_step4_payment: '//*[@id="payment-option-2"]',
            checkout_step4_cgv: '//input[@id="conditions_to_approve[terms-and-conditions]"]',
            checkout_step4_order: '#payment-confirmation >div > button',
            checkout_total: '//div[@class="cart-summary-line cart-total"]/span[2]',
            order_confirmation_name: '#order-items > div > div > div.col-sm-4.col-xs-9.details > span',
            order_confirmation_price1: '#order-items > div > table > tbody > tr:nth-child(1) > td:nth-child(2)',
            order_confirmation_price2: '#content-hook_payment_return > div > div > div > dl > dd:nth-child(2)',
            order_confirmation_ref: '(//div[@id="order-details"]/ul/li)[1]',
        },
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
            //twitter_logo_customer_page: '//*[@id="form-customer"]/div/div[2]/table/tbody/tr/td[6]/img',
            twitter_logo_customer_page: '//*[@id="form-customer"]/div/div[2]/table/tbody/tr/td[5]/img',
            twitter_config_btn: '//*[@id="navtabs16"]/li[5]/a',
            twitter_developers_link: '//*[@id="twitter"]/div/div/fieldset/div[3]/a',
            website_field_input: '//*[@id="twitter"]/div/div/fieldset/div[8]/input',
            callback_field_input: '//*[@id="twitter"]/div/div/fieldset/div[9]/input',
            customer_key_input: '//*[@id="twitterconskey"]',
            customer_secret_input: '//*[@id="twitterconssecret"]',
            twitter_save_button: '//*[@id="module_form_submit_btn_19"]',

            //twitter site
            signein_button: '//*[@id="gaz-content-body"]/div[2]/div/a',
            signein_login_input : '//*[@id="page-container"]/div/div[1]/form/fieldset/div[1]/input',
            signein_password_input : '//*[@id="page-container"]/div/div[1]/form/fieldset/div[2]/input',
            signein_connect_input : '//*[@id="page-container"]/div/div[1]/form/div[2]/button',
            //app_link : '//*[@id="gaz-content-body"]/div[3]/div/ul/li[2]/div/div[2]/h2/a',
            app_link : '//*[@id="gaz-content-body"]/div[3]/div/ul/li[1]/div/div[2]/h2/a',
            settings_tab : '//*[@id="gaz-content-body"]/div[2]/ul/li[2]/a',
            key_and_access_tokens_tab : '//*[@id="gaz-content-body"]/div[2]/ul/li[3]/a',
            website_url_input : '//*[@id="edit-url"]',
            callback_url_input : '//*[@id="edit-callback-url"]',
            update_settings_button : '//*[@id="edit-submit"]',
            customer_api_key: '//*[@id="gaz-content-body"]/div[3]/div/div[2]/div[1]/span[2]',
            customer_api_secret: '//*[@id="gaz-content-body"]/div[3]/div/div[2]/div[2]/span[2]',
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
            amazon_config_btn: '//*[@id="navtabs16"]/li[6]/a',
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
            google_config_btn: '//*[@id="navtabs16"]/li[7]/a',
            authorized_javaScript_origins_input: '//*[@id="google"]/div/div/fieldset/div[21]/input',
            authorized_redirect_uri_input: '//*[@id="google"]/div/div/fieldset/div[22]/input',
            google_developers_link: '//*[@id="google"]/div/div/fieldset/div[9]/a',
            google_customer_id_input: '//*[@id="oci"]',
            google_customer_secret_input: '//*[@id="ocs"]',
            google_save_button: '//*[@id="module_form_submit_btn_21"]',

            //google site
            app_link: '//*[@id="p6n-project-table"]/tbody/tr[5]/td[2]/a',
            settings_button: '//pan-platform-bar-button[@class="p6n-console-nav-button p6n-console-nav-button-container"]/button',
            api_and_services_menu: '//a[@class="p6n-console-nav-item-link md-button md-default-theme md-ink-ripple"]',
            identifiants_submenu: '//*[@id="p6n-console-nav-section-flyout-menu-0"]/md-menu-item[3]/a',
            create_identifiant_button: '//div[@class="p6n-action-bar"]/ng-include/div/a',
            identifiant_customer_oauth_link: '//div[@class="p6n-dropdown-container"]/section/div/div/div[1]/div[2]',
            application_web_checkbox: '//fieldset[@class="p6n-form-fieldset ng-pristine ng-invalid ng-invalid-required"]/div[1]/div[1]/label[1]/span',
            //authorized_javaScript_input: '//span[@placeholder="http://www.example.com"]',
            authorized_javaScript_input: '/html/body/pan-shell/div/div[2]/div/div[1]/pan-upgrade-panel-container/div/ng-transclude/div[2]/div/div/ng-transclude/div/div[2]/md-content/div/div[2]/div/form/oauth-client-editor/div/section/div/fieldset[1]/div/div/ng-form/ul/li',
            click_outside_p: '.p6n-form-note',
            //authorized_redirect_input: '//span[@placeholder="http://www.example.com/oauth2callback"]',
            authorized_redirect_input: '/html/body/pan-shell/div/div[2]/div/div[1]/pan-upgrade-panel-container/div/ng-transclude/div[2]/div/div/ng-transclude/div/div[2]/md-content/div/div[2]/div/form/oauth-client-editor/div/section/div/fieldset[2]/div/div/ng-form/ul/li',
            create_button: '//div[@class="p6n-form-buttons"]/button',
            ok_button: '//a[@class="p6n-loading-button p6n-modal-action-button p6n-modal-action-container md-primary p6n-modal-actions-cancel-btn md-button md-ink-ripple"]',
            api_key: '//div[@class="md-dialog-content p6n-modal-content"]/span/ng-transclude/span',
            api_secret: '//div[@class="md-dialog-content p6n-modal-content"]/div/span/ng-transclude/span',
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
            pinterest_config_btn: '//*[@id="navtabs16"]/li[18]/a',
            pinterest_developers_link: '//*[@id="pinterest"]/div/div/fieldset/div[3]/a',
            site_url_input: '//*[@id="pinterest"]/div/div/fieldset/div[8]/input',
            redirect_url_input: '//*[@id="pinterest"]/div/div/fieldset/div[9]/input',
            customer_key_input: '//*[@id="pici"]',
            customer_secret_input: '//*[@id="pics"]',
            save_button: '//*[@id="module_form_submit_btn_32"]',

            //pinterest site
            app_link: '//*[@id="app"]/div/section/div/h2/a',
            app_id_input: '//*[@id="app"]/div/div[2]/header/div[2]/div/div[1]/input',
            app_secret_input: '//*[@id="app"]/div/div[2]/header/div[2]/div/div[2]/input',
            show_button: '//*[@id="app"]/div/div[2]/header/div[2]/div/div[2]/div/button',
            pinterest_site_url_input: '//*[@id="app"]/div/div[2]/section[3]/div/div[1]/label[1]/input',
            pinterest_redirect_url_input: '//*[@id="app"]/div/div[2]/section[3]/div/div[1]/label[2]/div/div/input',
            delete_redirect_url_icon: '//*[@id="app"]/div/div[2]/section[3]/div/div[1]/label[2]/div/ul/li/div/span[2]',
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
            allow_button: '//*[@id="agreeConsent"]',
            user_connected_span: '//*[@id="_desktop_user_info"]/div/a[2]/span',

            //BO
            paypal_logo_customer_page: '//*[@id="form-customer"]/div/div[2]/table/tbody/tr/td[6]/img',
            paypal_config_btn: '//*[@id="navtabs16"]/li[9]/a',
            return_url_input: '//*[@id="paypal"]/div/div/fieldset/div[8]/input',
            privacy_policy_url_input: '//*[@id="paypal"]/div/div/fieldset/div[11]/input',
            user_agreement_url_input: '//*[@id="paypal"]/div/div/fieldset/div[12]/input',
            paypal_developers_link: '//*[@id="paypal"]/div/div/fieldset/div[3]/a',
            log_inti_dashboard_button: '//*[@id="header"]/div[2]/div[2]/span/div/a',
            paypal_customer_id_input: '//*[@id="clientid"]',
            paypal_customer_secret_input: '//*[@id="psecret"]',
            paypal_save_button: '//*[@id="module_form_submit_btn_23"]',

            //paypal site
            manage_api_button: '//*[@id="main"]/div/div[2]/div/a[3]',
            app_link: '//div[@class="content-wrapper"]/table/tbody/tr[2]/td[1]/a',
            //live_button: '//*[@id="liveBtn"]',
            //show_secret_button: '//*[@id="credentialsLive-live-view"]/div/div/div[2]/div[4]/div[2]/p',
            show_secret_button: '//*[@id="credentialsLive-sb-view"]/div/div/div[2]/div[3]/div[2]/p',
            //show_return_url_button: '//*[@id="returnUrls-live"]',
            show_return_url_button: '//*[@id="returnUrls"]',
            //customer_id: '//*[@id="credentials-live"]',
            customer_id: '//*[@id="credentials-sb"]',
            //customer_secret: '//*[@id="c-table-live"]/table/tbody/tr/td[2]',
            customer_secret: '//*[@id="c-table-sb"]/table/tbody/tr/td[2]',
            //live_return_url_input: '//*[@id="oauth_return_url__1-live"]',
            paypal_return_url_input: '//*[@id="oauth_return_url__1"]',
            //live_plus_button: '//*[@id="editUrlSection-live"]/div/button[1]',
            //log_in_with_paypal_checkbox: '//*[@id="capabilityForm-live"]/input',
            log_in_with_paypal_checkbox: '//*[@id="capabilityForm"]/input',
            //advanced_options_button: '//*[@id="capabilityForm-live"]/span/span',
            advanced_options_button: '//*[@id="capabilityForm"]/span/span',
            //personnal_information_checkbox: '//*[@id="personalCheckBox-live"]',
            personnal_information_checkbox: '//*[@id="personalCheckBox"]',
            //address_information_checkbox: '//*[@id="addressCheckBox-live"]',
            address_information_checkbox: '//*[@id="addressCheckBox"]',
            //account_information_checkbox: '//*[@id="accountCheckBox-live"]',
            account_information_checkbox: '//*[@id="accountCheckBox"]',
            //live_privacy_policy_url_input: '//*[@id="privacy_policy_url-live"]',
            live_privacy_policy_url_input: '//*[@id="privacy_policy_url"]',
            //live_user_agreement_url_input: '//*[@id="user_agreement_url-live"]',
            live_user_agreement_url_input: '//*[@id="user_agreement_url"]',
            //live_save_button: '//*[@id="saveBtn-live"]',
            live_save_button: '//*[@id="saveBtn"]',
            feedback_button: '//*[@id="applications"]/main/div/article/div[2]/a',
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
            linkedin_config_btn: '//*[@id="navtabs16"]/li[10]/a',
            website_url_input: '//*[@id="linkedin"]/div/div/fieldset/div[11]/input',
            linkedin_developers_link: '//*[@id="linkedin"]/div/div/fieldset/div[3]/a',
            linkedin_customer_id_input: '//*[@id="lapikey"]',
            linkedin_customer_secret_input: '//*[@id="lsecret"]',
            linkedin_save_button: '//*[@id="module_form_submit_btn_24"]',

            //linkedin site
            linkedin_identify_button: '//*[@id="uno-reg-join"]/div/div/div/div[2]/div[1]/div/div/p/a',
            linkedin_username_input: '//*[@id="session_key-login"]',
            linkedin_password_input: '//*[@id="session_password-login"]',
            linkedin_signin_button: '//*[@id="btn-primary"]',
            app_link: '//*[@id="app-bristol"]/div[2]/a',
            linkedin_preferences_button: '//*[@id="filter-tablist"]/li[2]/a',
            linkedin_website_url_input: '//*[@id="websiteUrl"]',
            linkedin_update_button: '//*[@id="control_gen_1"]/form/ul[11]/li/p/button[1]',
            customer_id_span: '//*[@id="control_gen_1"]/form/ul[1]/li/table/tbody/tr[1]/td[2]/span',
            customer_secret_span: '//*[@id="control_gen_1"]/form/ul[1]/li/table/tbody/tr[3]/td[2]/span',
        },

        microsoft:{
            //FO
            first_microsoft_logo: '#follow-teaser > div > a.microsoft.custom-social-button-all.custom-social-button-1 > i',
            first_microsoft_url: '#follow-teaser > div > a.microsoft.custom-social-button-all.custom-social-button-1',
		    username_input: '//*[@id="i0116"]',
            password_input: '//*[@id="i0118"]',
            next_button: '//*[@id="idSIButton9"]',
            accept_button: '//*[@id="idBtn_Accept"]',
            user_connected_span: '//*[@id="_desktop_user_info"]/div/a[2]/span',

            //BO
            microsoft_logo_customer_page: '//*[@id="form-customer"]/div/div[2]/table/tbody/tr/td[6]/img',
            microsoft_config_btn: '//*[@id="navtabs16"]/li[11]/a',
            redirect_url_input: '//*[@id="hotmail"]/div/div/fieldset/div[8]/input',
            microsoft_developers_link: '//*[@id="hotmail"]/div/div/fieldset/div[3]/a',
            microsoft_customer_id_input: '//*[@id="mclientid"]',
            microsoft_customer_secret_input: '//*[@id="mclientsecret"]',
            microsoft_save_button: '//*[@id="module_form_submit_btn_25"]',

            //microsoft site
            app_link: '//*[@id="000000004C1DDC8F"]',
            customer_id_div: '//*[@id="main"]/div/section/form/div[1]/div[1]/div/div[4]/div[2]/div',
            customer_secret_td: '//table/tbody/tr[@class="ng-scope"]/td[1]',
            microsoft_redirect_url_input: '//*[@id="replyUrl"]',
            add_profile_button: '//*[@id="UploadLogoBtn"]/div[1]/div[2]',
            cancel_button: '//*[@id="cancelbutton"]',
            save_button: '//button[@class="btn btn-primary" and @type="submit" and @name="AppSaveBtn"]',//.btn.btn-primary

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
            foursquare_config_btn: '//*[@id="navtabs16"]/li[12]/a',
            redirect_url_input: '//*[@id="foursquare"]/div/div/fieldset/div[9]/input',
            welcome_page_url_input: '//*[@id="foursquare"]/div/div/fieldset/div[7]/input',
            privacy_policy_url_input: '//*[@id="foursquare"]/div/div/fieldset/div[8]/input',
            foursquare_developers_link: '//*[@id="foursquare"]/div/div/fieldset/div[3]/a',
            foursquare_customer_id_input: '//*[@id="fsci"]',
            foursquare_customer_secret_input: '//*[@id="fscs"]',
            foursquare_save_button: '//*[@id="module_form_submit_btn_26"]',

            //foursquare site
            app_link: '//*[@id="createdApps"]/div[1]/div/div[1]/h3/a',
            foursquare_update_button: '//*[@id="developerDetails"]/div[1]/a[1]',
            foursquare_application_uri_input: '//*[@id="applicationUri"]',
            foursquare_privacy_policy_url_input: '//*[@id="privacyPolicyUri"]',
            foursquare_redirect_url_input: '//*[@id="callbackUri"]',
            save_button: '//*[@id="appTextProperties"]/div/a',
            foursquare_customer_id_pre: '//*[@id="developerDetails"]/div[1]/fieldset[1]/div[1]/div/pre/code',
            foursquare_customer_secret_pre: '//*[@id="developerDetails"]/div[1]/fieldset[1]/div[2]/div/pre/code',
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
            github_config_btn: '//*[@id="navtabs16"]/li[13]/a',
            github_developers_link: '//*[@id="github"]/div/div/fieldset/div[3]/a',
            home_page_url_input: '//*[@id="github"]/div/div/fieldset/div[5]/input',
            callback_url_input: '//*[@id="github"]/div/div/fieldset/div[7]/input',
            customer_id_input: '//*[@id="gici"]',
            customer_key_input: '//*[@id="gics"]',
            github_save_button: '//*[@id="module_form_submit_btn_27"]',

            //github site
            app_link: '//*[@id="js-pjax-container"]/div/div[2]/div[2]/div/div/div[1]/span[1]/a',
            github_customer_id_dd: '//*[@id="js-pjax-container"]/div/div[2]/div[1]/div[3]/div/div/dl/dd[1]',
            github_customer_key_dd: '//*[@id="js-pjax-container"]/div/div[2]/div[1]/div[3]/div/div/dl/dd[2]',
            github_application_url_input: '//*[@id="oauth_application_url"]',
            github_application_callback_url_input: '//*[@id="oauth_application_callback_url"]',
            github_cancel_button: '//*[@id="new_oauth_application"]/p/a',
            github_update_button: '//form[@class="edit_oauth_application"]/button',
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
            disqus_config_btn: '//*[@id="navtabs16"]/li[14]/a',
            developers_link: '//*[@id="disqus"]/div/div/fieldset/div[3]/a',
            website_url_input: '//*[@id="disqus"]/div/div/fieldset/div[8]/input',
            callback_url_input: '//*[@id="disqus"]/div/div/fieldset/div[12]/input',
            terms_of_service_url_input: '//*[@id="disqus"]/div/div/fieldset/div[16]/input',
            api_key_input: '//*[@id="dci"]',
            api_secret_input: '//*[@id="dcs"]',
            disqus_save_button: '//*[@id="module_form_submit_btn_28"]',

            //disqus site
            disqus_username_input: '//*[@id="username-input"]',
            disqus_password_input: '//*[@id="password-input"]',
            disqus_login_button: '.button.submit',
            app_link: '//*[@id="api-account-list"]/li/h3/a',
            api_key_pre: '//*[@id="content"]/div/div[2]/div[2]/form/div[2]/div[2]/fieldset[2]/div[1]/pre',
            api_secret_pre: '//*[@id="content"]/div/div[2]/div[2]/form/div[2]/div[2]/fieldset[2]/div[2]/pre',
            settings_subtab: '//*[@id="content"]/div/div[2]/div[2]/form/div[2]/div[1]/ul/li[2]/a',
            website_input: '//*[@id="id_website"]',
            callback_input: '//*[@id="id_callback_url"]',
            terms_of_service_input: '//*[@id="id_terms_url"]',
            save_changes_button: '.button',
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
            dropbox_config_btn: '//*[@id="navtabs16"]/li[15]/a',
            redirect_uri_input: '//*[@id="dropbox"]/div/div/fieldset/div[10]/input',
            developers_link: '//*[@id="dropbox"]/div/div/fieldset/div[3]/a',
            api_key_input: '//*[@id="dbci"]',
            api_secret_input: '//*[@id="dbcs"]',
            dropbox_save_button: '//*[@id="module_form_submit_btn_29"]',

            //dropbox site
            dropbox_username_input: '//*[@id="regular-login-forms"]/form[1]/div[1]/div[1]/div[2]/input',
            dropbox_password_input: '//*[@id="regular-login-forms"]/form[1]/div[1]/div[2]/div[2]/input',
            dropbox_login_button: '.login-button.button-primary',
            app_link: '//*[@id="right-content"]/div[2]/div/div[2]/div[1]/a',
            delete_redirect_uri: '//*[@id="oauth-uri-list"]/div/div/img',
            dropbox_redirect_uri_input: '//*[@id="oauth-add-uri-form"]/input[3]',
            dropbox_redirect_uri_add_button: '//*[@id="oauth-add-uri-form"]/input[4]',
            dropbox_app_key_div: '//*[@id="config-content"]/table/tbody/tr[5]/td[2]/div',
            dropbox_app_secret_div: '//*[@id="config-content"]/table/tbody/tr[6]/td[2]/div',
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
            wordpress_config_btn: '//*[@id="navtabs16"]/li[16]/a',
            developers_link: '//*[@id="wordpress"]/div/div/fieldset/div[3]/a',
            website_url_input: '//*[@id="wordpress"]/div/div/fieldset/div[7]/input',
            redirect_uri_input: '//*[@id="wordpress"]/div/div/fieldset/div[8]/input',
            javascript_origins_input: '//*[@id="wordpress"]/div/div/fieldset/div[9]/input',
            customer_id_input: '//*[@id="wci"]',
            customer_key_input: '//*[@id="wcs"]',
            save_button: '//*[@id="module_form_submit_btn_30"]',

            //wordpress site
            app_link: '//*[@id="content"]/ul/li/div/h2/a',
            manage_settings_subtab: '//*[@id="content"]/div[2]/div[2]/ul/li[1]/a',
            customer_id_td: '//*[@id="content"]/div[3]/div[2]/table/tbody/tr[1]/td',
            customer_secret_td: '//*[@id="content"]/div[3]/div[2]/table/tbody/tr[2]/td',
            wordpress_website_url_input: '//*[@id="url"]',
            wordpress_redirect_uri_input: '//*[@id="redirect_uri"]',
            wordpress_javascript_origins_input: '//*[@id="javascript_origins"]',
            wordpress_update_button: '.button-primary',
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
            tumblr_config_btn: '//*[@id="navtabs16"]/li[17]/a',
            tumblr_developers_link: '//*[@id="tumblr"]/div/div/fieldset/div[3]/a',
            website_url_input: '//*[@id="tumblr"]/div/div/fieldset/div[6]/input',
            callback_url_input: '//*[@id="tumblr"]/div/div/fieldset/div[8]/input',
            customer_key_input: '//*[@id="tuci"]',
            customer_secret_input: '//*[@id="tucs"]',
            save_button: '//*[@id="module_form_submit_btn_31"]',

            //wordpress site
            signin_button: '//*[@id="signup_forms_submit"]/span[6]',
            app_link: '//*[@id="dashboard_account_oauth_apps"]/div[4]/div/div/div[2]/a[2]',
            tumblr_website_url_input:'//*[@id="oac_url"]',
            tumblr_callback_url_input:'//*[@id="oac_default_callback_url"]',
            tumblr_save_button:'//*[@id="save_button"]',
            tumblr_customer_id:'//*[@id="dashboard_account_register_oauth_app"]/div[4]/div/div/span[1]',
            tumblr_customer_secret:'//*[@id="secret"]',
            tumblr_show_secret_button:'//*[@id="secret_toggle"]',
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
            vkontakte_config_btn: '//*[@id="navtabs16"]/li[19]/a',
            vkontakte_developers_link: '//*[@id="vkontakte"]/div/div/fieldset/div[3]/a',
            site_address_input: '//*[@id="vkontakte"]/div/div/fieldset/div[6]/input',
            customer_key_input: '//*[@id="vci"]',
            customer_secret_input: '//*[@id="vcs"]',
            save_button: '//*[@id="module_form_submit_btn_33"]',

            //vkontakte site
            vkontakte_username_input: '//*[@id="email"]',
            vkontakte_password_input: '//*[@id="pass"]',
            vkontakte_signin_button: '//*[@id="login_button"]',
            my_apps_menu: '//*[@id="dev_top_apps"]',
            app_link: '//*[@id="apps_list_content"]/div/div/div[2]/div[1]/a',
            manage_button: '//*[@id="apps_list_content"]/div/div/div[4]/a',
            settings_subtab: '//*[@id="apps_nav_options"]',
            id_text: '//*[@id="app_edit_cont"]/div[2]/table[1]/tbody/tr[1]/td[2]/b',
            secret_key_input: '//*[@id="app_secret2"]',
            site_url_input: '//*[@id="app_site_url"]',
            delete_base_domain_icon: '//*[@id="apps_edit_domain_cont"]/div/div[1]/div[1]/div/a/div',
            domain_input: '//*[@id="apps_edit_domain_cont"]/div/div[1]/div[2]/input',
            vkontakte_save_button: '//*[@id="app_save_btn"]',
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