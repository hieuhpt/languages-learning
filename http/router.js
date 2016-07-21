var router = require('express').Router();
var apiKanjiRouter = require('./api/kanji');
var webRouter = require('./web');

// router.use('/api', apiKanjiRouter);
router.use('/', webRouter);

module.exports = router;