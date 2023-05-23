import { Button, Card, Typography } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import styles from "../styles/posts.module.css";
import axios from "axios";
import { useRouter } from "next/router";

function Post({ id, titlePost, imgPost, discPost }) {
  const router = useRouter();
  const deletePost = async () => {
    await axios.delete(
      `https://blog-api-mohandturke2002.vercel.app/api/posts/${id}`
    );
    router.push("/");
  };
  const goToEdite = () => {
    router.push(`/${id}`);
  };
  return (
    <Card className={styles.card}>
      <img src={imgPost} alt="image" className={styles.image} />
      <h3 className={styles.titlePost}>{titlePost}</h3>
      <Typography className={styles.discPost}>{discPost}</Typography>
      <div className={styles.buttonPost}>
        <Button
          variant="contained"
          color="success"
          className={styles.button}
          onClick={() => goToEdite()}
        >
          Edite
        </Button>
        <Button
          variant="outlined"
          startIcon={<DeleteIcon />}
          color="error"
          className={styles.button}
          onClick={() => deletePost()}
        >
          Delete
        </Button>
      </div>
    </Card>
  );
}

export default Post;
