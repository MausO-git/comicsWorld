import "./HomePage.scss";
import marvelAPI from "../../services/marvelAPI";
import { useEffect, useState } from "react";
import ComicCard from "../../components/ComicCard/ComicCard";
import { NavLink } from "react-router-dom";
import CirleLoader from "../../components/loaders/CircleLoader/CircleLoader";

const HomePage = () => {
    const [issues, setIssues] = useState([]);
    const [loading, setLoading] = useState(true)

    /**
     * Charge les trois derniers comics ajoutés
     */
    const fetchDemo = async () => {
        try {
            const datas = await marvelAPI.demoHome();
            setIssues(datas.data.items);
            setLoading(false);
        } catch (error) {
            console.error("Une erreur est survenue au niveau de l'API", error)
        }
    }

    useEffect(() => {
        fetchDemo()
    },[])

    return ( 
        <>
            <div className="intro">
                <div className="intro-text wrapper">
                    <h1>Bienvenue sur ComicsWorld</h1>
                    <p>Explorez les archives ultimes de l'univers Marvel. Issues, personnages et sagas légendaires à portée de clic.</p>
                </div>
                <div className="gradient"></div>
            </div>
            <div className="page home">
                <h1>Les derniers ajouts</h1>
                {(!loading) ? (
                    <>
                        <div className="grid">
                            {issues.map(issue => (
                                <NavLink to={`/comics/${issue.id}`} key={issue.id}>
                                    <ComicCard className="grid-item" id={issue.id} title={issue.title} />
                                </NavLink>
                            ))}
                        </div>
                    </>
                ) : (
                    <CirleLoader />
                )}
                
            </div>
        </>
     );
}
 
export default HomePage;