'use strict'

const Responses = require('../common/response_API');
const countapi = require('countapi-js');
const fetch = require("node-fetch");

exports.handler = async event => {
    return Responses._200();
};