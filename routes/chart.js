var express = require('express');
var router = express.Router();
var winax = require('winax');
var con = new winax.Object('Broker.Application');

router.post('/', function (req, res, next) {
    let symbol = req.body.symbol;
    let tf = req.body.timeframe;
    let type = req.body.type
    let lay = symbol + tf + type +'.awl';
    let lay_fld = 'C://Program Files//AmiBroker//Layouts//' + lay;
    let Layout = con.LoadLayout(lay_fld);
    let AW = con.ActiveWindow;
    let source = 'C://xampp//htdocs//amichart/api-' + symbol + tf + type +'.gif';
    let imageFile = 'http://investorsukses.com/amichart/api-' + symbol + tf + type + '.gif';
    AW.ExportImage(source, 1366, 768); // 640, 480 are pixel dimensions;


    res.send(JSON.stringify({ "status": 200, "error": null, "response": imageFile }));
});


module.exports = router;