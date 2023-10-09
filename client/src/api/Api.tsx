import axios from "axios";

export function Api() {
    return axios.create({
        baseURL: 'http://localhost:4000',
        headers: {
            Authorization: 'Bearer ' + JSON.parse(`${localStorage.getItem('token')}`)
        }
    });
}
