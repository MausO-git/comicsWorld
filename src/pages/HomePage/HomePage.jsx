import "./HomePage.scss";
import marvelAPI from "../../services/marvelAPI";
import { useEffect, useState } from "react";
import ComicCard from "../../components/ComicCard/ComicCard";
import { NavLink } from "react-router-dom";

const HomePage = () => {
    const [issues, setIssues] = useState([]);

    const fetchDemo = async () => {
        try {
            const datas = await marvelAPI.demoHome()
            setIssues(datas.data.items)
            console.log(issues)
        } catch (error) {
            console.error("Une erreur est survenue au niveau de l'API", error)
        }
    }

    useEffect(() => {
        fetchDemo()
    },[])
    return ( 
        <>
            <div className="page">
                <div className="grid">
                    {issues.map(issue => (
                        <NavLink to={`/comics/${issue.id}`}>
                            <ComicCard className="grid-item" key={issue.id} id={issue.id} title={issue.title} />
                        </NavLink>
                    ))}
                </div>
            </div>
        </>
     );
}
 
export default HomePage;