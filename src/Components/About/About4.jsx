import parse from 'html-react-parser';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import VideoModal from '../VideoModal/VideoModal';

const About4 = ({ about , thirdImage}) => {
	return (
		<div className="about-us-area">
			<div className="container">
				<div className="row align-items-center">
					{about?.leftImage &&
						<div className="col-lg-6">
							<div className={`"about-us-thumb" ${thirdImage}`}>
								<div className="about-us-img">
									<img src={about?.leftImage} alt="thumb" height={'300px'} />
								</div>
							</div>
						</div>
					}
					<div className="col-lg-6">
						<div className="section-title text-left">
							{about?.title && <h1 className="section-main-title">{about?.title}</h1>}
							{about?.Content && <p className="section-title-descr">{about?.Content}</p>}
						</div>
						<div className="about-us-content">
							<div className="solutek-btn">
								<Link to="/service/carttotable">Cart-to-Table
									<div className="solutek-hover-btn hover-bx"></div>
									<div className="solutek-hover-btn hover-bx2"></div>
									<div className="solutek-hover-btn hover-bx3"></div>
									<div className="solutek-hover-btn hover-bx4"></div>
								</Link>
							</div>
						</div>
					</div>
					{about?.RightImage &&
						<div className="col-lg-6">
							<div className="about-us-thumb">
								<div className="about-us-img">
									<img src={about?.RightImage} alt="thumb" />
								</div>
							</div>
						</div>
					}
				</div>
				<div className="about2-us-shape">
					<img src="/assets/images/inner/about-us-sh.png" alt="shape" />
				</div>
				<div className="about-us-shape2">
					<img src="/assets/images/inner/about-us-she.png" alt="shape" />
				</div>
			</div>
		</div>
	);
};

export default About4;