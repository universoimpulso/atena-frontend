import React, { Component } from "react";
import PropTypes from "prop-types";

import { Creators as EditAchievementsActions } from "../../../store/ducks/editAchievements";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import { Container, Header, Icon, Wrapper, Card } from "./styles";

class EditAchievements extends Component {
  static propTypes = {};
  state = {
    data: {
      achievement: null,
      type: null,
      medal: null,
      tier: null,
      value: null
    },
    active: null
  };

  componentDidMount() {
    this.props.getAchievements();
  }
  handleClick = index => {
    this.setState({ active: index === this.state.active ? null : index });
  };
  handleChange = (event, achievement, type, medal, tier) => {
    const data = {
      achievement,
      type,
      medal,
      tier,
      value: event.target.value
    };

    console.tron.log(data);
    this.setState({ data });
  };
  handleSubmit = (event, achievement, type) => {
    event.preventDefault();
    this.props.putAchievements(this.state.data);
    console.tron.log(event.target.type, achievement, type);
  };
  render() {
    const { active } = this.state;
    const { achievementsValues } = this.props.editAchievements;
    return (
      <Container>
        {achievementsValues &&
          achievementsValues.map((achievement, index) => {
            return (
              <>
                <Header key={index} onClick={() => this.handleClick(index)}>
                  <p>{achievement.name}</p>
                  <Icon
                    selected={active === index}
                    className="fas fa-sort-down"
                  />
                </Header>
                <Wrapper selected={active === index}>
                  {achievement.data.map((data, index) => {
                    return (
                      <>
                        <h3 key={index}>{data.type}</h3>
                        {data.values.map((value, index) => (
                          <Card key={index}>
                            <p>{value.name}</p>
                            <form
                              onSubmit={event =>
                                this.handleSubmit(
                                  event,
                                  achievement.name,
                                  data.type
                                )
                              }
                            >
                              <ul>
                                {value.tiers.map((tier, index) => (
                                  <li key={index}>
                                    <span>{tier.name}</span>
                                    <input
                                      onChange={event =>
                                        this.handleChange(
                                          event,
                                          achievement.name,
                                          data.type,
                                          value.name,
                                          index
                                        )
                                      }
                                      type="text"
                                      placeholder={tier.value}
                                    />
                                  </li>
                                ))}
                              </ul>
                              <button>atualizar</button>
                            </form>
                          </Card>
                        ))}
                      </>
                    );
                  })}
                </Wrapper>
              </>
            );
          })}
      </Container>
    );
  }
}

const mapStateToProps = state => ({ editAchievements: state.editAchievements });

const mapDispatchToProps = dispatch =>
  bindActionCreators(EditAchievementsActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditAchievements);
