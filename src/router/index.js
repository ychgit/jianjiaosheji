import React from "react";
import { BrowserRouter as Router, Route,Redirect, Switch } from "react-router-dom";
import App from "../App";
import Index from "../components/Index"
import Category from "../components/Category"
import Inspiration from "../components/Inspiration"
import Brand from "../components/Brand"
import User from "../components/User"
import {Provider} from "react-redux";
import store from "../store";

const router = (
	<Provider store={store}>
		<Router>
			<App>
				<Switch>
					<Route path="/index" component={Index}/>
					<Route path="/category" component={Category}/>
					<Route path="/inspiration" component={Inspiration}/>
					<Route path="/brand" component={Brand}/>
					<Route path="/user" component={User}/>
					<Redirect from="*" to="/index"/>
				</Switch>
			</App>
		</Router>

	</Provider>







)



export default router;