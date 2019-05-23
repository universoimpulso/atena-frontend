import React, { Fragment } from "react";
// import PropTypes from "prop-types";
import StyledApp from "./styles/global";
import Header from "./components/Header/index";
import Footer from "./components/Footer/index";

const Layout = ({ user, children, page }) => (
  <Fragment>
    <StyledApp />
    <Header page={page} user={user} />
    <main className="layout">{children}</main>
    <Footer />
  </Fragment>
);

// Layout.propTypes = {
//   children: PropTypes.element.isRequired,
//   page: PropTypes.string,
//   user: PropTypes.object
// };

export default Layout;
