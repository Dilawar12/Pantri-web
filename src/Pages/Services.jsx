import Blog1 from "../Components/Blog/Blog1";
import BreadCumb from "../Components/Common/BreadCumb";
import BreadCumbAbout from "../Components/Common/BreadCumbAbout";
import Pricing from "../Components/Pricing/Pricing";
import Services1 from "../Components/Services/Services1";
import Services2 from "../Components/Services/Services2";
import Services3 from "../Components/Services/Services3";
import Services4 from "../Components/Services/Services4";
import Team1 from "../Components/Team/Team1";
const banner = '../../assets/images/cart-to-table-banner.png';
const Services = () => {
    return (
        <div className="service-page">
            <BreadCumbAbout image={banner} />
            <Services3 />
            <Pricing />
            <Team1></Team1>
            {/* <Blog1></Blog1> */}

        </div>
    );
};

export default Services;