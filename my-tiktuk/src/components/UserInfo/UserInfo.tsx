import { CardContent, CardHeader, Grid } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import { makeStyles } from "@mui/styles";
import { divideString, shortenNumber } from "../../math/additionalFunctions";

const useStyles = makeStyles({
  avatar: {
    height: "120px",
    width: "120px",
  },
  infoFollowing: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  b: {
    fontSize: "17px",
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

const UserInfo = (userInfo: UserInfoState) => {
  const classes = useStyles();

  return (
    <Grid>
      <CardHeader
        avatar={
          <Avatar
            alt={userInfo.nickname}
            src={userInfo.avatar}
            className={classes.avatar}
          />
        }
        title={<b style={{ fontSize: "30px" }}>{userInfo.nickname}</b>}
        subheader={<em style={{ fontSize: "17px" }}>{userInfo.uniqueId}</em>}
      />

      <CardContent className={classes.infoFollowing}>
        <Typography variant="body2" textAlign="center">
          <b className={classes.b}>{shortenNumber(userInfo.followerCount)}</b>
          &nbsp;Fans
        </Typography>
        <Typography variant="body2" textAlign="center">
          <b className={classes.b}>{shortenNumber(userInfo.heartCount)}</b>
          &nbsp;Likes
        </Typography>
        <Typography variant="body2" textAlign="center">
          <b className={classes.b}>{shortenNumber(userInfo.followingCount)}</b>
          &nbsp;Following
        </Typography>
      </CardContent>

      <CardContent className={classes.infoFollowing}>
        <Typography variant="body2">
          {divideString(userInfo.signature)}
        </Typography>
      </CardContent>
    </Grid>
  );
};

export default UserInfo;
