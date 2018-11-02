import React ,{Component} from "react";
import { Accordion, List } from 'antd-mobile';
import axios from "axios";
import "./index.scss";

class Pinlei extends Component{
	constructor(props){
		super(props);
		this.state = {
			list_1:[{name:"沙发",id:20},{name:"椅凳",id:21},{name:"床",id:2310},{name:"柜架",id:24},{name:"餐桌",id:2210},{name:"茶几和边桌",id:2211},{name:"书桌",id:2212}],
			list_2:[{name:"灯具",id:25},{name:"用餐",id:26},{name:"时尚生活",id:32},{name:"烹饪",id:27},{name:"纺织品",id:28},{name:"家饰",id:29},{name:"卫浴",id:31}]
		};
	}
	render(){
		return <div className="PinleiDiv">
			<Accordion accordion openAnimation={{}} className="my-accordion" onChange={this.onChange}>
				<Accordion.Panel header="家具" className="PinleiList">
				  <List className="my-list">
				  	{this.state.list_1.map(item=>
				  		<List.Item className="hahaha" key={item.id} onClick={this.intodetail.bind(this,item.id,item.name)}>{item.name}</List.Item>
				  	)}
				  </List>
				</Accordion.Panel>
				<Accordion.Panel header="家居" className="PinleiList">
				  <List className="my-list">
				   	{this.state.list_2.map(item=>
				  		<List.Item className="hahaha" key={item.id} onClick={this.intodetail.bind(this,item.id,item.name)}>{item.name}</List.Item>
				  	)}
				  </List>
				</Accordion.Panel>
				<Accordion.Panel header="人气" className="PinleiList">
				   <List className="my-list">
				    <List.Item className="hahaha">最新</List.Item>
				    <List.Item className="hahaha">最热</List.Item>
				    <List.Item className="hahaha">优惠</List.Item>
				  </List>
				</Accordion.Panel>
				<Accordion.Panel header="主题" className="PinleiList">
				   <List className="my-list">
				    <List.Item className="hahaha">礼品</List.Item>
				    <List.Item className="hahaha">玻璃工艺</List.Item>
				    <List.Item className="hahaha">旅游</List.Item>
				  </List>
				</Accordion.Panel>
			</Accordion>
		</div>
	}
	onChange = (key) => {
    	console.log(key);
  	}
	componentDidMount(){
		axios.get("/v2/page?pageId=1&tabId=1&_=1540859487948").then(res=>{
			this.setState({
				
			})
		})

	}
	intodetail(id,name){
		this.props.history.push("/pinleidetail/"+name+"/"+id);
	}
}

export default Pinlei;
