import axios from 'axios'
//
const baseDomain = "http://rotaract3220.test"
const baseURL = `${baseDomain}/api/`
const storage = window.localStorage
export default axios.create({
	baseURL,
	headers: {
		"Access-Control-Allow-Origin": "*",
	}
})