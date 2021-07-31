import axios from 'axios'

const baseURL = 'https://rickandmortyapi.com/api'

const service = axios.create({
    baseURL,
    withCredentials: false
})

export const  GET_CHARACTERS = () => service.get('/character')
export const  GET_LOCATIONS = () => service.get('/location')
export const  GET_EPISODES = () => service.get('/episode')