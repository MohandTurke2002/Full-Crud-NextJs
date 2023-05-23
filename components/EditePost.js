import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import styles from "../styles/add-eited-post.module.css";
import { Button } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import { useState } from "react";
import axios from "axios";
import AlertPop from "./Alert";
import { useRouter } from "next/router";

function EditePost({ data }) {
  const [titlePost, setTitlePost] = useState(data.titlePost);
  const [imgPost, setImgUrl] = useState(data.imgPost);
  const [discPost, setDiscPost] = useState(data.discPost);
  const [update, setUpdate] = useState("");

  const dataPost = {
    titlePost,
    imgPost,
    discPost,
  };
  const router = useRouter();

  const createPost = async () => {
    if (!titlePost || !imgPost || !discPost) {
      setUpdate("false");
    } else {
      await axios.put(
        `https://blog-api-mohandturke2002.vercel.app/api/posts/${data._id}`,
        dataPost
      );
      setUpdate("true");
      router.push("/");
    }
  };

  return (
    <>
      {update === "true" && (
        <AlertPop message={"Post Is Updated Succefully"} color="success" />
      )}
      {update === "false" && (
        <AlertPop message={"Complete The Form"} color="error" />
      )}
      <div className={styles.container}>
        <Box className={styles.containerInput}>
          <TextField
            fullWidth
            sx={{ width: 400 }}
            className={styles.input}
            label="Title Post"
            id="Title Post"
            value={titlePost}
            onChange={(e) => setTitlePost(e.target.value)}
            required
          />
          <TextField
            fullWidth
            label="Link Image"
            sx={{ width: 400 }}
            className={styles.input}
            id="Link Image"
            value={imgPost}
            onChange={(e) => setImgUrl(`${e.target.value}`)}
            required
          />
          <TextField
            fullWidth
            label="Discrabtion"
            sx={{ width: 400 }}
            className={styles.input}
            id="Discrabtion"
            value={discPost}
            onChange={(e) => setDiscPost(e.target.value)}
            required
          />
        </Box>
        <Button
          variant="contained"
          sx={{ width: "fit-content", alignSelf: "flex-end" }}
          endIcon={<SendIcon />}
          onClick={() => createPost()}
        >
          Post
        </Button>
      </div>
    </>
  );
}

export default EditePost;
