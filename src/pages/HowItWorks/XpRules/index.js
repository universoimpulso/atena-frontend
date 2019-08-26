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
        <Flex justifyContent="center">
          <Box width={4 / 5}>
            <Title large align="center">
              O que é e como <br />
              ganhar <span className="red">xp</span>?
            </Title>
            <p className="super">
              Sua pontuação será medida em{' '}
              <strong>Pontos de Experiência (XP)</strong>. Esse recurso é muito
              utilizado nos jogos como uma representação numérica do esforço e
              aprendizado obtido por um(a) personagem. Aqui na Impulso, a
              quantidade de XP será baseada nas atividades que você realizar na
              nossa comunidade.
            </p>
          </Box>
        </Flex>
        <Flex css={{ margin: '0 -25px' }} className="rules ifdesktop">
          <Box width={1 / 3} px={0}>
            <button
              onClick={() => this.changeInfos('gain')}
              className={`${
                selected === 'gain' ? 'selected' : ''
              } a--rules--button`}
            >
              <span>01. Obtendo XP</span>
            </button>
          </Box>
          <Box width={1 / 3} px={0}>
            <button
              onClick={() => this.changeInfos('losing')}
              className={`${
                selected === 'losing' ? 'selected' : ''
              } a--rules--button`}
            >
              <span>02. Perdendo XP</span>
            </button>
          </Box>
          <Box width={1 / 3} px={0}>
            <button
              onClick={() => this.changeInfos('exeptions')}
              className={`${
                selected === 'exeptions' ? 'selected' : ''
              } a--rules--button`}
            >
              <span>03. Exceções</span>
            </button>
          </Box>
        </Flex>
        {selected === 'gain' ? (
          <Flex
            css={{ margin: '0 -30px' }}
            className={`rules__inner rules__inner-1 ${
              selected === 'gain' ? 'selected' : ''
            } `}
            flexWrap="wrap"
          >
            <Box width={[1, 1 / 2]} px={30}>
              <Title>
                <span className="red">01.</span>
                <br />
                OBTENDO XP
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
                {/* <a href="javascript:;">Blog</a>
                <a href="javascript:;">Open-Source</a> */}
              </div>
              <div className="rules__table">
                <p>
                  Mensagem postada <span className="value">+1 xp</span>
                </p>
                <p>
                  Reaction dado <span className="value">+1 xp</span>
                </p>
                <p>
                  Reply recebido <span className="value">+2 xp</span>
                </p>
              </div>
              <Button>
                <a
                  href="https://www.notion.so/XP-Como-ganhar-372bc91f3e404b418b50267ddcadce6f"
                  target="_blank"
                  rel="noopener noreferrer"
                >
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
            flexWrap="wrap"
          >
            <Box width={[1, 1 / 2]} px={30}>
              <Title>
                <span className="red">02.</span>
                <br />
                PERDENDO XP
              </Title>
              <p>
                Em oposição às atividades que promovem a obtenção de XP, a única
                forma de perder pontos de experiência é através da{' '}
                <strong>Inatividade Completa</strong> na comunidade Impulso. A
                inatividade começa a contar no dia seguinte à sua última
                participação e a perda de pontos a partir da quantidade de dias
                pré-definida, que varia de acordo com cada canal.
              </p>
            </Box>
          </Flex>
        ) : selected === 'exeptions' ? (
          <Flex
            css={{ margin: '0 -30px' }}
            className={`rules__inner rules__inner-3 ${
              selected === 'exeptions' ? 'selected' : ''
            } `}
            flexWrap="wrap"
          >
            <Box width={[1, 1 / 2]} px={30}>
              <Title>
                <span className="red">03.</span>
                <br />
                EXCEÇÕES
              </Title>
              <p>
                Caso a <strong>quantidade de XP</strong> que você obteve através
                de <strong>reactions negativos recebidos</strong> em uma
                publicação <strong>seja superior</strong> à obtida por reactions
                positivos o XP não é negativado, a pontuação através das
                reactions daquela mensagem ficará zerada (0).
              </p>
            </Box>
          </Flex>
        ) : null}
      </section>
    )
  }
}

export default XpRules
