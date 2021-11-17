import { getTrendingFeed } from "../api/api";
import Post from "../components/Post/Post";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { useEffect, useState } from "react";
import { PostProp } from "../types/feed";
import { Grid } from "@mui/material";
import { postsAmount, postsPage } from "../const/const";

const Feed = () => {
  const [page, setPage] = useState(1);
  const [posts, setPosts] = useState<PostProp[]>([]);

  useEffect(() => {
    const fetchMyAPI = async () => {
      // const response = await getTrendingFeed();

      setPosts(await getTrendingFeed());
      console.log("await response");
    };

    fetchMyAPI();
  }, []);

  return (
    <Grid display="flex" flexDirection="column" alignItems="center">
      <Stack spacing={2}>
        <Pagination
          count={Math.ceil(postsAmount / postsPage)}
          onChange={(e, page) => {
            setPage(page);
          }}
        />
      </Stack>
      {posts.slice(postsPage * (page - 1), postsPage * page).map((p, i) => (
        <Post {...p} key={i} />
      ))}
    </Grid>
  );
};

export default Feed;
