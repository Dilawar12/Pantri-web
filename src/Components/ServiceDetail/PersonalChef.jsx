import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { selectUserToken } from "../../store/user/userSlice";
import { useModal } from "../Modal/ModalContext";
const PersonalChefs = ({ content }) => {
    const isCostumerLogin = useSelector(selectUserToken)
    const { openModal } = useModal();
    const handleGetStartedClick = () => {
        window.location.href = content.btn_url;
        return;
        // if (isCostumerLogin) {
        //     window.location.href = content.btn_url;
        //     return;
        // }
        // openModal();
    }
    return (
        <div className="services-details-area">
            <div className="container">
                <div className={`row align-items-center ${content?.direction && content.direction}`}>
                    {content?.leftImage &&
                        <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <div className="services-details-thumb">
                                <img src={content?.leftImage} alt="thumb" className="img-fluid" />
                            </div>
                        </div>
                    }
                    <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <div className="services-details-content">
                            {content?.title && <h4 className="services-details-title">{content.title}</h4>}
                            {content?.description && <p className="services-details-desc">{content.description}</p>}
                            {content?.secondDesciption && <p className="services-details-desc">{content.secondDesciption}</p>}
                            {
                                content?.details &&
                                <div className="project-details-list-item">
                                    <ul>
                                        {
                                            content?.details.map((item, index) => (
                                                <li key={index}><i className="bi bi-check-circle-fill"></i>{item}</li>
                                            ))
                                        }
                                    </ul>
                                </div>
                            }
                            <div className="solutek-btn2">
                                {content?.btn_url && content?.btn_name && (
                                    <button onClick={handleGetStartedClick} >
                                        {content?.btn_name}
                                    </button>
                                )}
                            </div>

                        </div>
                    </div>
                    {content?.rightImage &&
                        <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <div className="services-details-thumb">
                                <img src={content?.rightImage} alt="thumb" className="img-fluid" c />
                            </div>
                        </div>
                    }
                </div>
            </div>
        </div>
    );
};

export default PersonalChefs;