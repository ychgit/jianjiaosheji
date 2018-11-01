import React,{Component} from "react";
import "./index.scss"
import {connect} from "react-redux";//
class Header extends Component{
	render(){
		return <div className="HeaderDiv">
			<p><img src="/home.png" alt="" onClick={this.loadind.bind(this)}/></p><div>{this.props.title}</div><img src="/search.png" alt="" onClick={this.loadserch.bind(this)}/>

		</div>
	}
	loadserch(){

		window.location.href="/search"
		
	}
	loadind(){
		window.location.href="/index"
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