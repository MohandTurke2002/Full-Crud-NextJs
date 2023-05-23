import EditePost from "@/components/EditePost";
import domain from "@/utils/config";
import axios from "axios";

function postID({ data }) {
  return <EditePost data={data} />;
}
export async function getServerSideProps(context) {
  const res = await axios.get(`${domain}/posts/${context.query.postID}`);
  console.log(res.data);
  return { props: { data: res.data.post } };
}
export default postID;
