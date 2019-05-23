import React, { Component } from "react";
import api from "../services/api";
import UserModal from "../components/UserModal/index";
import { StyledTrasferXp, UserList } from "./TransferXp.style";
import StyledApp from "../styles/global";

class ScreenTransferXp extends Component {
  state = {
    loading: true,
    slackUsers: [],
    rocketUsers: [],
    totalSlackUsers: null,
    totalRocketUsers: null,
    selectSlackUser: null,
    selectRocketUser: null,
    userModal: false
  };

  componentDidMount() {
    this.getSlackUsers();
  }

  getSlackUsers = async () => {
    try {
      const response = await api.get(`user/slack-users`);

      this.setState({
        loading: false,
        slackUsers: response.data.users,
        totalSlackUsers: response.data.total
      });
    } catch (error) {
      console.log(error);
    }
  };

  searchByName = async user => {
    const firstName = user.name.split(" ")[0];

    try {
      const response = await api.get(`user/find?name=${firstName}`);
      this.setState({
        rocketUsers: response.data.users,
        totalRocketUsers: response.data.total,
        selectSlackUser: user
      });
    } catch (error) {
      console.log(error);
    }
  };

  editPoints = async user => {
    this.setState({ selectRocketUser: user }, this.toogleModal());
  };

  toogleModal = reload => {
    this.setState({ userModal: !this.state.userModal });
    if (reload) {
      this.setState({
        selectSlackUser: null,
        selectRocketUser: null,
        rocketUsers: [],
        totalSlackUsers: null,
        totalRocketUsers: null
      });
      this.getSlackUsers();
    }
  };

  showInfo = id => {};

  render() {
    const {
      loading,
      slackUsers,
      totalSlackUsers,
      rocketUsers,
      totalRocketUsers,
      userModal,
      selectRocketUser,
      selectSlackUser
    } = this.state;
    return (
      <>
        <StyledApp />
        <StyledTrasferXp>
          <section>
            <UserList>
              <h5>
                {totalSlackUsers
                  ? `Usuarios slack com mais de 5 pontos : ${totalSlackUsers}`
                  : ""}
              </h5>
              <ul>
                {slackUsers.map(user => (
                  <li onClick={() => this.searchByName(user)} key={user._id}>
                    <img src={user.avatar} alt="" />
                    {user.name}{" "}
                    <span>
                      {Math.round(user.score)}
                      <i
                        onClick={this.showInfo}
                        className="fa fa-info-circle"
                      />
                    </span>
                  </li>
                ))}
              </ul>
            </UserList>
            <UserList>
              <h5>
                {totalRocketUsers
                  ? `Encotrado ${totalRocketUsers} usuarios parecidos.`
                  : ""}
              </h5>
              <ul>
                {rocketUsers.map(user => (
                  <li onClick={() => this.editPoints(user)} key={user._id}>
                    <img src={user.avatar} alt="" />
                    {user.name}{" "}
                    <span>
                      {Math.round(user.score)}
                      <i
                        onClick={this.showInfo}
                        className="fa fa-info-circle"
                      />
                    </span>
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
    );
  }
}

export default ScreenTransferXp;
