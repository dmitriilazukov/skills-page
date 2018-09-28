var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res) {
    res.send('respond with a resource');
});

router.get('/print/:name', function (req, res) {
    res.send(req.params.name);
});

module.exports = router;