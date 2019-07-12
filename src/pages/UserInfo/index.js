import React, { Component } from "react";
import PropTypes from "prop-types";

import { Creators as achievementsActions } from "../../store/ducks/achievements";
import { Creators as rankingActions } from "../../store/ducks/ranking";

import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import {
  Container,
  Header,
  ImageWrapper,
  UserName,
  Info,
  Title,
  Icon,
  Accordion,
  AccordionBody,
  BadgeWrapper,
  Stars,
  Star,
  Badge,
  Score,
  ScoreBar,
  Achievement
} from "./styles";

class UserInfo extends Component {
  static propTypes = {
    actions: PropTypes.object.isRequired,
    getUserAchievements: PropTypes.func.isRequired,
    achievements: PropTypes.object.isRequired,
    ranking: PropTypes.object,
    auth: PropTypes.object,
    userAchievements: PropTypes.array,
    userInfo: PropTypes.array,
    user: PropTypes.array
  };
  state = {
    selected: null,
    colors: ["#EF7C1E", "#A3A2A2", "#F7AA22", "#9DC2D6", "#BBE2ED"]
  };

  componentDidMount() {
    this.props.actions.getUserAchievements();
    this.props.actions.getUserInfo();
  }

  renderAchievement = data => {
    const { type, name, medal, tier, maxScore, score } = data;

    const reqStars = require.context("../../assets/stars", true, /\.svg$/);
    const starPath = reqStars.keys();
    const stars = starPath.map(path => reqStars(path));

    const reqBadges =
      type === "messageSend"
        ? require.context("../../assets/badges/messageSend", true, /\.svg$/)
        : type === "reactionSend"
        ? require.context("../../assets/badges/reactionSend", true, /\.svg$/)
        : type === "reactionGiven"
        ? require.context("../../assets/badges/reactionGiven", true, /\.svg$/)
        : type === "issueCreated"
        ? require.context("../../assets/badges/issueCreated", true, /\.svg$/)
        : type === "pullRequestApproved"
        ? require.context(
            "../../assets/badges/pullRequestApproved",
            true,
            /\.svg$/
          )
        : type === "pullRequestCreated"
        ? require.context(
            "../../assets/badges/pullRequestCreated",
            true,
            /\.svg$/
          )
        : type === "review"
        ? require.context("../../assets/badges/review", true, /\.svg$/)
        : type === "comments"
        ? require.context("../../assets/badges/comments", true, /\.svg$/)
        : type === "posts"
        ? require.context("../../assets/badges/posts", true, /\.svg$/)
        : null;
    const badgePath = reqBadges.keys();
    const badges = badgePath.map(path => reqBadges(path));

    return (
      <BadgeWrapper key={type}>
        <Stars>
          <Star align={100} src={tier <= 0 ? stars[5] : stars[medal]} />
          <Star align={50} src={tier <= 1 ? stars[5] : stars[medal]} />
          <Star align={0} src={tier <= 2 ? stars[5] : stars[medal]} />
          <Star align={50} src={tier <= 3 ? stars[5] : stars[medal]} />
          <Star align={100} src={tier <= 4 ? stars[5] : stars[medal]} />
        </Stars>
        <Badge>
          <img src={badges[medal]} alt="" />
        </Badge>
        <Score color={this.state.colors[medal]}>
          {score} / {maxScore}
        </Score>
        <ScoreBar
          status={(score / maxScore) * 100}
          color={this.state.colors[medal]}
        />
        <Achievement>{name}</Achievement>
      </BadgeWrapper>
    );
  };

  handleClick = index => {
    this.setState({ selected: index === this.state.selected ? null : index });
  };

  formatTitle = data => {
    const title = data.split(" ");
    return (
      <>
        {title[0]} <span>{title[1]}</span>
      </>
    );
  };

  render() {
    const { userAchievements } = this.props.achievements;
    const { userInfo } = this.props.ranking;
    const { user } = this.props.auth;
    const { selected } = this.state;
    return (
      <Container>
        <Header>
          <ImageWrapper>
            <div>
              <img src={user.avatar} alt="" />
            </div>
            <small>{userInfo && `${userInfo.monthlyPosition}º`}</small>
          </ImageWrapper>
          <UserName>{user.user}</UserName>
          {userInfo && (
            <Info>
              <div>
                <p>level</p>
                <span>{userInfo.level}</span>
              </div>
              <div>
                <p>xp</p>
                <span>{userInfo.score}</span>
              </div>
              <div>
                <p>ranking geral</p>
                <span>{userInfo.generalPosition}º</span>
              </div>
            </Info>
          )}
        </Header>

        <Title>suas conquistas</Title>

        {userAchievements &&
          userAchievements.map((data, index) => (
            <Accordion>
              <header key={index} onClick={() => this.handleClick(index)}>
                {this.formatTitle(data.name)}
                <Icon
                  className="fas fa-sort-down"
                  selected={selected === index}
                />
              </header>
              <AccordionBody selected={selected === index}>
                {data.achievements.map(a => this.renderAchievement(a))}
              </AccordionBody>
            </Accordion>
          ))}
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  achievements: state.achievements,
  auth: state.auth,
  ranking: state.ranking
});

const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators(
      Object.assign({}, rankingActions, achievementsActions),
      dispatch
    )
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserInfo);
