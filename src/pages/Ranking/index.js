import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { Flex, Box } from '@rebass/grid'
import moment from 'moment'
import 'moment/locale/pt-br'

import { Creators as RankingActions } from '../../store/ducks/ranking'

import RankingRow from './RankingRow'
import Title from '../../components/Title'
import FullPage from '../../components/FullPage'
import Podium from '../../components/Podium'
import { PageError, PageLoading } from '../../components/utils'

import BgRanking from '../../assets/bg_ranking.png'
import {
  StyledScreenRanking,
  StyledRectangleGroup,
  StyledRectangle,
  UsersRanking,
  RankingHeader
} from './styles'

class ScreenRanking extends Component {
  static propTypes = {
    getRanking: PropTypes.func.isRequired,
    ranking: PropTypes.shape({
      loading: PropTypes.bool,
      error: PropTypes.string,
      data: PropTypes.array
    }).isRequired
  }

  state = {
    selected: 'general'
  }

  componentDidMount() {
    this.props.getRanking(this.state.selected)
  }

  toggleRanking = selected => {
    this.setState({ selected })
    this.props.getRanking(selected)
  }

  currentMouth = () => {
    moment().locale('pt-br')
    return moment().format('MMMM')
  }

  generatePosition = data => {
    data.forEach((user, index) => (user.position = index + 1))
    const podium = data.splice(0, 3)
    return { podium, users: data }
  }

  render() {
    const { selected } = this.state
    const { error, loading, data } = this.props.ranking
    const { podium, users } = this.generatePosition(data)
    if (!!error)
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
                mb={100}>
                <PageError message={error} />
              </Flex>
            </div>
          </main>
        </StyledScreenRanking>
      )

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
                que o<b> Ranking Mensal</b> exibe o <b>saldo</b> de Reputação
                que você obteve
                <b> durante um mês</b>. Já o <b>Ranking Geral</b> exibe o saldo
                de Reputação de toda sua jornada na Impulso!
              </p>
              <Flex justifyContent="center" alignItems="center">
                <StyledRectangleGroup>
                  <StyledRectangle
                    onClick={() => this.toggleRanking('monthly')}
                    active={selected === 'monthly'}
                    left>
                    <p>Ranking Mensal</p>
                  </StyledRectangle>
                  <StyledRectangle
                    onClick={() => this.toggleRanking('general')}
                    active={selected === 'general'}
                    right>
                    <p>Ranking Geral</p>
                  </StyledRectangle>
                </StyledRectangleGroup>
              </Flex>
              {loading || !users ? (
                <PageLoading />
              ) : (
                <>
                  <Flex justifyContent="center">
                    <Title align={'center'} extraLarge>
                      RANKING
                      {selected === 'general' ? (
                        <>
                          <br />
                          <span className="month"> GERAL</span>
                        </>
                      ) : (
                        <>
                          <br />
                          DO MÊS DE
                          <span className="month"> {this.currentMouth()}</span>
                        </>
                      )}
                    </Title>
                  </Flex>
                  {<Podium firstUsers={podium} />}
                  <UsersRanking>
                    <RankingHeader>
                      <div className="ranking">RANKING</div>
                      <div className="userInfo" />
                      <div className="level">LEVEL</div>
                      <div className="xp">REPUTAÇÃO</div>
                    </RankingHeader>
                    {users.map((card, index) => (
                      <RankingRow key={index} {...card} />
                    ))}
                  </UsersRanking>
                </>
              )}
            </div>
          }
        </main>
      </StyledScreenRanking>
    )
  }
}
const mapStateToProps = state => ({
  ranking: state.ranking.ranking
})

const mapDispatchToProps = dispatch =>
  bindActionCreators(RankingActions, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ScreenRanking)
