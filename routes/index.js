
/*
 * GET home page.
 */

var request = require('request');

exports.index = function(req, res){

	request('http://api.whatthetrend.com/api/v2/trends.json', function(error, response, body) {
		if (!error && response.statusCode == 200) {
			console.log(body);
		};
	});
  
	res.render('index', { title: 'Twirq', author: 'Taylor' });		


  
};