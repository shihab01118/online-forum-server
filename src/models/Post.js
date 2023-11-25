const mongoose = require("mongoose");
const { Schema } = mongoose;

const postSchema = new Schema({
  name: String,
  email: String,
  img: String,
  title: String,
  createdAt: {
    type: Date,
    default: Date.now,
  },
  comments: {
    type: [String],
    default: [],   
  },
  tag: String,
  description: String,
  upVote: Number,
  downVote: Number,
});

const Post = mongoose.model("Post", postSchema);

module.exports = Post;
