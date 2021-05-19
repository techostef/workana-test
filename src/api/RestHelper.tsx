import axios from 'axios';

class RestHelper {
    // params for get method
    // data for other than get method
    static callApi = async (payload: any = {
        data: null, 
        method: null, 
        params: null,
        route: null, 
        serviceUrl: null, 
    }) => {
        const {
            data, 
            method,
            params, 
            route, 
            serviceUrl, 
        } = payload;
        const url = serviceUrl + route
        let response = null
        await axios({
            method: method,
            url: url,
            data: data,
            params: params,
        })
        .then((data) => {
            // data.headers.xPagination = data.headers['x-pagination'] ? JSON.parse(data.headers['x-pagination']) : null;
            response = data
        })
        .catch((error) => error.response ? response = error.response : response = error)
        return response;

    }
}

export default RestHelper;
