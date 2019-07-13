import React, { Component } from "react";
import PropTypes from "prop-types";

import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { Creators as GeneralReportsActions } from "../../../store/ducks/generalReports";
import { SmallError, PageLoading } from "../../../components/utils";
import {
  Container,
  AccordionWrapper,
  Header,
  Wrapper,
  Box,
  Card,
  Icon
} from "./styles";

class TeamAccordion extends Component {
  static propTypes = {
    getTeams: PropTypes.func.isRequired,

    generalReports: PropTypes.shape({
      getTeamsLoading: PropTypes.bool.isRequired,
      errors: PropTypes.object,
      teams: PropTypes.arrayOf(
        PropTypes.shape({
          name: PropTypes.string,
          total: PropTypes.number,
          reactions: PropTypes.object,
          response: PropTypes.object,
          blog: PropTypes.object,
          github: PropTypes.object,
          meetups: PropTypes.object,
          referral: PropTypes.object
        })
      )
    }).isRequired
  };

  state = {
    active: null
  };

  handleClick = index => {
    this.setState({ active: index === this.state.active ? null : index });
  };

  componentDidMount() {
    const { teams } = this.props.generalReports;
    teams.length === 0 && this.props.getTeams();
  }

  render() {
    const { active } = this.state;
    const { teams, getTeamsLoading, errors } = this.props.generalReports;

    if (errors.teams)
      return (
        <Container>
          <SmallError refresh={this.props.getTeams} message={errors.teams} />
        </Container>
      );

    if (getTeamsLoading)
      return (
        <Container>
          <PageLoading message={errors.team} />
        </Container>
      );
    return (
      <Container>
        {teams.map((team, index) => {
          const {
            name,
            total,
            message,
            reactions,
            response,
            blog,
            github,
            meetups,
            referral
          } = team;
          return (
            <AccordionWrapper
              onClick={() => this.handleClick(index)}
              key={index}
            >
              <Header>
                <p>{name}</p>
                <h1>
                  {total}
                  <Icon
                    selected={active === index}
                    className="fas fa-sort-down"
                  />
                </h1>
              </Header>
              <Wrapper selected={active === index}>
                <Box width="66%">
                  <p>rocket chat</p>
                  <Card>
                    <table>
                      <thead>
                        <tr>
                          <th>Ações</th>
                          <th>Mensagens</th>
                          <th>Reações</th>
                          <th>Respostas</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>Enviadas</td>
                          <td>
                            <span>{message.send}</span>
                          </td>
                          <td>
                            <span>{reactions.send}</span>
                          </td>
                          <td>
                            <span>{response.send}</span>
                          </td>
                        </tr>
                        <tr>
                          <td>Recebidas</td>
                          <td>
                            <span>{message.receive}</span>
                          </td>
                          <td>
                            <span>{reactions.receive}</span>
                          </td>
                          <td>
                            <span>{response.receive}</span>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </Card>
                </Box>
                <Box>
                  <p>blog</p>
                  <Card>
                    <div>
                      postagens criadas <span>{blog.posts}</span>
                    </div>
                    <div>
                      comentários enviados<span>{blog.comments}</span>
                    </div>
                  </Card>
                </Box>
              </Wrapper>
              <Wrapper selected={active === index}>
                <Box>
                  <p>open source</p>
                  <Card height="174px">
                    <div>
                      issues criadas <span>{github.issues}</span>
                    </div>
                    <div>
                      reviews feitas<span>{github.reviews}</span>
                    </div>
                    <div>
                      pull requests criados
                      <span>{github.pullRequests.created}</span>
                    </div>
                    <div>
                      pull requests aprovados
                      <span>{github.pullRequests.approved}</span>
                    </div>
                  </Card>
                </Box>
                <Box>
                  <p>meetups</p>
                  <Card height="174px">
                    <div>
                      participantes <span>{meetups.participants}</span>
                    </div>
                    <div>
                      mediadores<span>{meetups.mediators}</span>
                    </div>
                    <div>
                      facilitadores <span>{meetups.facilitators}</span>
                    </div>
                  </Card>
                </Box>
                <Box>
                  <p>referral</p>
                  <Card height="174px">
                    <div>
                      impulsers alocados <span>{referral.allocated}</span>
                    </div>
                    <div>
                      alocados via indicações<span>{referral.indications}</span>
                    </div>
                  </Card>
                </Box>
              </Wrapper>
            </AccordionWrapper>
          );
        })}
      </Container>
    );
  }
}

const mapStateToProps = state => ({ generalReports: state.generalReports });

const mapDispatchToProps = dispatch =>
  bindActionCreators(GeneralReportsActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TeamAccordion);
