import { useEffect, useState } from "react";
import marvelAPI from "../../services/marvelAPI";
import "./AllComics.scss";
import Pagination from "../../components/Pagination/Pagination";
import ComicCard from "../../components/ComicCard/ComicCard";
import { NavLink } from "react-router-dom";
import Filter from "../../components/Filter/Filter";

const AllComics = () => {
    const [issues, setIssues] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [search, setSearch] = useState("");
    const itemsPerPage = 15;

    const fetchIssues = async () => {
        try {
            const datas = await marvelAPI.findAll()
            setIssues(datas.data.items)
        } catch (error) {
            console.error("Une erreur est survenue au niveau de l'API", error)
        }
    }

    const handlePageChange = (page) => {
        setCurrentPage(page)
    }

    useEffect(() => {
        fetchIssues()
    },[])

    const handleSearch = (event) => {
        const value = event.currentTarget.value;
        setSearch(value)
        setCurrentPage(1)
    }

    const filteredIssues = issues.filter(i =>
        i.title.toLowerCase().includes(search.toLowerCase())
    )

    const paginatedIssues = Pagination.getData(filteredIssues, currentPage, itemsPerPage)

    return ( 
        <>
            <div className="page">
                <h1>Liste des Comics</h1>
                <Filter 
                    search={search}
                    handleSearch={handleSearch}
                />
                <div className="grid">
                    {paginatedIssues.map(issue => (
                        <NavLink to={`/comics/${issue.id}`} key={issue.id}>
                            <ComicCard className="grid-item" id={issue.id} title={issue.title} />
                        </NavLink>
                    ))}
                </div>
                <Pagination 
                    currentPage = {currentPage}
                    itemsPerPage = {itemsPerPage}
                    length = {filteredIssues.length}
                    onPageChanged={handlePageChange}
                />
            </div>
        </>
     );
}
 
export default AllComics;