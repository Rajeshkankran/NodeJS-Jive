var log4js = require('log4js');

log4js.configure({
appenders:[
	   {type:'console'},
	   {type:'file',filename:'logs/app.log',category:'app',maxLogSize: 20480}],
replaceConsole: true 
});

var logger = log4js.getLogger('app');
logger.setLevel('DEBUG');

exports.logger = logger;
