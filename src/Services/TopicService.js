import CustomAxios from "./CustomAxios";
const baseUrl = "http://localhost:8080";

//poll list
const query = (params) => {
    return CustomAxios.postReq(baseUrl + "/v1/topic/list", params)
}
//poll by id
//TODO
const create = (params) => {
    return CustomAxios.postReq(baseUrl + "/v1/topic/", params)
}

const update = (params) => {
    return CustomAxios.postReq(baseUrl + "/v1/topic/update", params)
}

export default { query, create, update }