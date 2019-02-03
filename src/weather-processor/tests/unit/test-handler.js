'use strict';

const app = require('../../app.js');
const chai = require('chai');
const expect = chai.expect;
var event, context;


describe('Tests index', function () {
    it('verifies successful response', async () => {
        process.env.API_URL = 'api.openweathermap.org/data/2.5/weather';
        event = {};
        event.cityId = 3626047;
        const result = await app.weatherHandler(event, context)

        expect(result).to.be.an('object');
        expect(result.statusCode).to.equal(200);
    });
});

