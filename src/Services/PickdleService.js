import CustomAxios from "./CustomAxios";
const baseUrl = "http://localhost:8080";

//pickdle list
const pickdleList = (params)=>{
    return CustomAxios.postReq(baseUrl+"/v1/pickdle/findByFilter", params)
}
//pickdle guess
const guess = (params)=>{
    return CustomAxios.postReq(baseUrl+"/v1/pickdle/guess", params)
}
//pickdle by id
//TODO
const byId = (params)=>{
    return CustomAxios.postReq(baseUrl+"/v1/pickdle/findByFilter", params)
}

export default {pickdleList, guess, byId}