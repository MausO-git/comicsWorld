import Axios from "axios"

export const API_URL = "https://marvel.emreparker.com"
export const ISSUES_API = `${API_URL}/v1/issues`

/**
 * requête à l'API pour trouver tout les comics
 * @returns
 */
function findAllIssues(){
    return Axios.get(`${ISSUES_API}`)
}

/**
 * requête à l'API pour trouver un comics selon son id
 * @returns
 */
function findIssue(id){
    return Axios.get(`${ISSUES_API}/${id}`)
}

/**
 * requête à l'API pour trouver les trois derniers comics ajoutés
 * @returns
 */
function demoHome(){
    return Axios.get(`${ISSUES_API}?limit=3`)
}


export default {
    findAll: findAllIssues,
    findIssue: findIssue,
    demoHome: demoHome
}