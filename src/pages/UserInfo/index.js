import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { Creators as UserActions } from '~/store/ducks/user'
import { PageError, PageLoading } from '~/components/utils'
import avatarSvg from '~/assets/avatarWhite.svg'
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
  Achievement,
} from './styles'

class UserInfo extends Component {
  static propTypes = {
    getProfile: PropTypes.func.isRequired,
    uuid: PropTypes.string.isRequired,
    profile: PropTypes.shape({
      error: PropTypes.string.isRequired,
      loading: PropTypes.bool.isRequired,
      userInfo: PropTypes.shape({
        avatar: PropTypes.string,
        name: PropTypes.string,
        monthlyPosition: PropTypes.number,
        generalPosition: PropTypes.number,
        score: PropTypes.number,
        level: PropTypes.number,
      }).isRequired,
      userAchievements: PropTypes.arrayOf(
        PropTypes.shape({
          name: PropTypes.string.isRequired,
          achievements: PropTypes.arrayOf(
            PropTypes.shape({
              type: PropTypes.string.isRequired,
              name: PropTypes.string.isRequired,
              medal: PropTypes.number.isRequired,
              tier: PropTypes.number.isRequired,
              maxScore: PropTypes.number.isRequired,
              score: PropTypes.number.isRequired,
            })
          ).isRequired,
        })
      ),
    }),
  }

  state = {
    selected: null,
    colors: ['#EF7C1E', '#A3A2A2', '#F7AA22', '#9DC2D6', '#BBE2ED'],
  }

  componentDidMount() {
    this.props.getProfile(this.props.uuid)
  }

  handleClick = index => {
    this.setState({ selected: index === this.state.selected ? null : index })
  }

  formatTitle = data => {
    const title = data.split(' ')
    return (
      <>
        {title[0]} <span>{title[1]}</span>
      </>
    )
  }

  renderAccordion = data => {
    const { selected } = this.state

    return data.map((data, index) => (
      <Accordion key={index}>
        <header onClick={() => this.handleClick(index)}>
          {this.formatTitle(data.name)}
          <Icon className="fas fa-sort-down" selected={selected === index} />
        </header>
        <AccordionBody selected={selected === index}>
          {data.achievements.map(achievement =>
            this.renderAchievement(achievement)
          )}
        </AccordionBody>
      </Accordion>
    ))
  }

  renderAchievement = data => {
    const { colors } = this.state
    const { type, name, medal, tier, maxScore, score } = data

    const reqStars = require.context('../../assets/stars', true, /\.svg$/)
    const starPath = reqStars.keys()
    const stars = starPath.map(path => reqStars(path))
    const reqBadges =
      type === 'network.message.sended'
        ? require.context('../../assets/badges/messageSend', true, /\.svg$/)
        : type === 'network.reaction.sended'
        ? require.context('../../assets/badges/reactionSend', true, /\.svg$/)
        : type === 'network.reaction.received'
        ? require.context('../../assets/badges/reactionGiven', true, /\.svg$/)
        : type === 'issueCreated'
        ? require.context('../../assets/badges/issueCreated', true, /\.svg$/)
        : type === 'pullRequestApproved'
        ? require.context('../../assets/badges/PRApproved', true, /\.svg$/)
        : type === 'pullRequestCreated'
        ? require.context('../../assets/badges/PRCreated', true, /\.svg$/)
        : type === 'review'
        ? require.context('../../assets/badges/review', true, /\.svg$/)
        : type === 'comments'
        ? require.context('../../assets/badges/comments', true, /\.svg$/)
        : type === 'posts'
        ? require.context('../../assets/badges/posts', true, /\.svg$/)
        : null
    const badgePath = reqBadges.keys()
    const badges = badgePath.map(path => reqBadges(path))

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
          <img src={badges[medal]} alt="badge" />
        </Badge>
        <Score color={colors[medal]}>
          {score} / {maxScore}
        </Score>
        <ScoreBar status={(score / maxScore) * 100} color={colors[medal]} />
        <Achievement>{name.split('|')[1]}</Achievement>
      </BadgeWrapper>
    )
  }

  render() {
    const { error, loading, userInfo, userAchievements } = this.props.profile

    if (!!error)
      return <PageError message={error} background="white" withHeader />
    if (loading) return <PageLoading width="100%" height="800px" />
    const {
      avatar,
      name,
      monthlyPosition,
      generalPosition,
      score,
      level,
    } = userInfo
    return (
      <Container>
        <Header>
          <ImageWrapper>
            <div>
              <img
                src={avatar || avatarSvg}
                onError={e => {
                  e.target.onerror = null
                  e.target.src = avatarSvg
                }}
                alt={`Foto de ${name}`}
              />
            </div>
            <small>{`${monthlyPosition}º`}</small>
          </ImageWrapper>
          <UserName>{name}</UserName>

          <Info>
            <div>
              <p>level</p>
              <span>{level}</span>
            </div>
            <div>
              <p>xp</p>
              <span>{score}</span>
            </div>
            <div>
              <p>ranking geral</p>
              <span>{generalPosition}º</span>
            </div>
          </Info>
        </Header>
        <Title>suas conquistas</Title>

        {this.renderAccordion(userAchievements)}
      </Container>
    )
  }
}

const mapStateToProps = state => ({
  profile: state.user.profile,
  uuid: state.auth.uuid,
})

const mapDispatchToProps = dispatch => bindActionCreators(UserActions, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserInfo)
