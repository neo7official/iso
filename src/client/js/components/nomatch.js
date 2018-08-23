import React, { Component } from 'react';
import Helmet from 'react-helmet';

export class NoMatch extends Component {
	render() {
		return (
			<div>
				<Helmet>
					<meta charSet="utf-8" />
					<title>404 - Page Not Found</title>
				</Helmet>
				<h1>There is not any page!</h1>
			</div>
		);
	}
}
