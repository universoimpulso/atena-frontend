import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import { Flex, Box } from "@rebass/grid";

import { Creators as RankingActions } from "../../store/ducks/ranking";

import RankingRow from "./RankingRow";
import Title from "../../components/Title";
import FullPage from "../../components/FullPage";
import Podium from "../../components/Podium";
import { PageError, PageLoading } from "../../components/utils";

import BgRanking from "../../assets/bg_ranking.png";
import {
  StyledScreenRanking,
  StyledRectangleGroup,
  StyledRectangle,
  RankingHeader
} from "./styles";

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

    if (error)
      return (
        <StyledScreenRanking>
          <main className="layout">
            <FullPage background={`url(${BgRanking})`} height="40" overlay>
              <Flex alignItems="baseline" justifyContent="center" flex="1">
                <Box>
                  <Title large color="white" align="center">
                    Ranking
                  </Title>
                </Box>
              </Flex>
            </FullPage>
            <div className="_inner">
              <Flex
                justifyContent="center"
                alignItems="center"
                mt={100}
                mb={100}
              >
                <PageError message={error} />
              </Flex>
            </div>
          </main>
        </StyledScreenRanking>
      );

    return (
      <StyledScreenRanking>
        <main className="layout">
          <FullPage background={`url(${BgRanking})`} height="40" overlay>
            <Flex alignItems="baseline" justifyContent="center" flex="1">
              <Box>
                <Title large color="white" align="center">
                  Ranking
                </Title>
              </Box>
            </Flex>
          </FullPage>
          {
            <div className="_inner">
              <p className="super">
                Confira aqui a sua colocação no ranking da Atena. Vale lembrar
                que o<b> Ranking Mensal</b> exibe o <b>saldo</b> de XP que você
                obteve
                <b> durante um mês</b>. Já o <b>Ranking Geral</b> exibe o saldo
                de XP de toda sua jornada na Impulso!
              </p>
              <Flex
                justifyContent="center"
                alignItems="center"
                mt={100}
                mb={100}
              >
                <StyledRectangleGroup>
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

              {loading || !firstUsers ? (
                <PageLoading />
              ) : (
                <>
                  <Flex justifyContent="center">
                    <Title align={"center"} extraLarge>
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
                  {<Podium firstUsers={firstUsers} />}
                  <Flex
                    justifyContent="space-around"
                    mt={50}
                    mb={50}
                    ml={172}
                    mr={172}
                    flexWrap="wrap"
                  >
                    <RankingHeader>
                      <div className="ranking">RANKING</div>
                      <div className="userInfo" />
                      <div className="level">LEVEL</div>
                      <div className="xp">XP</div>
                    </RankingHeader>
                    {lastUsers.map((card, index) => (
                      <RankingRow key={index} {...card} />
                    ))}
                  </Flex>
                </>
              )}
            </div>
          }
        </main>
      </StyledScreenRanking>
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
