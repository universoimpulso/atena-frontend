import React, { Component } from "react";
import { Form, Field } from "react-final-form";
import { toast } from "react-toastify";
import PropTypes from "prop-types";

import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { Creators as AchievementsActions } from "../../../store/ducks/achievements";

import { SmallLoading } from "../../../components/utils";
import { Card, StyledInput } from "./styles";

class EditAchievements extends Component {
  static propTypes = {
    editAchievement: PropTypes.func.isRequired,
    data: PropTypes.array,
    achievements: PropTypes.object
  };

  putValues = values => {
    const { AchievementName, type, value } = this.props.data;

    const formatedValues = [];
    for (let [key, value] of Object.entries(values.tiers)) {
      formatedValues.push({ name: key, value });
    }

    values.tiers = formatedValues;

    const sameValues = value.tiers.filter(
      (v, index) => v.value === values.tiers[index].value
    );

    if (sameValues.length === 5) {
      toast.warn("Nenhum valor alterado, sua requisição nao foi enviada!");
      return;
    }

    const data = { AchievementName, type, values };
    this.props.editAchievement(data);
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
    const validate = value && value > 0 ? undefined : true;
    if (validate) this.notify("negativeNumber");
    return validate;
  };

  render() {
    const { type } = this.props.data;
    const { name, tiers } = this.props.data.value;
    const { editLoading } = this.props.achievements;
    return (
      <Card>
        <p>{name}</p>
        <Form
          onSubmit={tiers => this.putValues({ tiers, name })}
          render={({ handleSubmit }) => (
            <form onSubmit={handleSubmit}>
              <ul>
                {tiers.map(tier => (
                  <li key={tier.name}>
                    <span>{tier.name}</span>
                    <Field
                      name={tier.name}
                      validate={this.validate}
                      initialValue={tier.value}
                    >
                      {({ input, meta }) => (
                        <StyledInput
                          error={meta.touched && meta.error}
                          {...input}
                          type="number"
                        />
                      )}
                    </Field>
                  </li>
                ))}
              </ul>

              <button type="submit">atualizar</button>
            </form>
          )}
        />
        {editLoading === type.concat(name) && <SmallLoading />}
      </Card>
    );
  }
}

const mapStateToProps = state => ({ achievements: state.achievements });

const mapDispatchToProps = dispatch =>
  bindActionCreators(AchievementsActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditAchievements);
