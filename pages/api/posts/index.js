import Posts from "@/models/Post";
import dbConnect from "@/utils/dbConnect";

const handlerGetPosts = async (req, res) => {
  if (req.method === "GET") {
    try {
      await dbConnect();
      const post = await Posts.find({}, { __v: 0 });
      res.json({ post });
    } catch (error) {
      res.json({ error });
    }
  } else if (req.method === "POST") {
    try {
      await dbConnect();
      const post = await Posts.create(req.body);
      res.json({ post });
    } catch (error) {
      res.json({ error });
    }
  }
};

export default handlerGetPosts;
