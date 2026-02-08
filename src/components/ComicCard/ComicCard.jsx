import "./ComicCard.scss"
import { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { ISSUES_API } from "../../services/marvelAPI";
import Axios from "axios";

const ComicCard = (props) => {
    const [details, setDetails] = useState();
    const [loading, setLoading] = useState(false);

    const {ref, inView} = useInView({
        triggerOnce: true,
        rootMargin: '200px 0px'
    })

    /**
     * Charge les cover des comics seulement si les comics apparaissent à l'écran
     */
    useEffect(() => {
        if(inView && !details){
            const fetchDetails = async () => {
                setLoading(true);
                try{
                    const cache = localStorage.getItem(`issue_${props.id}`)
                    if(cache){
                        setDetails(JSON.parse(cache))
                    }else{
                        const response = await Axios.get(`${ISSUES_API}/${props.id}`)
                        setDetails(response.data)
                        localStorage.setItem(`issue_${props.id}`, JSON.stringify(response.data))
                    }
                }catch(error)
                {
                    console.error("Une erreur est survenue au niveau de l'API", error)
                }finally{
                    setLoading(false)
                }
            }
            fetchDetails();
        }
    },[inView, details, props.id])

    return ( 
        <div ref={ref} className="card" >
            {details?.cover.path ? (
                <div className="coverCard">
                    <img src={details.cover.path +"." + details.cover.extension} alt={"couverture de" + props.title} />
                </div>
            ) : (
                <div className="loading">{loading ? "Loading..." : "Waiting..."}</div>
            )}
            <h4 className="cardTitle">{props.title}</h4>
        </div>
     );
}
 
export default ComicCard;