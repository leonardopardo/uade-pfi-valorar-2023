import React from 'react';
import { Outlet } from 'react-router-dom';
import NavbarStandard from 'MyApp/components/pages/landing/NavbarStandard';
import FooterStandard from 'MyApp/components/pages/landing/FooterStandard';

const MyWebLayout = () => {
    return(
        <>
        <NavbarStandard />
        <Outlet />
        <FooterStandard />
      </>
    )
};

export default MyWebLayout;
