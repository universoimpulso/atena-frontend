import React, { Component } from 'react'

import hiwlpc from '../../assets/hiwlpc.png'

import StyledScreenHowItWorks from './styles'

import { Flex, Box } from '@rebass/grid'
import XpRules from './XpRules'
import FullPage from '../../components/FullPage'
import Title from '../../components/Title'
import SubTitle from '../../components/Title/SubTitle'
import Faq from './Faq'
import About from './About'
import QuestionCards from './QuestionCards'

class ScreenHowItWorks extends Component {
  render() {
    return (
      <StyledScreenHowItWorks>
        <main className="layout">
          <FullPage background={`url(${hiwlpc})`}>
            <Flex alignItems="center" justifyContent="center" flex="1">
              <Box>
                <Title large color="white" align="center">
                  Bem vindo(a)
                  <br />à atena!
                </Title>
                <SubTitle>
                  Participe da comunidade, compartilhe ideias, construa projetos
                  e ganhe pontos baseados em suas ações.
                </SubTitle>
              </Box>
            </Flex>
          </FullPage>

          <About />
          <XpRules />
          <QuestionCards />
          <Faq />
        </main>
      </StyledScreenHowItWorks>
    )
  }
}

export default ScreenHowItWorks
