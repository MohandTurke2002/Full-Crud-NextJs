import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import styles from "../styles/add-eited-post.module.css";
import { Button } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import { useState } from "react";
import axios from "axios";
import AlertPop from "./Alert";
import { useRouter } from "next/router";

function AddPost() {
  const [titlePost, setTitlePost] = useState("");
  const [imgPost, setImgUrl] = useState("");
  const [discPost, setDiscPost] = useState("");
  const [sent, setSent] = useState("");
  const router = useRouter();

  const dataPost = {
    titlePost,
    imgPost,
    discPost,
  };

  const createPost = async () => {
    if (!titlePost || !imgPost || !discPost) {
      setSent("false");
    } else {
      await axios.post("http://localhost:3000/api/posts", dataPost);
      setSent("true");
      router.push("/");
    }
  };

  return (
    <>
      {sent === "true" && (
        <AlertPop message={"Post Is Created Succefully"} color="success" />
      )}
      {sent === "false" && (
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
            onChange={(e) => setTitlePost(e.target.value)}
            required
          />
          <TextField
            fullWidth
            label="Link Image"
            sx={{ width: 400 }}
            className={styles.input}
            id="Link Image"
            onChange={(e) => setImgUrl(`${e.target.value}`)}
            required
          />
          <TextField
            fullWidth
            label="Discrabtion"
            sx={{ width: 400 }}
            className={styles.input}
            id="Discrabtion"
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

export default AddPost;
