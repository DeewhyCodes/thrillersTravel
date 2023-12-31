import React, { useState } from "react";
import "./SideBar.css";
import { profileDetails, routes } from "../../assets/constants";
import { Link } from "react-router-dom";

const SideBar = ({ toggleSidebar }) => {
  const { profileImage, profileName, editIcon } = profileDetails;
  const [activeLink, setActiveLink] = useState(null);

  const handleLinkClick = (index) => {
    setActiveLink(index);
  };

  return (
    <>
      <div className="head">
        <h2 className="title">
          <span>Victor</span>Booking
        </h2>
        <i className="bi bi-x-lg" onClick={toggleSidebar}></i>
      </div>
      <div className="user-profile">
        <div className="profile-image">
          <img src={profileImage} alt={profileName} />
          <i className={editIcon}></i>
        </div>
        <p className="profile-name">{profileName}</p>
      </div>
      <div className="routes">
        {routes.map((route, index) => (
          <Link
            key={index}
            className={"route " + (activeLink === index ? "active" : "")}
            onClick={() => handleLinkClick(index)}
          >
            <i className={route.icon}></i>
            <p>{route.text}</p>
          </Link>
        ))}
      </div>
      <button className="logout">
        <i className="bi bi-box-arrow-in-left"></i>Logout
      </button>
    </>
  );
};

export default SideBar;
