import React, { useContext, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { FiSunrise } from "react-icons/fi";
// import PerfectScrollbar from "react-perfect-scrollbar";
import logo from '../../../public/assets/images/logo.png'
import favicon from '../../../public/favicon.png'
import Menus from './Menus';
import { NavigationContext } from '../../contentApi/NavigationProvider';

const NavigationManu = () => {
    const { navigationOpen, setNavigationOpen } = useContext(NavigationContext)
    const pathName = useLocation().pathname
    useEffect(() => {
        setNavigationOpen(false)
    }, [pathName])
    return (
        <nav className={`nxl-navigation ${navigationOpen ? "mob-navigation-active" : ""}`}>
            <div className="navbar-wrapper">
                <div className="m-header">
                    <Link to="/dashboard" className="b-brand">
                        {/* <!-- ========   change your logo hear   ============ --> */}
                        <img src={logo} alt="logo" className="logo logo-lg" />
                        <img src={favicon} alt="logo" className="logo logo-sm"></img>
                    </Link>
                </div>

                <div className={`navbar-content`}>
                    {/* <PerfectScrollbar> */}
                        <ul className="nxl-navbar">
                            <li className="nxl-item nxl-caption">
                                <label>Navigation</label>
                            </li>
                            <Menus />
                        </ul>
                    {/* </PerfectScrollbar> */}
                </div>
            </div>
            <div onClick={() => setNavigationOpen(false)} className={`${navigationOpen ? "nxl-menu-overlay" : ""}`}></div>
        </nav>
    )
}

export default NavigationManu