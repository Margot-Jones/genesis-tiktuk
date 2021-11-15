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
import PostPart from "./PostPart";

const hashtags = ["#kek", "#aga", "#net"];

const useStyles = makeStyles({
  icons: {
    display: "flex",
    justifyContent: "space-around",
  },
});

let Post = () => {
  const classes = useStyles();

  return (
    <Card sx={{ maxWidth: 345 }}>
      <PostPart />

      <CardContent>
        <Typography variant="body2" color="text.secondary">
          This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the
          mussels, if you like.
        </Typography>
      </CardContent>

      <CardContent>
        {hashtags.map((hash) => (
          <Typography variant="body2" color="text.secondary" key={"hash"}>
            {hash}
          </Typography>
        ))}
      </CardContent>

      <CardActions disableSpacing className={classes.icons}>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="chat">
          <ChatIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default Post;
