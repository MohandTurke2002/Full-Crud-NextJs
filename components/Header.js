import Box from "@mui/material/Box";
import Link from "next/link";
import style from "../styles/header.module.css";
import { useRouter } from "next/router";

function Header() {
  const router = useRouter();
  return (
    <Box className={style.navbox}>
      <Link
        href="/"
        className={
          router.pathname == "/" ? `${style.active}` : `${style.links}`
        }
      >
        Home
      </Link>
      <Link
        href="/addpost"
        className={
          router.pathname == "/addpost" ? `${style.active}` : `${style.links}`
        }
      >
        AddPost
      </Link>
    </Box>
  );
}

export default Header;
