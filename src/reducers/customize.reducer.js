import { LIST_STARTPOINTS_REQUEST, LIST_STARTPOINTS_FAILURE, LIST_STARTPOINTS_SUCCESS } from "actions/actionTypes";


const initialState = null;

export default function (state = initialState, action) {
    switch (action.type) {
        case LIST_STARTPOINTS_REQUEST:
            return {};
        case LIST_STARTPOINTS_SUCCESS:
            return {
                startPoints: action.startPoints
            };
        case LIST_STARTPOINTS_FAILURE:
            return {};
        default:
            return state;
    }
}