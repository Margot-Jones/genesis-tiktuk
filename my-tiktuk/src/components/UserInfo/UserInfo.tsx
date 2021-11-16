import { Button, CardContent, CardHeader, Grid } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import { makeStyles } from "@mui/styles";
import { UserInfoProps } from "../../types/interface";

const useStyles = makeStyles({
  userInfo: {

  },
  avatar: {
    height: '120px',
    width: '120px'
  },
  infoFollowing: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
});

let UserInfo = ({ authorMeta } : UserInfoProps) => {
  const classes = useStyles();

  return (
    <Grid className={classes.userInfo}>
      <CardHeader
        avatar={<Avatar alt={authorMeta.nickName} src={authorMeta.avatar} className={classes.avatar}/>}
        title={<b style={{fontSize: '30px'}}>{authorMeta.nickName}</b>}
        subheader={<em style={{fontSize: '17px'}}>{authorMeta.name}</em>}
      />

      <CardContent className={classes.infoFollowing}>
        <Typography variant="body2" textAlign='center'>
          <b>{authorMeta.fans}</b>&nbsp;Fans
        </Typography>
        <Typography variant="body2" textAlign='center'>
          <b>{authorMeta.heart}</b>&nbsp;Heart
        </Typography>
        <Typography variant="body2" textAlign='center'>
          <b>{authorMeta.following}</b>&nbsp;Following
        </Typography>
      </CardContent>

    </Grid>
  );
};

export default UserInfo;
