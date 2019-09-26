import React, { Component } from 'react'
import { AccordionWrapper, Awnser, Icon } from './style'

class Accordion extends Component {
  state = {
    active: null,
    questions: [
      {
        content: 'Como me comunico com a Atena?',
        awnser:
          'Para centralizar as informações a respeito da sua Reputação, Níveis e Conquistas criamos a bot ATENA. Através de comandos é possível pedir à Atena para exibir sua reputação (!meuspontos), Ranking Mensal (!ranking), Ranking Geral (!rankinggeral) e Conquistas (!minhasconquistas).'
      },
      {
        content: 'Existirão atualizações?',
        awnser:
          'Sim! A Impulso Network é muito dinâmica e não para de crescer. O surgimento de novos canais, atividades e práticas corriqueiras e positivas na comunidade serão mapeadas para que novas features sejam criadas.'
      },
      {
        content: 'Existe alguma premiação?',
        awnser:
          'Claro! Além da Reputação obtida através da sua participação na comunidade (representada por Reputação e Níveis), Atena poderá te premiar com acesso a atividades especiais da comunidade, cupons de desconto para serviços, além de produtos e brindes exclusivos.'
      },
      {
        content: 'Qual a diferença entre ranking mensal e geral?',
        awnser:
          'Enquanto o Ranking Geral valoriza o esforço durante todo o seu percurso com a Atena e mostra o acumulado de Reputação e seu Nível, o Ranking Mensal foca no que foi realizado e recompensa o primeiro colocado naquele mês.'
      },
      {
        content: 'Como faço para participar do projeto?',
        awnser: [
          `Qualquer pessoa pode ajudar Atena a crescer, basta entrar no canal <strong>#projeto-atena</strong> no nosso Rocket.chat ou acessar diretamente o nosso repositório no
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/universoimpulso/atena"
          >
            Github
          </a> .
          Ainda não faz parte da Impulso Network? Basta acessar o
                    <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://app.impulso.network/"
          >
            Rocket.chat
          </a>
           e fazer o seu cadastro, é rapidinho.`
        ]
      }
    ]
  }

  handleClick = index => {
    this.setState({ active: index === this.state.active ? null : index })
  }

  render() {
    const { active, questions } = this.state
    return (
      <AccordionWrapper>
        {questions.map((question, index) => (
          <section key={index} onClick={() => this.handleClick(index)}>
            <span className="accordion__link">
              {question.content}
              <Icon selected={active === index} className="fas fa-sort-down" />
            </span>
            <Awnser selected={active === index} className="accordion_content">
              <p dangerouslySetInnerHTML={{ __html: question.awnser }} />
            </Awnser>
          </section>
        ))}
      </AccordionWrapper>
    )
  }
}

export default Accordion
