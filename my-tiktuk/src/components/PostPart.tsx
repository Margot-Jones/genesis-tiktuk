import Avatar from "@mui/material/Avatar";
import CardHeader from "@mui/material/CardHeader";
import ReactPlayer from "react-player";
import { useState } from "react";
import { PostPartProps } from "../types/interface";

const PostPart = ({ authorMeta, videoUrl } : PostPartProps) => {
  const [playing, setPlaying] = useState(true);
  return (
    <>
      <CardHeader
        avatar={<Avatar alt={authorMeta.nickName} src={authorMeta.avatar} />}
        title={<b>{authorMeta.nickName}</b>}
        subheader={<em>{authorMeta.name}</em>}
      />


      <ReactPlayer
        url={videoUrl}
        loop
        playing={playing}
        volume={0}
        width={"350px"}
        onClick={() => setPlaying(play => !play)}
        controls
      />
    </>
  );
};

export default PostPart;
