/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from "react";
import UserIcon from "../../../assets/icons/user.png";
import ProfileDropdown from "./ProfileDropdown";

const index = ({ className }) => {
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);

  const toggleProfileDropDown = () => {
    setIsProfileDropdownOpen((prevState) => !prevState);
  };

  return (
    <div
      className={`cursor-pointer ${className} ring-4 rounded-full w-fit`}
      onClick={toggleProfileDropDown}
    >
      <img src={UserIcon} alt="user" className="w-6 h-6 lg:w-8 lg:h-8" />
      {isProfileDropdownOpen && <ProfileDropdown />}
    </div>
  );
};

export default index;
