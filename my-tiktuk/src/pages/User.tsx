import { Card, Grid } from "@mui/material";
import PostPart from "../components/PostPart";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import VisibilityIcon from "@mui/icons-material/Visibility";
import UserInfo from "../components/UserInfo/UserInfo";
import { PostProp } from "../types/interface";
import { makeStyles } from "@mui/styles";
import shortenNumber from "../math/shortenNumber";

const useStyles = makeStyles({
  iconText: {
    fontSize: "17px",
  },
  hStyle: {
    textAlign: "center",
    textDecoration: "underline",
  },
});

let User = ({ authorMeta, videoUrl, diggCount }: PostProp) => {
  const classes = useStyles();
  return (
    <>
      <Grid container flexDirection="column" alignContent="center">
        <Grid item md={6}>
          <UserInfo authorMeta={authorMeta} />
        </Grid>

        <Grid item md={6}>
          <h1 className={classes.hStyle}>Videos</h1>
          <Card sx={{ maxWidth: 345 }}>
            <PostPart authorMeta={authorMeta} videoUrl={videoUrl} />
            <CardActions disableSpacing>
              <IconButton
                aria-label="add to favorites"
                className={classes.iconText}
              >
                <VisibilityIcon />
                &nbsp;{shortenNumber(diggCount)}
              </IconButton>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </>
  );
};

export default User;
