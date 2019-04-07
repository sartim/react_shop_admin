import config from 'config';
import { authHeader } from '../_helpers';
import {handleResponse} from "../_helpers/response-handler";

export const productService = {
    getProducts
};

function getProducts() {
    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    };
    return fetch(`${config.apiUrl}/product/`, requestOptions).then(handleResponse);
}
