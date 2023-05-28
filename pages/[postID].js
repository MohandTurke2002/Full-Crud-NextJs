import EditePost from "@/components/EditePost";
import domain from "@/utils/config";
import axios from "axios";
import { useRouter } from "next/router";

function postID({ data }) {
  return <EditePost data={data} />;
}
export async function getServerSideProps(context) {
  const res = await axios.get(`${domain}/api/posts/${context.query.postID}`);
  console.log(res.data);
  return { props: { data: res.data.post } };
}
export default postID;
