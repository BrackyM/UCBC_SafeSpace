// require routers
const router = require('express').Router();
const userRoutes = require('./user');
const homeRoutes = require('./home');
const loginRoutes = require('./login');
const signupRoutes = require('./signup');
const logoutRoutes = require('./logout');
const makePost = require('./createPost');
const upvotes = require('./upvotes');
const downvotes = require('./downvotes');
const deletePost = require('./delete');
// router for all api links
router.use('/user', userRoutes);
router.use('/login', loginRoutes);
router.use('/logout', logoutRoutes);
router.use('/signup', signupRoutes);
router.use('/createPost', makePost)
router.use('/upvotes', upvotes)
router.use('/downvotes', downvotes)
router.use('/delete', deletePost)
router.use('/', homeRoutes);

module.exports = router;