import React, { Component } from "react";
import { Form, Field } from "react-final-form";
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

  validate = value => (value && value > 0 ? undefined : true);

  renderCards = ({ key, name, text, values }) => (
    <Card key={key}>
      <p>{name}</p>
      <small />
      <Form
        onSubmit={values => this.putValues({ values, key })}
        render={({ handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <span>{text && text}</span>
            {values.map(value => (
              <>
                <span>{value.text && value.text}</span>

                <Field
                  name={value.key}
                  validate={this.validate}
                  initialValue={value.initialValue}
                >
                  {({ input, meta }) => (
                    <StyledInput
                      error={meta.touched && meta.error}
                      {...input}
                      type="number"
                    />
                  )}
                </Field>
                <small />
              </>
            ))}
            <button type="submit">atualizar</button>
          </form>
        )}
      />
      {this.props.experienceCard.cardLoading === key && <SmallLoading />}
    </Card>
  );

  render() {
    const { loading, getError } = this.props.experienceCard;
    const { general, activity } = this.props.experienceCard.experienceValues;

    if (loading) return <PageLoading />;
    if (getError) return <PageError message={getError} />;

    return (
      <Container>
        {general && general.map(data => this.renderCards(data))}
        <Title>experiência por atividade</Title>
        {activity && activity.map(data => this.renderCards(data))}
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
