var express = require('express');
var router = express.Router();
var winax = require('winax');
var con = new winax.Object('Broker.Application');

router.post('/', function (req, res, next) {
    let chart = req.body.chart;
    let tf = req.body.timeframe;
    let lay = chart + tf + 'ARA.awl';
    let lay_fld = 'C://Program Files//AmiBroker//Layouts//' + lay;
    let Layout = con.LoadLayout(lay_fld);
    let AW = con.ActiveWindow;
    let source = 'C://xampp//htdocs//amichart/api-' + chart + tf + 'ARA.gif';
    let imageFile = 'http://investorsukses.com/amichart/api-' + chart + tf + 'ARA.gif';
    AW.ExportImage(source, 1366, 768); // 640, 480 are pixel dimensions;


    res.send(JSON.stringify({ "status": 500, "error": null, "response": imageFile }));
});


module.exports = router;