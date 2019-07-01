import React from "react";
import PropTypes from "prop-types";

import { Flex } from "@rebass/grid";
import Title from "../Title";
import StyledScreenError from "./styles";

const ScreenError = ({ message }) => (
  <StyledScreenError>
    <main className="layout">
      <div className="_inner">
        <Flex justifyContent="center">
          <Title align={"center"} extraLarge>
            Opa! algo deu errado...
          </Title>
        </Flex>
        <p className="super">
          Caro(a) cavaleiro(a), aconteceu um erro. Por favor tente novamente.
        </p>
        <p>{message}</p>
      </div>
    </main>
  </StyledScreenError>
);

ScreenError.propTypes = {
  message: PropTypes.string.isRequired
};

export default ScreenError;
