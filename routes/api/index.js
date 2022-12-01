//TODO: configure
const router = require('express').Router();
const userRoutes = require('./userRoutes');
const thoughtRoutes = require('./thoughtRoutes');
//const friendRoutes = require('./friendRoutes');


router.use('/users', userRoutes);
router.use('/thoughts', thoughtRoutes);

//TODO: are these needed???
///api/users/:userId/friends/:friendId
//router.use('/api/users/:userId/friends/:friendId', userRoutes);
///api/thoughts/:thoughtId/reactions`
//router.use('/api/thoughts/:thoughtId/reactions')

module.exports = router;
