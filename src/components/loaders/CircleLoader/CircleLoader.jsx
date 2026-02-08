import ContentLoader from "react-content-loader";
import "./CircleLoader.scss"

const Loader = (props) => {
    return ( 
        <div className="circle-loader wrapper">
            <ContentLoader 
                speed={2}
                width={50}
                height={50}
                viewBox="0 0 50 50"
                backgroundColor="#202020" // Gris Marvel
                foregroundColor="#ed1d24" // Rouge Marvel pour le flash
                {...props}
            >
                {/* On dessine 8 petits cercles en cercle */}
                <circle cx="25" cy="10" r="4" />   {/* Haut */}
                <circle cx="35" cy="15" r="3" />   {/* Haut-Droite */}
                <circle cx="40" cy="25" r="2" />   {/* Droite */}
                <circle cx="35" cy="35" r="2" />  {/* Bas-Droite */}
                <circle cx="25" cy="40" r="2" />   {/* Bas */}
                <circle cx="15" cy="35" r="2" />   {/* Bas-Gauche */}
                <circle cx="10" cy="25" r="2" />    {/* Gauche */}
                <circle cx="15" cy="15" r="3" />    {/* Haut-Gauche */}
            </ContentLoader>
        </div>
     );
}
 
export default Loader;