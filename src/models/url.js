import axios from "axios"
import { redirect } from "react-router-dom";

export const FetchURL = async (id) => {
    const api = process.env.REACT_APP_API + "/api/geturl"
    let response = await axios.post(api, { id: id })
    if (response.data) {
        if (response.data.status) {
            window.location.href = '/'
        }
        if (response.data.url) {
            window.location.href = response.data.url
        }
    }
}

export const PostURL = async (url, setUrl, uri) => {
    const api = process.env.REACT_APP_API + "/api/newurl"
    let response = await axios.post(api, { url: url })
    await setUrl(prev => response.data)
    uri.value = 'https://' + window.location.host + "/" + response.data.id
    document.getElementById('newUrl').classList.add("d-none");
    document.getElementById('urlResult').classList.remove("d-none");
}