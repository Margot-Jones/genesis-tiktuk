import { Card, Grid } from "@mui/material";
import PostPart from "../components/PostPart";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import VisibilityIcon from '@mui/icons-material/Visibility';
import UserInfo from "../components/UserInfo/UserInfo";

let User = () => {
  return (
    <>
        <Grid container>
            <Grid item md={6} >
                <UserInfo />
            </Grid>

            <Grid item md={6}>
                <Card sx={{ maxWidth: 345 }}>
                    <PostPart />
                    <CardActions disableSpacing>
                        <IconButton aria-label="add to favorites">
                            <VisibilityIcon />&nbsp;52,456
                        </IconButton>
                    </CardActions>
                </Card>
            </Grid>
        </Grid>
    </>
  );
};

export default User;
