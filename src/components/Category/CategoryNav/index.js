import React,{Component} from "react";
import  {NavLink } from "react-router-dom";
import "./index.scss"
class CategoryNav extends Component{
	render(){
		return <div className="CategoryNavDiv">
			<ul>
		        <li><NavLink to="/category/pinlei" activeClassName="active">品类</NavLink></li>
		        <li><NavLink to="/category/pinpai" activeClassName="active">品牌</NavLink></li>
		        <li><NavLink to="/category/shejishi" activeClassName="active">设计师</NavLink></li>
        	</ul>

		</div>
	}
}
export default CategoryNav;