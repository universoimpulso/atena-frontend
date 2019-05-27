import React from "react";

import { Flex } from "@rebass/grid";
import Title from "../components/Title";
import StyledScreenError from "./Error.style";

const ScreenError = () => (
  <StyledScreenError>
    <main className="layout">
      <div className="_inner">
        <Flex justifyContent="center">
          <Title align={"center"} extraLarge>
            Error
          </Title>
        </Flex>
        <p className="super">
          Caro(a) cavaleiro(a), aconteceu um erro. Por favor tente novamente.
        </p>
      </div>
    </main>
  </StyledScreenError>
);

export default ScreenError;
