import {locationConstants} from "../_constants";
import {locationService} from "../_services";

export const locationActions = {
    getLocations
};

function getLocations() {
    return dispatch => {
        dispatch(request());

        locationService.getLocations()
            .then(
                locations => {
                    dispatch(success(locations));
                },
                error => dispatch(failure(error.toString()))
            )
    };

    function request() { return { type: locationConstants.LOCATIONS_REQUEST } }
    function success(locations) { return { type: locationConstants.LOCATIONS_SUCCESS, locations }}
    function failure(error) { return { type: locationConstants.LOCATIONS_FAILURE, error }}
}
