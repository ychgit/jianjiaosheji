import React,{Component} from "react";
import  {NavLink } from "react-router-dom";
import "./index.scss"
class Footer extends Component{
	render(){
		return <div className="FooterDiv">
			<ul>
		        <li><NavLink to="/index" activeClassName="active">首页</NavLink></li>
		        <li><NavLink to="/category" activeClassName="active">分类</NavLink></li>
		        <li><NavLink to="/inspiration" activeClassName="active">灵感</NavLink></li>
		        <li><NavLink to="/brand" activeClassName="active">品牌</NavLink></li>
		        <li><NavLink to="/user" activeClassName="active">我</NavLink></li>
        	</ul>

		</div>
	}
}
export default Footer;