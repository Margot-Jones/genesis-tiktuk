import { red } from "@mui/material/colors";
import Avatar from "@mui/material/Avatar";
import CardHeader from "@mui/material/CardHeader";
import ReactPlayer from "react-player";
import { useState } from "react";

let PostPart = () => {
  const [playing, setPlaying] = useState(true);
  return (
    <>
      <CardHeader
        avatar={<Avatar sx={{ bgcolor: red[500] }}>R</Avatar>}
        title={<b>Shrimp Paella</b>}
        subheader={<em>September 14, 2016</em>}
      />

      {/* <CardMedia
            component="img"
            height="194"
            image="../../test.jpg"
            alt="user_video"
        /> */}

      <ReactPlayer
        url={`https://v39-eu.tiktokcdn.com/5751c967d434b9efe11f7aebda218250/6192ceea/video/tos/useast2a/tos-useast2a-pve-0068/644e0a5848f547c09135799d4aa6bff0/?a=1233&br=3454&bt=1727&cd=0%7C0%7C1&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=wZ~R_F5qkag3-I&l=20211115151930010189073091371B23D4&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=M3R1aWk6ZjZvODMzNzczM0ApOzhlNDhnZDs3N2dpZGc6O2c2aGpmcjRfcmxgLS1kMTZzczEvMmAwLmBjXy0vYTIxMGA6Yw%3D%3D&vl=&vr=`}
        loop
        playing={playing}
        width={"350px"}
        volume={0}
        onClick={() => setPlaying(play => !play)}
      />
    </>
  );
};

export default PostPart;
