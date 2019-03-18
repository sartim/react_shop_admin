import {searchConstants} from '../_constants';

export function search_results(state = {}, action) {
  switch (action.type) {
    case searchConstants.GETALL_RESULTS_REQUEST:
      return {
        loading: true
      };
    case searchConstants.GETALL_RESULTS_SUCCESS:
      return {
        items: action.search_results
      };
    case searchConstants.GETALL_RESULTS_FAILURE:
      return {
        error: action.error
      };
    default:
      return state
  }
}
