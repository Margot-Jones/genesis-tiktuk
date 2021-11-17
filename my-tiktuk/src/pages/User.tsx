import { Card, Grid } from "@mui/material";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import VisibilityIcon from "@mui/icons-material/Visibility";
import UserInfo from "../components/UserInfo/UserInfo";
import { ItemList} from "../types/video";
import { makeStyles } from "@mui/styles";
import { shortenNumber } from "../math/additionalFunctions";

import { useEffect, useState } from "react";
import { getUserFeedVideo, getUserInfo } from "../api/api";
import { useParams } from "react-router";
import Video from "../components/UserInfo/Video/Video";

const useStyles = makeStyles({
  iconText: {
    fontSize: "17px",
  },
  hStyle: {
    textAlign: "center",
    textDecoration: "underline",
  },
  gallery: {
    display: "flex",
    alignContent: "stretch",
    flexWrap: "wrap",
    justifyContent: "center",
  },
});

interface UserInfoState {
  uniqueId: string;
  nickname: string;
  signature: string;
  avatar: string;
  followerCount: number;
  followingCount: number;
  heartCount: number;
}

let User = () => {
  const classes = useStyles();
  const { username } = useParams();

  // const [userInfo, setUserInfo] = useState<UserProp>({} as UserProp);

  // useEffect(() => {
  //   const fetchMyAPI =  async () => {
  //     // const response = await getTrendingFeed();

  //     setUserInfo(await getUserInfo(username || 'default'));
  //     console.log(userInfo);
  //     console.log("await response");
  //   }

  //   fetchMyAPI()
  // }, [username])

  const initialUserInfoState = {
    uniqueId: "",
    nickname: "",
    signature: "",
    avatar: "",
    followerCount: 0,
    followingCount: 0,
    heartCount: 0,
  } as UserInfoState;

  const [userInfo, setUserInfo] = useState<UserInfoState>(initialUserInfoState);

  useEffect(() => {
    const getInfo = async () => {
      const response = await getUserInfo(username || "aaa");
      setUserInfo({
        uniqueId: response.user.uniqueId,
        nickname: response.user.nickname,
        signature: response.user.signature,
        avatar: response.user.avatarThumb,
        followerCount: response.stats.followerCount,
        followingCount: response.stats.followingCount,
        heartCount: response.stats.heartCount,
      });
    };

    getInfo();
  }, [username]);

  const [videos, setVideos] = useState<ItemList[]>([]);

  useEffect(() => {
    const fetchMyAPI = async () => {
      // const response = await getTrendingFeed();

      setVideos(await getUserFeedVideo());
      console.log("await response");
    };

    fetchMyAPI();
  }, []);

  return (
    <>
      <Grid container flexDirection="column" alignItems="center">
        <Grid container item md={4} sm={6} xs={10} flexDirection="column">
          <UserInfo {...userInfo} />
          <h1 className={classes.hStyle}>Videos</h1>
        </Grid>

        <Grid container item md={9} sm={10} xs={10} className={classes.gallery}>
          {videos.map((v, i) => (
            <Card sx={{ maxWidth: 345 }}>
              <CardActions
                disableSpacing
                sx={{ display: "flex", justifyContent: "flex-end" }}
              >
                <IconButton
                  aria-label="add to favorites"
                  className={classes.iconText}
                >
                  <VisibilityIcon />
                  &nbsp;{shortenNumber(v.stats.playCount)}
                </IconButton>
              </CardActions>

              <Video {...v} key={i} />

            </Card>
          ))}
        </Grid>
      </Grid>
    </>
  );
};

export default User;
