import React,{Component} from "react";

import {connect} from "react-redux"
import action from "./action";
import "./index.scss"
import Jiaju from "./Jiaju"
import Tuijian from "./Tuijian"
class Index extends Component{
	constructor(props){
		super(props);
		this.state={
			title:"tuijian"
		}
	}
	showtui(){
		this.setState({
			title:"tuijian"
		},()=>{
			console.log(this.state.title)
		})
	}
	showjia(){
		this.setState({
			title:"jiaju"
		},()=>{
			console.log(this.state.title)
		})
	}
	render(){
		return <div id="inx">
			<ul>
				<li className={this.state.title==="tuijian"?'change':""} onClick={this.showtui.bind(this)}>推荐</li>
				<li className={this.state.title==="jiaju"?'change':""} onClick={this.showjia.bind(this)}>家具</li>
			</ul>
			{
				this.title()	
			}

		</div>
	}
	componentDidMount(){
		this.props.changeHeaderTitle("首页")
	}
	title(){
		switch(this.state.title){
			case "jiaju":
				return <Jiaju {...this.props}/>
			case "tuijian":
				return <Tuijian {...this.props}/>
			default:
				return <Tuijian {...this.props}/>		
		}
	}
}
export default connect(
	null,
	action
	)(Index);
