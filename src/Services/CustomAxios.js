import axios from "axios";

const postReq = (url, params) => {
    return axios.post(url, params)
        .then(res => {
            return res
        })
        .catch(err => {
            return err
        })
}

export default {postReq}