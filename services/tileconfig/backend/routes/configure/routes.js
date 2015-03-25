var jive = require("jive-sdk");

exports.configure = {
    'verb' : 'get',
    'path' : '/example-salesforce/configure',
    'route': function(req, res){
        var conf = jive.service.options;
        res.render('configuration.html', { host: 'http://ec2-54-174-204-81.compute-1.amazonaws.com' });
    }
};
