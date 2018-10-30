var listreducer = (prevState=[],action={})=>{
	//prevstate 得到的老状态，
	//action {type:"changelist",payload:[1,2,3,4,5,6]}
	var type=action.type;

	switch(type){
		case "changelist":
			return [...prevState,...action.payload]
		default:
			return prevState
	}
	return prevState;
	// store.title=action.pa
}


export default listreducer;