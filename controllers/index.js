const router = require('express').Router();
const apiRoutes = require('./api')

// router for all api routes
router.use('/', apiRoutes);

module.exports = router;