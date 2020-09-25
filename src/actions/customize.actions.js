import { LIST_STARTPOINTS_REQUEST, LIST_STARTPOINTS_SUCCESS, LIST_STARTPOINTS_FAILURE } from 'actions/actionTypes';
import stickService from 'services/sr-products/sticks.service';

export const customizeActions = {
    listStartPoints
};

function listStartPoints() {
    return dispatch => {
        dispatch(request());

        stickService.getStartPoints()
            .then(
                startPoints => {
                    dispatch(success(startPoints));
                },
                error => {
                    dispatch(failure(error));
                }
            )
    }

    function request() { return { type: LIST_STARTPOINTS_REQUEST } }
    function success(startPoints) { return { type: LIST_STARTPOINTS_SUCCESS, startPoints } }
    function failure(error) { return { type: LIST_STARTPOINTS_FAILURE, error } }
}