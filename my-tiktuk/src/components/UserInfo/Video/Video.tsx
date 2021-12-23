/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/jsx-no-comment-textnodes */
import ReactPlayer from "react-player";
import { useState } from "react";
import { ItemList } from "../../../types/video";
import Preloader from "../../Preloader/Preloader";

const Video = ({ video } : ItemList) => {
  const [playing, setPlaying] = useState(true);

  

  return !video.playAddr ? <Preloader /> : (
    <>
      // eslint-disable-next-line react/react-in-jsx-scope
      <ReactPlayer
        url={video.playAddr}
        loop
        playing={playing}
        width={"350px"}
        onClick={() => setPlaying(play => !play)}
        controls
      />
    </>
  );
};

export default Video;
