import React from "react";
import PageNav from "../components/PageNav";
import { Outlet } from "react-router-dom";

function AppLayout() {
  return (
    <>
      <PageNav />
      <Outlet />
    </>
  );
}

export default AppLayout;
