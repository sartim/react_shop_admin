import {productConstants} from '../_constants';
import {productService} from '../_services';

export const productActions = {
    getProducts
};

function getProducts() {
    return dispatch => {
        dispatch(request());

        productService.getProducts()
            .then(
                products => dispatch(success(products)),
                error => dispatch(failure(error.toString()))
            );
    };

    function request() { return { type: productConstants.GETALL_REQUEST } }
    function success(products) { return { type: productConstants.GETALL_SUCCESS, products } }
    function failure(error) { return { type: productConstants.GETALL_FAILURE, error } }
}
