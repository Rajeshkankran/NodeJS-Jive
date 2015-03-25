var sfdcQueryer = require('./sfdcQueryer.js');

exports.query = {
    'verb' : 'get',
    'path' : '/example-salesforce/salesforce/query',
    'route' : sfdcQueryer.handleSfdcQuery
};