//configure
const router = require('express').Router();
const postRoutes = require('./postRoutes');
const commentRoutes = require('./commentRoutes');

router.use('/users', userRoutes);
router.use('/thoughts', thoughtRoutes);
///api/users/:userId/friends/:friendId
///api/thoughts/:thoughtId/reactions`

module.exports = router;
