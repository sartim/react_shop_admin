import config from 'config';
import {authHeader} from "../_helpers";
import {handleResponse} from "../_helpers/response-handler";

export const searchService = {
    getResults
};

function getResults(search_param) {
    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    };

    return fetch(`${config.apiUrl}/search/?q=`+search_param, requestOptions).then(handleResponse);
}
