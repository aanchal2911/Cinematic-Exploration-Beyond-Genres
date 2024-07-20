// NavBar Component
import { Link } from "react-router-dom";
import "./styles/NavBarStyles.css";
import Logo from "./images/logo3.png";

const NavBar = ({ isHome }) => {
    return (
        <div className="container header">
            <Link to="/ ">
                <img src={Logo} className="logo" alt="" />
            </Link>
            {isHome ? (
                <a href="/" className="header-btn1">
                    <i className="fas fa-home"></i> Home
                </a>
            ) : (
                <a></a>
            )}
        </div>
    );
};

export default NavBar;
