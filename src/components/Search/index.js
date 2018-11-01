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
	componentDidMount(){
		var self = document.querySelector(".FooterDiv");
		// 拿到父节点:
		var parent = self.parentElement;
		// 删除:
		var removed = parent.removeChild(self);
	
	}
}
export default Search
