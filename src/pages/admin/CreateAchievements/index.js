import React, { Component } from "react";
import PropTypes from "prop-types";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Select, Scope, Input, useField } from "unform";
import * as Yup from "yup";

import { Creators as achievementsActions } from "../../../store/ducks/achievements";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import {
  StyledForm,
  StyledInput,
  DateWrapper,
  Box,
  Wrapper,
  Card,
  Title,
  Button
} from "./styles";

class CreateAchievements extends Component {
  static propTypes = {
    getAchievements: PropTypes.func.isRequired,
    // editAchievement: PropTypes.func.isRequired,
    achievements: PropTypes.object.isRequired,
    achievementsValues: PropTypes.array
  };
  state = {
    cardError: [],
    startDate: null,
    endDate: null,
    limitDate: null,
    activityOptions: [],
    achievement: {
      type: "Mensagens enviadas",
      values: [
        {
          name: "bronze",
          tiers: [
            { name: "I", value: 1500 },
            { name: "II", value: 1600 },
            { name: "III", value: 1700 },
            { name: "IV", value: 1800 },
            { name: "V", value: 2000 }
          ]
        },
        {
          name: "silver",
          tiers: [
            { name: "I", value: 1500 },
            { name: "II", value: 1600 },
            { name: "III", value: 1700 },
            { name: "IV", value: 1800 },
            { name: "V", value: 2000 }
          ]
        },
        {
          name: "gold",
          tiers: [
            { name: "I", value: 1500 },
            { name: "II", value: 1600 },
            { name: "III", value: 1700 },
            { name: "IV", value: 1800 },
            { name: "V", value: 2000 }
          ]
        },
        {
          name: "platinum",
          tiers: [
            { name: "I", value: 1500 },
            { name: "II", value: 1600 },
            { name: "III", value: 1700 },
            { name: "IV", value: 1800 },
            { name: "V", value: 2000 }
          ]
        },
        {
          name: "diamond",
          tiers: [
            { name: "I", value: 1500 },
            { name: "II", value: 1600 },
            { name: "III", value: 1700 },
            { name: "IV", value: 1800 },
            { name: "V", value: 2000 }
          ]
        }
      ]
    }
  };
  componentDidMount() {
    this.props.getAchievements();
  }
  handleCategoryChange = event => {
    console.tron.log(event.target.value);
  };
  handleActivityChange = event => {
    console.tron.log(event.target.value);
  };

  handleChangeStart = date => {
    this.setState({
      startDate: date
    });
  };

  handleChangeEnd = date => {
    this.setState({
      endDate: date
    });
  };

  handleChangeLimit = date => {
    this.setState({
      limitDate: date
    });
  };

  handleChange = name => {
    const cardError = this.state.cardError.filter(error => error !== name);
    this.setState({ cardError });
  };

  handleSubmit = data => {
    console.tron.log(data);
    this.setState({ cardError: [] });
  };

  handleError = error => {
    const { cardError } = this.state;
    if (cardError.includes(error)) return;
    const newError = [...this.state.cardError, error];
    this.setState({ cardError: newError });
  };

