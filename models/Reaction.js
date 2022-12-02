// //TODO - potentially delete document

// const { Schema, model } = require('mongoose');

// const reactionsSchema = new Schema ({
//   //* TODO Includes Reactions as the `reaction` field's subdocument schema in the Thought model.
//   //  * TODO Array of nested documents created with the `reactionSchema`
//   reactionId: {
//     type: Schema.Types.ObjectId, 
//     //Default value is set to a new ObjectId
//   },
//   reactionBody: {
//     type: String,
//     required: true,
//     //280 character maximum
//     max: 280,
//   },
//   username: {
//     type: String,
//     required: true,
//   },
//   createdAt: {
//     type: Date,
//     //Set default value to the current timestamp
//     //TODO: is this line needed???
//     default: Date.now(),
//     //getter to format time stamp
//     timestamps: true,
//   },   
// })

// const Reactions = model('reactions', reactionsSchema);

// module.exports = Reactions;