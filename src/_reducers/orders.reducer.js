import {orderConstants} from '../_constants';

export function order(state = {}, action) {
    switch (action.type) {
        case orderConstants.GET_REQUEST:
            return {};
        case orderConstants.GET_SUCCESS:
            return action.product;
        case orderConstants.GET_FAILURE:
            return {};
        case orderConstants.GETALL_REQUEST:
            return {loading: true};
        case orderConstants.GETALL_SUCCESS:
            return {items: action.products};
        case orderConstants.GETALL_FAILURE:
            return {error: action.error};
        case orderConstants.DELETE_REQUEST:
            return {
                ...state,
                items: state.items.map(order =>
                  order.id === action.id
                    ? { ...order, deleting: true }
                    : order
                )
              };
        case orderConstants.DELETE_SUCCESS:
            return {items: state.items.filter(order => order.id !== action.id)};
        case orderConstants.DELETE_FAILURE:
            return {
                ...state,
                items: state.items.map(order => {
                    if (order.id === action.id) {
                        const { deleting, ...orderCopy } = order;
                        return { ...orderCopy, deleteError: action.error };
                    }
                    return order;
                })
              };
        default:
            return state
  }
}
