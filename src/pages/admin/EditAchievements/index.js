import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";

import { Creators as achievementsActions } from "../../../store/ducks/achievements";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import { Container, Header, Icon, Wrapper, Card } from "./styles";

class EditAchievements extends Component {
  static propTypes = {
    getAchievements: PropTypes.func.isRequired,
    editAchievement: PropTypes.func.isRequired,
    achievements: PropTypes.object.isRequired,
    achievementsValues: PropTypes.array
  };

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
    this.props.editAchievement(this.state.data);
    console.tron.log(event.target.type, achievement, type);
  };
  render() {
    const { active } = this.state;
    const { achievementsValues } = this.props.achievements;
    return (
      <Container>
        {achievementsValues &&
          achievementsValues.map((achievement, index) => (
            <Fragment key={index}>
              <Header key={index} onClick={() => this.handleClick(index)}>
                <p>{achievement.name}</p>
                <Icon
                  selected={active === index}
                  className="fas fa-sort-down"
                />
              </Header>
              <Wrapper selected={active === index}>
                {achievement.data.map((data, index) => (
                  <Fragment key={index}>
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
                  </Fragment>
                ))}
              </Wrapper>
            </Fragment>
          ))}
      </Container>
    );
  }
}

const mapStateToProps = state => ({ achievements: state.achievements });

const mapDispatchToProps = dispatch =>
  bindActionCreators(achievementsActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditAchievements);
