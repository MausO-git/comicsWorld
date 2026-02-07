import "./Comics.scss"
import { NavLink } from "react-router-dom";

const Comics = () => {
    return ( 
        <>
            <div className="page">

                <NavLink to="/comics">
                    <div className="button">Retour</div>
                </NavLink>
            </div>
        </>
     );
}
 
export default Comics;