var express = require('express');
var router = express.Router();
var md5 = require('md5')


router.post('/', function(req, res, next) {
  let username = req.body.username;
  let password = md5(req.body.password);

  connection.query("SELECT user_id,user_group,user_fullname,user_name,user_gender,subscribe,user_picture,user_token from users WHERE (user_name='"+username+"' or user_email='"+username+"') and user_password='"+password+"'",
                  function (error, results, fields) {
              	  	if(error){
                      //If there is error, we send the error in the error section with 500 status
              	  		res.send(JSON.stringify({"status": 500, "error": error, "response": null}));
              	  	} else {
                      //If there is no error, all is good and response is 200OK.
                      if(results.length !== 0){
                			     res.send(JSON.stringify({"status": 200, "error": null, "response": results, "message": "valid"}));

                      }else{
                          res.send(JSON.stringify({"status": 200, "error": null, "response": results, "message": "Invalid Username or Password Please Try Again"}));
                      }
              	  	}
                	});
  connection.end();
});


module.exports = router;
