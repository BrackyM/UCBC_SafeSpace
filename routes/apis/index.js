const router = require('express').Router();
const userRoutes = require('./users')
const homeRoutes = require('./homepage')

router.use('/users', userRoutes);
router.use('/', homeRoutes);

module.exports = router;