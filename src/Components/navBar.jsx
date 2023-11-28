import "../css/navbar.css";
import homeImMore from "../assets/e-learning-icon png.png";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav>
      <img src={homeImMore} alt="" />
      <ul>
        <li>
          <Link target="_top"  to='/'>Home </Link>
        </li>
        <li>
          <Link target="_top"  to='/aboutus'>About </Link>
        </li>
        <li>
          <Link target="_top"  to='/contactus'>Contact Us </Link>
        </li>
        <Link target="_top" to='/register-login'>
          <li className="btn-fill">Sign Up</li>
        </Link>
      </ul>
    </nav>
  );
};

export default NavBar;
