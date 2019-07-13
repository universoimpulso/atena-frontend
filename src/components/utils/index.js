import React from "react";
import PropTypes from "prop-types";

import { Flex } from "@rebass/grid";
import Title from "../Title";
import {
  StyledScreenError,
  Loading,
  SmallLoadingWrapper,
  SmallErrorWrapper
} from "./styles";
import loading from "../../assets/loading.svg";

export const PageError = ({ message }) => (
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

export const SmallError = ({ refresh, height, width, message }) => (
  <SmallErrorWrapper height={height} width={width} onClick={refresh}>
    <p>Algo deu errado! clique aqui para atualizar</p>
    {message}
  </SmallErrorWrapper>
);

export const PageLoading = ({ paddingSize, imgSize, width, height }) => (
  <Loading
    width={width}
    height={height}
    paddingSize={paddingSize}
    imgSize={imgSize}
  >
    <img src={loading} alt="" />
  </Loading>
);

export const SmallLoading = ({ width, height }) => (
  <SmallLoadingWrapper width={width} height={height}>
    <img src={loading} alt="" />
  </SmallLoadingWrapper>
);

PageError.propTypes = {
  message: PropTypes.string.isRequired
};
SmallError.propTypes = {
  refresh: PropTypes.func,
  height: PropTypes.string,
  width: PropTypes.string,
  message: PropTypes.string
};
PageLoading.propTypes = {
  paddingSize: PropTypes.string,
  imgSize: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string
};

SmallLoading.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string
};
