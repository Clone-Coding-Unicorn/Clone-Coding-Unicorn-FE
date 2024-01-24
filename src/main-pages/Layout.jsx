import React from "react";
import { Outlet } from "react-router-dom";
import CustomNavbar from "./Navbar";
import CustomFooter from "./Footer";
const layoutStyles = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  // alignItems: 'center',
  // minHeight: '90vh',
};


// Header and Footer components
const Header = () => {
  return <CustomNavbar />;
};

const Footer = () => {
  return <CustomFooter />;
};

// Main Layout component
function Layout() {
  return (
    <div>
      <Header />
      <div style={{ ...layoutStyles }}>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default Layout;
