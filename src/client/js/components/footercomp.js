import React, {Component} from "react";

export class FooterComp extends Component{	
	render(){
		return(
				<footer className="wrapper">
				    <div className="content_area">
				      <div className="ftr_left">
				        <p>Copyright © 2008-2018 - <a href="#" target="_blank">www.skillsmatrix.info</a> All Rights Reserved</p>
				      </div>
				      <div className="ftr_right">
				        <p>Page by <a href="https://ability6.com" target="_blank">https://ability6.com</a></p>
				      </div>
				    </div>
				</footer>
		)
	}
}