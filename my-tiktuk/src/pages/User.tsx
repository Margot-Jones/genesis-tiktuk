import { Card, Grid } from "@mui/material";
import PostPart from "../components/PostPart";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import VisibilityIcon from "@mui/icons-material/Visibility";
import UserInfo from "../components/UserInfo/UserInfo";
import { PostProp } from "../types/interface";
import { makeStyles } from "@mui/styles";
import { shortenNumber } from "../math/additionalFunctions";

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

let User = ({ authorMeta, videoUrl, diggCount }: PostProp) => {
  const classes = useStyles();
  return (
    <>
      <Grid container flexDirection="column" alignItems="center">
        <Grid container item md={4} sm={6} xs={10} flexDirection="column">
          <UserInfo authorMeta={authorMeta} />
          <h1 className={classes.hStyle}>Videos</h1>
        </Grid>

        <Grid container item md={9} sm={10} xs={10} className={classes.gallery}>
          <Card sx={{ maxWidth: 345 }}>
            <CardActions disableSpacing sx={{display: 'flex', justifyContent: 'flex-end'}}>
              <IconButton
                aria-label="add to favorites"
                className={classes.iconText}
              >
                <VisibilityIcon />
                &nbsp;{shortenNumber(diggCount)}
              </IconButton>
            </CardActions>
            <PostPart videoUrl={videoUrl} />
          </Card>
        </Grid>
      </Grid>
    </>
  );
};

export default User;
