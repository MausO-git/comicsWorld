import "./Navbar.scss";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const Navbar = (props) => {
    
    return ( 
        <nav className="navbar">
            <NavLink className="logo" to="/">
                <img src={props.logo} alt="logo de ComicsWorld" />
            </NavLink>
            <ul className="menu">
                <li className="menu-item">
                    <NavLink className="link" to="/">Acceuil</NavLink>
                </li>
                <li className="menu-item">
                    <NavLink className="link" to="/comics">Comics</NavLink>
                </li>
                <li className="menu-item">
                    <NavLink className="link" to="/contact">Contact</NavLink>
                </li>
            </ul>
            <div className="burger">
                <div className="burger-button">
                    <FontAwesomeIcon className="burger-icon" icon={faBars} style={{ color: "#daa520" }} />
                </div>
            </div>
        </nav>
     );
}
 
export default Navbar;