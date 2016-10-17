
/*
 * GET home page.
 */
var ejs = require("ejs")
exports.index = function(req, res){
  ejs.renderFile('./views/calculator.ejs', function(err, result){
	  if(!err){
		  res.end(result);
	  }
	  else {
		  res.end('An error occured');
		  console.log(err);
	  }
  });
};