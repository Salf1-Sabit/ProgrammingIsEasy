import React from "react";
import { useNavigate } from "react-router-dom";

import DropdownRow from "./DropdownRow";
import { TbLogout2 } from "react-icons/tb";
import { LiaUserCircle } from "react-icons/lia";
import { MdOutlineDashboardCustomize } from "react-icons/md";
import { IoSettingsOutline } from "react-icons/io5";
import { FaBugSlash } from "react-icons/fa6";

import { SnackbarContext } from "../../store/SnackbarContext";
import getUserFullName from "../../../utils/getUserFullName";

const ProfileDropdown = () => {
  const navigate = useNavigate();
  const { handleSnackbarClick } = React.useContext(SnackbarContext);
  const userFullName = getUserFullName();
  const user = JSON.parse(localStorage.getItem("user"));
  console.log(userFullName, user.userName);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/");
    handleSnackbarClick("You have been successfully logged out", "success");
  };

  return (
    <div className="bg-white absolute xl:right-0 rounded shadow-lg text-black text-[12px] sm:text-sm flex flex-col gap-2 py-[1.2em] mt-2 z-[3] w-[178px] sm:w-[232px]">
      <DropdownRow
        image={<LiaUserCircle className="text-xl sm:text-2xl md:text-3xl" />}
        title={userFullName}
        subTitle={user.userName}
        onClick={() => navigate("/profile")}
      />

      <div className="w-full h-[1px] border-b py-[2px]"></div>

      <DropdownRow
        image={
          <MdOutlineDashboardCustomize className="text-xl sm:text-2xl md:text-3xl" />
        }
        title={"Author Dashboard"}
        onClick={() => navigate("/author")}
        subTitle={"Access your space for creating problems and contents"}
      />

      <div className="w-full h-[1px] border-b py-[2px]"></div>

      <DropdownRow
        image={
          <IoSettingsOutline className="text-xl sm:text-2xl md:text-3xl" />
        }
        title={"Settings"}
        subTitle={"Access account settings"}
      />
      <DropdownRow
        image={<FaBugSlash className="text-xl sm:text-2xl md:text-3xl" />}
        title={"Bugs and Features"}
        subTitle={"File Bugs or request fetures"}
      />

      <div className="w-full h-[1px] border-b py-[2px]"></div>

      <DropdownRow
        image={<TbLogout2 className="text-xl sm:text-2xl md:text-3xl" />}
        title={"Logout"}
        onClick={handleLogout}
        subTitle={"Log out from your account"}
        isLast={true}
      />
    </div>
  );
};

export default ProfileDropdown;
