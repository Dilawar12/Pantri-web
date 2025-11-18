import React from 'react'

const AboutNew = ({ content }) => {
    return (
        <div className="services-details-area">
            <div className="container">
                <div className={`row ${content?.direction && content.direction}`}>
                    <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6">
                        <div className="services-details-content">
                            {content?.title && <h4 className="services-details-title">{content.title}</h4>}
                            <p className="services-details-desc">
                                Pantri App was founded as a community built for ease, eliminating the friction of in-home cooking, laundry, and home organization. We deliver lifestyle services that give people back their time so they can focus on what matters most.
                            </p>
                            <p className="services-details-desc">
                                We’re excited to introduce our Cart-to-Table™ Pilot Program, now available through the Pantri App Web experience. This launch brings personalized meal prep directly to your home, powered by our growing network of vetted personal chefs. We continue to onboard top-tier professionals, including organizers and laundry operators, who will deliver thoughtful, in-home service with care and consistency. Whether you're a busy professional, mom, senior citizen, or firefighter, Pantri App offers real human connection and stress-free support that promotes wellness and household ease.
                            </p>
                            {/* <p className="services-details-desc">
                                PantriApp supports busy professionals, moms,
                                senior citizens, and firefighters offering ways to
                                maximize health and wellness through our
                                systemic programs.
                            </p> */}
                            <div className="solutek-btn2">
                                {content?.btn_url && content?.btn_name && (
                                    <Link to={content.btn_url}>
                                        {content?.btn_name}
                                    </Link>
                                )}
                            </div>
                            <div className=' services-details-thumb abt-new-img'>

                                <img src={content?.ThirdImage} alt="thumb" className="img-fluid" />
                            </div>

                        </div>
                    </div>
                    <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6">
                        <div className="services-details-thumb abt-new-img">
                            <img src={content?.FristImage} alt="thumb" className="img-fluid" />
                            <img src={content?.secondImage} alt="thumb" className="img-fluid" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutNew
