import React, { Component } from "react";

import hiwlpc from "../assets/hiwlpc.png";

import StyledScreenError from "./Error.style";

import { Flex, Box } from "@rebass/grid";
import FullPage from "../components/FullPage";
import Title from "../components/Title";
import SubTitle from "../components/Title/SubTitle";

class ScreenError extends Component {
  render() {
    return (
      <StyledScreenError>
        <main className="layout">
          <FullPage background={`url(${hiwlpc})`}>
            <Flex alignItems="center" justifyContent="center" flex="1">
              <Box>
                <Title large color="white" align="center">
                  404
                </Title>
                <SubTitle>Ops! Página não encontrada :/</SubTitle>
              </Box>
            </Flex>
          </FullPage>
        </main>
      </StyledScreenError>
    );
  }
}

export default ScreenError;
