var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res) {
    const t = req.__;
    let initialState = JSON.stringify({
        'startButtonText': t('Start'),
        'projectsText': t('Projects'),
        'resumeText': t('Resume'),
        'shutdownText': t('Shutdown')
    });
    res.render('index', {title: 'Express', initialState: initialState});
});

module.exports = router;
