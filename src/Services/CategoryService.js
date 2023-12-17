import CustomAxios from "./CustomAxios";
const baseUrl = "http://localhost:8080";

const query = (params) => {
    return CustomAxios.postReq(baseUrl + "/v1/category/list", params)
}
const create = (params) => {
    return CustomAxios.postReq(baseUrl + "/v1/category/", params)
}

const update = (params) => {
    return CustomAxios.postReq(baseUrl + "/v1/category/update", params)
}

export default { query, create, update }