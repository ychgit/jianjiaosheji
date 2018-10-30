import React,{Component} from "react";
import axios from "axios";
import "./index.scss"
class Register extends Component{
	render(){
		return <div id="reg">
			<nav><a></a><div>注册</div><a onClick={this.loadlog.bind(this)}>登录</a></nav>
			<div>
				<div><input type="text" placeholder="请输入手机号"/></div>
				<div><input type="text" placeholder="请输入图形验证码"/></div>
			</div>
			<div><button>注册</button></div>
		</div>
	}
	loadlog(){
		this.props.history.push("/user")
	}
	
}
export default Register;
