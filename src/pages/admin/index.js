import React, { Component } from "react";

import InfoCards from "./InfoCards";
import TeamAccordion from "./TeamAccordion";
import Chart from "./Chart";
import EditExperience from "./EditExperience";
import EditAchievements from "./EditAchievements";
import CreateAchievements from "./CreateAchievements";

import { Container, Aside, Section, Option } from "./styles";

class Admin extends Component {
  state = {
    active: "achievements",
    achievementsType: "createAchievements",
    options: [
      { key: "generalReports", name: "Relatórios Gerais" },
      { key: "ranking", name: "Rankings" },
      { key: "editExperience", name: "Experiência" },
      { key: "achievements", name: "Conquistas" }
    ]
  };

  handleClick = active => {
    active === "editAchievements" || active === "createAchievements"
      ? this.setState({ achievementsType: active })
      : active === "achievements"
      ? this.setState({ active, achievementsType: "editAchievements" })
      : this.setState({ active, achievementsType: null });
  };

  renderOptions = title => {
    const { active, options } = this.state;
    return (
      <>
        <h3>{title}</h3>
        {options.map(option => (
          <Option
            key={option.key}
            active={active === option.key}
            onClick={() => this.handleClick(option.key)}
          >
            {option.name}
          </Option>
        ))}
      </>
    );
  };

  render() {
    const { active, achievementsType } = this.state;
    return (
      <Container>
        <Aside>
          {this.renderOptions("Jogo")}
          {active === "achievements" && (
            <>
              <Option
                marginLeft="15px"
                key="editAchievements"
                active={achievementsType === "editAchievements"}
                onClick={() => this.handleClick("editAchievements")}
              >
                Editar
              </Option>
              <Option
                marginLeft="15px"
                key="createAchievements"
                active={achievementsType === "createAchievements"}
                onClick={() => this.handleClick("createAchievements")}
              >
                Criar
              </Option>
            </>
          )}
          <small />
          <h3>Jogadores</h3>
          <Option
            key="players"
            active={active === "players"}
            onClick={() => this.handleClick("players")}
          >
            Informações do jogador
          </Option>
        </Aside>
        <Section>
          {active === "generalReports" ? (
            <>
              <h2>Relatórios Gerais</h2>
              <Chart />
              <InfoCards />
              <TeamAccordion />
            </>
          ) : active === "editExperience" ? (
            <>
              <h2>Experiência(XP)</h2>
              <EditExperience />
            </>
          ) : active === "ranking" ? (
            <>
              <h2>Ranking</h2>
            </>
          ) : active === "players" ? (
            <h2>Informações do Jogador</h2>
          ) : active === "achievements" ? null : null}

          {achievementsType === "editAchievements" ? (
            <>
              <h2>Editar Conquistas</h2>
              <EditAchievements />
            </>
          ) : achievementsType === "createAchievements" ? (
            <>
              <h2>Criar Conquistas</h2>
              <CreateAchievements />
            </>
          ) : null}
        </Section>
      </Container>
    );
  }
}

export default Admin;
