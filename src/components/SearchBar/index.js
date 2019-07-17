import React, { Component } from "react";
import PropTypes from "prop-types";

import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { Creators as RankingActions } from "../../store/ducks/ranking";

import { Container, SearchBar } from "./styles";

class SearchUserBar extends Component {
  static propTypes = {
    getRankingUsers: PropTypes.func.isRequired,
    ranking: PropTypes.object
  };

  state = {
    inputValue: "",
    options: [
      { value: "level", label: "Nível" },
      { value: "position", label: "Posição" }
    ]
  };

  handleChange = event => this.setState({ inputValue: event.target.value });

  handleSubmit = event => {
    if (event.key === "Enter") {
      this.props.getRankingUsers(this.state.inputValue);
      this.setState({ inputValue: "" });
    }
  };
  render() {
    return (
      <Container>
        <SearchBar
          type="text"
          value={this.state.inputValue}
          onChange={this.handleChange}
          onKeyPress={this.handleSubmit}
          placeholder=" Busca por jogador"
        />

        {/* <label>Filtrar por: </label>
        <StyledSelect
          defaultValue={this.state.options[0]}
          options={this.state.options}
        /> */}
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  ranking: state.ranking
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(RankingActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchUserBar);
