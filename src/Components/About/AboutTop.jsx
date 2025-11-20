import React from 'react'

const AboutTop = ({AboutTopSec}) => {
    return (
        <div className="services-details-area">
            <div className="container">
                <div className={`row ${AboutTopSec?.direction && AboutTopSec.direction}`}>
                    <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="services-details-content">
                            {AboutTopSec?.title && <h4 className="services-details-title">{AboutTopSec?.title}</h4>}
                            {AboutTopSec.description && <p className="services-details-desc">{AboutTopSec?.description}</p>}
                            {AboutTopSec.descriptionTwo && <p className='services-details-desc'>{AboutTopSec?.descriptionTwo}</p>}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutTop
