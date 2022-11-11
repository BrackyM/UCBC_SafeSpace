const router = require('express').Router();
const userRoutes = require('./user')
const homeRoutes = require('./home')

router.use('/user', userRoutes);
router.use('/post', userRoutes);
router.use('/login', userRoutes);
router.use('/', homeRoutes);

module.exports = router;