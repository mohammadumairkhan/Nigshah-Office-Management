
module.exports = function(app){
	//accounts manager
	require('../controllers/accounts')(app);
	
 	app.all('/api/*', function(req, res){
    	res.send(404);
  	});
};