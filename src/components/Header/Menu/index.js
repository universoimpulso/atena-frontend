import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { Creators as AuthActions } from '~/store/ducks/auth'

import Auth from '~/components/auth'
import avatarSvg from '~/assets/avatarWhite.svg'
import StyledMenu from './styles'

class Menu extends Component {
  static propTypes = {
    signOut: PropTypes.func.isRequired,
    toggleModal: PropTypes.func.isRequired,
    auth: PropTypes.shape({
      activeModal: PropTypes.bool.isRequired,
      avatar: PropTypes.string,
      uuid: PropTypes.string,
      isCoreTeam: PropTypes.bool,
    }).isRequired,
  }

  toggleModal = () => {
    this.props.toggleModal()
  }

  logout = () => {
    this.props.signOut()
  }

  render() {
    const { uuid, isCoreTeam, activeModal, avatar } = this.props.auth
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
                    <img
                      src={avatar || avatarSvg}
                      onError={e => {
                        e.target.onerror = null
                        e.target.src = avatarSvg
                      }}
                      alt={`Foto do usuário`}
                      className="avatar"
                    />
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
        {activeModal && <Auth />}
      </>
    )
  }
}

const mapStateToProps = state => ({
  auth: state.auth,
})

const mapDispatchToProps = dispatch => bindActionCreators(AuthActions, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Menu)
