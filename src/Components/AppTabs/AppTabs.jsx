import { useRef, useState } from "react";



const AppTabs = ({ data, title, content }) => {
    const [openItemIndex, setOpenItemIndex] = useState(0);
    const accordionContentRef = useRef(null);
    const handleItemClick = index => {
        if (index === openItemIndex) {
            setOpenItemIndex(-1);
        } else {
            setOpenItemIndex(index);
        }
    };
    return (
        <div className="faq-area style-three">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-12">
                        <div className="tab_container">
                            <div className="feq-content">
                                <h3 className="faq-title">{title}</h3>
                                <p className="faq-description">{content}</p>
                            </div>
                            <div id="tab1" className="tab_content">
                                <ul className="accordion">
                                    {data.map((item, index) => (
                                        <li key={index} className={`cs_accordian ${index === openItemIndex ? "active" : ""}`}>
                                            <a onClick={() => handleItemClick(index)}><span>{item.title}</span></a>
                                            <p ref={accordionContentRef}>{item.desc}</p>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AppTabs