import React, { Fragment, useState } from "react";
import { FiChevronRight } from "react-icons/fi";
import { Link, useLocation } from "react-router-dom";
import { menuList } from "../../utils/fackData/menuList";
import getIcon from "../../utils/getIcon";

const Menus = () => {
    const [openDropdown, setOpenDropdown] = useState(null);
    const pathName = useLocation().pathname;
    const handleMainMenu = (e, name, hasDropdown) => {
        if (hasDropdown) {
            e.preventDefault(); // prevent navigation
            setOpenDropdown((prev) => (prev === name ? null : name));
        }
    };

    return (
        <>
            {menuList.map(({ dropdownMenu, id, name, path, icon }) => {
                const hasDropdown = dropdownMenu?.length > 0;
                const isOpen = openDropdown === name;

                return (
                    <li
                        key={id}
                        className={`nxl-item nxl-hasmenu ${isOpen ? "active nxl-trigger" : ""}`}
                    >
                        {hasDropdown ? (
                            <div onClick={(e) => handleMainMenu(e, name, true)} className="nxl-link text-capitalize">
                                <span className="nxl-micon">{getIcon(icon)}</span>
                                <span className="nxl-mtext" style={{ paddingLeft: "2.5px" }}>
                                    {name}
                                </span>
                                <span className="nxl-arrow fs-16">
                                    <FiChevronRight />
                                </span>
                            </div>
                        ) : (
                            <Link to={path} className="nxl-link text-capitalize">
                                <span className="nxl-micon">{getIcon(icon)}</span>
                                <span className="nxl-mtext" style={{ paddingLeft: "2.5px" }}>
                                    {name}
                                </span>
                            </Link>
                        )}

                        {hasDropdown && (
                            <ul className={`nxl-submenu ${isOpen ? "nxl-menu-visible" : "nxl-menu-hidden"}`}>
                                {dropdownMenu.map(({ id, name, path }) => {
                                    return (
                                        <Fragment key={id}>
                                            <li
                                                className={`nxl-item  ${pathName === path ? "active" : ""
                                                    }`}
                                            >
                                                <Link className="nxl-link" to={path}>
                                                    {name}
                                                </Link>
                                            </li>
                                        </Fragment>
                                    );
                                })}
                            </ul>
                        )}
                    </li>
                );
            })}
        </>
    );
};

export default Menus;
