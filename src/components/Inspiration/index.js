import React,{Component} from "react";
import Decorate from "./decorate";
import Activity from "./activity";
import "./index.scss";

class Inspiration extends Component{
	constructor(props){
		super(props);
		this.state={
			isShow:false,
			changeShow:true
		}
	}
	render(){
		return <div>
			
			<ul>
				<li className={this.state.isShow?"change":""} onClick={this.decorateClick.bind(this)}>家居</li>
				<li className={this.state.changeShow?"change":""} onClick={this.activityClick.bind(this)}>活动</li>
			</ul>

			<div className={this.state.isShow?"":"hide"}>
				<Decorate {...this.props}/>
			</div>

			<div  className={this.state.changeShow?"":"hide"}>
				<Activity {...this.props}/>
			</div>
		</div>
	}
	decorateClick(){
		this.setState({
			isShow:true,
			changeShow:false
		})
	}
	activityClick(){
		this.setState({
			isShow:false,
			changeShow:true
		})
	}
}
export default Inspiration;