  render() {
    const { achievementsValues } = this.props.achievements;
    console.tron.log(achievementsValues);
    const { achievement, cardError, activityOptions } = this.state;
    const options = [{ id: "temporary", title: "Temporária" }];
    const categoryOptions = achievementsValues.map(a => ({
      id: a.name,
      title: a.name
    }));
    const schema = Yup.object().shape({
      achievementName: Yup.string()
        .min(5, "Minimo 5 caracteres")
        .max(20, "Máximo 20 caracteres")
        .required("Campo Obrigatório"),
      achievementType: Yup.string().required("Selecione uma opção"),
      category: Yup.string().required("Selecione uma opção"),
      activity: Yup.string().required("Selecione uma opção"),
      initialDate: Yup.date().required(),
      bronze: Yup.object()
        .shape({
          I: Yup.number()
            .typeError(() => this.handleError("bronze"))
            .moreThan(0, () => this.handleError("bronze"))
            .integer(() => this.handleError("bronze")),
          II: Yup.number()
            .typeError(() => this.handleError("bronze"))
            .moreThan(0, () => this.handleError("bronze"))
            .integer(() => this.handleError("bronze")),
          III: Yup.number()
            .typeError(() => this.handleError("bronze"))
            .moreThan(0, () => this.handleError("bronze"))
            .integer(() => this.handleError("bronze")),
          IV: Yup.number()
            .typeError(() => this.handleError("bronze"))
            .moreThan(0, () => this.handleError("bronze"))
            .integer(() => this.handleError("bronze")),
          V: Yup.number()
            .typeError(() => this.handleError("bronze"))
            .moreThan(0, () => this.handleError("bronze"))
            .integer(() => this.handleError("bronze"))
        })
        .required(),
      silver: Yup.object()
        .shape({
          I: Yup.number()
            .typeError(() => this.handleError("silver"))
            .moreThan(0, () => this.handleError("silver"))
            .integer(() => this.handleError("silver")),
          II: Yup.number()
            .typeError(() => this.handleError("silver"))
            .moreThan(0, () => this.handleError("silver"))
            .integer(() => this.handleError("silver")),
          III: Yup.number()
            .typeError(() => this.handleError("silver"))
            .moreThan(0, () => this.handleError("silver"))
            .integer(() => this.handleError("silver")),
          IV: Yup.number()
            .typeError(() => this.handleError("silver"))
            .moreThan(0, () => this.handleError("silver"))
            .integer(() => this.handleError("silver")),
          V: Yup.number()
            .typeError(() => this.handleError("silver"))
            .moreThan(0, () => this.handleError("silver"))
            .integer(() => this.handleError("silver"))
        })
        .required(),
      gold: Yup.object()
        .shape({
          I: Yup.number()
            .typeError(() => this.handleError("gold"))
            .moreThan(0, () => this.handleError("gold"))
            .integer(() => this.handleError("gold")),
          II: Yup.number()
            .typeError(() => this.handleError("gold"))
            .moreThan(0, () => this.handleError("gold"))
            .integer(() => this.handleError("gold")),
          III: Yup.number()
            .typeError(() => this.handleError("gold"))
            .moreThan(0, () => this.handleError("gold"))
            .integer(() => this.handleError("gold")),
          IV: Yup.number()
            .typeError(() => this.handleError("gold"))
            .moreThan(0, () => this.handleError("gold"))
            .integer(() => this.handleError("gold")),
          V: Yup.number()
            .typeError(() => this.handleError("gold"))
            .moreThan(0, () => this.handleError("gold"))
            .integer(() => this.handleError("gold"))
        })
        .required(),
      platinum: Yup.object()
        .shape({
          I: Yup.number()
            .typeError(() => this.handleError("platinum"))
            .moreThan(0, () => this.handleError("platinum"))
            .integer(() => this.handleError("platinum")),
          II: Yup.number()
            .typeError(() => this.handleError("platinum"))
            .moreThan(0, () => this.handleError("platinum"))
            .integer(() => this.handleError("platinum")),
          III: Yup.number()
            .typeError(() => this.handleError("platinum"))
            .moreThan(0, () => this.handleError("platinum"))
            .integer(() => this.handleError("platinum")),
          IV: Yup.number()
            .typeError(() => this.handleError("platinum"))
            .moreThan(0, () => this.handleError("platinum"))
            .integer(() => this.handleError("platinum")),
          V: Yup.number()
            .typeError(() => this.handleError("platinum"))
            .moreThan(0, () => this.handleError("platinum"))
            .integer(() => this.handleError("platinum"))
        })
        .required(),
      diamond: Yup.object()
        .shape({
          I: Yup.number()
            .typeError(() => this.handleError("diamond"))
            .moreThan(0, () => this.handleError("diamond"))
            .integer(() => this.handleError("diamond")),
          II: Yup.number()
            .typeError(() => this.handleError("diamond"))
            .moreThan(0, () => this.handleError("diamond"))
            .integer(() => this.handleError("diamond")),
          III: Yup.number()
            .typeError(() => this.handleError("diamond"))
            .moreThan(0, () => this.handleError("diamond"))
            .integer(() => this.handleError("diamond")),
          IV: Yup.number()
            .typeError(() => this.handleError("diamond"))
            .moreThan(0, () => this.handleError("diamond"))
            .integer(() => this.handleError("diamond")),
          V: Yup.number()
            .typeError(() => this.handleError("diamond"))
            .moreThan(0, () => this.handleError("diamond"))
            .integer(() => this.handleError("diamond"))
        })
        .required()
    });

    return (
      <StyledForm schema={schema} onSubmit={this.handleSubmit}>
        <h3>Criar nova conquista</h3>
        <p>Tipo de conquista</p>
        <Select name="achievementType" id="achievementType" options={options} />
        <p>Nome da conquista</p>
        <StyledInput width="25%" type="text" name="achievementName" />
        <p>Categoria</p>
        <Select
          name="category"
          id="category"
          onChange={this.handleCategoryChange}
          options={categoryOptions}
        />
        <p>Atividade</p>
        <Select name="activity" id="activity" options={activityOptions} />
        <DateWrapper>
          <Box>
            <p>Inicío</p>
            <DatePicker
              selectsStart
              name="initialDate"
              minDate={new Date()}
              dateFormat="dd/MM/yyyy"
              selected={this.state.startDate}
              onChange={this.handleChangeStart}
              startDate={this.state.startDate}
              endDate={this.state.endDate}
            />
          </Box>
          <Box>
            <p>Término</p>
            <DatePicker
              selectsEnd
              name="finalDate"
              minDate={new Date()}
              dateFormat="dd/MM/yyyy"
              selected={this.state.endDate}
              onChange={this.handleChangeEnd}
              startDate={this.state.startDate}
              endDate={this.state.endDate}
            />
          </Box>
          <Box>
            <p>Data limite</p>
            <DatePicker
              name="limitDate"
              minDate={new Date()}
              maxDate={this.state.endDate}
              dateFormat="dd/MM/yyyy"
              selected={this.state.limitDate}
              onChange={this.handleChangeLimit}
            />
          </Box>
        </DateWrapper>

        <p>Quantidade de ações</p>
        <Wrapper>
          {achievement.values.map(value => (
            <Card key={value.name} cardError={cardError.includes(value.name)}>
              <Title>{value.name}</Title>
              <div>
                <Scope path={value.name}>
                  <ul>
                    {value.tiers.map((tier, index) => (
                      <li key={index}>
                        <p>{tier.name}</p>
                        <Input
                          name={tier.name}
                          onChange={event => this.handleChange(value.name)}
                          type="text"
                          placeholder={tier.value}
                        />
                      </li>
                    ))}
                  </ul>
                </Scope>
              </div>
            </Card>
          ))}
        </Wrapper>
        <Button type="submit">concluir</Button>
      </StyledForm>
    );
  }
}

const mapStateToProps = state => ({ achievements: state.achievements });

const mapDispatchToProps = dispatch =>
  bindActionCreators(achievementsActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateAchievements);
