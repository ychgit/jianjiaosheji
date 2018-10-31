import React,{Component} from "react";
import axios from "axios";
import {connect} from "react-redux"
import action from "./action";
class Index extends Component{
	render(){
		return <div>
			Index测试

		</div>
	}
	componentDidMount(){
		this.props.changeHeaderTitle("首页")
	}
}
export default connect(
	null,
	action
	)(Index);
