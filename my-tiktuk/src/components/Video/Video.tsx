import ReactPlayer from "react-player";
import { useState } from "react";
import { ItemList } from "../../types/video";
import Preloader from "../Preloader/Preloader";

const Video = ({ video } : ItemList) => {
  const [playing, setPlaying] = useState(true);

  

  return !video.playAddr ? <Preloader /> : (
    <>
      <ReactPlayer
        url={video.playAddr}
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

export default Video;
