import React,{Component} from "react";
import {connect} from "react-redux"
import action from "./action";
class Inspiration extends Component{
	render(){
		return <div>
			Inspiration

		</div>
	}
	componentDidMount(){
		this.props.changeHeaderTitle("灵感")
	}
}
export default connect(
	null,
	action
	)(Inspiration);



