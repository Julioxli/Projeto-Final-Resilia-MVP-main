import axios from 'axios'
export const API = axios.create({
    baseURL:"http://localhost:5000",
    
})
API.defaults.timeout = 2000
export const createUser = async (email,password)=> {
    return API.post('/users',{email,password})
}
export const deleteUser = async (userId) => {
    return API.delete(`/users/${userId}`)
}
export const createSession = async(email,password)=> {
    return API.post('/sessions',{email,password})
}
export const getRepositories = async(userId,query) => {
    let url = `/users/${userId}/repositories/`
    if(query !== ''){
        url += `?q=${query}`
    }
    //http://localhost:500/users/ID/repositories/?q=consulta
    return API.get(url)
}
export const CreateRepository = async (userId,repositoryUrl)=> {
    const repositoryName = getRepositoryName(repositoryUrl)
    const url = `/users/${userId}/repositories`
    return API.post(url,{name:repositoryName,url:repositoryUrl})
}
export const destroyRepository = async (userId,id)=> {
    const url = `/users/${userId}/repositories/${id}`
    return API.delete(url)
}
const getRepositoryName = (url)=> {
    // https://ihateregex.io/expr/url/
    const REGEX = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()!@:%_\+.~#?&\/\/=]*)/
    const match = url.match(REGEX)
    if(match[2]) {
        const values = match[2].split('/')
        return `${values[1]}/${values[2]}`
    }
}

