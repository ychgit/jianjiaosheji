import {createStore,combineReducers} from "redux" ;
import titlereducer from "./reducers/titleReducer";


var reducer = combineReducers({
	kerwintitle:titlereducer
})

 const store = createStore(reducer)
  



export default store;