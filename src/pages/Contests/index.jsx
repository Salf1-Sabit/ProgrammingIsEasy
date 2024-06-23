/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from "react";
import { Outlet } from "react-router";

import Wrapper from "../../components/UI/Wrapper";
import ContestsSidebar from "./ContestsSidebar";
import HostContestsCTA from "../Contests/HostContestCTA";
import MobileContestsSidebar from "./MobileContestsSidebar";

const index = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <Wrapper className="flex relative mb-[5%] md:mb-[2%]">
      <ContestsSidebar
        isSidebarOpen={isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen}
      />
      <MobileContestsSidebar
        isSidebarOpen={isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen}
      />
      <Outlet></Outlet>
      <HostContestsCTA />
    </Wrapper>
  );
};

export default index;
