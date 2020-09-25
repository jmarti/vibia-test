import { LIST_STARTPOINTS_REQUEST, LIST_STARTPOINTS_FAILURE, LIST_STARTPOINTS_SUCCESS } from "actions/actionTypes";


const initialState = {
    formSteps: [
        { title: "Electrical connection" },
        { title: "Add your sticks" },
        { title: "Personalize" }
    ],
    startPoints: []
};

export default function (state = initialState, action) {
    switch (action.type) {
        
        case LIST_STARTPOINTS_SUCCESS:
            return {
                ...state,
                startPoints: action.startPoints
            };

        case LIST_STARTPOINTS_FAILURE:
        case LIST_STARTPOINTS_REQUEST:
        default:
            return state;
    }
}