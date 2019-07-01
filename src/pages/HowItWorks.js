import React, { Component } from "react";

import hiwlpc from "../assets/hiwlpc.png";

import StyledScreenHowItWorks from "./HowItWorks.style";

import { Flex, Box } from "@rebass/grid";
import XpRules from "../components/XpRules";
import FullPage from "../components/FullPage";
import Title from "../components/Title";
import SubTitle from "../components/Title/SubTitle";
import Faq from "../components/Faq";
import About from "../components/About";
import QuestionCards from "../components/QuestionCards";

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
    );
  }
}

export default ScreenHowItWorks;
