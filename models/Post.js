const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
  titlePost: String,
  imgPost: String,
  discPost: String,
});

const Posts = mongoose.models.Posts || mongoose.model("Posts", postSchema);

export default Posts;
