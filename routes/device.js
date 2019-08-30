const router = require('express').Router();
const dCont = require('../lib/deviceController');

router.get('/', async function(req, res, next) {
	res.send(dCont.devices);
});

module.exports = router;
