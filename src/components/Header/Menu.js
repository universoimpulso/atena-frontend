import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { Creators as AuthActions } from "../../store/ducks/auth";

import StyledMenu from "./Menu.style";
import { Link } from "react-router-dom";
import Auth from "../auth";
import mock from "../../assets/mock.jpeg";

class Menu extends Component {
  static propTypes = {
    auth: PropTypes.shape({
      loading: PropTypes.bool,
      error: PropTypes.string
    }).isRequired,
    signOut: PropTypes.func.isRequired
  };

  state = {
    activeModal: false
  };

  toogleModal = () => {
    this.setState({ activeModal: !this.state.activeModal });
  };

  render() {
    const { auth, signOut } = this.props;

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
          {auth.user ? (
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
              <li key="logout">
                <button onClick={signOut}>logout</button>
              </li>
              <li className="user">
                <button className="profile">
                  <img src={mock} alt="" className="avatar" />
                </button>
              </li>
            </>
          ) : (
            <li key="login">
              <button onClick={this.toogleModal}>login</button>
            </li>
          )}
        </StyledMenu>
        {this.state.activeModal && <Auth action={this.toogleModal} />}
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
