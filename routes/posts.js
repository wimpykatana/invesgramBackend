var express = require('express');
var router = express.Router();

router.post('/', function(req, res, next) {
  let user_id = req.body.userid;

  connection.query("SELECT p.post_id, p.time, p.text, pp1.source image FROM posts p INNER JOIN posts_photos pp1 ON p.post_id = pp1.post_id WHERE user_id = '"+user_id+"' ORDER BY post_id DESC LIMIT 15",
    function (error, results, fields) {
      if(error){
	  		res.send(JSON.stringify({"status": 500, "error": error, "response": null}));
	  		//If there is error, we send the error in the error section with 500 status
	  	} else {
  			res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
  			//If there is no error, all is good and response is 200OK.
	  	}

  })


  connection.end();
})

module.exports = router;
