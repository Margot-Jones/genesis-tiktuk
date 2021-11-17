import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ChatIcon from "@mui/icons-material/Chat";
import ShareIcon from "@mui/icons-material/Share";
import { makeStyles } from "@mui/styles";
import PostPart from "../PostPart/PostPart";
import { Chip } from "@mui/material";
import { PostProp } from '../../types/feed';
import { shortenNumber } from "../../math/additionalFunctions";
import Avatar from "@mui/material/Avatar";
import CardHeader from "@mui/material/CardHeader";
import { NavLink } from "react-router-dom";

const useStyles = makeStyles({
  icons: {
    display: "flex",
    justifyContent: "space-around"
  },
  hashtags: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center'
  },
  hashtag: {
    marginLeft: '7px',
    marginTop: '5px'
  },
  iconText: {
    fontSize: '17px'
  },
  linkStyles: {
    textDecoration: 'none',
    color: 'black'
  }
});

const Post = ({ text, authorMeta, videoUrl, diggCount, commentCount, hashtags } : PostProp) => {
  const classes = useStyles();

  return (
    <Card sx={{ maxWidth: 345, marginTop: '15px' }}>

      <NavLink to={`/user/${authorMeta.name}`} className={classes.linkStyles}>
        <CardHeader
          avatar={<Avatar alt={authorMeta.nickName} src={authorMeta.avatar} />}
          title={<b>{authorMeta.nickName}</b>}
          subheader={<em>{authorMeta.name}</em>}
        />
      </NavLink>

      <PostPart videoUrl={videoUrl} />

      <CardContent>
        <Typography variant="body2" color="text.secondary" textAlign='center'>
          {text}
        </Typography>
      </CardContent>

      <CardContent className={classes.hashtags}>
        {hashtags.map((hash) => (
          <Chip label={'#'+hash.name} variant="outlined"  key={"hash"} className={classes.hashtag}/>
        ))}
      </CardContent>

      <CardActions disableSpacing className={classes.icons}>
        <IconButton aria-label="add to favorites" className={classes.iconText}>
          <FavoriteIcon />&nbsp;{shortenNumber(diggCount)}
        </IconButton>
        <IconButton aria-label="chat" className={classes.iconText}>
          <ChatIcon />&nbsp;{shortenNumber(commentCount)}
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default Post;
