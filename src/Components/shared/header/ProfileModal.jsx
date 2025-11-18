import React, { useState, useEffect, useRef } from "react";
import { FiLogOut, FiUser } from "react-icons/fi";
import avatar from "../../../../public/assets/images/avatar/1.png";
import { useDispatch, useSelector } from "react-redux";
import { selectLoginUser } from "../../../store/user/userSlice";

const ProfileModal = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef(null);
  const dispatch = useDispatch();
  const loginUser = useSelector(selectLoginUser)
  // ✅ Click outside to close
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);
  console.log(loginUser, 'loginUser');
  return (
    <div className="dropdown nxl-h-item" ref={dropdownRef}>
      <a
        href="#"
        onClick={(e) => {
          e.preventDefault(); // prevent page jump
          setShowDropdown((prev) => !prev); // toggle on click
        }}
      >
        <img
          src={avatar}
          alt="user-image"
          className="img-fluid user-avtar me-0"
        />
      </a>

      <div
        className={`dropdown-menu dropdown-menu-end nxl-h-dropdown nxl-user-dropdown ${showDropdown ? "show" : ""
          }`}
      >
        <div className="dropdown-header">
          <div className="d-flex align-items-center">
            <img src={avatar} alt="user" className="img-fluid user-avtar" />
            <div>
              <h6 className="text-dark mb-0">
                {loginUser?.firstName} {loginUser?.lastName}
                {
                  loginUser?.isPremium &&
                  <span className="badge bg-soft-success text-success ms-1">
                    PRO
                  </span>
                }
              </h6>
              <span className="fs-12 fw-medium text-muted">
                {loginUser?.email}
              </span>
            </div>
          </div>
        </div>

        <a href="#" className="dropdown-item">
          <i>
            <FiUser />
          </i>
          <span>Profile Details</span>
        </a>

        <div className="dropdown-divider"></div>

        <button onClick={() => {
          dispatch({ type: 'user/logout' });
        }} className="dropdown-item">
          <i>
            <FiLogOut />
          </i>
          <span>Logout</span>
        </button>
      </div>
    </div>
  );
};

export default ProfileModal;
