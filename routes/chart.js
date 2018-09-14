var express = require('express');
var router = express.Router();
var winax = require('winax');
var con = new winax.Object('Broker.Application', { activate: true,});


router.post('/',  function (req, res, next) {
    let datereq = Math.floor(Date.now());
    let symbol = req.body.symbol;
    let tf = req.body.timeframe;
    let type = req.body.type
    let lay = symbol + tf + type +'.awl';
    let lay_fld = 'C://Program Files//AmiBroker//Layouts//' + lay;

    setTimeout(function () {
        console.log("wait 1");

    }, 4000
    );

    con.LoadLayout(lay_fld);
    let AW = con.ActiveWindow;

    

    let source = 'C://xampp//htdocs//amichart/api/' + datereq + symbol + tf + type + '.gif';
    let imageFile = 'http://investorsukses.com/amichart/api/' + datereq + symbol + tf + type + '.gif';
    AW.ExportImage(source, 1366, 768); // 640, 480 are pixel dimensions;
    
    console.log(imageFile);
    res.send(JSON.stringify({ "status": 200, "error": null, "response": imageFile }));
    

   
});


module.exports = router;