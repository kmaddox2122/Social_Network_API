const router = require('express').Router();
const {
  getSingleThought,
  getAllThought,
  createThought,
  updateThought,
  deleteThought,
  // createReaction,
  // deleteReaction,

} = require('../../controllers/thoughtController');

router.route('/').get(getAllThought).post(createThought);

router.route('/:thoughtId').get(getSingleThought).put(updateThought).delete(deleteThought);

//router.route('/api/thoughts/:thoughtId/reactions').post(createReaction).delete(deleteReaction);

module.exports = router;