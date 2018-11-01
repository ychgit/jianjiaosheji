import React,{Component} from "react"
import {connect} from "react-redux"
import action from "./action.js"
import axios from "axios"
import "./index.scss"
class Items extends Component {
	constructor(props){
		super(props);
		this.state={
			attrlist:null,
			detilist:null
		}
	}
	render(){
		return <div id="item">
			{this.state.attrlist&&this.state.detilist? 
				<div>
				<ul>
					{
						this.state.detilist.map((item,index)=>
							<li key={index}><img src={item.content} alt=""/></li>
							)
					}
				</ul>
				<ul>
					{
						this.state.attrlist.map((item,index)=>
							<li key={index}>{item.attributeName}   {item.attributeValueText}</li>
						)
					}
				</ul>
				</div>
				:null}
		</div>
	}
	componentDidMount(){
		this.props.changeHeaderTitle("商品详情")
		axios.get("/itemdetail/skuInfos/16388?_=1541037972963").then((res)=>{
			console.log(res.data)
			this.setState({
				attrlist:res.data.data.skuAttrPairs
			})
			
		})
		axios.get("/itemdetail/spuInfos/10471?_=1541037972966").then((res)=>{
			console.log(res.data)
			this.setState({
				detilist:res.data.data.itemDetailIntroVoList
			})
			
		})

	}
}

export default connect(
null,
action
	)(Items)