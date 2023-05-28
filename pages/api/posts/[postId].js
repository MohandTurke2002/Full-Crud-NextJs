import Posts from "@/models/Post";
import dbConnect from "@/utils/dbConnect";

const handlerDeletPost = async (req, res) => {
  if (req.method === "DELETE") {
    try {
      await dbConnect();
      const post = await Posts.findByIdAndDelete({ _id: req.query.postId });
      res.json({ post });
    } catch (error) {
      res.json({ error });
    }
  } else if (req.method === "GET") {
    try {
      await dbConnect();
      const post = await Posts.findOne({ _id: req.query.postId });
      res.json({ post });
    } catch (error) {
      res.json({ error });
    }
  } else if (req.method === "PUT") {
    try {
      await dbConnect();
      const post = await Posts.findOne({ _id: req.query.postId });
      (post.titlePost = req.body.titlePost),
        (post.imgPost = req.body.imgPost),
        (post.discPost = req.body.discPost),
        await post.save();
      res.json({ post });
    } catch (error) {
      res.json({ error });
    }
  }
};

export default handlerDeletPost;
