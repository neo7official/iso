import React, { Component } from 'react';
import individual from 'images/individual.png';
import organization from 'images/organization.png';
import customer from 'images/customer.png';
import firstGroup from 'images/first-group.png';
import secondGroup from 'images/second-group.png';
import thirdGroup from 'images/third-group.png';
import fourthGroup from 'images/fourth-group.png';
import fifthGroup from 'images/fifth-group.png';
import sixthGroup from 'images/sixth-group.png';
import seventhGroup from 'images/seventh-group.png';
import eighthGroup from 'images/eighth-group.png';

export class BenefitsComp extends Component {
	render() {
		return (
			<section className="wrapper benefit_area">
				<div className="content_area">
					<div className="benefit_hd">
						<h3>
							The <em>benefits</em> are widespread{' '}
							<span>and can easily be categorised into three core areas, namely;</span>
						</h3>
					</div>
					<div className="benefit_sec">
						<div className="benefit_img">
							<figure>
								<img src={individual} alt="individual" />
							</figure>
						</div>
						<div className="benefit_desc orange">
							<h4>
								<span>1.</span>
								Individual/Employee
							</h4>
							<ul>
								<li>
									<b>Increased competencies</b> – a feeling of investment into their role and their
									development
								</li>
								<li>
									<b>Decreased stress levels</b> – work competencies increase thus removing
									uncertainty
								</li>
								<li>
									Full awareness of what their ‘role’ entails including the relevant skills
									competencies required
								</li>
								<li>
									Full awareness of the desired areas of growth and where they need to focus their
									training efforts
								</li>
								<li>
									Can; within some organisations be used within employees Personal Development Plans
									(PDP)
								</li>
								<li>
									Employees gain from improved identification and understanding of their own strengths
									and weaknesses
								</li>
								<li>
									Aid in understanding the value they bring to the organisation (which in turn can
									boost morale)
								</li>
							</ul>
						</div>
					</div>
					<div className="benefit_sec reverse">
						<div className="benefit_img">
							<figure>
								<img src={organization} alt="organization" />
							</figure>
						</div>
						<div className="benefit_desc dgreen">
							<h4>
								<span>2.</span>
								Organisation / company
							</h4>
							<ul>
								<li>
									Enables managers, function or business owners to understand the skill strengths and
									weaknesses of employees reporting to them.
								</li>
								<li>
									Increased capacity – by addressing skills shortages and increasing employee
									competencies companies can release real capacity into their businesses without
									incurring the heavy costs of recruitment
								</li>
								<li>
									Creates the ability to search for desired skills and talents across the organisation
									(e.g. to help fill a role or to assist with either short or long term increased
									requirements of a task from an end-client)
								</li>
								<li>
									A rolled-up view of skills and skills gaps across an organization can enable its
									executives to see areas of skill strength and weakness.
								</li>
								<li>
									Enables proficient future planning against projected availability of staff. When
									used company-wide creates management consistency to drive an organisation forward
								</li>
								<li>
									Customers experience a quality of product/service increasing the likelihood of them
									returning and advertising your products/services.
								</li>
								<li>
									Customers experience a quality of product/service increasing their loyalty levels
								</li>
							</ul>
						</div>
					</div>
					<div className="benefit_sec">
						<div className="benefit_img">
							<figure>
								<img src={customer} alt="customer" />
							</figure>
						</div>
						<div className="benefit_desc lgreen">
							<h4>
								<span>3.</span>
								Customer / end-client
							</h4>
							<p>
								The customer should largely be unaware of the existence of a skills matrix. The customer
								will however benefit from the increased levels of competency of your staff, their
								ability to resolve queries in a timely manner and on first touch (i.e. avoiding the
								‘I’ll call you back’ scenario). Simply put the benefits are endless.
							</p>
							<ul>
								<li>Faster response rates (decreased lead times)</li>
								<li>
									Increased rate of quality in service or products (reduced defect and return rates)
								</li>
								<li>
									Increased employee competencies leads to speed which can result in ‘faster to
									market’ products and services
								</li>
								<li>Customers feels valued</li>
								<li>Customers experience a very easy and smooth transaction with company</li>
							</ul>
						</div>
					</div>
				</div>
				<div className="bg_img">
					<img className="first" src={firstGroup} alt="first" />
					<img className="second" src={secondGroup} alt="second" />
					<img className="third" src={thirdGroup} alt="third" />
					<img className="fourth" src={fourthGroup} alt="fourth" />
					<img className="fifth" src={fifthGroup} alt="fifth" />
					<img className="sixth" src={sixthGroup} alt="sixth" />
					<img className="seventh" src={seventhGroup} alt="seventh" />
					<img className="eighth" src={eighthGroup} alt="eighth" />
				</div>
			</section>
		);
	}
}
