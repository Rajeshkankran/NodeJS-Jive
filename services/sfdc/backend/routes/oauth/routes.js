var sfdcQueryer = require('./sfdcQueryer.js');

exports.query = {
    'verb' : 'get',
    'path' : '/deal-room/salesforce/query',
    'route' : sfdcQueryer.handleSfdcQuery
};
