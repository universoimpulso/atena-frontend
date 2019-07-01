import React, { Component } from "react";
import PropTypes from "prop-types";

import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { Creators as ExperienceCardsActions } from "../../../store/ducks/experienceCard";

import { Container, Card, Title } from "./styles";

class experienceCards extends Component {
  static propTypes = {
    getExperience: PropTypes.func.isRequired,
    putExperience: PropTypes.func.isRequired,
    experienceCard: PropTypes.array.isRequired
  };

  state = { data: [] };

  componentDidMount() {
    this.props.getExperience();
  }

  handleChange = data => {
    this.setState({ data });
  };

  handleSubmit = event => {
    event.preventDefault();
    const { data } = this.state;

    this.props.putExperience(data);
  };

  renderGeneralCards = type => {
    const generalCards = [
      {
        key: "limitPerDay",
        name: "limite de experiência diária",
        text: "até",
        initialValue: type.limitPerDay
      },
      {
        key: "inactivityPeriod",
        name: "período de inatividade",
        text: "até",
        initialValue: type.inactivityPeriod
      },
      {
        key: "inactivityLost",
        name: "XP perdido por inatividade",
        text: "até",
        initialValue: type.inactivityLost
      }
    ];
    return generalCards.map(card => (
      <Card key={card.key}>
        <p>{card.name}</p>
        <small />
        <form onSubmit={event => this.handleSubmit(event)}>
          <span>{card.text}</span>
          <input
            type="number"
            onChange={event =>
              this.handleChange({
                value: event.target.value,
                type: "general",
                subType: card.key
              })
            }
            placeholder={card.initialValue}
          />
          <small />
          <button>atualizar</button>
        </form>
      </Card>
    ));
  };

  renderActivityCards = type => {
    const {
      rocketChat,
      blog,
      github,
      meetup,
      referral,
      research,
      allocation,
      linkedin
    } = type;
    const activityCards = [
      {
        key: "rocketChat",
        name: "rocket chat",
        values: [
          {
            key: "message",
            text: "mensagens",
            initialValue: rocketChat.message
          },
          {
            key: "reactions",
            text: "dar reactions",
            initialValue: rocketChat.reactions
          },
          {
            key: "receiveReaction",
            text: "receber reactions",
            initialValue: rocketChat.receiveReaction
          }
        ]
      },
      {
        key: "meetup",
        name: "meetup",
        values: [
          {
            key: "participant",
            text: "participante",
            initialValue: meetup.participant
          },
          {
            key: "mediator",
            text: "mediador",
            initialValue: meetup.mediator
          },
          {
            key: "facilitator",
            text: "facilitador",
            initialValue: meetup.facilitator
          }
        ]
      },
      {
        key: "blog",
        name: "blog",
        values: [
          { key: "post", text: "postagem realizada", initialValue: blog.post },
          {
            key: "comment",
            text: "comentário realizado",
            initialValue: blog.comment
          }
        ]
      },
      {
        key: "github",
        name: "open source",
        values: [
          { key: "issue", text: "issues", initialValue: github.issue },
          {
            key: "review",
            text: "dar reactions",
            initialValue: github.review
          },
          {
            key: "pullRequest",
            text: "pull request",
            initialValue: github.pullRequest
          },
          {
            key: "approvedPullRequest",
            text: "PR aprovada",
            initialValue: github.approvedPullRequest
          }
        ]
      },
      {
        key: "referral",
        name: "referral",
        values: [
          {
            key: "indication",
            text: "impulser indicado",
            initialValue: referral.indication
          },
          {
            key: "allocation",
            text: "alocado via indicação",
            initialValue: referral.allocation
          }
        ]
      },
      {
        key: "research",
        name: "research",
        values: [
          {
            key: "validation",
            text: "passar pela validação",
            initialValue: research.validation
          },
          {
            key: "skill",
            text: "skill assessments",
            initialValue: research.skill
          }
        ]
      },
      {
        key: "allocation",
        name: "alocação",
        values: [
          {
            key: "interview",
            text: "entrevistado",
            initialValue: allocation.interview
          },
          {
            key: "approved",
            text: "aprovado",
            initialValue: allocation.approved
          },
          {
            key: "allocated",
            text: "alocado",
            initialValue: allocation.allocated
          }
        ]
      },
      {
        key: "linkedin",
        name: "linkedin",
        values: [
          {
            key: "impulser",
            text: "trabalhando na impulso",
            initialValue: linkedin.impulser
          }
        ]
      }
    ];
    return activityCards.map(card => (
      <Card key={card.key}>
        <p>{card.name}</p>
        <small />
        <form onSubmit={event => this.handleSubmit(event)}>
          {card.values.map(value => (
            <>
              <span>{value.text}</span>
              <input
                key={value.key}
                type="number"
                placeholder={value.initialValue}
                onChange={event =>
                  this.handleChange([event.target.value, card.key, value.key])
                }
              />
              <small />
            </>
          ))}
          <button>atualizar</button>
        </form>
      </Card>
    ));
  };

  render() {
    const { general, activity } = this.props.experienceCard.experienceValues;
    return (
      <>
        <Container>{general && this.renderGeneralCards(general)}</Container>
        <Title>experiência por atividade</Title>
        <Container>{activity && this.renderActivityCards(activity)}</Container>
      </>
    );
  }
}

const mapStateToProps = state => ({ experienceCard: state.experienceCard });

const mapDispatchToProps = dispatch =>
  bindActionCreators(ExperienceCardsActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(experienceCards);
