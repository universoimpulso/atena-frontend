import React, { Fragment } from "react";
import PropTypes from "prop-types";
import LinkedInPage from "../LinkedIn";
import StyledMenu from "./Menu.style";

const links = user => {
  const whithoutAuth = [
    {
      class: "login",
      title: "login",
      link: "/auth/linkedin"
    }
  ];
  const withAuth = [
    {
      class: "logout",
      title: "Sair",
      link: "/auth/logout"
    }
  ];

  const options = user ? withAuth : whithoutAuth;

  return [
    {
      class: "index",
      title: "como funciona",
      link: "/"
    },
    {
      class: "ranking",
      title: "ranking",
      link: "/ranking"
    },
    ...options
  ];
};

const ProfileUser = ({ avatar }) => (
  <p className="profile">
    <img src={avatar} alt="" className="avatar" />
  </p>
);

ProfileUser.propTypes = {
  avatar: PropTypes.string.isRequired
};

const renderLinks = ({ user }) => (
  <Fragment>
    <li key={0}>
      <a className="index" href={"/"}>
        como funciona
      </a>
    </li>
    <li key={1}>
      <a className="ranking" href={"/ranking"}>
        ranking
      </a>
    </li>

    <li>
      <LinkedInPage />
    </li>
    {user && (
      <li className="user">
        <ProfileUser avatar={user.avatar} />
      </li>
    )}
  </Fragment>
);

renderLinks.propTypes = {
  user: PropTypes.object
};

const Menu = props => <StyledMenu>{renderLinks(props)}</StyledMenu>;

export default Menu;
