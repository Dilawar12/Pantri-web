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
                                Pantri App, Inc. was founded with a simple belief: home should be a place of balance, connection, and ease. We’re more than a platform for chores we’re a community that gives people back their time so they can focus on what matters most.
                            </p>
                            <p className="services-details-desc">
                                Every booking supports local chefs, organizers, and laundry pros, helping them grow their businesses and strengthening communities one service at a time. By verifying providers and fostering trust, we ensure every experience is delivered with care and consistency.
                            </p>
                            <p className='services-details-desc'>
                                Your home, your way - Pantri App adapts to your schedule, preferences, and priorities. Whether it’s personalized meal prep, thoughtful organization, or laundry done right, our mission is to bring wellness, stress‑free support, and real human connection into everyday life.
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
                            {/* <div className=' services-details-thumb abt-new-img'>

                                <img src={content?.ThirdImage} alt="thumb" className="img-fluid" />
                            </div> */}

                        </div>
                    </div>
                    <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6">
                        <div className="services-details-thumb abt-new-img">
                            <img src={content?.FristImage} alt="thumb" className="img-fluid" />
                            {/* <img src={content?.secondImage} alt="thumb" className="img-fluid" /> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutNew
