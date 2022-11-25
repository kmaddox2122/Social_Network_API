const { Schema, model } = require('mongoose');
//const assignmentSchema = require('./Assignment'); **

// Schema to create User model
const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      validate: {
        validator: () => Promise.resolve(false),
        message: 'Email validation failed'
      }
    },
    //* `thoughts`
      //* Array of `_id` values referencing the `Thought` model  --TODO make array?
    thoughts_id: {
      type: Schema.Types.ObjectId,
      ref: 'Thought',
    },
    //* `friends`
      //* Array of `_id` values referencing the `User` model (self-reference) --TODO make array?
    friends_id: {
      type: Schema.Types.ObjectId,
      ref: 'User',
    },
    assignments: [assignmentSchema],
  },
  {
    toJSON: {
      getters: true,
    },
  }
);
//Create a virtual called `friendCount` that retrieves the length of the user's `friends` array field on query.
//TODO adjust for on query?
userSchema.virtual('friendCount').get(function () {
  return this.friends_id.length;
});

const User = model('user', userSchema);

module.exports = User;
