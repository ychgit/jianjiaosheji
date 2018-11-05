import React,{Component} from "react";
import "./index.scss"
class Search extends Component{
	constructor(props){
		super(props);
		this.state={
			listhot:['尖叫设计', '暖手宝', '沙发', '杯子','餐具', '茶具', '吊灯', '厨房','儿童', 'HAY', 'Arabia', '家饰','收纳', '床上用品', '旅行'],
			listsrh:[]
		}
	}
	render(){
		return <div id="sec">
			<nav>
				<div className="left"><img src="/search.png" alt="" onClick={this.addsrh.bind(this)}/><input type="text" ref="srhdet"/></div>
				<img src="/home.png" alt="" className="right" onClick={this.loadind.bind(this)}/>
			</nav>
			<div>
				<p>热门搜索</p>
				<div>
					{
						this.state.listhot.map(item=>
							<span key={item} onClick={this.addinput.bind(this,item)}>{item}</span>
						)
					}
				</div>
			</div>
			<div>
				{
					this.state.listsrh.map(val=>
						<span key={val}>{val}</span>
						)
				}
			</div>
		</div>
	}
	addsrh(){
		if(this.refs.srhdet.value===""){
			return
		}
		this.setState({
			listsrh:[...this.state.listsrh,this.refs.srhdet.value]
		},()=>{
			this.refs.srhdet.value=""
		})

	}
	addinput(item){
			console.log(item)
			this.refs.srhdet.value=item
	}
	loadind(){
		this.props.history.push("/index")
	}
	// componentDidMount(){
	// 	var self = document.querySelector(".FooterDiv");
	// 	// 拿到父节点:
	// 	var parent = self.parentElement;
	// 	// 删除:
	// 	var removed = parent.removeChild(self);
	
	// }
}
export default Search
