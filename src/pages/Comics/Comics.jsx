import "./Comics.scss"
import { NavLink, useParams } from "react-router-dom";
import marvelAPI from "../../services/marvelAPI";
import CirleLoader from "../../components/loaders/CircleLoader/CircleLoader";
import { useEffect, useState } from "react";
import moment from "moment";

const Comics = (props) => {

    let {id} = useParams()

    const [issue, setIssue] = useState([])
    const [loading, setLoading] = useState(true)

    /**
     * Charge les données du volume de comics dans le state issue
     * @param {int} id 
     */
    const fetchIssue = async (id) => {
        try {
            const datas = await marvelAPI.findIssue(id)
            setIssue(datas.data)
            setLoading(false)
        } catch (error) {
            console.error("Une erreur estsurvenue au niveau de l'API", error)
        }
    }

    useEffect(() => {
        fetchIssue(id)
    }, [])

    /**
     * change dans le format d'heure EU
     * @param {*} date 
     * @returns {string}
     */
    const formatDateEu = (date) => moment(date).format('DD/MM/YYYY');

    return ( 
        <>
            <div className="page">
                <article>
                    {(!loading) ? (
                        <>
                            <div className="title">
                                <h1>{issue.title}</h1>
                            </div>
                            <div className="content">
                                <div className="cover">
                                    <img src={(issue?.cover?.path) + "." + (issue?.cover?.extension)} alt="" />
                                </div>
                                <div className="info">
                                    <div className="c-item resume">    
                                        <h3>Résumé</h3>
                                        <div>{issue.description}</div>
                                    </div>
                                    <div className="authors c-item">
                                        <h3>Auteur</h3>
                                        {issue?.creators?.map((creator, index) => (
                                            <div className="author" key={creator.id}>
                                                <div className="author-name">{creator.name}</div>
                                                {index < (issue?.creators?.length - 1) && " - "}
                                            </div>
                                        ))}
                                    </div>
                                    <div className="release c-item">
                                        <h3>Date de sortie</h3>
                                        <div className="release-date">{formatDateEu(issue.onSaleDate)}</div>
                                    </div>
                                    <div className="page-number c-item">
                                        <h3>Pages</h3>
                                        <div className="number">{issue.pageCount}</div>
                                    </div>
                                </div>
                            </div>
                        </>
                    ) : (
                        <CirleLoader />
                    )}
                </article>
                <div className="back-button">
                    <NavLink to="/comics">
                        <div className="button">Retour</div>
                    </NavLink>
                </div>
            </div>
        </>
     );
}
 
export default Comics;