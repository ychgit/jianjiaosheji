import React,{Component} from "react";
import ReactSwipe from 'react-swipe';
import "./index.scss";
import axios from "axios";
class Activity extends Component{
	constructor(props){
		super(props);
		this.state={
			lunbolist:null,
			banner1List:[],
			banner2List:[],
			banner3List:[],
			banner4List:[],
			banner5List:[],
			complexList:[]
		}
	}
	componentDidMount(){
		axios.get("/v2/page?pageId=1&tabId=10010&_=1541058878284").then((res)=>{
			console.log(res.data);
			this.setState({
				lunbolist: res.data.data.modules[0].moduleContent.banners,
				banner1List: res.data.data.modules[1].moduleContent.bannerImgSrc,
				banner2List: res.data.data.modules[2].moduleContent.bannerImgSrc,
				banner3List: res.data.data.modules[3].moduleContent.bannerImgSrc,
				banner4List: res.data.data.modules[4].moduleContent.bannerImgSrc,
				banner5List: res.data.data.modules[5].moduleContent.bannerImgSrc,
				complexList: res.data.data.modules[6].moduleContent.products
			})
			console.log('llll',this.state)
		})
		
	}
	render(){
		return <div>
		
		{
			this.state.lunbolist?<ReactSwipe className="carousel" swipeOptions={{continuous: true,auto: 2000}}>
						{
							this.state.lunbolist.map(val=>
								<div className="lunbo">
									<img src={val.bannerImgSrc}/>
								</div>
								)
						}
					</ReactSwipe>
				:null
				}
			<div className="banner_img">		 	 
				<img src={this.state.banner1List}/>			
			</div>
			<div className="banner_img">		 	 
				<img src={this.state.banner2List}/>			
			</div>
			<div className="banner_img">		 	 
				<img src={this.state.banner3List}/>			
			</div>
			<div className="banner_img">		 	 
				<img src={this.state.banner4List}/>			
			</div>
			<div className="banner_img">		 	 
				<img src={this.state.banner5List}/>			
			</div>
			<div className="rqtitle">
			<h3>人气单品</h3>
			</div>
			<div className="complex">
			{
				this.state.complexList.map(val=>
					<div className="li" onClick={this.handleClick.bind(this,val.productId,val.parentProductId)}>
					<img src={val.productImg}/>
					<div>
						<p>{val.productName}</p>
						<span>￥{val.originalPrice}</span>
					</div>
					</div>
					)
			}
			</div>
		</div>
	}
	handleClick(productId,parentProductId){
		this.props.history.push("/items/" + productId + "/"+ parentProductId)
	}
}
export default Activity;