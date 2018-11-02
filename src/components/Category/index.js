import React,{Component} from "react";
import action from "./action.js"
import {connect} from "react-redux";
import CategoryNav from "./CategoryNav";
import store from "../../store";
import "./index.scss";
class Category extends Component{
	constructor(props){
		super(props);
		this.state = {
			title:"全部分类"
		}
	}
	render(){
		return <div className="CategoryDiv">
			<CategoryNav/>
			{
				this.props.children
			}

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