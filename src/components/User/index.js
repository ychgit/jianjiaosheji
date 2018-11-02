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

				{this.state.subshow?<div>
					<div><input type="text" placeholder="请输入手机号" ref="phonenum" /></div>
					<div><input type="text" placeholder="请输入验证码"/><button onClick={this.sendnum.bind(this)}>获取验证码</button></div>
				</div>:null}

				{this.state.messhoe?<div>
					<div><input type="text" placeholder="请输入手机号" ref="phonenum"/></div>
					<div><input type="text" placeholder="请输入密码"/><button>忘记密码?</button></div>
				
				</div>:null}
				{/*<div className={this.state.subshow?'':"hide"}>
									<div><input type="text" placeholder="请输入手机号" ref="phonenum" /></div>
									<div><input type="text" placeholder="请输入验证码"/><button onClick={this.sendnum.bind(this)}>获取验证码</button></div>
								</div>
								<div className={this.state.messhoe?'':"hide"}>
									<div><input type="text" placeholder="请输入手机号"/></div>
									<div><input type="text" placeholder="请输入密码"/><button>忘记密码?</button></div>
				
								</div>*/}
				
			</div>
			<div className="sub">
				<button onClick={this.touchblur.bind(this)}>确认</button>
			</div>
			<p onClick={this.loadreg.bind(this)}>快速注册</p>

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
	sendnum(){
		alert("验证码已发送")
	}
	touchblur(){
		var regex = /^((\+)?86|((\+)?86)?)0?1[3458]\d{9}$/; 

		if (this.refs.phonenum.value) {

	        if (regex.test(this.refs.phonenum.value)) { 
	        	alert("请输正确的验证码！")
	        } else { 
	          alert('请输入人类的手机号码！');
	        }
	    } else {

	        alert('请输入手机号码')
	    }
	}
}
export default User;