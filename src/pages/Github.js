import React from "react";
import { ThemeProvider } from "styled-components";
import theme from "../styles/theme";
import StyledScreenGithub from "./Github.style";
import hiwlpc from "../assets/hiwlpc.png";
import Card from "../components/Card";
import Title from "../components/Title";
import FullPage from "../components/FullPage";

const ScreenGithub = ({ match, location }) => {
  let type = "retry";
  const { status } = match.params;
  const { search } = location;

  let url = search.replace("?url=", "") || "https://impulso.network/";

  const getStatus = () => {
    if (status === "success" || status === "error") type = status;
  };

  getStatus();

  const messages = {
    success: {
      title: "Olá novamente, nobre Impulser!",
      subtitle: "Sua dedicação foi posta a prova e você passou com honrarias!",
      text:
        "Quer entender um pouco mais? Não tem problema, dá uma olhadinha aqui neste papiro: <a href='https://github.com/universoimpulso/atena'>https://github.com/universoimpulso/atena</a>"
    },
    retry: {
      title: "Olá, nobre Impulser!",
      subtitle: "Ops! parece que você entrou na caverna errada.",
      text: `Que falta faz um GPS, não é? :P <br> Para tentar novamente, siga esse caminho e não vai errar: <a href='${url}'>${url}</a>`
    },
    error: {
      title: "Olá, nobre Impulser!",
      subtitle:
        "Não conseguimos localizar seu e-mail público ou privado na API do GITHUB.",
      text:
        "Esse recurso da sua armadura de cavaleiro não está pronto para ganhar bonificações na contribuição do projeto Atena!"
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <StyledScreenGithub background={`url(${hiwlpc})`}>
        <div className="_inner">
          <Card large>
            <span className="cardIcon">
              <i className="fab fa-github" />
            </span>
            <p className="title">
              <strong>{messages[type].title}</strong>
            </p>
            <Title align="center">{messages[type].subtitle}</Title>
            <p
              className="super"
              dangerouslySetInnerHTML={{ __html: messages[type].text }}
            />
          </Card>
        </div>
        <div className="help">
          Ainda está em dúvida de como funciona? <br />
          Não tem problema, dá uma olhadinha aqui: <br />
          <a href="https://impulso.network/">https://impulso.network</a>
        </div>
      </StyledScreenGithub>
    </ThemeProvider>
  );
};

export default ScreenGithub;
