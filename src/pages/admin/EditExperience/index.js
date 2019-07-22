import React, { Component } from "react";
import { toast } from "react-toastify";
import { Formik } from "formik";
import PropTypes from "prop-types";

import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import {
  PageError,
  PageLoading,
  SmallLoading
} from "../../../components/utils";
import { Creators as ExperienceCardsActions } from "../../../store/ducks/experienceCard";

import { Container, Title, Card, StyledInput } from "./styles";

class EditExperience extends Component {
  static propTypes = {
    getExperience: PropTypes.func.isRequired,
    putExperience: PropTypes.func.isRequired,
    experienceCard: PropTypes.array.isRequired
  };

  componentDidMount() {
    this.props.getExperience();
  }
  putValues = values => {
    this.props.putExperience(values);
  };
  getValues = data => {
    const values = {};
    data.forEach(data =>
      Object.assign(values, { [data.key]: data.initialValue })
    );
    return values;
  };

  notify = type => {
    if (type === "negativeNumber") {
      if (toast.isActive("negativeNumber")) return;
      toast.error("Não é possível submeter valores negativos", {
        toastId: "negativeNumber"
      });
    }
  };

  validate = value => {
    const validate = !value || value <= 0 ? true : null;
    if (validate) this.notify("negativeNumber");
    return validate;
  };

  renderCards = data => {
    return data.map(data => {
      const { key, name, text, values } = data;
      return (
        <Card key={key}>
          <p>{name}</p>
          <small />
          <Formik
            onSubmit={values => this.putValues({ values, key })}
            initialValues={this.getValues(values)}
          >
            {({ handleSubmit, handleChange, errors, touched }) => (
              <form onSubmit={handleSubmit}>
                <span>{text && text}</span>
                {values.map(value => (
                  <>
                    <span>{value.text && value.text}</span>
                    <StyledInput
                      name={value.key}
                      validate={value => this.validate(value)}
                      onChange={handleChange}
                      type="number"
                      error={errors[value.key] && touched[value.key]}
                    />

                    <small />
                  </>
                ))}
                <button type="submit">atualizar</button>
              </form>
            )}
          </Formik>
          {this.props.experienceCard.cardLoading === key && <SmallLoading />}
        </Card>
      );
    });
  };

  render() {
    const { loading, getError } = this.props.experienceCard;
    const { general, activity } = this.props.experienceCard.experienceValues;

    if (loading) return <PageLoading />;
    if (getError) return <PageError message={getError} />;

    return (
      <Container>
        {general && this.renderCards(general)}
        <Title>experiência por atividade</Title>
        {activity && this.renderCards(activity)}
      </Container>
    );
  }
}

const mapStateToProps = state => ({ experienceCard: state.experienceCard });

const mapDispatchToProps = dispatch =>
  bindActionCreators(ExperienceCardsActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditExperience);
