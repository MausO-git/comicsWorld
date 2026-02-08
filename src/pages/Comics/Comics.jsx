import "./Comics.scss"
import { NavLink, useParams } from "react-router-dom";
import marvelAPI from "../../services/marvelAPI";
import { useEffect, useState } from "react";

const Comics = (props) => {

    let {id} = useParams()

    const [issue, setIssue] = useState([])

    const fetchIssue = async (id) => {
        try {
            const datas = await marvelAPI.findIssue(id)
            console.log(datas.data.cover.path)
            setIssue(datas.data)
        } catch (error) {
            console.error("Une erreur estsurvenue au niveau de l'API", error)
        }
    }

    useEffect(() => {
        fetchIssue(id)
    }, [])

    return ( 
        <>
            <div className="page">
                <article>
                    <div className="title">
                        <h1>{issue.title}</h1>
                    </div>
                    <div className="content">
                        <div className="cover">
                            <img src={(issue.cover.path) + "." + (issue.cover.extension)} alt="" />
                        </div>
                    </div>
                </article>
                <NavLink to="/comics">
                    <div className="button">Retour</div>
                </NavLink>
            </div>
        </>
     );
}
 
export default Comics;