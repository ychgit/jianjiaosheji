import React from "react";
import { BrowserRouter as Router, Route,Redirect, Switch } from "react-router-dom";
import App from "../App";
import Index from "../components/Index"
import Category from "../components/Category"
import Inspiration from "../components/Inspiration"
import Brand from "../components/Brand"
import User from "../components/User"
import Register from "../components/Register"
import Search from "../components/Search"
import Items from "../components/Items"
import {Provider} from "react-redux";
import store from "../store";
import Pinlei from "../components/Category/Pinlei"
import PinleiDetail from "../components/Category/Pinlei/PinleiDetail"
import Pinpai from "../components/Category/Pinpai"
import Shejishi from "../components/Category/Shejishi"


const router = (
	<Provider store={store}>
		<Router>
			<App>
				<Switch>
					<Route path="/index" component={Index}/>
					<Route path="/category" render = {()=>
						<Category>
							<Switch>
								<Route path="/category/pinlei" component={Pinlei}/>
								<Route path="/category/pinpai" component={Pinpai}/>
								<Route path="/category/shejishi" component={Shejishi}/>
								<Redirect from="/category" to="/category/Pinlei"/>
							</Switch>
						</Category>


					}/>
					<Route path="/pinleidetail/:pagename/:pageid" component={PinleiDetail}/>
					
					<Route path="/inspiration" component={Inspiration}/>
					<Route path="/brand" render={()=>
						false?<Brand/>:<Redirect to="/user"/>
					}/>
					<Route path="/user" component={User}/>
					<Route path="/register" component={Register}/>
					<Route path="/search" component={Search}/>
					<Route path="/items/:productId/:parentProductId" component={Items}/>
					
					<Redirect from="*" to="/index"/>
				</Switch>
			</App>
		</Router>
	</Provider>








)



export default router;