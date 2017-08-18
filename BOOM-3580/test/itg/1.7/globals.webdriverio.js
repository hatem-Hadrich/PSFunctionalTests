'use strict';
var common = require('./common.webdriverio');
var path = require('path');
var should = require('should');
var argv = require('minimist')(process.argv.slice(2));

global.date_time = new Date().getTime();
global.URL = argv.URL;
global.module_tech_name = argv.MODULE;
global.saucelabs = argv.SAUCELABS;
global._projectdir = path.join(__dirname, '..', '..');
global.product_id = new Date().getTime();
global.new_customer_email = 'pub' + date_time + '@prestashop.com';

global.qte = 30;
global.priceTE = 10;
global.quantity1 = 10;
global.quantity2 = 20;
global.price1 = 8;
global.price2 = 7;

module.exports = {
    selector: {

        //BO
        login: '#email',
        password: '#passwd',
        login_btn: '[name="submitLogin"]',
        exit_welcome: '[class="btn btn-tertiary-outline btn-lg onboarding-button-shut-down"]',
        click_outside: '//*[@id="product_catalog_list"]/div[2]/div/table/thead/tr[1]/th[3]',
        profil: '#employee_infos',
        new_profil: '.employee-dropdown.dropdown > div',
        logout: '#header_logout',
        products: '#subtab-AdminCatalog',
        //go_to_catalog: '//*[@id="form"]/div[4]/div[2]/div/div[2]/a[2]',
        go_to_catalog: '#form > div.product-footer > div.col-lg-6.text-lg-right > div > div.dropdown-menu > a.dropdown-item.go-catalog.js-btn-save',
        more_option: '[class="btn btn-primary dropdown-toggle"]',
        new_product: '#page-header-desc-configuration-add',
        menu: '#nav-sidebar',
        product_name: '#form_step1_name_1',
        save_product: '//*[@id="submit"]',
        catalog_list: '#product_catalog_list',
        green_validation: '[class="growl growl-notice growl-medium"]',
        close_validation: '.growl-close',
        validation_msg: '//*[@id="growls"]/div/div[3]',
        red_validation: '[class="growl growl-error growl-medium"]',
        summary_button: '[href="#description_short"]',
        summary: 'form_step1_description_short_1_ifr', //not declare than an id because using into function "frame" that not need this information;
        description_button: '[href="#description"]',
        description: 'form_step1_description_1_ifr',//not declare than an id because using into function "frame" that not need this information;
        priceTE_shortcut: '#form_step1_price_shortcut',
        quantity_shortcut: '#form_step1_qty_0_shortcut',
        picture: '[class="dz-hidden-input"]',
        picture_cover: '.iscover',
        product_online: '.switch-input ',
        catalogue_filter_by_name: '//input[@name="filter_column_name"]',
        catalogue_submit_filter: '//button[@name="products_filter_submit"]',
        catalogue_filter_reset: '//button[@type="reset" and @style="display: inline-block;"]',
        nbr_module: '[class="module-sorting-search-wording"]',
        close_sf_toolbar: '//a[@class="hide-button"]',
        module_tech_name: '//div[@data-tech-name="' + module_tech_name + '" and not(@style)]',

        //FO
        access_loginFO: 'div.user-info > a',
        loginFO: '//*[@id="login-form"]/section/div[1]/div[1]/input',
        passwordFO: '//*[@id="login-form"]/section/div[2]/div[1]/div/input',
        login_btnFO: '//*[@id="login-form"]/footer/button',
        logoutFO: '.logout',
        logo_home_pageFO: '.logo.img-responsive',
        first_product_home_page: '.thumbnail.product-thumbnail',
        add_to_cart: '.btn.btn-primary.add-to-cart',
        first_product_home_page_name: '[itemprop="name"]',
        product_image: '#content',
        product_name_details: '[itemprop="name"]',
        product_price_details: '[itemprop="price"]',
        product_quantity_details: '#quantity_wanted',
        search_product: '.ui-autocomplete-input',
        search_product_button: '.material-icons.search',
        search_product_result_image: '.thumbnail.product-thumbnail',
        search_product_result_name: '.h3.product-title > a',
        search_product_result_price: '[itemprop="price"]',
        close_error: '//*[@id="error-modal"]/div/div/button',

        //BO
        Group: {
            shop_parameters_maintab: '#subtab-ShopParameters > a',
            customer_settings_subtab: '#subtab-AdminParentCustomerPreferences',
            group_tab: '#content > div.bootstrap > div > div.page-head-tabs > a:nth-child(2)',
            edit_visitor_button: '//*[@id="form-group"]/div/div[2]/table/tbody/tr[1]/td[7]/div/div/a',
            price_display_method_select: '#price_display_method',
            edit_visitor_save_button: '//*[@id="group_form_submit_btn"]',
        },

        Tax: {
            international_maintab: '#subtab-AdminInternational > a',
            taxes_subtab: '#subtab-AdminParentTaxes > a',
            taxes_rules_tab: '//*[@id="content"]/div[1]/div/div[2]/a[2]',
            add_new_tax_rule_button: '//*[@id="page-header-desc-tax_rules_group-new_tax_rules_group"]',
            name_tax_rule_input: '//*[@id="name"]',
            enable_tax_rule_toggle: '//*[@id="tax_rules_group_form"]/div/div[2]/div[2]/div/span/label[1]',
            save_and_stay_tax_rule_button: '//*[@id="tax_rules_group_form_submit_btn"]',
            save_and_stay_new_tax_rule_button: '//*[@id="tax_rule_form_submit_btn_1"]',
            tax_select: '//*[@id="id_tax"]',
        },
        Product: {
            product_tax_rule_select: '//*[@id="step1"]/div/div/div/div/div[2]/div/div/div[4]/div[1]/div[3]/span',
            product_tax_rule_option: '//*[@id="select2-step2_id_tax_rules_group_rendered-results"]/li[7]',
            product_pricing_tab: '//*[@id="tab_step2"]',
            add_specific_price_button: '//*[@id="specific-price"]/a',
            specific_price_condition_for_users_select: '//*[@id="specific_price_form"]/div/div[1]/div[3]/fieldset/span/span[1]/span',
            specific_price_condition_for_users_option: '//*[@id="select2-form_step2_specific_price_sp_id_group-results"]/li[2]',
            specific_price_condition_quantity_input: '//*[@id="form_step2_specific_price_sp_from_quantity"]',
            specific_price_condition_TE_checkbox: '//*[@id="form_step2_specific_price_leave_bprice"]',
            specific_price_condition_TE_input: '//*[@id="form_step2_specific_price_sp_price"]',
            specific_price_condition_tax_select: '//*[@id="specific_price_form"]/div/div[4]/div[3]/fieldset/span/span[1]/span',
            specific_price_condition_tax_option: '//*[@id="select2-form_step2_specific_price_sp_reduction_tax-results"]/li[1]',
            specific_price_condition_apply_button: '//*[@id="form_step2_specific_price_save"]',
            product_price_ttc_shortcut_input: '//*[@id="form_step1_price_ttc_shortcut"]',
        },

        //FO
        ProductDetails: {
            product_name_img: '//*[@id="js-product-list"]/div[1]/article/div/a',
            product_discounts_table: '//*[@id="add-to-cart-or-refresh"]/section/table/tbody',
        },
    },
    shouldExist: function (err, existing) {
        should(err).be.not.defined;
        should(existing).be.true;
    }
};