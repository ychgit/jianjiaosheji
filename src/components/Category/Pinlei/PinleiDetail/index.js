import React ,{Component} from "react";
import axios from "axios";
import store from "../../../../store";
import Swiper from 'swiper/dist/js/swiper.js';
import 'swiper/dist/css/swiper.min.css';

import "./index.scss";
class PinleiDetail extends Component{
	constructor(props){
	    super(props);
	    this.state = {
	        title:this.props.match.params.pagename,
	        list:null,
	        listbol:false,
	        subshow1:true,
	        subshow2:false,
	        subshow3:false,
	        list_1:[{name:"All",id:35},{name:"沙发",id:20},{name:"椅凳",id:21},{name:"床",id:2310},{name:"柜架",id:24},{name:"餐桌",id:2210},{name:"茶几和边桌",id:2211},{name:"书桌",id:2212}],
			list_2_1:[{name:"All",id:25},{name:"落地灯",id:2510},{name:"吊灯",id:2511},{name:"氛围灯",id:2512},{name:"台灯",id:2513},{name:"灯泡和配件",id:2514}],
			list_2_2:[{name:"All",id:26},{name:"餐具",id:2610},{name:"餐桌布置",id:2612},{name:"咖啡和茶",id:2613},{name:"酒具",id:400080}],
			list_2_3:[{name:"All",id:32},{name:"生活用品",id:3210},{name:"首饰",id:3211},{name:"箱包",id:3212},{name:"雨伞",id:3213},{name:"电子",id:3214},{name:"个人护理",id:3215},{name:"文具",id:3217},{name:"手表",id:400001}],
			list_2_4:[{name:"All",id:27},{name:"锅具",id:2710},{name:"厨房用具",id:2711},{name:"烘焙器皿",id:2713}],
			list_2_5:[{name:"All",id:28},{name:"地毯",id:2810},{name:"靠垫抱枕",id:2811},{name:"床上用品",id:2812},{name:"毛巾织物",id:2813}],
			list_2_6:[{name:"All",id:29},{name:"时钟",id:2910},{name:"墙饰",id:2911},{name:"摆件",id:2912},{name:"香薰和蜡烛",id:2913},{name:"花瓶花盆",id:2914},{name:"镜子",id:2915},{name:"挂画",id:400002}],
			list_2_7:[{name:"All",id:31},{name:"浴室家具",id:3111},{name:"浴室用品",id:3112}]
	    };
	}
	btn1(){
		var array = this.state.list;
		var bol = this.state.listbol;
		console.log(array);
		function sortNumber(a,b)
		{						
			return bol? 
				 b.sellPrice - a.sellPrice
				:a.sellPrice - b.sellPrice			
		}
		this.setState({
			list:array.sort(sortNumber),
			listbol:!this.state.listbol,
			subshow1:true,
			subshow2:false,
			subshow3:false
		})		
	}
	btn2(){
		var array = this.state.list;
		var bol = this.state.listbol;
		console.log(array);
		function sortNumber(a,b)
		{						
			return bol? 
				 b.sellPrice - a.sellPrice
				:a.sellPrice - b.sellPrice			
		}
		this.setState({
			list:array.sort(sortNumber),
			listbol:!this.state.listbol,
			subshow1:false,
			subshow2:true,
			subshow3:false
		})		
	}
	btn3(){
		var array = this.state.list;
		var bol = this.state.listbol;
		console.log(array);
		function sortNumber(a,b)
		{						
			return bol? 
				 b.sellPrice - a.sellPrice
				:a.sellPrice - b.sellPrice			
		}
		this.setState({
			list:array.sort(sortNumber),
			listbol:!this.state.listbol,
			subshow1:false,
			subshow2:false,
			subshow3:true
		})		
	}
	luanqibazao(id){
		axios.get("/pages/category/"+id+"?pageNumber=1&orderBy=onShelfTime&sort=desc&_=1541066722394").then(res=>{
			this.setState({
				list:res.data.data.products
			})
		});
	}
	aaaa(){
		switch(this.state.title){
		case "沙发":
			return this.state.list_1.map(item=>
			    		<div className="swiper-slide" key={item.id} onClick={this.luanqibazao.bind(this,item.id)}>{item.name}</div>
			    	)
		case "椅凳":
			return this.state.list_1.map(item=>
			    		<div className="swiper-slide" key={item.id} onClick={this.luanqibazao.bind(this,item.id)}>{item.name}</div>
			    	)
		case "床":
			return this.state.list_1.map(item=>
			    		<div className="swiper-slide" key={item.id} onClick={this.luanqibazao.bind(this,item.id)}>{item.name}</div>
			    	)
		case "柜架":
			return this.state.list_1.map(item=>
			    		<div className="swiper-slide" key={item.id} onClick={this.luanqibazao.bind(this,item.id)}>{item.name}</div>
			    	)
		case "餐桌":
			return this.state.list_1.map(item=>
			    		<div className="swiper-slide" key={item.id} onClick={this.luanqibazao.bind(this,item.id)}>{item.name}</div>
			    	)
		case "茶几和边桌":
			return this.state.list_1.map(item=>
			    		<div className="swiper-slide" key={item.id} onClick={this.luanqibazao.bind(this,item.id)}>{item.name}</div>
			    	)
		case "书桌":
			return this.state.list_1.map(item=>
			    		<div className="swiper-slide" key={item.id} onClick={this.luanqibazao.bind(this,item.id)}>{item.name}</div>
			    	)
		case "灯具":
			return this.state.list_2_1.map(item=>
			    		<div className="swiper-slide" key={item.id} onClick={this.luanqibazao.bind(this,item.id)}>{item.name}</div>
			    	)
		case "用餐":
			return this.state.list_2_2.map(item=>
			    		<div className="swiper-slide" key={item.id} onClick={this.luanqibazao.bind(this,item.id)}>{item.name}</div>
			    	)
		case "时尚生活":
			return this.state.list_2_3.map(item=>
			    		<div className="swiper-slide" key={item.id} onClick={this.luanqibazao.bind(this,item.id)}>{item.name}</div>
			    	)
		case "烹饪":
			return this.state.list_2_4.map(item=>
			    		<div className="swiper-slide" key={item.id} onClick={this.luanqibazao.bind(this,item.id)}>{item.name}</div>
			    	)
		case "纺织品":
			return this.state.list_2_5.map(item=>
			    		<div className="swiper-slide" key={item.id} onClick={this.luanqibazao.bind(this,item.id)}>{item.name}</div>
			    	)
		case "家饰":
			return this.state.list_2_6.map(item=>
			    		<div className="swiper-slide" key={item.id} onClick={this.luanqibazao.bind(this,item.id)}>{item.name}</div>
			    	)
		case "卫浴":
			return this.state.list_2_7.map(item=>
			    		<div className="swiper-slide" key={item.id} onClick={this.luanqibazao.bind(this,item.id)}>{item.name}</div>
			    	)
		default:
			return this.state.list_1.map(item=>
			    		<div className="swiper-slide" key={item.id} onClick={this.luanqibazao.bind(this,item.id)}>{item.name}</div>
			    	)
		}
	}
	render(){
		return <div className="PinleiDetailDiv">
			<div className="swiper-container">
			    <div className="swiper-wrapper">
			    {
			    	this.aaaa()	    	
			    }			     
			    </div>
			</div>	
			{this.state.list?
			<div className="ul">
				<ul>
					<li><div className={this.state.subshow1?'btn bder':'btn'} onClick={this.btn1.bind(this)}>上新</div></li>
					<li><div className={this.state.subshow2?'btn bder':'btn'} onClick={this.btn2.bind(this)}>销量</div></li>
					<li><div className={this.state.subshow3?'btn bder':'btn'} onClick={this.btn3.bind(this)}>价格</div></li>
				</ul>
				{this.state.list.map(item=>
				  	<div key={item.productId} className="li" onClick={this.btnxiangqing.bind(this,item.productId,item.parentProductId)}>
				  		<a>
							<img src={item.productImg}/>
							<div className="text">
							<p>{item.productTitle}</p>
							<span style={{paddingRight:"20px"}}>￥：{item.sellPrice}</span><span>￥：{item.originalPrice}</span>
				  			</div>
				  		</a>
				  	</div>
				)}
			</div>
			:null}
			<p>- WOWDSGN -</p>
		</div>
	}
	componentDidMount(){
		axios.get(`/pages/category/${this.props.match.params.pageid}?pageNumber=1&orderBy=onShelfTime&sort=desc&_=1541066722394`).then(res=>{
			this.setState({
				list:res.data.data.products
			})

		});
	}
	componentDidUpdate(){
		var swiper = new Swiper('.swiper-container', {
		  slidesPerView: 3,
		  spaceBetween: 30,
		  pagination: {
		    el: '.swiper-pagination',
		    clickable: true,
		  },
		});
	}
	btnxiangqing(productId,parentProductId){
		this.props.history.push("/items/"+productId+"/"+parentProductId)
	}
}

export default PinleiDetail;