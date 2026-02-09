import "./Navbar.scss";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const Navbar = (props) => {

    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation()

    const toggleMenu = () => setIsOpen(!isOpen)

    //ferme le menu burger lorsqu'on change de page
    useEffect(() => {
        setIsOpen(false)
    }, [location])
    
    return ( 
        <>
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
                    <div className="burger-button" onClick={toggleMenu}>
                        {(!isOpen) ? (
                            <FontAwesomeIcon className="burger-icon" icon={faBars} style={{ color: "#daa520" }} />
                        ) : (
                            <FontAwesomeIcon className="burger-icon" icon={faXmark} style={{color: "#daa520",}} />
                        )}
                    </div>
                </div>
            </nav>
            <div className={"menu-burger" + (isOpen ? " open" : "")}>
                <ul className="inMenu">
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
            </div>
        </>
     );
}
 
export default Navbar;