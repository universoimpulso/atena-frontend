import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";

import { Creators as achievementsActions } from "../../../store/ducks/achievements";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import { Container, Header, Icon, Wrapper } from "./styles";
import Card from "./Card";

class EditAchievements extends Component {
  static propTypes = {
    getAchievements: PropTypes.func.isRequired,
    achievements: PropTypes.object.isRequired,
    achievementsValues: PropTypes.array
  };

  state = {
    active: null
  };

  componentDidMount() {
    this.props.getAchievements();
  }

  handleClick = index => {
    this.setState({ active: index === this.state.active ? null : index });
  };

  render() {
    const { active } = this.state;
    const { achievementsValues } = this.props.achievements;
    return (
      <Container>
        {achievementsValues &&
          achievementsValues.map((achievement, index) => (
            <Fragment key={index}>
              <Header onClick={() => this.handleClick(index)}>
                <p>
                  {achievement.name}
                  <Icon
                    selected={active === index}
                    className="fas fa-sort-down"
                  />
                </p>
              </Header>
              <Wrapper selected={active === index}>
                {achievement.data.map((data, index) => (
                  <Fragment key={index}>
                    <h3>{data.type}</h3>
                    {data.values.map((value, index) => (
                      <Card
                        key={index}
                        data={{
                          value,
                          AchievementName: achievement.name,
                          type: data.type
                        }}
                      />
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
