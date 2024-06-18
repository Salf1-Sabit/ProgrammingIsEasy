/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from "react";
import { Outlet } from "react-router";

import Wrapper from "../../components/UI/Wrapper";
import IUPCSidebar from "./IUPCSidebar";
import IUPCCTA from "./IUPCCTA";
import IUPCMobileSidebar from "./IUPCMobileSidebar";

const index = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <Wrapper className="flex relative">
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
    </Wrapper>
  );
};

export default index;
