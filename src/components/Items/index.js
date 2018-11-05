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
			detilist:null,
			skuilist:null
		}
	}
	render(){
		return <div id="item">

			{this.state.attrlist&&this.state.detilist&&this.state.skuilist? 
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
								<li key={index}>{item.attributeName}{item.attributeValueText}</li>
								)
						}
					</ul>
					<ul className="half">
						{
							this.state.skuilist.map((item,index)=>
								<li key={index} onClick={this.loaditem.bind(this,item.productId,item.parentProductId)}><img src={item.productImg} alt=""/><p>{item.productTitle}</p><span>{item.sellPrice}</span> <span>{item.originalPrice}</span></li>
								)
						}
					</ul>

				</div>
				:null}
		</div>
	}
	loaditem(productId,parentProductId){
		console.log('111')
		console.log(productId,parentProductId)
		window.location.href="/items/"+productId+"/"+parentProductId
	}
	
	componentDidMount(){
		this.props.changeHeaderTitle("商品详情")
		axios.get(`/itemdetail/skuInfos/${this.props.match.params.productId}?_=1541037972963`).then((res)=>{
			console.log(res.data)
			this.setState({
				attrlist:res.data.data.skuAttrPairs
			})
		})
		axios.get(`/itemdetail/spuInfos/${this.props.match.params.parentProductId}?_=1541140501634`).then((res)=>{
			console.log(res.data)
			this.setState({
				detilist:res.data.data.itemDetailIntroVoList
			})	
		})
		axios.get(`/recommend/item?skuId=${this.props.match.params.productId}&_=1541213957212`).then((res)=>{
			console.log(res.data)
			this.setState({
				skuilist:res.data.data.skuInLists
			})	
		})
		
	
	}
}

export default connect(
null,
action
	)(Items)