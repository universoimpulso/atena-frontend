import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { toast } from "react-toastify";
import { LinkedIn } from "react-linkedin-login-oauth2";

import { Creators as AuthActions } from "../../store/ducks/auth";
import { SmallLoading } from "../../components/utils";

import { Modal, Form, Button, LinkedinButton } from "./styles";

const clientId = process.env.REACT_APP_LINKEDIN_KEY;
const callbackUrl = process.env.REACT_APP_LINKEDIN_URL_CALLBACK;

class Auth extends Component {
  static propTypes = {
    auth: PropTypes.object,
    loading: PropTypes.bool.isRequired,
    action: PropTypes.func.isRequired,
    signInRequest: PropTypes.func.isRequired,
    signInLinkedinRequest: PropTypes.func.isRequired
  };

  state = {
    rocketId: "",
    password: ""
  };

  handleLinkedinSuccess = data => {
    const { code } = data;
    this.props.signInRequest({ code });
  };

  handleLinkedinFailure = error => {
    toast.error(`Não foi possível completar o login: ${error.message}`);
  };

  handleSubmit = event => {
    event.preventDefault();
    const { rocketId, password } = this.state;

    if (rocketId === "" || password === "") {
      toast.warn(`Preencha todos os campos.`);
      return;
    }
    this.props.signInRequest({ rocketId, password });
  };

  handleInputChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    const { rocketId, password } = this.state;

    return (
      <Modal onClick={this.props.action}>
        <Form onSubmit={this.handleSubmit} onClick={e => e.stopPropagation()}>
          <h1>Olá, impulser!</h1>
          <span>Usuário do Rocket.Chat</span>
          <input
            type="text"
            name="rocketId"
            value={rocketId}
            onChange={this.handleInputChange}
          />
          <span>Senha</span>
          <input
            type="password"
            name="password"
            value={password}
            onChange={this.handleInputChange}
          />
          <Button type="submit">Logar</Button>
          <p className="or">- ou -</p>
          <LinkedinButton>
            <LinkedIn
              className="bt-linkedin"
              clientId={clientId}
              onFailure={this.handleLinkedinFailure}
              onSuccess={this.handleLinkedinSuccess}
              redirectUri={callbackUrl}
              scope="r_liteprofile"
            >
              Logar com{" "}
              <img src="/linkedin-icon.png" alt="Linkedin" title="Linkedin" />
            </LinkedIn>
          </LinkedinButton>
        </Form>
        {this.props.auth.loading && <SmallLoading />}
      </Modal>
    );
  }
}

const mapDispatchToProps = dispatch =>
  bindActionCreators(AuthActions, dispatch);
const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Auth);
