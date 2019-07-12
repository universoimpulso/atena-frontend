import React, { Component } from "react";
import PropTypes from "prop-types";
import { Formik } from "formik";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import { Creators as achievementsActions } from "../../../store/ducks/achievements";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import {
  StyledForm,
  StyledSelect,
  StyledInput,
  StyledSmallInput,
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
    achievements: PropTypes.object.isRequired,
    achievementsValues: PropTypes.array
  };

  state = {
    startDate: null,
    endDate: null,
    limitDate: null,
    achievementTypeOptions: [
      { value: "permanent", label: "Permanente", isDisabled: true },
      { value: "temporary", label: "Temporária" }
    ],
    category: [
      { value: "rocketchat", label: "RocketChat" },
      { value: "github", label: "Github" }
    ],
    activity: [
      { value: "Mensagens Enviadas", label: "Mensagens Enviadas" },
      { value: "Reactions Dados", label: "Reactions Dados" },
      { value: "Reactions Recebidos", label: "Reactions Recebidos" }
    ],
    achievement: [
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
  getValues = () => {
    const { achievement } = this.state;
    let tiers = {};
    achievement.forEach(value =>
      value.tiers.forEach(tier => {
        Object.assign(tiers, { [`${value.name}-${tier.name}`]: tier.value });
      })
    );
    return tiers;
  };

  validateTier = value => (!value || value <= 0 ? true : null);

  handleSubmit = (values, actions) => {
    actions.setSubmitting(false);
    console.tron.log(values);
  };

  render() {
    const { achievement } = this.state;
    return (
      <Formik
        onSubmit={(values, actions) => this.handleSubmit(values, actions)}
        initialValues={this.getValues()}
      >
        {({ handleSubmit, handleChange, setFieldValue, errors, touched }) => (
          <StyledForm onSubmit={handleSubmit}>
            <h3>Criar nova conquista</h3>
            <p>Tipo de conquista</p>

            <StyledSelect
              placeholder="Selecione..."
              name="achievementType"
              options={this.state.achievementTypeOptions}
              onChange={value => setFieldValue("achievementType", value.value)}
            />

            <p>Categoria</p>
            <StyledSelect
              placeholder="Selecione..."
              name="category"
              options={this.state.category}
              onChange={value => setFieldValue("category", value.value)}
            />

            <p>Atividade</p>
            <StyledSelect
              placeholder="Selecione..."
              name="activity"
              options={this.state.activity}
              onChange={value => setFieldValue("activity", value.value)}
            />

            <p>Nome da conquista</p>
            <StyledInput
              placeholder="Nome"
              name="achievementName"
              type="text"
              onChange={handleChange}
            />

            <DateWrapper>
              <Box>
                <p>Inicío</p>
                <DatePicker
                  selectsStart
                  placeholderText="Inicio"
                  name="initialDate"
                  minDate={new Date()}
                  dateFormat="dd/MM/yyyy"
                  selected={this.state.startDate}
                  startDate={this.state.startDate}
                  endDate={this.state.endDate}
                  onChange={data => {
                    this.handleChangeStart(data);
                    setFieldValue("initialDate", data);
                  }}
                />
              </Box>
              <Box>
                <p>Término</p>
                <DatePicker
                  selectsEnd
                  placeholderText="Término"
                  name="finalDate"
                  disabled={this.state.startDate === null}
                  minDate={new Date()}
                  input
                  dateFormat="dd/MM/yyyy"
                  selected={this.state.endDate}
                  startDate={this.state.startDate}
                  endDate={this.state.endDate}
                  onChange={data => {
                    this.handleChangeEnd(data);
                    setFieldValue("finalDate", data);
                  }}
                />
              </Box>
              <Box>
                <p>Data limite</p>
                <DatePicker
                  name="limitDate"
                  placeholderText="Limite"
                  minDate={new Date()}
                  disabled={this.state.endDate === null}
                  maxDate={this.state.endDate}
                  dateFormat="dd/MM/yyyy"
                  selected={this.state.limitDate}
                  onChange={data => {
                    this.handleChangeLimit(data);
                    setFieldValue("limitDate", data);
                  }}
                />
              </Box>
            </DateWrapper>

            <p>Quantidade de ações</p>
            <Wrapper>
              {achievement.map(value => (
                <Card key={value.name}>
                  <Title>{value.name}</Title>
                  <div>
                    <ul>
                      {value.tiers.map((tier, index) => {
                        const tierName = `${value.name}-${tier.name}`;
                        return (
                          <li key={index}>
                            <p>{tier.name}</p>
                            <StyledSmallInput
                              validate={value => this.validateTier(value)}
                              name={tierName}
                              onChange={handleChange}
                              type="number"
                              error={errors[tierName] && touched[tierName]}
                            />
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </Card>
              ))}
            </Wrapper>
            <Button type="submit">concluir</Button>
          </StyledForm>
        )}
      </Formik>
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
