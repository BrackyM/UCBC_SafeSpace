const router = require('express').Router();
const userRoutes = require('./user');
const homeRoutes = require('./home');
const loginRoutes = require('./login');
const signupRoutes = require('./signup');
const logoutRoutes = require('./logout');
const makePost = require('./createPost');

router.use('/user', userRoutes);
router.use('/post', makePost);
router.use('/login', loginRoutes);
router.use('/logout', logoutRoutes);
router.use('/signup', signupRoutes);
router.use('/', homeRoutes);

module.exports = router;