import React, { Fragment } from "react";
import StyledMenu from "./Menu.style";

const ProfileUser = ({ avatar }) => (
  <p className="profile">
    <img src={avatar} alt="" className="avatar" />
  </p>
);

const renderLinks = ({ user }) => (
  <Fragment>
    <li key="index">
      <a className="index" href={"/"}>
        como funciona
      </a>
    </li>
    <li key="ranking">
      <a className="ranking" href={"/ranking"}>
        ranking
      </a>
    </li>

    {user && (
      <li className="user">
        <ProfileUser avatar={user.avatar} />
      </li>
    )}
  </Fragment>
);

const Menu = props => <StyledMenu>{renderLinks(props)}</StyledMenu>;

export default Menu;
