import axios from 'axios'
//
const baseDomain = "http://rotaract3220.org/rmis/v4/"
const baseURL = 'http://rotaract3220.org/rmis/v4/onerotaract/'

export default axios.create({
    baseURL,
    headers: {
        "Access-Control-Allow-Origin": "*",
    }
})