import React,{Component} from "react";
import "./index.scss"
import {connect} from "react-redux";//
class Header extends Component{
	render(){
		return <div className="HeaderDiv">
			<p></p><div>{this.props.title}</div><img src="/search.png" alt="" onClick={this.loadserch.bind(this)}/>

		</div>
	}
	loadserch(){

		window.location.href="/search"
		
	}
}
export default connect(
	(state)=>{
		return {
			title:state.kerwintitle
		}
	},
	null
	)(Header);