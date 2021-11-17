import { NavLink } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import PersonIcon from "@mui/icons-material/Person";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import logo from "../../assets/logo.svg";

const Navbar = () => {
  return (
    <Box sx={{ flexGrow: 1, marginBottom: 5 }}>
      <AppBar position="static">
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <img src={logo} alt="logo.svg" />

          <div>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              color="inherit"
            >
              <NavLink to="/">
                <HomeIcon sx={{ color: "white" }} fontSize="large" />
              </NavLink>
            </IconButton>

            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              color="inherit"
            >
              <NavLink to="/user">
                <PersonIcon sx={{ color: "white" }} fontSize="large" />
              </NavLink>
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
