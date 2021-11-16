import { getOnePost } from "../api/api";
import Post from "../components/Post/Post";

let Feed = () => {
    return (
        <>
          <Post {...getOnePost()} />
        </>
      );
};

export default Feed;
