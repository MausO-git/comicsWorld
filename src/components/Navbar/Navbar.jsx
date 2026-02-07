import "./Navbar.scss";
import { NavLink } from "react-router-dom";

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
            </ul>
        
        </nav>
     );
}
 
export default Navbar;