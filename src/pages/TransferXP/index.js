import React, { Component } from 'react'
import { toast } from 'react-toastify'

import api from '../../services/api'
import UserModal from './UserModal'
import avatarSvg from '../../assets/avatar.svg'
import { PageLoading } from '../../components/utils'
import { StyledTrasferXp, UserList } from './styles'

class ScreenTransferXp extends Component {
  state = {
    loading: true,
    slackUsers: [],
    rocketUsers: [],
    selectSlackUser: null,
    selectRocketUser: null,
    userModal: false
  }

  componentDidMount() {
    this.getSlackUsers()
  }

  getSlackUsers = async () => {
    try {
      const response = await api.get(`/users?slack=true`)

      this.setState({
        loading: false,
        slackUsers: response.data
      })
    } catch (error) {
      toast.warn('nao foi possivel buscar usuarios Slack')
      console.log(error)
    }
  }

  searchByName = async user => {
    const firstName = user.name.split(' ')[0]

    try {
      const response = await api.get(`/users?name=${firstName}`)
      this.setState({
        rocketUsers: response.data,
        selectSlackUser: user
      })
    } catch (error) {
      toast.warn('nao foi possivel buscar usuarios Rocket')
      console.log(error)
    }
  }

  editPoints = async user => {
    this.setState({ selectRocketUser: user }, this.toogleModal())
  }

  toogleModal = reload => {
    this.setState({ userModal: !this.state.userModal })
    if (reload) {
      this.setState({
        selectSlackUser: null,
        selectRocketUser: null,
        rocketUsers: []
      })
      this.getSlackUsers()
    }
  }

  render() {
    const {
      loading,
      slackUsers,
      rocketUsers,
      userModal,
      selectRocketUser,
      selectSlackUser
    } = this.state

    if (loading) return <PageLoading />

    return (
      <>
        <StyledTrasferXp>
          <section>
            <UserList>
              <h5>Usuarios slack com mais de 5 pontos</h5>
              <ul>
                {slackUsers.map(user => (
                  <li onClick={() => this.searchByName(user)} key={user._id}>
                    <img
                      src={user.avatar || avatarSvg}
                      alt={`Foto de ${user.name}`}
                      onError={e => {
                        e.target.onerror = null
                        e.target.src = avatarSvg
                      }}
                    />
                    {user.name}
                    <span>{Math.round(user.score)}</span>
                  </li>
                ))}
              </ul>
            </UserList>
            <UserList>
              <h5>Usuarios com nome parecido</h5>
              <ul>
                {rocketUsers.map(user => (
                  <li onClick={() => this.editPoints(user)} key={user._id}>
                    <img
                      src={user.avatar || avatarSvg}
                      alt={`Foto de ${user.name}`}
                      onError={e => {
                        e.target.onerror = null
                        e.target.src = avatarSvg
                      }}
                    />
                    {user.name}
                    <span>{Math.round(user.score)}</span>
                  </li>
                ))}
              </ul>
            </UserList>
          </section>
        </StyledTrasferXp>
        {!loading && userModal && (
          <UserModal
            closeModal={this.toogleModal}
            users={{ selectRocketUser, selectSlackUser }}
          />
        )}
      </>
    )
  }
}

export default ScreenTransferXp
