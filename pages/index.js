import Post from "@/components/Post";
import Container from "@mui/material/Container";
import styles from "../styles/posts.module.css";
import domain from "@/utils/config";
import { useState } from "react";

function Home() {
  const [post, setPost] = useState([]);
  const getPosts = async () => {
    try {
      const res = await fetch(`${domain}/api/posts`);
      const { post } = await res.json();
      setPost(post);
    } catch (error) {
      console.log(error);
    }
  };
  getPosts();
  if (post.length) {
    return (
      <Container className={styles.container}>
        {post.map((po) => (
          <Post
            key={po._id}
            id={po._id}
            titlePost={po.titlePost}
            discPost={po.discPost}
            imgPost={po.imgPost}
          />
        ))}
      </Container>
    );
  } else {
    return <h1 style={{ textAlign: "center" }}>Create New Post Noow...!</h1>;
  }
}

// export const getStaticProps = async () => {
//   const res = await fetch(`${domain}/api/posts`);
//   const { post } = await res.json();
//   return { props: { post } };
// };

export default Home;
