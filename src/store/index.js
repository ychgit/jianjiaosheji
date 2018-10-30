import {createStore,combineReducers} from "redux" ;
import titlereducer from "./reducers/titleReducer";
import listreducer from "./reducers/listReducer";

import {applyMiddleware,compose } from "redux";

import reduxchunk from "redux-thunk";
import reduxpromise from "redux-promise";

var reducer = combineReducers({
	kerwintitle:titlereducer,
	kerwinlist:listreducer
})

 const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
 const store = createStore(reducer, /* preloadedState, */ composeEnhancers(
    applyMiddleware(reduxchunk,reduxpromise)
  ));



export default store;