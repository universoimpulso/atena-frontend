import React, { Component } from "react";

import StyledScreenHowItWorks from "./HowItWorks.style";
import Layout from "../Layout";
import hiwlpc from "../assets/hiwlpc.png";
import badge from "../assets/badge.svg";
import stars from "../assets/stars.svg";
import ilustraAtena from "../assets/ilustra-atena.svg";

import { Flex, Box } from "@rebass/grid";
import XpRules from "../components/XpRules";
import FullPage from "../components/FullPage";
import Title from "../components/Title";
import SubTitle from "../components/Title/SubTitle";
import Card from "../components/Card";
import Button from "../components/Button";
import Faq from "../components/Faq";

class ScreenHowItWorks extends Component {
  render() {
    return (
      <StyledScreenHowItWorks>
        <Layout {...this.props}>
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
          <section className="container about">
            <Flex alignItems="center" flexWrap="wrap">
              <Box width={[1, 1 / 2]}>
                <Title large color="primary">
                  Mas afinal,
                  <br />o que é a <span className="red">Atena</span> ?
                </Title>
                <p className="super">
                  Inspirada na deusa grega da sabedoria, a{" "}
                  <strong>Atena</strong> é uma iniciativa{" "}
                  <strong>open source</strong> de gamificação da Impulso, que
                  tem como objetivos promover o engajamento e premiar os
                  esforços das pessoas que pertencem à Impulso Network.
                </p>
                <br />
                <p className="super ifdesktop">
                  Assim que você entra na comunidade, automaticamente se tornará
                  um(a) jogador(a) e poderá pontuar por meio da execução de
                  diversas <strong>atividades</strong>, alcançar{" "}
                  <strong>Níveis</strong> e obter <strong>conquistas</strong>{" "}
                  como reconhecimento pelos seus esforços.
                </p>
              </Box>
              <Box width={[1, 1 / 2]}>
                <img
                  src={ilustraAtena}
                  alt="Ilustração da Atena"
                  className="ilustra"
                />
              </Box>
            </Flex>
          </section>

          <XpRules />

          <section className="container cards">
            <Flex css={{ margin: "0 -25px" }} flexWrap="wrap">
              <Box width={[1, 1 / 2]} px={25}>
                <Card>
                  <img alt="estrelas" src={stars} />
                  <Title>
                    O QUE SÃO E<br /> COMO GANHAR <br />
                    <span className="red">NÍVEIS</span>?
                  </Title>
                  <p className="super">
                    Os <strong>Níveis</strong> são representações simplificadas
                    do seu avanço na Atena e são atingidos mediante uma
                    determinada quantidade de <strong>XP</strong>. Além disso,
                    eles conferem o acesso à novas missões, cargos e
                    recompensas.
                  </p>
                  <Button>
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://www.notion.so/impulso/N-veis-Como-ganhar-6d67592b078f49b3879ce4db91081be4"
                    >
                      mais detalhes
                    </a>
                  </Button>
                </Card>
              </Box>
              <Box
                width={[1, 1 / 2]}
                px={25}
                css={{
                  display: "flex",
                  flexDirection: "column"
                }}
              >
                <Card>
                  <img alt="badge" src={badge} />
                  <Title>
                    O QUE SÃO E <br /> COMO GANHAR <br />{" "}
                    <span className="red">CONQUISTAS</span>?
                  </Title>
                  <p className="super">
                    <strong>Conquistas</strong> são formas de reconhecer o seu
                    esforço. Após realizar algo que mereça esse reconhecimento,
                    você será condecorado(a) com uma <strong>medalha</strong>{" "}
                    que representa este marco.
                  </p>
                  <Button>
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://www.notion.so/impulso/Conquistas-Como-ganhar-f8cded2569e7411ebabb78c8e99a2f94"
                    >
                      mais detalhes
                    </a>
                  </Button>
                </Card>
              </Box>
            </Flex>
          </section>
          <section className="container faqs">
            <Faq />
          </section>
        </Layout>
      </StyledScreenHowItWorks>
    );
  }
}

export default ScreenHowItWorks;
