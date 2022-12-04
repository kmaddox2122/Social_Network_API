const { User, Thought } = require('../models');

module.exports = {
  // Get all users
  getAllUsers(req, res) {
    User.find()
      .then((user) => res.json(user))
      .catch((err) => {
        console.log(err)
        res.status(500).json(err)
      });
  },
  // Get a single user
  getSingleUser(req, res) {
    User.findOne({ _id: req.params.userId })
      .select('-__v')
      .then((user) =>
        !user
          ? res.status(404).json({ message: 'No user with that ID' })
          : res.json(user)
      )
      .catch((err) => res.status(500).json(err));
  },
  // Create a user
  createUser(req, res) {
    User.create(req.body)
      .then((user) => res.json(user))
      .catch((err) => {
        console.log(err);
        return res.status(500).json(err);
      });
  },
  // Delete a user
  deleteUser(req, res) {
    User.findOneAndDelete({ _id: req.params.userId })
      .then((user) =>
        !user
          ? res.status(404).json({ message: 'No user with that ID' })
          //TODO remove users associated thoughts
          : Thought.deleteMany({ _id: { $in: User.thoughts } })
      )
      .then(() => res.json({ message: 'User and Thoughts deleted!' }))
      .catch((err) => res.status(500).json(err));
  },
  // Update a user
  updateUser(req, res) {
    User.findOneAndUpdate(
      { _id: req.params.userId },
      { $set: req.body },
      { runValidators: true, new: true }
    )
      .then((user) =>
        !user
          ? res.status(404).json({ message: 'No user with this id!' })
          : res.json(user)
      )
      .catch((err) => res.status(500).json(err));
  },
 // add a friend
  addFriend(req, res) {
    User.findOneAndUpdate({_id:req.params.userId},{$addToSet:{friends:req.params.friendId}},{new: true})
      .then(async(user) => {
        const friend = await User.findOneAndUpdate({_id:req.params.friendId},{$addToSet:{friends:req.params.userId}},{new: true})
        return [
          friend, user
      ]})
      .then((user) => res.json(user))
      .catch((err) => {
        console.log(err);
        return res.status(500).json(err);
      });
  },
  //remove a friend
  removeFriend(req, res) {
    User.findOneAndUpdate({_id:req.params.userId},{$pull:{friends:req.params.friendId}},{new: true})
      .then(async(user) => {
        const friend = await User.findByIdAndUpdate({_id:req.params.friendId},{$pull:{friends:req.params.userId}},{new:true})
        return [
          friend, user
        ]})
      .then(() => res.json({ message: 'You have lost a friend!' }))
      .catch((err) => res.status(500).json(err));
  },
};

