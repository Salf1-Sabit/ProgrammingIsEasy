import React from "react";
import { Outlet } from "react-router";

import AuthorSidebar from "./AuthorSidebar";
import Wrapper from "../../components/UI/Wrapper";

const Author = () => {
  return (
    <Wrapper className="flex justify-between items-center">
      <Outlet></Outlet>
      <AuthorSidebar />
    </Wrapper>
  );
};

export default Author;
