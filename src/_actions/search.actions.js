import {searchService} from "../_services";
import {searchConstants} from "../_constants/search.constants";

export const searchActions = {
    getResults
};

function getResults(search_param) {
    return dispatch => {
        dispatch(request(search_param));

        searchService.getResults(search_param)
            .then(
                search_results => {
                    dispatch(success(search_results));
                },
                error => dispatch(failure(error.toString()))
            )
    };

    function request() { return { type: searchConstants.GETALL_RESULTS_REQUEST } }
    function success(search_results) { return { type: searchConstants.GETALL_RESULTS_SUCCESS, search_results }}
    function failure(error) { return { type: searchConstants.GETALL_RESULTS_FAILURE, error }}
}
