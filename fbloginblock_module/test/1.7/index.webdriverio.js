'use strict';
var should = require('should');
var common = require('./common.webdriverio');


describe('Allscenario', function(){
	common.initMocha.call(this);
	
	before(function (done) {
		this.client = common.getClient();
		this.client.call(done);
	});
	
	after(function (done) {
		this.client
			.end()
			.call(done);
	});

    if (typeof module_tech_name !== 'undefined' && module_tech_name != "None") {
        require('./scenario/BO/install_and_uninstall_module.js');
        require('./scenario/BO/install_module.js');
    }

    /*--> Check button of social connect in the front office*/
    require('./scenario/FO/check_social_network_logos.webdriverio');

    // /*--> Connection with Facebook */
    // //require('./scenario/FO/connecting_with_facebook.webdriverio');
    //
    // /*--> Connection with Twitter */
    // require('./scenario/FO/connecting_with_twitter.webdriverio');
    // require('./scenario/BO/check_customer_connecting_with_twitter.webdriverio');
    //
    // /*--> Connection with Amazon */
    // require('./scenario/FO/connecting_with_amazon.webdriverio');
    // require('./scenario/BO/check_customer_connecting_with_amazon.webdriverio');
    //
    // /*--> Connection with Google */
    // require('./scenario/FO/connecting_with_google.webdriverio');
    // require('./scenario/BO/check_customer_connecting_with_google.webdriverio');
    //
    // /*--> Connection with Pinterest */
    // require('./scenario/FO/connecting_with_pinterest.webdriverio');
    // require('./scenario/BO/check_customer_connecting_with_pinterest.webdriverio');
    //
    // /*--> Connection with Yahoo */
    // require('./scenario/FO/connecting_with_yahoo.webdriverio');
    // require('./scenario/BO/check_customer_connecting_with_yahoo.webdriverio');
    //
    // /*--> Connection with Paypal */
    // require('./scenario/FO/connecting_with_paypal.webdriverio');
    // require('./scenario/BO/check_customer_connecting_with_paypal.webdriverio');
    //
    // /*--> Connection with Linkedin */
    // require('./scenario/FO/connecting_with_linkedin.webdriverio');
    // require('./scenario/BO/check_customer_connecting_with_linkedin.webdriverio');
    //
    // /*--> Connection with Microsoft */
    // require('./scenario/FO/connecting_with_microsoft.webdriverio');
    // require('./scenario/BO/check_customer_connecting_with_microsoft.webdriverio');
    //
    // /*--> Connection with Foursquare */
    // require('./scenario/FO/connecting_with_foursquare.webdriverio');
    // require('./scenario/BO/check_customer_connecting_with_foursquare.webdriverio');
    //
    // /*--> Connection with Github */
    // require('./scenario/FO/connecting_with_github.webdriverio');
    // require('./scenario/BO/check_customer_connecting_with_github.webdriverio');
    //
    // /*--> Connection with Disqus */
    // require('./scenario/FO/connecting_with_disqus.webdriverio');
    // require('./scenario/BO/check_customer_connecting_with_disqus.webdriverio');
    //
    // /*--> Connection with Dropbox */
    // require('./scenario/FO/connecting_with_dropbox.webdriverio');
    // require('./scenario/BO/check_customer_connecting_with_dropbox.webdriverio');
    //
    // /*--> Connection with Wordpress */
    // require('./scenario/FO/connecting_with_wordpress.webdriverio');
    // require('./scenario/BO/check_customer_connecting_with_wordpress.webdriverio');
    //
    // /*--> Connection with Tumblr */
    // require('./scenario/FO/connecting_with_tumblr.webdriverio');
    // require('./scenario/BO/check_customer_connecting_with_tumblr.webdriverio');
    //
    // /*--> Connection with Vkontakte */
    // require('./scenario/FO/connecting_with_vkontakte.webdriverio');
    // require('./scenario/BO/check_customer_connecting_with_vkontakte.webdriverio');

    if (typeof module_tech_name !== 'undefined' && module_tech_name != "None") {
        require('./scenario/BO/uninstall_module.js');
    }
});
