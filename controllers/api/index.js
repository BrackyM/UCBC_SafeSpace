const router = require('express').Router();
const userRoutes = require('./user')
const homeRoutes = require('./home')
const loginRoutes = require('./login')
const signupRoutes = require('./signup')

router.use('/user', userRoutes);
router.use('/post', userRoutes);
router.use('/login', loginRoutes);
router.use('/signup', signupRoutes);
router.use('/', homeRoutes);

module.exports = router;