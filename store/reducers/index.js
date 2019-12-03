import { Provider } from "react-redux";

import { createStore, combineReducers } from "redux";
import mainReducer from "./reducers/mainReducer";

//STEP 3
const rootReducer = combineReducers({
  mainReducer: mainReducer
});

export default store = createStore(rootReducer);
