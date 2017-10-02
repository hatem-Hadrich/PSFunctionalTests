'use strict';
var should = require('should');
var common = require('../../common.webdriverio');
var globals = require('../../globals.webdriverio');

describe('Check logos social network in front office', function() {
    common.initMocha.call(this);

    before(function (done) {
        this.selector = globals.selector;
        this.client.call(done);
    });
    process.on('uncaughtException', common.take_screenshot);
    process.on('ReferenceError', common.take_screenshot);
    after(common.after);

    describe('Access to the Front Office', function() {
        it('should open the shop', function (done) {
            global.fctname = this.test.title;
            this.client
                .url('https://' + URL)
                .call(done);
        });
    });

    //*****************************************At the top***************************************************************

    describe('Check logos social network in front office at the top of the page', function () {
        it('should check FACEBOOK logo', function (done) {
            global.fctname = this.test.title;
            this.client
                .waitForExist(this.selector.first_facebook_logo, 90000)
                .call(done);
        });

        it('should check TWITTER logo', function (done) {
            global.fctname = this.test.title;
            this.client
                .waitForExist(this.selector.twitter.first_twitter_logo, 90000)
                .call(done);
        });

        it('should check AMAZON logo', function (done) {
            global.fctname = this.test.title;
            this.client
                .waitForExist(this.selector.amazon.first_amazon_logo, 90000)
                .call(done);
        });

        it('should check GOOGLE logo', function (done) {
            global.fctname = this.test.title;
            this.client
                .waitForExist(this.selector.google.first_google_logo, 90000)
                .call(done);
        });

        it('should check PINTEREST logo', function (done) {
            global.fctname = this.test.title;
            this.client
                .waitForExist(this.selector.pinterest.first_pinterest_logo, 90000)
                .call(done);
        });

        it('should check YAHOO logo', function (done) {
            global.fctname = this.test.title;
            this.client
                .waitForExist(this.selector.yahoo.first_yahoo_logo, 90000)
                .call(done);
        });

        it('should check PAYPAL logo', function (done) {
            global.fctname = this.test.title;
            this.client
                .waitForExist(this.selector.paypal.first_paypal_logo, 90000)
                .call(done);
        });

        it('should check LINKEDIN logo', function (done) {
            global.fctname = this.test.title;
            this.client
                .waitForExist(this.selector.linkedin.first_linkedin_logo, 90000)
                .call(done);
        });

        it('should check MICROSOFT logo', function (done) {
            global.fctname = this.test.title;
            this.client
                .waitForExist(this.selector.microsoft.first_microsoft_logo, 90000)
                .call(done);
        });

        it('should check FOURSQUARE logo', function (done) {
            global.fctname = this.test.title;
            this.client
                .waitForExist(this.selector.foursquare.first_foursquare_logo, 90000)
                .call(done);
        });

        it('should check GITHUB logo', function (done) {
            global.fctname = this.test.title;
            this.client
                .waitForExist(this.selector.github.first_github_logo, 90000)
                .call(done);
        });

        it('should check DISQUS logo', function (done) {
            global.fctname = this.test.title;
            this.client
                .waitForExist(this.selector.disqus.first_disqus_logo, 90000)
                .call(done);
        });

        it('should check DROPBOX logo', function (done) {
            global.fctname = this.test.title;
            this.client
                .waitForExist(this.selector.dropbox.first_dropbox_logo, 90000)
                .call(done);
        });

        it('should check WORDPRESS logo', function (done) {
            global.fctname = this.test.title;
            this.client
                .waitForExist(this.selector.wordpress.first_wordpress_logo, 90000)
                .call(done);
        });

        it('should check TUMBLR logo', function (done) {
            global.fctname = this.test.title;
            this.client
                .waitForExist(this.selector.tumblr.first_tumblr_logo, 90000)
                .call(done);
        });

        it('should check VKONTAKTE logo', function (done) {
            global.fctname = this.test.title;
            this.client
                .waitForExist(this.selector.vkontakte.first_vkontakte_logo, 90000)
                .call(done);
        });

    });

    //*******************************************Near the connection button*********************************************

    describe('Check logos social network in front office near the connection button', function () {
        it('should check FACEBOOK logo', function (done) {
            global.fctname = this.test.title;
            this.client
                .waitForExist(this.selector.second_facebook_logo, 90000)
                .call(done);
        });

        it('should check TWITTER logo', function (done) {
            global.fctname = this.test.title;
            this.client
                .waitForExist(this.selector.second_twitter_logo, 90000)
                .call(done);
        });

        it('should check AMAZON logo', function (done) {
            global.fctname = this.test.title;
            this.client
                .waitForExist(this.selector.second_amazon_logo, 90000)
                .call(done);
        });

        it('should check GOOGLE logo', function (done) {
            global.fctname = this.test.title;
            this.client
                .waitForExist(this.selector.second_google_logo, 90000)
                .call(done);
        });

        it('should check PINTEREST logo', function (done) {
            global.fctname = this.test.title;
            this.client
                .waitForExist(this.selector.second_pinterest_logo, 90000)
                .call(done);
        });

        it('should check YAHOO logo', function (done) {
            global.fctname = this.test.title;
            this.client
                .waitForExist(this.selector.second_yahoo_logo, 90000)
                .call(done);
        });

        it('should check PAYPAL logo', function (done) {
            global.fctname = this.test.title;
            this.client
                .waitForExist(this.selector.second_paypal_logo, 90000)
                .call(done);
        });

        it('should check LINKEDIN logo', function (done) {
            global.fctname = this.test.title;
            this.client
                .waitForExist(this.selector.second_linkedin_logo, 90000)
                .call(done);
        });

        it('should check MICROSOFT logo', function (done) {
            global.fctname = this.test.title;
            this.client
                .waitForExist(this.selector.second_microsoft_logo, 90000)
                .call(done);
        });

        it('should check FOURSQUARE logo', function (done) {
            global.fctname = this.test.title;
            this.client
                .waitForExist(this.selector.second_foursquare_logo, 90000)
                .call(done);
        });

        it('should check GITHUB logo', function (done) {
            global.fctname = this.test.title;
            this.client
                .waitForExist(this.selector.second_github_logo, 90000)
                .call(done);
        });

        it('should check DISQUS logo', function (done) {
            global.fctname = this.test.title;
            this.client
                .waitForExist(this.selector.second_disqus_logo, 90000)
                .call(done);
        });

        it('should check DROPBOX logo', function (done) {
            global.fctname = this.test.title;
            this.client
                .waitForExist(this.selector.second_dropbox_logo, 90000)
                .call(done);
        });

        it('should check WORDPRESS logo', function (done) {
            global.fctname = this.test.title;
            this.client
                .waitForExist(this.selector.second_wordpress_logo, 90000)
                .call(done);
        });

        it('should check TUMBLR logo', function (done) {
            global.fctname = this.test.title;
            this.client
                .waitForExist(this.selector.second_tumblr_logo, 90000)
                .call(done);
        });

        it('should check VKONTAKTE logo', function (done) {
            global.fctname = this.test.title;
            this.client
                .waitForExist(this.selector.second_vkontakte_logo, 90000)
                .call(done);
        });

    });

    //*******************************************At the bottom*********************************************

    describe('Check logos social network in front office near the connection button', function () {
        it('should check FACEBOOK logo', function (done) {
            global.fctname = this.test.title;
            this.client
                .waitForExist(this.selector.third_facebook_logo, 90000)
                .call(done);
        });

        it('should check TWITTER logo', function (done) {
            global.fctname = this.test.title;
            this.client
                .waitForExist(this.selector.third_twitter_logo, 90000)
                .call(done);
        });

        it('should check AMAZON logo', function (done) {
            global.fctname = this.test.title;
            this.client
                .waitForExist(this.selector.third_amazon_logo, 90000)
                .call(done);
        });

        it('should check GOOGLE logo', function (done) {
            global.fctname = this.test.title;
            this.client
                .waitForExist(this.selector.third_google_logo, 90000)
                .call(done);
        });

        it('should check PINTEREST logo', function (done) {
            global.fctname = this.test.title;
            this.client
                .waitForExist(this.selector.third_pinterest_logo, 90000)
                .call(done);
        });

        it('should check YAHOO logo', function (done) {
            global.fctname = this.test.title;
            this.client
                .waitForExist(this.selector.third_yahoo_logo, 90000)
                .call(done);
        });

        it('should check PAYPAL logo', function (done) {
            global.fctname = this.test.title;
            this.client
                .waitForExist(this.selector.third_paypal_logo, 90000)
                .call(done);
        });

        it('should check LINKEDIN logo', function (done) {
            global.fctname = this.test.title;
            this.client
                .waitForExist(this.selector.third_linkedin_logo, 90000)
                .call(done);
        });

        it('should check MICROSOFT logo', function (done) {
            global.fctname = this.test.title;
            this.client
                .waitForExist(this.selector.third_microsoft_logo, 90000)
                .call(done);
        });

        it('should check FOURSQUARE logo', function (done) {
            global.fctname = this.test.title;
            this.client
                .waitForExist(this.selector.third_foursquare_logo, 90000)
                .call(done);
        });

        it('should check GITHUB logo', function (done) {
            global.fctname = this.test.title;
            this.client
                .waitForExist(this.selector.third_github_logo, 90000)
                .call(done);
        });

        it('should check DISQUS logo', function (done) {
            global.fctname = this.test.title;
            this.client
                .waitForExist(this.selector.third_disqus_logo, 90000)
                .call(done);
        });

        it('should check DROPBOX logo', function (done) {
            global.fctname = this.test.title;
            this.client
                .waitForExist(this.selector.third_dropbox_logo, 90000)
                .call(done);
        });

        it('should check WORDPRESS logo', function (done) {
            global.fctname = this.test.title;
            this.client
                .waitForExist(this.selector.third_wordpress_logo, 90000)
                .call(done);
        });

        it('should check TUMBLR logo', function (done) {
            global.fctname = this.test.title;
            this.client
                .waitForExist(this.selector.third_tumblr_logo, 90000)
                .call(done);
        });

        it('should check VKONTAKTE logo', function (done) {
            global.fctname = this.test.title;
            this.client
                .waitForExist(this.selector.third_vkontakte_logo, 90000)
                .call(done);
        });

    });
});
