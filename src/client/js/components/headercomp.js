import React, { Component } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import logo from 'images/logo.png';
import desktop from 'images/desktop.png';
import round from 'images/round.svg';
import matrixLogo from 'images/matrix_logo.png';
import { NavLink } from 'react-router-dom';

export class HeaderComp extends Component {
	render() {
		return (
			<React.Fragment>
				<Helmet>
					<meta charSet="utf-8" />
					<title>Skills Matrix - Competency Framework</title>
				</Helmet>
				<header>
					<div>
						<div className="content_area">
							<div className="top_part clearafter">
								<NavLink to="/" className="logo left">
									<img
										className="desktop_logo"
										src={logo}
										alt="SkillsMatrix - Competency Framework"
									/>
									<img
										className="responsive_logo"
										src={matrixLogo}
										alt="SkillsMatrix - Competency Framework"
									/>
								</NavLink>
								<div className="right">
									<a href="mailto:hello@skillsmatrix.info">
										<i className="fa fa-envelope-o" aria-hidden="true" />
										<i className="fa fa-envelope-open-o" aria-hidden="true" />{' '}
										hello@skillsmatrix.info
									</a>
									<a className="phn" href="tel:+4403300438943">
										{' '}
										0330 043 8943 (+44 UK)
									</a>
								</div>
							</div>
							<section className="banner">
								<img src={desktop} width="734" height="816" alt="" className="desktop" />
								<div className="left_banner_content">
									<h1>Every professional should invest in a Skills Matrix</h1>
									<p>
										Instantly and visible see where all the skill exists within your business. With
										a skills matrix you can rapidly identify skills shortages and training
										opportunities.
									</p>
									<a href="#" target="_blank">
										Develop a FREE Skills Matrix with ability6.com
									</a>
								</div>
							</section>
							<img src={round} alt="" className="backdrops" />
						</div>
					</div>
				</header>
			</React.Fragment>
		);
	}
}
