import React,{Component} from "react";
import "./index.scss"
class Search extends Component{
	render(){
		return <div id="sec">
			<nav>
				<div className="left"><img src="/search.png" alt=""/><input type="text"/></div>
				<img src="/home.png" alt="" className="right" onClick={this.loadind.bind(this)}/>
			</nav>
		</div>
	}
	loadind(){
		this.props.history.push("/index")
	}
}
export default Search