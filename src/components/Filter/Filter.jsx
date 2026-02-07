import "./Filter.scss"

const Filter = (props) => {
    return ( 
        <>
            <div className="filter">
                <input type="text" className="filter-form" placeholder="Recherche..." value={props.search} onChange={props.handleSearch} />
            </div>
        </>
     );
}
 
export default Filter;