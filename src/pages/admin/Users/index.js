import React, { Component } from "react";
import PropTypes from "prop-types";
import Select from "react-select";
import { Flex } from "@rebass/grid";

import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { Creators as RankingActions } from "../../../store/ducks/ranking";

import { PageLoading, PageError, SmallError } from "../../../components/utils";
import RankingRow from "../../../pages/Ranking/RankingRow";
import SearchBar from "../../../components/SearchBar";
import InfoCards from "../InfoCards";
import TeamAccordion from "../TeamAccordion";

import {
  Container,
  RankingHeader,
  UserSection,
  CardWrapper,
  Portrait,
  Card,
  ButtonWrapper,
  Button,
  Info
} from "./styles";

class Users extends Component {
  static propTypes = {
    getUserInfo: PropTypes.func.isRequired,
    ranking: PropTypes.object
  };
  state = { user: null };

  getUserInfo = name => {
    if (name) {
      this.props.getUserInfo(name);
      this.setState({ user: name });
    }
    this.props.getUserInfo(this.state.user);
  };

  renderUsersList = users => {
    const { loading, error, data } = users;
    if (error) return <PageError message={error} />;
    if (!data && !loading) return;
    if (!data && loading) return <PageLoading />;
    return (
      <Flex justifyContent="space-around" mt={50} mb={50} flexWrap="wrap">
        <RankingHeader>
          <div className="ranking">RANKING</div>
          <div className="userInfo" />
          <div className="level">LEVEL</div>
          <div className="xp">XP</div>
        </RankingHeader>

        {data.map((card, index) => (
          <RankingRow getUserInfo={this.getUserInfo} key={index} {...card} />
        ))}
      </Flex>
    );
  };

  renderUserInfos = userInfo => {
    const { loading, error, data } = userInfo;
    if (error)
      return (
        <UserSection>
          <SmallError
            refresh={() => this.getUserInfo()}
            height="100px"
            message={error}
          />
        </UserSection>
      );

    if (!data && !loading) return;
    if (loading) return <PageLoading />;

    return (
      <UserSection>
        <CardWrapper>
          <Portrait>
            <figure>
              <img src={data.avatar} alt="" />
              <small>{`${data.monthlyPosition}º`}</small>
            </figure>
            <p>{data.name}</p>
          </Portrait>
          <Card>
            <Info width="30%">
              <h4>ranking geral</h4>
              <p>{data.generalPosition}</p>
            </Info>
            <Info>
              <h4>level</h4>
              <p>{data.level}</p>
            </Info>
            <Info>
              <h4>xp</h4>
              <p>{data.score}</p>
            </Info>
            <Info width="280px">
              <h4>times</h4>
              <Select
                isMulti
                placeholder="Selecione..."
                defaultValue={data.teams}
                options={data.availableTeams}
              />
            </Info>
          </Card>
        </CardWrapper>
        <ButtonWrapper>
          <Button>atualizar</Button>
        </ButtonWrapper>
        <InfoCards user={data.name} />
        <TeamAccordion user={data.name} />
      </UserSection>
    );
  };
  render() {
    const { users, userInfo } = this.props.ranking;
    return (
      <Container>
        <SearchBar />
        {this.renderUsersList(users)}
        {this.renderUserInfos(userInfo)}
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  ranking: state.ranking
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(RankingActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Users);
