const router = require('express').Router();
const {
  getSingleThought,
  getAllThought,
  createThought,
  updateThought,
  deleteThought,
  createReaction,
  deleteReaction,

} = require('../../controllers/thoughtController');

router.route('/').get(getAllThought).post(createThought);

router.route('/:thoughtId').get(getSingleThought).put(updateThought).delete(deleteThought);

router.route('/:thoughtId/reactions').post(createReaction)

router.route('/:thoughtId/reactions/:reactionId').delete(deleteReaction);


module.exports = router;


