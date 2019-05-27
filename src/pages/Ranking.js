import React, { Fragment, Component } from "react";
// import PropTypes from "prop-types";
import api from "../services/api";
import { Flex, Box } from "@rebass/grid";
import moment from "moment";
import "moment/locale/pt-br";
import BgRanking from "../assets/bg_ranking.png";
import {
  StyledScreenRanking,
  StyledRectangleGroup,
  StyledRectangle
} from "./Ranking.style";
import RankingHeader from "../components/RankingHeader";
import RankingRow from "../components/RankingRow";
import Title from "../components/Title";
import UserCard from "../components/UserCard";
import FullPage from "../components/FullPage";

class ScreenRanking extends Component {
  state = {
    loading: true,
    selected: "general",
    monthName: "",
    first_users: [],
    last_users: []
  };

  componentDidMount() {
    this.getRanking();
  }

  getRanking = async type => {
    const mouth = type ? `/mes/${type}` : "";
    try {
      const { data } = await api.get(`ranking${mouth}`);
      this.setState({
        first_users: data.first_users,
        last_users: data.last_users,
        monthName: data.monthName,
        error: data.error
      });
    } catch (error) {
      console.log(error);
      this.props.history.push(`/error`);
    } finally {
      this.setState({ loading: false });
    }
  };

  currentMouth = () => {
    moment().locale("pt-br");
    return moment().format("MMMM");
  };

  toogleRanking = type => {
    const currentMouth = this.currentMouth();
    this.setState({ selected: type, loading: true });
    this.getRanking(type === "monthly" ? currentMouth : null);
  };
  render() {
    const {
      loading,
      selected,
      monthName,
      first_users,
      last_users
    } = this.state;
    return (
      <>
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
                    onClick={() => this.toogleRanking("monthly")}
                    active={selected === "monthly"}
                    left
                  >
                    <p>Ranking Mensal</p>
                  </StyledRectangle>
                  <StyledRectangle
                    onClick={() => this.toogleRanking("general")}
                    active={selected === "general"}
                    right
                  >
                    <p>Ranking Geral</p>
                  </StyledRectangle>
                </StyledRectangleGroup>
              </Flex>
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
              {!loading && (
                <Fragment>
                  <Flex
                    justifyContent="center"
                    mt={50}
                    mb={80}
                    ml={172}
                    mr={172}
                  >
                    {first_users.map((card, index) => (
                      <UserCard
                        key={index}
                        first={index === 1 && true}
                        {...card}
                      />
                    ))}
                  </Flex>
                  <Flex
                    justifyContent="space-around"
                    mt={50}
                    mb={50}
                    ml={172}
                    mr={172}
                    flexWrap="wrap"
                  >
                    <RankingHeader />
                    {last_users.map((card, index) => (
                      <RankingRow key={index} {...card} />
                    ))}
                  </Flex>
                </Fragment>
              )}
            </div>
          </main>
        </StyledScreenRanking>
      </>
    );
  }
}

// ScreenRanking.propTypes = {
//   monthName: PropTypes.string.isRequired,
//   first_users: PropTypes.array.isRequired,
//   last_users: PropTypes.array.isRequired,
//   error: PropTypes.string,
//   page: PropTypes.string
// };

// ScreenRanking.defaultProps = {
//   error: null
// };

export default ScreenRanking;
