var sampleOauth = require('./sampleOauth.js');

exports.authorizeUrl = {
    'verb' : 'get',
    'path' : '/deal-room/oauth/authorizeUrl',
    'route': sampleOauth.authorizeUrl.bind(sampleOauth)
};

exports.oauth2Callback = {
    'verb' : 'get',
    'path' : '/deal-room/oauth/oauth2Callback',
    'route': sampleOauth.oauth2Callback.bind(sampleOauth)
};
