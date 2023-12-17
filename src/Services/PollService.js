import CustomAxios from "./CustomAxios";
const baseUrl = "http://localhost:8080";

//poll list
const pollList = (params)=>{
    return CustomAxios.postReq(baseUrl+"/v1/pickroll/list", params)
}
//poll by id
//TODO
const pollById = (params)=>{
    return CustomAxios.postReq(baseUrl+"/v1/pickroll/findByFilter", params)
}
//poll results
const pollResults = (params)=>{
    return CustomAxios.postReq(baseUrl+"/v1/pickroll/result", params)
}
//poll items
//TODO
const pollItems = (params)=>{
    return CustomAxios.postReq(baseUrl+"/v1/pickroll/findByFilter", params)
}
//poll item detail
//TODO
const pollItemDetail = (params)=>{
    return CustomAxios.postReq(baseUrl+"/v1/pickroll/findByFilter", params)
}
//match
const match = (params)=>{
    return CustomAxios.postReq(baseUrl+"/v1/pickroll/match", params)
}
//vote
const vote = (params)=>{
    return CustomAxios.postReq(baseUrl+"/v1/pickroll/vote", params)
}

export default {pollById, pollList, pollResults, pollItems, pollItemDetail, match, vote}