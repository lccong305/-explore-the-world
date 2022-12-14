import { applyMiddleware, createStore } from "redux";

import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import rootReducer from "./Reducers";

const middleware = [thunk];
const Store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(...middleware))
)

export default Store;