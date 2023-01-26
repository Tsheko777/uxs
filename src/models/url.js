import axios from "axios"

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

export const PostURL = async (url, uri) => {
    const api = process.env.REACT_APP_API + "/api/newurl"
    let response = await axios.post(api, { url: url })
    uri.value = 'https://' + window.location.host + "/" + response.data.id
    document.getElementById('newUrl').classList.add("d-none");
    document.getElementById('urlResult').classList.remove("d-none");
}