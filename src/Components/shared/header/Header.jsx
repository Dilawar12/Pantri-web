import { useContext, useEffect, useRef, useState } from 'react';
import { FiAlignLeft, FiArrowRight } from "react-icons/fi";
import { useSelector } from 'react-redux';
import { NavigationContext } from '../../../contentApi/NavigationProvider';
import { selectLoginUser } from '../../../store/user/userSlice';
import ProfileModal from './ProfileModal';


const Header = () => {
    const { navigationOpen, setNavigationOpen } = useContext(NavigationContext)
    const [openMegaMenu, setOpenMegaMenu] = useState(false)
    const [navigationExpend, setNavigationExpend] = useState(false)
    const miniButtonRef = useRef(null);
    const expendButtonRef = useRef(null);
    const loginUser = useSelector(selectLoginUser)

    useEffect(() => {
        const handleResize = () => {
            const newWindowWidth = window.innerWidth;
            if (newWindowWidth <= 1024) {
                document.documentElement.classList.remove('minimenu');
                document.querySelector('.navigation-down-1600').style.display = 'none';
            }
            else if (newWindowWidth >= 1025 && newWindowWidth <= 1400) {
                document.documentElement.classList.add('minimenu');
                document.querySelector('.navigation-up-1600').style.display = 'none';
                document.querySelector('.navigation-down-1600').style.display = 'block';
            }
            else {
                document.documentElement.classList.remove('minimenu');
                document.querySelector('.navigation-up-1600').style.display = 'block';
                document.querySelector('.navigation-down-1600').style.display = 'none';
            }
        };

        window.addEventListener('resize', handleResize);

        handleResize();

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const handleNavigationExpendUp = (e, pram) => {
        e.preventDefault()
        if (pram === "show") {
            setNavigationExpend(true);
            document.documentElement.classList.add('minimenu')
        }
        else {
            setNavigationExpend(false);
            document.documentElement.classList.remove('minimenu')
        }
    }

    const handleNavigationExpendDown = (e, pram) => {
        e.preventDefault()
        if (pram === "show") {
            setNavigationExpend(true);
            document.documentElement.classList.remove('minimenu')
        }
        else {
            setNavigationExpend(false);
            document.documentElement.classList.add('minimenu')
        }
    }
    return (
        <header className="nxl-header">
            <div className="header-wrapper">

                {/* <!--! [Start] Header Left !--> */}
                <div className="header-left d-flex align-items-center gap-4">

                    <div className="nxl-navigation-toggle navigation-up-1600">
                        <a href="#" onClick={(e) => handleNavigationExpendUp(e, "show")} id="menu-mini-button" ref={miniButtonRef} style={{ display: navigationExpend ? "none" : "block" }}>
                            <FiAlignLeft size={24} />
                        </a>
                        <a href="#" onClick={(e) => handleNavigationExpendUp(e, "hide")} id="menu-expend-button" ref={expendButtonRef} style={{ display: navigationExpend ? "block" : "none" }}>
                            <FiArrowRight size={24} />
                        </a>
                    </div>
                    <div className="nxl-navigation-toggle navigation-down-1600">

                        <a href="#" onClick={(e) => handleNavigationExpendDown(e, "hide")} id="menu-mini-button" ref={miniButtonRef} style={{ display: navigationExpend ? "block" : "none" }}>
                            <FiAlignLeft size={24} />
                        </a>
                        <a href="#" onClick={(e) => handleNavigationExpendDown(e, "show")} id="menu-expend-button" ref={expendButtonRef} style={{ display: navigationExpend ? "none" : "block" }}>
                            <FiArrowRight size={24} />
                        </a>

                    </div>
                </div>
                <div className="header-right ms-auto">
                    <div className="d-flex align-items-center">

                        <ProfileModal />
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header