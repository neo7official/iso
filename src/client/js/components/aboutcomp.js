import React, { Component } from 'react';
import matrixLogo from 'images/matrix_logo.png';
import top1group from 'images/top-1-group.png';
import top2group from 'images/top-2-group.png';
import top3group from 'images/top-3-group.png';

export class AboutComp extends Component {
	render() {
		return (
			<section className="wrapper bg_grey">
				<div className="content_area">
					<div className="mid_left_sec">
						<img src={matrixLogo} alt="Skills Matrix" />
					</div>
					<div className="mid_right_sec">
						<h2>
							<span>What is a</span> Skills Matrix?
						</h2>
						<p>
							A ‘skills matrix’ falls within the ‘skills management’ process. A skills matrix is a grid or
							table that clearly and visibly illustrates the skills and competence held by individuals
							within a team. Its primary aim is to help in the understanding, development, deployment and
							tracking of people and their skills. Well-implemented skills matrices should identify the
							skills that a job role requires, the skills of all individual employees, and any gap between
							the two.
						</p>
					</div>
				</div>
				<div className="bg_img">
					<img className="top_1" src={top1group} alt="top-1-group" />
					<img className="top_2" src={top2group} alt="top-2-group" />
					<img className="top_3" src={top3group} alt="top-3-group" />
				</div>
			</section>
		);
	}
}
