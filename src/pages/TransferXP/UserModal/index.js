import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { toast } from 'react-toastify'

import api from '../../../services/api'
import avatarSvg from '../../../assets/avatar.svg'
import {
  Wrapper,
  Container,
  UserWrapper,
  UserInfo,
  ButtonWrapper,
  Button
} from './style'

class UserModal extends Component {
  static propTypes = {
    users: PropTypes.object,
    selectRocketUser: PropTypes.string,
    selectSlackUser: PropTypes.string,
    closeModal: PropTypes.bool
  }

  state = {
    loading: true,
    rocketUser: null,
    slackUser: null,
    updatedRocketUser: null,
    updatedSlackUser: null
  }

  componentDidMount() {
    const { selectRocketUser, selectSlackUser } = this.props.users
    selectSlackUser.score = Math.round(selectSlackUser.score)
    this.setState({
      loading: false,
      rocketUser: selectRocketUser,
      slackUser: selectSlackUser
    })
  }

  transferScore = async () => {
    const { rocketUser, slackUser } = this.state
    let updatedSlackUser, updatedRocketUser
    try {
      const response = await api.put(`/users/${rocketUser._id}/score`, {
        type: 'rocket',
        score: slackUser.score
      })
      updatedRocketUser = response.data
    } catch (error) {
      toast.error(
        'Não foi possivel transferir a pontuação para o usuario Rocket. Operação abortada '
      )
      console.log(error)
      return
    }

    updatedSlackUser = await this.resetSlackScore(slackUser._id)
    this.setState({
      rocketUser: updatedRocketUser,
      slackUser: updatedSlackUser
    })
  }

  resetSlackScore = async id => {
    try {
      const response = await api.put(`/users/${id}/score`, {
        type: 'slack',
        score: -1
      })
      return response.data
    } catch (error) {
      toast.error('Não foi possivel resetar pontuação do usuario Slack')
      console.log(error)
    }
  }

  render() {
    const { loading, rocketUser, slackUser } = this.state
    const { closeModal } = this.props
    return (
      <Wrapper>
        {!loading && (
          <Container>
            <UserWrapper>
              <UserInfo key={slackUser._id}>
                <header>
                  <img
                    src={slackUser.avatar || avatarSvg}
                    alt={`Foto de ${slackUser.name}`}
                    onError={e => {
                      e.target.onerror = null
                      e.target.src = avatarSvg
                    }}
                  />

                  <small>{slackUser.name}</small>
                </header>

                <ul>
                  <li>
                    <p>Core Team</p>
                    <small>{slackUser.isCoreTeam ? 'sim' : 'nao'}</small>
                  </li>

                  <li>
                    <p>Nivel</p>
                    <small>{slackUser.level}</small>
                  </li>
                  <li>
                    <p>Pontos</p>
                    <small>{slackUser.score}</small>
                  </li>
                </ul>
              </UserInfo>
              <UserInfo key={rocketUser._id}>
                <header>
                  <img
                    src={rocketUser.avatar || avatarSvg}
                    alt={`Foto de ${rocketUser.name}`}
                    onError={e => {
                      e.target.onerror = null
                      e.target.src = avatarSvg
                    }}
                  />

                  <small>{rocketUser.name}</small>
                </header>

                <ul>
                  <li>
                    Core Team
                    <small>{rocketUser.isCoreTeam ? 'sim' : 'nao'}</small>
                  </li>
                  <li>
                    Usuario <small>{rocketUser.username}</small>
                  </li>
                  <li>
                    Nivel <small>{rocketUser.level}</small>
                  </li>
                  <li>
                    Pontos <small>{rocketUser.score}</small>
                  </li>
                </ul>
              </UserInfo>
            </UserWrapper>
            <ButtonWrapper>
              <Button
                disabled={slackUser.score === -1}
                onClick={this.transferScore}>
                {slackUser.score === -1 ? 'sucesso' : 'transferir'}
              </Button>
              <Button onClick={() => closeModal(true)} gray>
                voltar
              </Button>
            </ButtonWrapper>
          </Container>
        )}
      </Wrapper>
    )
  }
}

export default UserModal
