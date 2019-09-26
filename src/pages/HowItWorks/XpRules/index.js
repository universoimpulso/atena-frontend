/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react'

import { Flex, Box } from '@rebass/grid'
import Title from '../../../components/Title'
import Button from '../../../components/Button'

class XpRules extends Component {
  state = {
    selected: 'gain'
  }

  changeInfos = selected => {
    this.setState({ selected })
  }

  render() {
    const { selected } = this.state
    return (
      <section className="container xprules">
        <Flex justifyContent className="align-content">
          <Box width={4 / 5}>
            <Title large className="align-title">
              O que é e como <br />
              ganhar <span className="red">reputação</span>?
            </Title>
            <p className="super">
              Sua pontuação será medida em <strong>Pontos de Reputação</strong>.
              Esse recurso é muito utilizado nos jogos como uma representação
              numérica do esforço e aprendizado obtido por um(a) personagem.
              Aqui na Impulso, a quantidade de reputação será baseada nas
              atividades que você realizar na nossa comunidade.
            </p>
          </Box>
        </Flex>
        <Flex className="rules">
          <Box width={1 / 2} px={0}>
            <button
              onClick={() => this.changeInfos('gain')}
              className={`${
                selected === 'gain' ? 'selected' : ''
              } a--rules--button`}>
              <span>01. Obtendo Reputação</span>
            </button>
          </Box>
          <Box width={1 / 2} px={0}>
            <button
              onClick={() => this.changeInfos('losing')}
              className={`${
                selected === 'losing' ? 'selected' : ''
              } a--rules--button`}>
              <span>02. Perdendo Reputação</span>
            </button>
          </Box>
        </Flex>
        {selected === 'gain' ? (
          <Flex
            css={{ margin: '0 -30px' }}
            className={`rules__inner rules__inner-1 ${
              selected === 'gain' ? 'selected' : ''
            } `}
            flexWrap="wrap">
            <Box width={[1, 1 / 2]} px={30}>
              <Title>
                <span className="red">01.</span>
                <br />
                OBTENDO REPUTAÇÃO
              </Title>
              <p>
                A obtenção de pontos é feita através da{' '}
                <strong>realização de atividades</strong> dentro da Impulso. Por
                exemplo: participar de um curso da Impulso Academy, reagir à uma
                mensagem no Rocket.chat e até criar uma postagem no nosso Blog.
              </p>
            </Box>
            <Box width={[1, 1 / 2]} px={30}>
              <div className="roles__navigation">
                <a className="selected">Rocket.Chat</a>
              </div>
              <div className="rules__table">
                <p>
                  Mensagem postada <span className="value">+3</span>
                </p>
                <p>
                  Reaction dado <span className="value">+2</span>
                </p>
                <p>
                  Reaction recebido <span className="value">+3</span>
                </p>
              </div>
              <Button>
                <a
                  href="https://www.notion.so/impulso/Reputa-o-Como-ganhar-372bc91f3e404b418b50267ddcadce6f"
                  target="_blank"
                  rel="noopener noreferrer">
                  mais detalhes
                </a>
              </Button>
            </Box>
          </Flex>
        ) : selected === 'losing' ? (
          <Flex
            css={{ margin: '0 -30px' }}
            className={`rules__inner rules__inner-2 ${
              selected === 'losing' ? 'selected' : ''
            } `}
            flexWrap="wrap">
            <Box width={1} px={30}>
              <Title>
                <span className="red">02.</span>
                <br />
                PERDENDO REPUTAÇÃO
              </Title>
              <p>
                Em oposição às atividades que promovem a obtenção de Reputação,
                a única forma de perder pontos é através da{' '}
                <strong>Inatividade Completa</strong> na comunidade Impulso. A
                inatividade começa a contar a partir de <strong>14 dias</strong>{' '}
                após à sua última participação. Apos este período, você perde{' '}
                <strong>dois pontos por dia</strong>, até voltar a participar na
                comunidade novamente.
              </p>
            </Box>
          </Flex>
        ) : null}
      </section>
    )
  }
}

export default XpRules
