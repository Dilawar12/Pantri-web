import parse from 'html-react-parser';
import { Link } from 'react-router-dom';
const About1 = ({ MainImg, ImgTitle, SubTitle, Title, Content, listTitle, BottomText, BtnUrl, BtnText }) => {
    return (
        <div className="about-area">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6 col-lg-6">
                        <div className="about-thumb">
                            <img src={MainImg} alt="about-thumb" />
                            <div className="about-shape">
                                <img src="/assets/images/about1.png" alt="about1" />
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="section-title text-left">
                            <h5 className="section-sub-title">{SubTitle}</h5>
                            <h1 className="section-main-title">{parse(Title)}</h1>
                            <p className="section-title-descr">{Content}</p>
                        </div>
                        <div className="about-text">
                            <ul>
                                <li><b>Cart-to-Table™:</b> Recipes → groceries → home (with or without a chef)</li>
                                <li><b>Live tracking:</b> real-time driver status and ETA updates</li>
                                <li><b>Secure checkout:</b> stored preferences and instant reorders</li>
                            </ul>
                        </div>
                        {/* <div className="solutek-btn mt-30">
                            <Link to={BtnUrl}>
                                {BtnText}
                                <div className="solutek-hover-btn hover-bx"></div>
                                <div className="solutek-hover-btn hover-bx2"></div>
                                <div className="solutek-hover-btn hover-bx3"></div>
                                <div className="solutek-hover-btn hover-bx4"></div>
                            </Link>
                        </div> */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About1;