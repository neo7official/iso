import React, {Component} from "react";
import { render } from "react-dom";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import {HomeComp} from "./homecomp";
import {NoMatch} from "./nomatch";

class RouteHolder extends Component{
	render(){
		return(
			<div className="route_holder">
				<Router>
						<Switch> 
							<Route path="/" exact component={HomeComp}/>
							<Route component={NoMatch} />
						</Switch>
				</Router>
			</div>
		)
	}
}
export class RootComp extends Component{
	render(){
		return(
			<div className="root">
				<RouteHolder/>
			</div>
		)
	}
}