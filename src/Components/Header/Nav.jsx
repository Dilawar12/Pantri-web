import DropDown from './DropDown';
import { Link } from 'react-router-dom';

export default function Nav({ setMobileToggle }) {
  return (
    <ul className="cs_nav_list fw-medium">
      <li>
        <Link to="/" onClick={() => setMobileToggle(false)}>Home</Link>
        {/* <DropDown>
          <ul>
            <li>
              <Link to="/" onClick={() => setMobileToggle(false)}>
              Home Version 1
              </Link>
            </li>
            <li>
              <Link to="/home2" onClick={() => setMobileToggle(false)}>
              Home Version 2
              </Link>
            </li>
            <li>
              <Link to="/home3" onClick={() => setMobileToggle(false)}>
                Home Version 3
              </Link>
            </li>            
          </ul>
        </DropDown> */}
      </li>
      <li>
        <Link to="/about" onClick={() => setMobileToggle(false)}>About Us</Link>
      </li>
      <li className="menu-item-has-children">
        <Link to="/service" onClick={() => setMobileToggle(false)}>
          Services
        </Link>
        <DropDown>
          <ul>
            <li>
              <Link to="/service/carttotable" onClick={() => setMobileToggle(false)}>
                Cart-to-Table™
              </Link>
            </li>
            <li>
              <Link to="/service/laundery-pickup" onClick={() => setMobileToggle(false)}>
               Laundry Pickup & Delivery
              </Link>
            </li>
            <li>
              <Link to="/service/home-organizing" onClick={() => setMobileToggle(false)}>
                Home Organizing
              </Link>
            </li>
            {/* <li>
              <Link to="void:;" onClick={() => setMobileToggle(false)}>
              How It Works
              </Link>
            </li> */}
          </ul>
        </DropDown>

      </li>
      {/* <li className="menu-item-has-children">
        <Link to="/blog" onClick={() => setMobileToggle(false)}>
          Blog
        </Link>
        <DropDown>
          <ul>
            <li>
              <Link to="/blog" onClick={() => setMobileToggle(false)}>
                Blog
              </Link>
            </li>
            <li>
              <Link to="/blog-sidebar" onClick={() => setMobileToggle(false)}>
                Blog With Sidebar
              </Link>
            </li>            
            <li>
              <Link
                to="/blog/blog-details"
                onClick={() => setMobileToggle(false)}
              >
                Blog Details
              </Link>
            </li>
          </ul>
        </DropDown>
      </li> */}
      {/* <li>
        <Link to="/blog" onClick={() => setMobileToggle(false)}>
          Blog
        </Link>
      </li> */}
      <li>
        <Link to="/contact" onClick={() => setMobileToggle(false)}>
          Contact
        </Link>
      </li>
    </ul>
  );
}
