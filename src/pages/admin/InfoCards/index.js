import React, { Component } from "react";
import PropTypes from "prop-types";
import moment from "moment";
import "moment/locale/pt-br";

import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { Creators as GeneralReportsActions } from "../../../store/ducks/generalReports";
import { Wrapper, Collunm, Card, Percentage } from "./styles";

class InfoCards extends Component {
  static propTypes = {
    getAchievements: PropTypes.func.isRequired,
    getMissions: PropTypes.func.isRequired,
    getXp: PropTypes.func.isRequired,
    generalReports: PropTypes.shape({
      achievements: PropTypes.shape({
        byMonth: PropTypes.number,
        byMonthPercentage: PropTypes.number,
        byYear: PropTypes.number,
        byYearPercentage: PropTypes.number,
        total: PropTypes.number
      }).isRequired,

      missions: PropTypes.shape({
        byMonth: PropTypes.number,
        byMonthPercentage: PropTypes.number,
        byYear: PropTypes.number,
        byYearPercentage: PropTypes.number,
        total: PropTypes.number
      }).isRequired,

      xp: PropTypes.shape({
        byMonth: PropTypes.number,
        byMonthPercentage: PropTypes.number,
        byYear: PropTypes.number,
        byYearPercentage: PropTypes.number,
        total: PropTypes.number
      }).isRequired
    }).isRequired
  };
  state = {};

  getMonth = month => {
    return moment()
      .locale("pt-BR")
      .subtract(month, "month")
      .format("MMM/YY");
  };

  renderOptions = () => {
    let options = [];
    for (let i = 0; i < 7; i++) {
      options.push(<option key={i}>{this.getMonth(i)}</option>);
    }
    return options;
  };

  handleChange = event => {
    const month = event[0].target.value;
    const type = event[1];
    if (type === "achievements") {
      this.props.getAchievements(month);
    } else if (type === "missions") {
      this.props.getMissions(month);
    } else if (type === "xp") {
      this.props.getXp(month);
    }
  };

  componentDidMount() {
    this.props.getAchievements();
    this.props.getMissions();
    this.props.getXp();
  }
  render() {
    const { achievements, missions, xp } = this.props.generalReports;
    return (
      <Wrapper>
        <Collunm>
          <h4>conquistas</h4>
          <Card>
            <p>total conquistas mês</p>
            <select
              onChange={event => this.handleChange([event, "achievements"])}
            >
              {this.renderOptions()}
            </select>
            <h1>{achievements.byMonth}</h1>

            <Percentage positive={achievements.byMonthPercentage > 0}>
              <i
                className={`fa fa-long-arrow-alt-${
                  achievements.byMonthPercentage < 0 ? "down" : "up"
                }`}
              />
              {achievements.byMonthPercentage} %
            </Percentage>
          </Card>
          <Card>
            <p>total conquistas do ano</p>
            <h1>{achievements.byYear}</h1>
            <Percentage positive={achievements.byYearPercentage > 0}>
              <i
                className={`fa fa-long-arrow-alt-${
                  achievements.byYearPercentage < 1 ? "down" : "up"
                }`}
              />
              {achievements.byYearPercentage} %
            </Percentage>
          </Card>
          <Card>
            <p>total de conquistas</p>
            <h1>{achievements.total}</h1>
          </Card>
        </Collunm>
        <Collunm>
          <h4>missões</h4>
          <Card>
            <p>total missões mês</p>
            <select onChange={event => this.handleChange([event, "missions"])}>
              {this.renderOptions()}
            </select>
            <h1>{missions.byMonth}</h1>
            <Percentage positive={missions.byMonthPercentage > 0}>
              <i
                className={`fa fa-long-arrow-alt-${
                  missions.byMonthPercentage < 0 ? "down" : "up"
                }`}
              />
              {missions.byMonthPercentage} %
            </Percentage>
          </Card>
          <Card>
            <p>total missões do ano</p>
            <h1>{missions.byYear}</h1>
            <Percentage positive={missions.byYearPercentage > 0}>
              <i
                className={`fa fa-long-arrow-alt-${
                  missions.byYearPercentage < 0 ? "down" : "up"
                }`}
              />
              {missions.byYearPercentage} %
            </Percentage>
          </Card>
          <Card>
            <p>total de missões</p>
            <h1>{missions.total}</h1>
          </Card>
        </Collunm>
        <Collunm>
          <h4>Experiência (XP)</h4>
          <Card>
            <p>total experiência mês</p>
            <select onChange={event => this.handleChange([event, "xp"])}>
              {this.renderOptions()}
            </select>
            <h1>{xp.byMonth}</h1>
            <Percentage positive={xp.byMonthPercentage > 0}>
              <i
                className={`fa fa-long-arrow-alt-${
                  xp.byMonthPercentage < 0 ? "down" : "up"
                }`}
              />
              {xp.byMonthPercentage} %
            </Percentage>
          </Card>
          <Card>
            <p>total experiência do ano</p>
            <h1>{xp.byYear}</h1>
            <Percentage positive={xp.byYearPercentage > 0}>
              <i
                className={`fa fa-long-arrow-alt-${
                  xp.byYearPercentage < 0 ? "down" : "up"
                }`}
              />
              {xp.byYearPercentage} %
            </Percentage>
          </Card>
          <Card>
            <p>total experiência</p>
            <h1>{xp.total}</h1>
          </Card>
        </Collunm>
      </Wrapper>
    );
  }
}

const mapStateToProps = state => ({ generalReports: state.generalReports });

const mapDispatchToProps = dispatch =>
  bindActionCreators(GeneralReportsActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(InfoCards);
