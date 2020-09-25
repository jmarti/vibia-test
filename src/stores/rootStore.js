import { createStore, applyMiddleware } from "redux";
import { createLogger } from "redux-logger";
import thunk from "redux-thunk";

import rootReducer from "reducers/rootReducer";


export default createStore(
    rootReducer,
    applyMiddleware(
        ...[
            thunk,
            process.env.NODE_ENV === 'development' ? createLogger() : null
        ].filter(m => m)
    )
);