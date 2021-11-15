import { Grid } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import { red } from "@mui/material/colors";
import Typography from "@mui/material/Typography";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
    userInfo: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
  },
});

let UserInfo = () => {
  const classes = useStyles();

  return (
    <Grid className={classes.userInfo}>
      <Avatar sx={{ bgcolor: red[500], width: "100px", height: "100px" }}>
        R
      </Avatar>
      <Typography variant="body2">
        <b>Name</b>
      </Typography>
      <Typography variant="body2">
        Insert status here, with some text.
      </Typography>
    </Grid>
  );
};

export default UserInfo;
