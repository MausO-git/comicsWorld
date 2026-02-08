import { useEffect, useState } from "react";
import "./Pagination.scss";

const Pagination = (props) => {

    const pageCount = Math.ceil(props.length / props.itemsPerPage);
    const [inputPage, setInputPage] = useState(props.currentPage);

    useEffect(() => {
        setInputPage(props.currentPage);
    }, [props.currentPage])

    /**
     * Prépare la valeur de la page pour le changement de page à venir
     * @param {*} event 
     */
    const handleInputChange = (event) => {
        const value = event.target.value;
        if(value === '' || /^[0-9\b]+$/.test(value))
        {
            setInputPage(value);
        }
    }

    /**
     * Change la page lorsque le form est validé
     */
    const handleInputSubmit = () => {
        let page = parseInt(inputPage);
            //sécurité
            if (page>pageCount) page=pageCount;
            if (page<1 || isNaN(page)) page=1;

            props.onPageChanged(page)
    }

    /**
     * Valide le form de changement de page lorsqu'on presse enter
     * @param {*} event 
     */
    const handleInputSubmitKey = (event) => {
        if(event.key === 'Enter')
        {
            handleInputSubmit()
        }
    }

    return ( 
        <div className="pagination-container">
            <ul className="pagination">
                <li className={"page-item" + (props.currentPage === 1 ? " disabled" : "")}>
                    <button className="page-button" onClick={() => props.onPageChanged(props.currentPage - 1)}>
                        &laquo;
                    </button>
                </li>
                <li className="page-input-wrapper">
                    <span>Page</span>
                    <input
                        type="text"
                        value={inputPage}
                        onChange={handleInputChange}
                        onKeyDown={handleInputSubmitKey}
                        onBlur={handleInputSubmit}
                        className="pagination-input"
                    />
                    <span>sur {pageCount}</span>
                </li>
                <li className={"page-item" + (props.currentPage === pageCount ? " disabled" : "")}>
                    <button className="page-button" onClick={() => props.onPageChanged(props.currentPage + 1)}>
                        &raquo;
                    </button>
                </li>
            </ul>
        </div>
     );
}

Pagination.getData = (items, currentPage, itemsPerPage) => {
    const start = currentPage * itemsPerPage - itemsPerPage
    //                      3         *     10       -  10      =   20
    //     array.slice(start, end)
    //      items.slice(20, (20+10)=30)
    return items.slice(start, start + itemsPerPage)

}
 
export default Pagination;