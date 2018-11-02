import React,{Component} from "react";
import axios from "axios";
import { Carousel,WingBlank } from 'antd-mobile';
import "./index.scss";
import Swiper from 'swiper/dist/js/swiper.js'
import 'swiper/dist/css/swiper.min.css'


class Decorate extends Component{

	constructor(props){
		super(props);
		this.state = {
		   lunboList: [],
		   brandlist:[],
		   innovatelist:[],	
		   branderjilist:[],
		   fenleiList:[],
		   tablewareList:[],
		   vaseList:[],
		   baoList:[],
		   imgHeight: 176
		   	   
		 }
	}
	
	render(){
		return <div>
			
			<WingBlank>
			        <Carousel
			          dots={true}
			          autoplayInterval={3000}
			          autoplay={true}
			          infinite={true}>
			          {this.state.lunboList.map(val => (
			            <a
			              key={val.id}
			              href="#"
			              style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}
			            >
			            
			              <img
			              	key={val.bannerLinkTargetId}
			                src={val.bannerImgSrc}
			                alt=""
			                style={{ width: '100%', verticalAlign: 'top' }}
			                onLoad={() => {
			                  // fire window resize event to change height
			                  window.dispatchEvent(new Event('resize'));
			                  this.setState({ imgHeight: 'auto' });
			                }}
			              />
			            </a>
			          ))}
			        </Carousel>
			</WingBlank>
	    	<div className="innovate">
			<div className="innovatebox">
				<h3>创新设计</h3>
				<h4>艺术精品生活馆</h4>
			</div>
			<div className="swiper-container">
			   <div className="swiper-wrapper">

			    {
			    	this.state.innovatelist.map(val=>
			    		<div className="swiper-slide" key={val.parentProductId}>
			    		<a href="#" className="cxa"  >
			    		<img className="cximg" src={val.productImg} />
			    		<p>{val.productName}</p>
			    		<span className="cxspan">￥{val.originalPrice}</span>

			    		</a>
			    		</div>
			    	)
			    }			   
			    </div>			        			        
			</div>
			<div className="cxfooter">
				<a href="#">查看全部</a>
			</div>
			</div>		
		
									
				<div className="innovate">
					<div className="innovatebox">
						<h3>品牌推荐</h3>
						<h4>国际大牌 有好货</h4>
					</div>
					<div className="banner3">
					<img src={this.state.brandlist.bannerImgSrc}/>
					</div>
					<div className="headset">
					{
						this.state.branderjilist.map(val=>
					<div className="xiangqing" key={val.productId} onClick={this.handleClick.bind(this,val.productId,val.parentProductId)}>
					<a href="#">
					<img src={val.productImg} />
					<p>{val.productName}</p>
					<span>￥{val.originalPrice}</span>
					</a>
					</div>	
							)				
					}
					</div>
				</div>
				<div className="innovate">
					<div className="innovatebox">
						<h3>热门分类</h3>						
					</div>
					<div className="fenleiImg">
						{
							this.state.fenleiList.map(val=>
								<div  key={val.id}>
								<a href="#">
								<img src={val.bannerImgSrc}/>
								</a>
								</div>
								)
						}
					</div>
				</div>			
		<div className="innovate">
			<div className="innovatebox">
				<h3>气氛餐具</h3>
				<h4>变身摆盘达人 聚餐马上开始</h4>
			</div>
			<div className="tableware_box">
			{
				this.state.tablewareList.map(val=>
					<div className="li" key={val.productId} onClick={this.handleClick.bind(this,val.productId,val.parentProductId)}>
					<img src={val.productImg}/>
					<div>
						<p>{val.productName}</p>
						<span>￥{val.originalPrice}</span>
					</div>
					</div>
					)
			}
			</div>
			<div className="innovate">
				<div className="innovatebox">
					<h3>室内花器</h3>
					<h4>把多色花园搬进家庭</h4>
				</div>
				<div className="tableware_box">
				{
					this.state.vaseList.map(val=>
						<div className="li" key={val.productId} onClick={this.handleClick.bind(this,val.productId,val.parentProductId)}>
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
			<div className="innovate">
				<div className="innovatebox">
					<h3>能装易取</h3>
					<h4>带上行李去追寻自然哲学</h4>
				</div>
				<div className="tableware_box">
				{
					this.state.baoList.map(val=>
						<div className="li" key={val.productId} onClick={this.handleClick.bind(this,val.productId,val.parentProductId)}>
						<img src={val.productImg}/>
						<div>
							<p>{val.productName}</p>
							<span>￥{val.originalPrice}</span>
						</div>
						</div>
						)
				}
				</div>				
		
		</div></div></div>
	}


	componentDidMount(){
		axios.get("v2/page?pageId=1&tabId=10006&_=1540966397997").then(res=>{
			
			this.setState({
				lunboList:res.data.data.modules[0].moduleContent.banners,
				innovatelist:res.data.data.modules[1].moduleContent.products,
				brandlist:res.data.data.modules[2].moduleContent.banners[0],
				branderjilist:res.data.data.modules[2].moduleContent.products,
				fenleiList:res.data.data.modules[3].moduleContent.banners,
				tablewareList:res.data.data.modules[4].moduleContent.products,
				vaseList:res.data.data.modules[5].moduleContent.products,
				baoList:res.data.data.modules[6].moduleContent.products
			})
		})

		var swiper = new Swiper('.swiper-container',{
		    slidesPerView: 'auto',
		    spaceBetween: 30,
		    pagination: {
		      el: '.swiper-pagination',
		      clickable: true
		    }
		  })

	}
	handleClick(productId,parentProductId){
		this.props.history.push("/items/" + productId + "/"+ parentProductId)
	}
	
}
export default Decorate;

