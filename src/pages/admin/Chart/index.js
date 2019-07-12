import React, { Component } from "react";
import ReactEcharts from "echarts-for-react";
import PropTypes from "prop-types";

import { Creators as GeneralReportsActions } from "../../../store/ducks/generalReports";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import { PageLoading, SmallError } from "../../../components/utils";
import { Wrapper, Info, Container, Card, Total, Level } from "./styles";

class Charts extends Component {
  static propTypes = {
    getUsers: PropTypes.func.isRequired,
    generalReports: PropTypes.shape({
      getUsersLoading: PropTypes.bool.isRequired,
      errors: PropTypes.object,
      totalUsers: PropTypes.number,
      users: PropTypes.arrayOf(PropTypes.object)
    }).isRequired
  };

  state = {
    colors: [
      "#55D8FE",
      "#FF8373",
      "#FFDA83",
      "#83FF8D",
      "#FF83FF",
      "#83F1FF",
      "#E35F5A",
      "#B9FF8D",
      "#7AE8E8",
      "#A3A0FB"
    ]
  };

  getOption = () => {
    return {
      tooltip: {
        position: function(pos, params, dom, rect, size) {
          let obj = { top: 0 };
          obj[["left", "right"][+(pos[0] < size.viewSize[0] / 2)]] = 5;
          return obj;
        },
        trigger: "item",
        formatter: "{b} <br/> {c}"
      },
      color: this.state.colors,

      series: [
        {
          name: "Jogadores",
          type: "pie",
          radius: ["45%", "90%"],
          avoidLabelOverlap: false,
          center: ["50%", "50%"],
          label: {
            normal: {
              show: false,
              position: "center",
              formatter: "{d}%"
            },
            emphasis: {
              show: true,
              textStyle: {
                fontSize: "20",
                fontWeight: "bold"
              }
            }
          },
          labelLine: {
            normal: {
              show: false
            }
          },
          data: this.props.generalReports.users
        }
      ]
    };
  };

  componentDidMount() {
    const { totalUsers } = this.props.generalReports;
    !totalUsers && this.props.getUsers();
  }

  render() {
    const { colors } = this.state;
    const {
      getUsersLoading,
      errors,
      users,
      totalUsers
    } = this.props.generalReports;

    if (errors.users)
      return (
        <SmallError
          message={errors.users}
          height="228px"
          refresh={this.props.getUsers}
        />
      );

    if (getUsersLoading)
      return <PageLoading paddingSize="0" height="288px" imgSize="115px" />;

    return (
      <Container>
        <h4>jogadores</h4>
        <Card height="328px" width="100%">
          <h5>Jogadores por nível</h5>
          <Wrapper>
            <ReactEcharts
              option={this.getOption()}
              style={{ height: "244px", width: "244px" }}
            />
            <Info>
              <Level>
                {users.map((level, index) => (
                  <li key={index}>
                    <div style={{ backgroundColor: colors[index] }} />
                    {`nível ${index + 1}`}
                    <span />
                    {level.value}
                  </li>
                ))}
              </Level>
              <Total>
                total: <span /> <p>{totalUsers}</p>
              </Total>
            </Info>
          </Wrapper>
        </Card>
      </Container>
    );
  }
}

const mapStateToProps = state => ({ generalReports: state.generalReports });

const mapDispatchToProps = dispatch =>
  bindActionCreators(GeneralReportsActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Charts);
