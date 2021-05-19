import UrlApiEnums from '../../enums/UrlApiEnum'
import DefaultAdminApi from "../DefaultAdminApi"

const getDataAll = async () => {
    const url = UrlApiEnums.EMPLOYES
    const result: any= await DefaultAdminApi.getDataAll({url: url});
    return result;
}

const getDataById = async (payload = {id: 0, data: null, params: null}) => {
    const url = `${UrlApiEnums.EMPLOYES}/${payload.id}`
    return await DefaultAdminApi.getDataById({url: url, payload})
}

const deleteById = async (payload = { id: 0}) => {
    const url = `${UrlApiEnums.EMPLOYES}/${payload.id}`
    return await DefaultAdminApi.deleteItems({url: url})
}

const patchItem = async (payload = {id: 0, data: null, params: null}) => {
    const url = `${UrlApiEnums.EMPLOYES}/${payload.id}`
    return await DefaultAdminApi.patchItem({url: url, payload})
}

const postItem = async (payload: any = {id: 0, data: null, params: null}) => {
    const url = `${UrlApiEnums.EMPLOYES}`
    const result: any = await DefaultAdminApi.postItem({url: url, payload})
    return result;
}

const putItem = async (payload = {id: 0, data: null, params: null}) => {
    const url = `${UrlApiEnums.EMPLOYES}/${payload.id}`
    return await DefaultAdminApi.putItem({url: url, payload})
}

const EmployesApi = {
    deleteById,
    getDataAll,
    getDataById,
    patchItem,
    postItem,
    putItem,
}

export default EmployesApi
