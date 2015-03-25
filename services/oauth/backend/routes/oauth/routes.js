var sampleOauth = require('./sampleOauth.js');

exports.authorizeUrl = {
    'verb' : 'get',
    'path' : '/example-salesforce/oauth/authorizeUrl',
    'route': sampleOauth.authorizeUrl.bind(sampleOauth)
};

exports.oauth2Callback = {
    'verb' : 'get',
    'path' : '/example-salesforce/oauth/oauth2Callback',
    'route': sampleOauth.oauth2Callback.bind(sampleOauth)
};
