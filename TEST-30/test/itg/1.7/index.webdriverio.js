'use strict';
var should = require('should');
var common = require('./common.webdriverio');


describe('Allscenario', function () {
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

    //create account in FO
    require('./scenario/FO/create_account.webdriverio');

    //subscription offre in FO
    require('./scenario/FO/subscription_offre.webdriverio');

});
