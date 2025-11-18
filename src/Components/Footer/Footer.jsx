import { Link } from "react-router-dom";
import { useModal } from "../Modal/ModalContext";


const Footer = () => {
    const { openModal } = useModal()
    const Services = [
        { services_title: 'Cart-to-Table', services_link: '/service/carttotable' },
        { services_title: 'Laundry Pickup', services_link: '/service/laundery-pickup' },
        { services_title: 'Home Organizing', services_link: '/service/home-organizing' }
    ];

    const UsefulLinks = [
        { title: 'Crunchbase', link: 'https://www.crunchbase.com/organization/pantri-app' },
        { title: 'Pitchbook', link: 'https://pitchbook.com/profiles/company/812112-13' },
        { title: 'About Company', link: '/about' },
        { title: 'Latest Blog', link: '/blog' },
        { title: 'Faqs', link: '/faq' },
        { title: 'Contact Us', link: '/contact' },
    ];

    const LogoContent = {
        img1: '/assets/images/footerLogo.png',
        Content: 'Join early to shape Pantri App and unlock Founding Member perks.'
    }

    const NewsletterContent = {
        Content: 'Join early to shape Pantri App and unlock Founding Member perks.'
    }

    const AdressContent = {
        Title: 'Redefining Freedom At Home.',
        Number: 'Contact Now'
    }

    return (
        <div className="footer_main_area">
            <div className="address-area">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-12">
                            <div className="address-box">
                                <div className="address-icon">
                                    <img src="/assets/images/bottomImage.png" style={{
                                        width :'40px',
                                        height : '40px'
                                    }} alt="address1" />
                                </div>
                                <div className="address-title">
                                    <h3>{AdressContent.Title}</h3>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12">
                            <div className="address-box2">
                                <div className="address-icon">
                                    <img src="/assets/images/address2.png" alt="address1" />
                                </div>
                                <div className="solutek-btn">
                                    <Link to="/contact">
                                        {AdressContent.Number}
                                        <div className="solutek-hover-btn hover-bx"></div>
                                        <div className="solutek-hover-btn hover-bx2"></div>
                                        <div className="solutek-hover-btn hover-bx3"></div>
                                        <div className="solutek-hover-btn hover-bx4"></div>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-area">
                <div className="container">
                    <div className="row footer">
                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="footer-widget">
                                <div className="footer-logo">
                                    <Link to="/"><img src={LogoContent.img1} alt="footer-logo" /></Link>
                                </div>
                                <p className="footer-widget-text">{LogoContent.Content}</p>
                                <div className="footer-social">
                                    <div className="footer-widget-social">
                                        {/* <a href="#"><i className="bi bi-facebook"></i></a>
                                        <a href="#"><i className="bi bi-twitter"></i></a>
                                        <a href="#"><i className="bi bi-linkedin"></i></a>
                                        <a href="#"><i className="bi bi-instagram"></i></a> */}
                                        <a href="https://www.facebook.com/PantriApp/"><i className="bi bi-facebook"></i></a>
                                        <a href="#"><i className="bi bi-twitter"></i></a>
                                        <a href="https://www.linkedin.com/company/pantriapp/"><i className="bi bi-linkedin"></i></a>
                                        <a href="https://www.instagram.com/pantriapp/"><i className="bi bi-instagram"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-6 col-sm-6">
                            <div className="footer-widget left">
                                <div className="widget-title">
                                    <h2>Useful Links</h2>
                                </div>
                                <ul>
                                    {UsefulLinks.map((item, i) => (
                                        <li key={i}><Link to={item.link}>{item.title}</Link></li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="footer-widget left">
                                <div className="widget-title">
                                    <h2>Services</h2>
                                </div>
                                <ul>
                                    {Services.map((item, i) => (
                                        <li key={i}><Link to={item.services_link}>{item.services_title}</Link></li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="footer-widget-newsletter">
                                <div className="widget-title">
                                    <h2>Sign Up</h2>
                                </div>
                                <p className="newsletter-text">{NewsletterContent.Content}</p>
                                <div className="Subscribe-form2">
                                    <div className="solutek-btn">
                                        <Link to="#" onClick={openModal}>
                                            Create an Account
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row copyright">
                        <div className="col-lg-6 col-md-6 col-sm-6">
                            <div className="-copyright-text">
                                <p>© Copyright 2025 By PantriApp</p>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-6">
                            <div className="copyright-list">
                                <ul>
                                    <li><Link to="/">Privacy Policy</Link></li>
                                    <li><Link to="/">Supports</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;