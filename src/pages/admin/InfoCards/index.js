import React, { Component } from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'
import 'moment/locale/pt-br'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { SmallLoading, SmallError } from '~/components/utils'
import { Creators as GeneralReportsActions } from '~/store/ducks/generalReports'
import {
  Container,
  CardsWrapper,
  Card,
  Percentage,
  StyledSelect,
} from './styles'

class InfoCards extends Component {
  static propTypes = {
    getUsersAchievements: PropTypes.func.isRequired,
    getMissions: PropTypes.func.isRequired,
    getXp: PropTypes.func.isRequired,
    generalReports: PropTypes.shape({
      achievements: PropTypes.shape({
        byMonth: PropTypes.number,
        byMonthPercentage: PropTypes.number,
        byYear: PropTypes.number,
        byYearPercentage: PropTypes.number,
        total: PropTypes.number,
      }).isRequired,

      missions: PropTypes.shape({
        byMonth: PropTypes.number,
        byMonthPercentage: PropTypes.number,
        byYear: PropTypes.number,
        byYearPercentage: PropTypes.number,
        total: PropTypes.number,
      }).isRequired,

      xp: PropTypes.shape({
        byMonth: PropTypes.number,
        byMonthPercentage: PropTypes.number,
        byYear: PropTypes.number,
        byYearPercentage: PropTypes.number,
        total: PropTypes.number,
      }).isRequired,
    }).isRequired,
  }
  state = {}

  getFormatedMonth = month => {
    return moment()
      .locale('pt-BR')
      .subtract(month, 'month')
      .format('MMM/YY')
  }
  getMonth = month => {
    return moment()
      .subtract(month, 'month')
      .format('MM/YY')
  }
  renderOptions = type => {
    let options = []
    for (let i = 0; i < 7; i++) {
      options.push({
        value: { type, data: this.getMonth(i) },
        label: this.getFormatedMonth(i),
      })
    }
    return options
  }

  handleChange = value => {
    const { type, data } = value.value

    if (type === 'achievements') {
      this.props.getUsersAchievements(data)
    } else if (type === 'missions') {
      this.props.getMissions(data)
    } else if (type === 'xp') {
      this.props.getXp(data)
    }
  }

  componentDidMount() {
    const { achievements, missions, xp } = this.props.generalReports
    !achievements.data && this.props.getUsersAchievements()
    !missions.data && this.props.getMissions()
    !xp.data && this.props.getXp()
  }

  renderCards = ({ type, loading, error, data }) => {
    if (!data && loading)
      return (
        <CardsWrapper>
          <SmallLoading width="100%" height="100%" />
        </CardsWrapper>
      )
    if (!data && error)
      return (
        <CardsWrapper>
          <SmallError
            width="100%"
            height="100%"
            message={error}
            refresh={() => this.handleChange(null, type)}
          />
        </CardsWrapper>
      )
    const {
      name,
      byMonth,
      byMonthPercentage,
      byYear,
      byYearPercentage,
      total,
    } = data

    return (
      <CardsWrapper>
        <h4>{name}</h4>
        <Card>
          {loading && <SmallLoading width="100%" height="100%" />}
          {error && (
            <SmallError
              width="100%"
              height="100%"
              message={error}
              refresh={() => this.handleChange(null, type)}
            />
          )}
          <header>
            <p>total {name} mês</p>
            <StyledSelect
              defaultValue={{
                value: { type, data: this.getMonth(0) },
                label: this.getFormatedMonth(0),
              }}
              options={this.renderOptions(type)}
              onChange={this.handleChange}
            />
          </header>
          <h1>{byMonth}</h1>

          <Percentage positive={byMonthPercentage > 0}>
            <i
              className={`fa fa-long-arrow-alt-${
                byMonthPercentage < 0 ? 'down' : 'up'
              }`}
            />
            {byMonthPercentage} %
          </Percentage>
        </Card>

        <Card>
          <p>total {name} do ano</p>
          <h1>{byYear}</h1>
          <Percentage positive={byYearPercentage > 0}>
            <i
              className={`fa fa-long-arrow-alt-${
                byYearPercentage < 1 ? 'down' : 'up'
              }`}
            />
            {byYearPercentage} %
          </Percentage>
        </Card>

        <Card>
          <p>total de {name}</p>
          <h1>{total}</h1>
        </Card>
      </CardsWrapper>
    )
  }

  render() {
    const { achievements, missions, xp } = this.props.generalReports
    return (
      <Container>
        {this.renderCards(achievements)}
        {this.renderCards(missions)}
        {this.renderCards(xp)}
      </Container>
    )
  }
}

const mapStateToProps = state => ({ generalReports: state.generalReports })

const mapDispatchToProps = dispatch =>
  bindActionCreators(GeneralReportsActions, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(InfoCards)
