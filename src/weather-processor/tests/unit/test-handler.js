'use strict';

const app = require('../../app.js');
const chai = require('chai');
const event = require('./../../event.json')
const expect = chai.expect;
var  context;


describe('Tests index', function () {
    it('verifies successful response', async () => {
        console.log(event);
        process.env.API_URL = 'api.openweathermap.org/data/2.5/weather';
        const result = await app.weatherHandler(event, context)

        expect(result).to.be.an('object');
        expect(result.statusCode).to.equal(200);
    });
});

