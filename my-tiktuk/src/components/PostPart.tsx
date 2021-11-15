import { red } from "@mui/material/colors";
import Avatar from "@mui/material/Avatar";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";

let PostPart = () => {
    return (
      <>
        <CardHeader
            avatar={
            <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                R
            </Avatar>
            }
            title="Shrimp and Chorizo Paella"
        />

        <CardMedia
            component="img"
            height="194"
            image="../../test.jpg"
            alt="user_video"
        />
      </>
    );
  };
  
  export default PostPart;
  