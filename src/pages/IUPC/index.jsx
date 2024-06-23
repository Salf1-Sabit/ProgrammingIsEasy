/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from "react";
import { Outlet } from "react-router";

import Wrapper from "../../components/UI/Wrapper";
import IUPCSidebar from "./IUPCSidebar";
import IUPCCTA from "./IUPCCTA";
import IUPCMobileSidebar from "./IUPCMobileSidebar";
import SubmitIUPCInfoForm from "./SubmitIUPCInfoForm";

const index = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <Wrapper className="flex relative mb-[5%] md:mb-[2%]">
      <IUPCSidebar
        isSidebarOpen={isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen}
      />
      <IUPCMobileSidebar
        isSidebarOpen={isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen}
      />
      <Outlet></Outlet>
      <IUPCCTA />
      <SubmitIUPCInfoForm />
    </Wrapper>
  );
};

export default index;
