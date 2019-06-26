import React, { Component } from "react";

import InfoCards from "./InfoCards";
import TeamAccordion from "./TeamAccordion";
import Charts from "./Charts";

import { Container, Aside, Section, Option } from "./styles";

class Admin extends Component {
  state = {
    active: "generalReports"
  };
  handleClick = active => {
    this.setState({ active });
  };
  render() {
    const { active } = this.state;
    return (
      <Container>
        <Aside>
          <h3>Jogo</h3>
          <Option
            active={active === "generalReports"}
            onClick={() => this.handleClick("generalReports")}
          >
            Relatórios gerais
          </Option>
          <Option active={active === "1"} onClick={() => this.handleClick("1")}>
            Rankings
          </Option>
          <Option active={active === "1"} onClick={() => this.handleClick("2")}>
            Experiência
          </Option>
          <Option active={active === "1"} onClick={() => this.handleClick("3")}>
            Conquistas
          </Option>
          <small />
        </Aside>
        <Section>
          {active === "generalReports" ? (
            <>
              <h2>Relatórios Gerais</h2>
              <Charts />
              <InfoCards />
              <TeamAccordion />
            </>
          ) : (
            <h1>Oi</h1>
          )}
        </Section>
      </Container>
    );
  }
}

export default Admin;
