import React, { Component } from "react";
import { Formik } from "formik";
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

  getValues = data => {
    console.tron.log(data);
    const values = {};
    data.forEach(data => Object.assign(values, { [data.name]: data.value }));
    console.tron.log(values);
    return values;
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
        <Formik
          onSubmit={tiers => this.putValues({ tiers, name })}
          initialValues={this.getValues(tiers)}
        >
          {({ handleSubmit, handleChange, errors, touched }) => (
            <form onSubmit={handleSubmit}>
              <ul>
                {tiers.map(tier => (
                  <li key={tier.name}>
                    <span>{tier.name}</span>
                    <StyledInput
                      name={tier.name}
                      validate={value => this.validate(value)}
                      type="number"
                      onChange={handleChange}
                      error={errors[tier.name] && touched[tier.name]}
                    />
                  </li>
                ))}
              </ul>

              <button type="submit">atualizar</button>
            </form>
          )}
        </Formik>
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
