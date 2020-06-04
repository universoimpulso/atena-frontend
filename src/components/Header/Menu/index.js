import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { Creators as AuthActions } from '../../../store/ducks/auth'

import StyledMenu from './styles'

const {
  REACT_APP_RANKING_URL: rankingUrl,
  REACT_APP_IMPULSER_APP_URL: impulserAppUrl
} = process.env

class Menu extends Component {
  static propTypes = {
    signOut: PropTypes.func.isRequired,
    toggleModal: PropTypes.func.isRequired,
    auth: PropTypes.shape({
      activeModal: PropTypes.bool.isRequired,
      avatar: PropTypes.string,
      uuid: PropTypes.string,
      isCoreTeam: PropTypes.bool
    }).isRequired
  }

  toggleModal = () => {
    this.props.toggleModal()
  }

  logout = () => {
    this.props.signOut()
  }

  render() {
    return (
      <>
        <StyledMenu>
          <li key="index">
            <Link to="/">
              <button>como funciona</button>
            </Link>
          </li>
          <li key="ranking">
            <a target="_blank" rel="noopener noreferrer" href={rankingUrl}>
              <button>ranking</button>
            </a>
          </li>
          <li key="login">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={impulserAppUrl}>
              <button>login</button>
            </a>
          </li>
        </StyledMenu>
      </>
    )
  }
}

const mapStateToProps = (state) => ({
  auth: state.auth
})

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(AuthActions, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Menu)
