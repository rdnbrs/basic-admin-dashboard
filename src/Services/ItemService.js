import CustomAxios from "./CustomAxios";
const baseUrl = "http://localhost:8080";

//poll list
const query = (params) => {
    return CustomAxios.postReq(baseUrl + "/v1/item/list", params)
}
//poll by id
//TODO
const create = (params) => {
    return CustomAxios.postReq(baseUrl + "/v1/item/", params)
}

const update = (params) => {
    return CustomAxios.postReq(baseUrl + "/v1/item/update", params)
}

export default { query, create, update }