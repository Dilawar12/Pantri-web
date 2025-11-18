import React from 'react';
import logo from '../../public/assets/images/logo.png'

const DashboardProjects = () => {
  return (
    <div className='dashboard-main-page'>
      <div className="container">
        <div className="row">
            <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <div className="main-content-wrap">
                    <img src={logo} alt="" />
                    <h1>Projects Coming Soon</h1>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default DashboardProjects
