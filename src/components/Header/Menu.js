import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { Creators as AuthActions } from "../../store/ducks/auth";

import StyledMenu from "./Menu.style";
import { Link } from "react-router-dom";
import Auth from "../auth";

class Menu extends Component {
  static propTypes = {
    auth: PropTypes.shape({
      activeModal: PropTypes.bool,
      loading: PropTypes.bool,
      avatar: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
      error: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
      uuid: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
      isCoreTeam: PropTypes.bool,
      token: PropTypes.oneOfType([PropTypes.string, PropTypes.bool])
    }).isRequired,
    signOut: PropTypes.func.isRequired,
    toggleModal: PropTypes.func.isRequired
  };

  toggleModal = () => {
    this.props.toggleModal();
  };
  logout = () => {
    this.props.signOut();
  };

  render() {
    const { uuid, isCoreTeam, activeModal, avatar } = this.props.auth;
    return (
      <>
        <StyledMenu>
          <li key="index">
            <Link to="/">
              <button>como funciona</button>
            </Link>
          </li>
          <li key="ranking">
            <Link to="/ranking">
              <button>ranking</button>
            </Link>
          </li>
          {uuid ? (
            <>
              {isCoreTeam && (
                <>
                  <li key="transfer">
                    <Link to="/transfer">
                      <button>Transferir</button>
                    </Link>
                  </li>
                  <li key="admin">
                    <Link to="/admin">
                      <button>Admin</button>
                    </Link>
                  </li>
                </>
              )}

              <li key="logout">
                <button onClick={this.logout}>logout</button>
              </li>
              <li className="user">
                <Link to="/userInfo">
                  <button className="profile">
                    <img src={avatar} alt="" className="avatar" />
                  </button>
                </Link>
              </li>
            </>
          ) : (
            <li key="login">
              <button onClick={this.toggleModal}>login</button>
            </li>
          )}
        </StyledMenu>
        {activeModal && <Auth action={this.toggleModal} />}
      </>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(AuthActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Menu);
