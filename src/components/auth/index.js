import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { Creators as AuthActions } from "../../store/ducks/auth";

import { Modal, Form, Button } from "./styles";

class Auth extends Component {
  static propTypes = {
    action: PropTypes.func.isRequired,
    signInRequest: PropTypes.func.isRequired
  };
  state = {
    rocketId: "",
    password: ""
  };

  handleSubmit = event => {
    event.preventDefault();
    const { rocketId, password } = this.state;
    const { signInRequest } = this.props;

    signInRequest({ rocketId, password });
  };

  handleInputChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    const { rocketId, password } = this.state;
    return (
      <Modal onClick={this.props.action}>
        <Form onSubmit={this.handleSubmit} onClick={e => e.stopPropagation()}>
          <h1>Ola, impulser!</h1>
          <span>RocketId</span>
          <input
            type="text"
            name="rocketId"
            value={rocketId}
            onChange={event => this.handleInputChange(event)}
          />
          <span>Senha</span>
          <input
            type="password"
            name="password"
            value={password}
            onChange={event => this.handleInputChange(event)}
          />
          <Button>login</Button>
        </Form>
      </Modal>
    );
  }
}

const mapDispatchToProps = dispatch =>
  bindActionCreators(AuthActions, dispatch);

export default connect(
  null,
  mapDispatchToProps
)(Auth);
