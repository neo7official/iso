import React, { Component } from 'react';
import footerLogo from 'images/footer_logo.png';
import green1group from 'images/green-1-group.png';
import green2group from 'images/green-2-group.png';
import green3group from 'images/green-3-group.png';
import green4group from 'images/green-4-group.png';

export class GreenFooterComp extends Component {
	render() {
		return (
			<section className="wrapper green_sec">
				<div className="content_area">
					<div className="green_sec_img">
						<img src={footerLogo} alt="Skill Matrix" />
					</div>
					<div className="green_sec_desc">
						<h4>
							Every professional organisation should invest in a Skills Matrix. The benefits significantly
							out way the little investment time required.
						</h4>
						<p>Read more and sign up for a free (no obligation) skills matrix here.</p>
						<a href="#" target="_blank">
							Develop a FREE Skills Matrix with ability6.com
						</a>
					</div>
				</div>
				<div className="bg_img">
					<img className="green_1" src={green1group} alt="green-1-group" />
					<img className="green_2" src={green2group} alt="green-2-group" />
					<img className="green_3" src={green3group} alt="green-3-group" />
					<img className="green_4" src={green4group} alt="green-4-group" />
				</div>
			</section>
		);
	}
}
