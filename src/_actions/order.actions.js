import { orderConstants } from '../_constants';
import { orderService } from '../_services';

export const orderActions = {
    getAll,
    getById,
    delete: _delete
};

function getOrders() {
  return dispatch => {
    dispatch(request());
    orderService.getAll()
      .then(
        order => dispatch(success(order)),
        error => dispatch(failure(error.toString()))
      );
  };
  function request() { return { type: orderConstants.GETALL_REQUEST } }
  function success(order) { return { type: orderConstants.GETALL_SUCCESS, order } }
  function failure(error) { return { type: orderConstants.GETALL_FAILURE, error } }
}

function getById(id) {
    return dispatch => {
        dispatch(request(id));
        orderService.getById(id)
            .then(
                order => {
                    dispatch(success(order));
                },
                error => dispatch(failure(error.toString()))
            )
    };
    function request() { return { type: orderConstants.GET_ALL_REQUEST } }
    function success(order) { return { type: orderConstants.GET_ALL_SUCCESS, order }}
    function failure(error) { return { type: orderConstants.GET_ALL_FAILURE, error }}
}

function _delete(id) {
    return dispatch => {
        dispatch(request(id));
        orderService.delete(id)
            .then(
                order => dispatch(success(id)),
                error => dispatch(failure(id, error.toString()))
            );
    };
    function request(id) { return { type: orderConstants.DELETE_REQUEST, id } }
    function success(id) { return { type: orderConstants.DELETE_SUCCESS, id } }
    function failure(id, error) { return { type: orderConstants.DELETE_FAILURE, id, error } }
}
