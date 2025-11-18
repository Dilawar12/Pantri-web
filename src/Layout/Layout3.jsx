import { Outlet } from "react-router-dom";
import Footer from "../Components/Footer/Footer";
import HeaderStyle3 from "../Components/Header/HeaderStyle3";
import ScrollToTop from "../Components/Common/ScrollToTop";
import { ModalProvider } from "../Components/Modal/ModalContext";


const Layout3 = () => {
    return (
        <ModalProvider>
            <div className="main-page-area3">
                <ScrollToTop />
                <HeaderStyle3 />
                <Outlet />
                <Footer />
            </div>
        </ModalProvider>
    );
};

export default Layout3;