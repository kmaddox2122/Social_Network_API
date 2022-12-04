const { Schema, model } = require('mongoose');

const reactionsSchema = new Schema ({
    //Includes Reactions as the `reaction` field's subdocument schema in the Thought model.
    //Array of nested documents created with the `reactionSchema`
    reactionId: {
      type: Schema.Types.ObjectId, 
      // default: () => new Types.ObjectId(),
      //Default value is set to a new ObjectId
    },
    reactionBody: {
      type: String,
      required: true,
      //280 character maximum
      max: 280,
    },
    username: {
      type: String,
      required: true,
    },
    createdAt: {
      type: Date,
      //Set default value to the current timestamp
      default: Date.now(),
      //getter to format time stamp
      timestamps: true,
    },   
  });

// Schema to create a course model
const thoughtSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: true,
      //Must be between 1 and 280 characters
      min: 1,
      max: 280,
    },
    createdAt: {
      type: Date,
      //Set default value to the current timestamp
      default: Date.now(),
      //getter to format time stamp
      timestamps: true,
    },
    username: {
      type: String,
      reqired: true,
    }, 
    reactions: [reactionsSchema]
  },
  {
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);

// Create a virtual property `reactionCount` that retrieves the length of the thought's `reactions` array field on query.
thoughtSchema.virtual('reactionCount').get(function () {
  return this.reactions.length;
});

const Thought = model('thought', thoughtSchema);

module.exports = Thought;


