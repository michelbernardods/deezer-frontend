import axios from 'axios';

export const http = axios.create({
    baseURL: 'http://localhost:8081/search/' // Deezer API configuration
})