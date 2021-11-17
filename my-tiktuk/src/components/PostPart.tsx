import ReactPlayer from "react-player";
import { useState } from "react";
import { PostPartProps } from "../types/interface";
import Preloader from "./Preloader/Preloader";

const PostPart = ({ videoUrl = 'https://v16-web.tiktok.com/video/tos/alisg/tos-alisg-pve-0037c001/65b5bb692c144b8c8ee9ade7b60ffca5/?a=1988&br=4592&bt=2296&cd=0%7C0%7C1&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&expire=1637170302&ft=wUyFfFGnkag3-I&l=2021111711313401018806120332064850&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&policy=3&qs=0&rc=M3ZxMzs6Zjt3OTMzODczNEApNDU3NzhmZTxlNzxpNDdmZWdlcGxqcjRvZTRgLS1kMS1zcy82YTU1MWE1My0xX2IxLWI6Yw%3D%3D&signature=19d60a3bb54374b21367d45b703c2fcc&tk=0&vl=&vr=' } : PostPartProps) => {
  const [playing, setPlaying] = useState(true);

  

  return !videoUrl ? <Preloader /> : (
    <>
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
