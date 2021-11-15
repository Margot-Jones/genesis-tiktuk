
import { NavLink } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';

const Navbar = () => {


  return (
    <>
        <div>
          <NavLink to="/">
            <HomeIcon color="primary" />
          </NavLink>
        </div>

        <div>
          <NavLink to="/user">
            <PersonIcon color="primary" />
          </NavLink>
        </div>
    </>
  );
}

export default Navbar;