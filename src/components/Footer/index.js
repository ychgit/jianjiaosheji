import React,{Component} from "react";
import  {NavLink } from "react-router-dom";
import "./index.scss"
class Footer extends Component{
	render(){
		return <div className="FooterDiv">
			<ul>
		        <li><img src={require("../../imgs/home.png")} alt=""/><NavLink to="/index" activeClassName="active">首页</NavLink></li>
		        <li><img src={require("../../imgs/category.png")} alt=""/><NavLink to="/category" activeClassName="active">分类</NavLink></li>
		        <li><img src={require("../../imgs/buy.png")} alt=""/><NavLink to="/inspiration" activeClassName="active">灵感</NavLink></li>
		        <li><img src={require("../../imgs/message.png")} alt=""/><NavLink to="/brand" activeClassName="active">品牌</NavLink></li>
		        <li><img src={require("../../imgs/me.png")} alt=""/><NavLink to="/user" activeClassName="active">我</NavLink></li>
        	</ul>

		</div>
	}
}
export default Footer;