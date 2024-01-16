import { useNavigate } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => {
  const navigate = useNavigate();
  return (
    <div className="navbar">
      <div className="navContainer">
        <span
          className="logo"
          onClick={() => {
            navigate("/reservation");
          }}
        >
          EasyBooking
        </span>
        <div className="navItems">
          <button className="navButton">Register</button>
          <button className="navButton">Login</button>
        </div>
      </div>
    </div>
  );
};
export default NavBar;
