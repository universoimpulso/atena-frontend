import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import { Flex } from "@rebass/grid";

import { Creators as RankingActions } from "../../../store/ducks/ranking";

import RankingRow from "../../Ranking/RankingRow";
import Title from "../../../components/Title";
import { PageError, PageLoading } from "../../../components/utils";

import {
  StyledRectangleGroup,
  StyledRectangle,
  RankingHeader
} from "./../../../pages/Ranking/styles";

class ScreenRanking extends Component {
  static propTypes = {
    getRanking: PropTypes.func.isRequired,
    ranking: PropTypes.object
    // ranking: PropTypes.shape({
    //   loading: PropTypes.bool,
    //   monthName: PropTypes.string,
    //   error: PropTypes.string,
    //   firstUsers: PropTypes.array,
    //   lastUsers: PropTypes.array
    // }).isRequired
  };

  state = {
    selected: "general"
  };

  componentDidMount() {
    this.props.getRanking();
  }

  toggleRanking = selected => {
    this.setState({ selected });
    this.props.getRanking(selected);
  };

  render() {
    const { selected } = this.state;
    const {
      error,
      loading,
      monthName,
      firstUsers,
      lastUsers
    } = this.props.ranking.ranking;

    if (error) return <PageError message={error} />;

    return (
      <>
        <Flex justifyContent="center" alignItems="center" mt={100} mb={100}>
          <StyledRectangleGroup margin="0">
            <StyledRectangle
              onClick={() => this.toggleRanking("monthly")}
              active={selected === "monthly"}
              left
            >
              <p>Ranking Mensal</p>
            </StyledRectangle>
            <StyledRectangle
              onClick={() => this.toggleRanking("general")}
              active={selected === "general"}
              right
            >
              <p>Ranking Geral</p>
            </StyledRectangle>
          </StyledRectangleGroup>
        </Flex>

        {loading ? (
          <PageLoading />
        ) : (
          <>
            <Flex justifyContent="center">
              <Title align={"center"}>
                RANKING
                {selected === "general" ? (
                  <>
                    <br />
                    <span className="month"> GERAL</span>
                  </>
                ) : (
                  <>
                    <br />
                    DO MÊS DE
                    <span className="month"> {monthName}</span>
                  </>
                )}
              </Title>
            </Flex>
            {/* {<Podium firstUsers={firstUsers} />} */}
            <Flex justifyContent="space-around" mt={50} mb={50} flexWrap="wrap">
              <RankingHeader>
                <div className="ranking">RANKING</div>
                <div className="userInfo" />
                <div className="level">LEVEL</div>
                <div className="xp">XP</div>
              </RankingHeader>
              {firstUsers &&
                firstUsers.length !== 0 &&
                firstUsers
                  .sort((a, b) => a.position - b.position)
                  .map((card, index) => <RankingRow key={index} {...card} />)}
              {lastUsers &&
                lastUsers.length !== 0 &&
                lastUsers.map((card, index) => (
                  <RankingRow key={index + 3} {...card} />
                ))}
            </Flex>
          </>
        )}
      </>
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
)(ScreenRanking);
