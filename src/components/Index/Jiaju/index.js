
import React,{Component} from "react";
import axios from "axios";
import Swiper from 'swiper/dist/js/swiper.js'
import 'swiper/dist/css/swiper.min.css'
import "./index.scss"
class Jiaju extends Component{
	constructor(props){
		super(props);
		this.state={
			list:null
		}
	}
	render(){
		return <div id="tui">
			{this.state.list?
				<div>

					<ul>
						{this.state.list.map(item=>
							<li key={item.moduleId}>
							<h4>{item.moduleName}</h4>
							<p>{item.moduleDescription}</p>
							{item.moduleContent.banners?<div className="swiper-container" id="one">
							    <div className="swiper-wrapper">
							    	{item.moduleContent.banners.map(pic=>
							      	<div className="swiper-slide" key={pic.id}><img src={pic.bannerImgSrc} alt=""/></div>
								)}
							      
							    </div>
							    {/*<!-- Add Pagination -->*/}
							   
							    {/*<!-- Add Arrows -->*/}
							    
							</div>:null}

							{item.moduleContent.products?<div className="two">
							    <div className="two1">
							    	{item.moduleContent.products.map(pho=>
							      	<div key={pho.productId} onClick={this.loaddet.bind(this,pho.productId,pho.parentProductId)}>
							      		<img src={pho.productImg} alt=""/>
										<p>{pho.productTitle}</p>
										<p>￥{pho.sellPrice}</p>
										<p>￥{pho.originalPrice}</p>

							      	</div>
								)}
							      
							    </div>

							</div>:null}


							
							</li>
							)}
					</ul>
				</div>
				:null}

		</div>
	}
	loaddet(productId,parentProductId){
		this.props.history.push("/items/"+productId+"/"+parentProductId)
	}
	componentDidMount(){
		axios.get("/v2/page?pageId=1&tabId=10005&_=1541144266869").then(res=>{
			console.log(res.data)
			this.setState({
				list:res.data.data.modules
			})
		})
	}
	componentDidUpdate(){
		var swiper = new Swiper('.swiper-container', {
      spaceBetween: 30,
      centeredSlides: true,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
	
	}


}
export default Jiaju;

 