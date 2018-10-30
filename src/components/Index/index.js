import React,{Component} from "react";
import axios from "axios";
class Index extends Component{
	render(){
		return <div>
			Index测试

		</div>
	}
	componentDidMount(){
		axios.get("/v2/page?pageId=1&tabId=1&_=1540859487948").then(res=>{
			console.log(res);
		})
	}
}
export default Index;
