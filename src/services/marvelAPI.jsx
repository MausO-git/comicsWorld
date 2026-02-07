import Axios from "axios"

export const API_URL = "https://marvel.emreparker.com"
export const ISSUES_API = `${API_URL}/v1/issues`

function findAllIssues(){
    return Axios.get(`${ISSUES_API}`)
}

function findIssue(id){
    return Axios.get(`${ISSUES_API}/${id}`)
}

function demoHome(){
    return Axios.get(`${ISSUES_API}?limit=3`)
}


export default {
    findAll: findAllIssues,
    findIssue: findIssue,
    demoHome: demoHome
}