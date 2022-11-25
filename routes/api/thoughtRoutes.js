const router = require('express').Router();
const {
  getSingleThought,
  getAllThought,
  createThought,
  updateThought,
  deleteThought,

} = require('../../controllers/thoughtController');

router.route('/').get(getAllThought).post(createThought);

router.route('/:thoughtId').get(getSingleThought).put(updateThought).delete(deleteThought);

module.exports = router;