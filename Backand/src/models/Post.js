const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema(
  {
    author: String,
    place: String,
    description: String,
    hashtags: String,
    image: String,
    likes: {
      type: Number,
      default: 0,
    },
    created_at: { type: Date, default: Date.now },
  },
  {
    timestamp: true,
  }
);
module.exports = mongoose.model("Post", PostSchema);
