import { Navigate, Outlet } from "react-router-dom";
import ScrollToTop from "../Components/Common/ScrollToTop";
// import SidebarLayout from "./SidebarLayout";
import NavigationMenu from "../Components/shared/NavigationMenu";
import NavigationProvider from "../contentApi/NavigationProvider";
import Header from "../Components/shared/header/Header";
import { useSelector } from "react-redux";
import { selectToken } from "../store/user/userSlice";


const DashboardLayout = () => {
    const token = useSelector(selectToken);
    if (!token) {
        return <Navigate to="/" replace />;
    }
    return (
        <NavigationProvider>
            <div className="main-page-area3">
                <ScrollToTop />
                <Header />
                <NavigationMenu />
                <Outlet />
            </div>
        </NavigationProvider>
    );
};

export default DashboardLayout;