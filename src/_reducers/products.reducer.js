import {productConstants} from '../_constants';

export function products(state = {}, action) {
  switch (action.type) {
    case productConstants.GETALL_REQUEST:
      return {
        loading: true
      };
    case productConstants.GETALL_SUCCESS:
      return {
        items: action.products
      };
    case productConstants.GETALL_FAILURE:
      return {
        error: action.error
      };
    case productConstants.DELETE_REQUEST:
      return {
        ...state,
        items: state.items.map(product =>
          product.id === action.id
            ? { ...product, deleting: true }
            : product
        )
      };
    case productConstants.DELETE_SUCCESS:
      return {
        items: state.items.filter(product => product.id !== action.id)
      };
    case productConstants.DELETE_FAILURE:
      return {
        ...state,
        items: state.items.map(product => {
          if (product.id === action.id) {
            const { deleting, ...productCopy } = product;
            return { ...productCopy, deleteError: action.error };
          }

          return product;
        })
      };
    default:
      return state
  }
}

export function product(state = {}, action) {
  switch (action.type) {
    case productConstants.PRODUCT_REQUEST:
      return {};
    case productConstants.PRODUCT_SUCCESS:
      return action.product;
    case productConstants.PRODUCT_FAILURE:
      return {};
    default:
      return state
  }
}
