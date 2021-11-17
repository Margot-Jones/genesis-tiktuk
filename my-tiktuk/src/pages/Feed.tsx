import { getTrendingFeed } from "../api/api";
import Post from "../components/Post/Post";
import Typography from '@mui/material/Typography';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import React from "react";
import { useEffect, useState } from "react";
import { PostProp } from "../types/interface";


const Feed = () => {

  const [page, setPage] = useState(1);
  const [posts, setPosts] = useState<PostProp[]>([]);

  useEffect(() => {
    const fetchMyAPI =  async () => {
      // const response = await getTrendingFeed();
      
      setPosts(await getTrendingFeed());
      console.log("await response");
    }

    fetchMyAPI()
  }, [])

  return (
    <>
      <Stack spacing={2}>
        <Typography>Page: {page}</Typography>
        <Pagination count={10} page={page} onChange={(event, value) => setPage(value)} />
      </Stack>
      {
      posts.map((p, i) => <Post {...p} key={i}/>)
      }
    </>
  );
};

export default Feed;
