import config from '../config'
import HttpMethodEnum from '../enums/HttpMethodEnum'
import RestHelper from './RestHelper'

const BASE_URL = `${config.SERVICE_URL}`

const getDataAll = async ({
    url = "", 
    payload = {
        data: null, 
        params: null, 
    }
}) => {
    payload = Object.assign({}, 
        {
            method: HttpMethodEnum.GET,
            serviceUrl: BASE_URL,
            route: url
        },
        payload
    )
    return await RestHelper.callApi(payload);
}

const getDataById = async ({
    url = "", 
    payload = {
        id: 0, 
        data: null, 
        params: null
    }
}) => {
    payload = Object.assign({}, 
        {
            method: HttpMethodEnum.GET,
            serviceUrl: BASE_URL,
            route: url
        },
        payload
    )
    const result = await RestHelper.callApi(payload)
    return result
}

const deleteItems = async ({
    url = "", 
}) => {
    const payload = Object.assign({}, 
        {
            method: HttpMethodEnum.DELETE,
            serviceUrl: BASE_URL,
            route: url
        }
    )
    const result = await RestHelper.callApi(payload)
    return result
}

const patchItem = async ({
    url = "", 
    payload = {
        id: 0, 
        data: null, 
        params: null,
    }
}) => {
    payload = Object.assign({}, 
        {
            method: HttpMethodEnum.PATCH,
            serviceUrl: BASE_URL,
            route: url
        },
        payload
    )
    const result = await RestHelper.callApi(payload)
    return result
}

const postItem = async ({
    url = "", 
    payload = {
        id: 0, 
        data: null, 
        params: null
    }
}) => {
    payload = Object.assign({}, 
        {
            method: HttpMethodEnum.POST,
            serviceUrl: BASE_URL,
            route: url
        },
        payload
    )
    const result = await RestHelper.callApi(payload)
    return result
}

const putItem = async ({
    url = "",
    payload = {
        id: 0, 
        data: null, 
        params: null,
    }
}) => {
    payload = Object.assign({}, 
        {
            method: HttpMethodEnum.PUT,
            serviceUrl: BASE_URL,
            route: url
        },
        payload
    )
    const result = await RestHelper.callApi(payload)
    return result
}

const DefaultAdminApi = {
    deleteItems,
    getDataAll,
    getDataById,
    patchItem,
    postItem,
    putItem,
}

export default DefaultAdminApi
