import React, { Component } from 'react'

import api from '../../services/api'
import {
  Wrapper,
  Container,
  UserWrapper,
  UserInfo,
  ButtonWrapper,
  Button
} from './style'

class UserModal extends Component {
  state = {
    loading: true,
    sucess: false,
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
      const response = await api.put(`api/v1/edit-score/${rocketUser._id}`, {
        type: 'rocket',
        score: slackUser.score
      })
      if (response.data) {
        updatedRocketUser = response.data
        updatedSlackUser = await this.resetSlackScore(slackUser._id)
      }
    } catch (error) {
      console.log(error)
    }

    this.setState({
      rocketUser: updatedRocketUser,
      slackUser: updatedSlackUser
    })
  }

  resetSlackScore = async id => {
    try {
      const response = await api.put(`api/v1/edit-score/${id}`, {
        type: 'slack',
        score: -1
      })
      return response.data
    } catch (error) {
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
                  {slackUser.avatar ? (
                    <img src={slackUser.avatar} alt="" />
                  ) : (
                    <i className="fa fa-user" />
                  )}
                  <small>{slackUser.name}</small>
                </header>

                <ul>
                  <li>
                    Core Team{' '}
                    <small>{slackUser.isCoreTeam ? 'sim' : 'nao'}</small>
                  </li>
                  <li>
                    Times{' '}
                    <small>{slackUser.teams.map(team => team.teams)}</small>
                  </li>
                  <li>
                    Nivel <small>{slackUser.level}</small>
                  </li>
                  <li>
                    Pontos <small>{slackUser.score}</small>
                  </li>
                </ul>
              </UserInfo>
              <UserInfo key={rocketUser._id}>
                <header>
                  {rocketUser.avatar ? (
                    <img src={rocketUser.avatar} alt="" />
                  ) : (
                    <i className="fa fa-user" />
                  )}
                  <small>{rocketUser.name}</small>
                </header>

                <ul>
                  <li>
                    Core Team{' '}
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
                onClick={this.transferScore}
              >
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
