import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Nav from './Nav';
import { useModal } from "../Modal/ModalContext.jsx";
import { useDispatch, useSelector } from 'react-redux';
import { selectToken, selectUserToken } from '../../store/user/userSlice.js';

export default function HeaderStyle3({ variant }) {
  const [mobileToggle, setMobileToggle] = useState(false);
  const [isSticky, setIsSticky] = useState();
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const { openModal } = useModal();
  const token = useSelector(selectToken);
  const isCostumerLogin = useSelector(selectUserToken)
  const dispatch = useDispatch();
  const navigation = useNavigate()
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      if (currentScrollPos > prevScrollPos) {
        setIsSticky('cs-gescout_sticky'); // Scrolling down
      } else if (currentScrollPos !== 0) {
        setIsSticky('cs-gescout_show cs-gescout_sticky'); // Scrolling up
      } else {
        setIsSticky();
      }
      setPrevScrollPos(currentScrollPos); // Update previous scroll position
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll); // Cleanup the event listener
    };
  }, [prevScrollPos]);


  const handleGetStartedClick = () => {
    if (token) {
      navigation('/dashboard');
      return;
    }
    if (isCostumerLogin) {
      dispatch({ type: 'user/logout' });
      navigation('/');
      return;
    }
    openModal();
  }


  return (
    <div className='header-area2 header_nav_03'>
      <header
        className={`cs_site_header cs_style_1 ${variant ? variant : ''
          } cs_sticky_header cs_site_header_full_width ${mobileToggle ? 'cs_mobile_toggle_active' : ''
          } ${isSticky ? isSticky : ''}`}
      >
        <div className="cs_top_header">
          <div className="container-fluid">
            <div className="cs_top_header_in">
              <div className="cs_top_header_left header-info">
                {/* <ul className="cs_top_nav d-flex flex-wrap align-items-center cs_fs_12 text-white m-0 p-0">
                  <li><i className="bi bi-geo-alt-fill"></i>Houston, TX</li>
                  <li className="exam-gmail"><i className="bi bi-envelope"></i>info@pantri-app.com</li>
                  <li><i className="bi bi-alarm"></i>9.00 am - 5.00 pm</li>
                </ul> */}
              </div>
              <div className="cs_top_header_right">
                <div className="cs_header_social_links_wrap">
                  <div className="cs_header_social_links top-header-social-icon">
                    <ul>
                      <li><a href="https://www.facebook.com/PantriApp/"><i className="bi bi-facebook"></i></a></li>
                      <li><a href="#"><i className="bi bi-twitter"></i></a></li>
                      <li><a href="https://www.linkedin.com/company/pantriapp/"><i className="bi bi-linkedin"></i></a></li>
                      <li><a href="https://www.instagram.com/pantriapp/"><i className="bi bi-instagram"></i></a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="cs_main_header cs_accent_bg">
          <div className="container-fluid">
            <div className="cs_main_header_in">

              <div className="cs_main_header_left">
                <Link className="cs_site_branding" to="/">
                  <img src="/assets/images/logo.png" alt="Logo" />
                </Link>
              </div>

              <div className="cs_main_header_center">
                <div className="cs_nav cs_primary_font fw-medium">
                  <span
                    className={
                      mobileToggle
                        ? 'cs-munu_toggle cs_teggle_active'
                        : 'cs-munu_toggle'
                    }
                    onClick={() => setMobileToggle(!mobileToggle)}
                  >
                    <span></span>
                  </span>
                  <Nav setMobileToggle={setMobileToggle} />
                </div>
              </div>
              <div className="cs_main_header_right">
                <div className="solutek-btn2">
                  <button onClick={handleGetStartedClick}>{isCostumerLogin ? 'Logout' : token ? "Dashboard" : 'Sign Up'} </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <div className="cs_site_header_spacing_140"></div>
    </div>

  );
}
