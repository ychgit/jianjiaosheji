import React,{Component} from "react";
import {connect} from "react-redux"
import action from "./action";
class Category extends Component{
	render(){
		return <div>
			Category

		</div>
	}
	componentDidMount(){
		this.props.changeHeaderTitle("分类")
	}
}
export default connect(
	null,
	action
	)(Category);

