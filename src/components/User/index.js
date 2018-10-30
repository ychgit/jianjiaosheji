import React,{Component} from "react";
import "./index.scss"
class User extends Component{
	constructor(props){
		super(props);
		this.state={
			subshow:false,
			messhoe:true
		}
	}
	render(){
		return <div id="user">
			<nav><a onClick={this.handleload.bind(this)}><img src={require('../../imgs/home-07.png')} alt="" /></a><div>登录</div><a onClick={this.loadreg.bind(this)}>注册</a></nav>
			<div className="log">
				<ul>
					<li className={this.state.subshow?'':"change"} onClick={this.handlesub.bind(this)}>密码登录</li>
					<li className={this.state.messhoe?'':"change"} onClick={this.handlemes.bind(this)}>短信登录</li>
				</ul>
				<div className={this.state.subshow?'':"hide"}>
					<div><input type="text" placeholder="请输入手机号"/></div>
					<div><input type="text" placeholder="请输入验证码"/><button>获取验证码</button></div>
				</div>
				<div className={this.state.messhoe?'':"hide"}>
					<div><input type="text" placeholder="请输入手机号"/></div>
					<div><input type="text" placeholder="请输入密码"/><button>忘记密码?</button></div>

				</div>
				
			</div>
			<div className="sub">
				<button>确认</button>
			</div>

		</div>
	}
	handlesub(){
		this.setState({
			subshow:false,
			messhoe:true
		},()=>{
			console.log(this.state)
		})
		console.log(this.state)
	}
	handlemes(){
		this.setState({
			subshow:true,
			messhoe:false
		},()=>{
			console.log(this.state)
		})
		console.log(this.state)
	}
	handleload(){
		this.props.history.push("/index")
	}
	loadreg(){
		this.props.history.push("/register")
	}
}
export default User;