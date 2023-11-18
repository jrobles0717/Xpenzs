import React, { Fragment } from "react";

import MainNavigation from "../components/MainNavigation";
import { Outlet } from "react-router-dom";

const RootLayout = () => {
  return (
    <Fragment>
      <MainNavigation />
      <main className="main-layout">
        <Outlet />
      </main>
    </Fragment>
  );
};

export default RootLayout;
