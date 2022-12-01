const router = require('express').Router();
const {
  getSingleUser,
  getAllUsers,
  createUser,
  updateUser,
  deleteUser,
  addFriend,
  removeFriend,
  //**BONUS**: Remove a user's associated thoughts when deleted.

} = require('../../controllers/userController');

router.route('/').get(getAllUsers).post(createUser);

router.route('/:userId').get(getSingleUser).put(updateUser).delete(deleteUser);

router.route('/:userId/friends/:friendId').post(addFriend).delete(removeFriend);

module.exports = router;