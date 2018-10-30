
//reducer (纯函数) 
var titlereducer = (prevState="卖座电影1",action={})=>{
	console.log("reducer--",action);
	//prevstate 得到的老状态，
	//action {type:"changetitle",payload:"铁血战士"}
	var type=action.type;

	switch(type){
		case "changetitle":
			return action.payload
		default:
			return prevState
	}
	return prevState;
	// store.title=action.pa
}
//store 卖座电影=>铁血战士=maizuo =>=>
export default titlereducer;