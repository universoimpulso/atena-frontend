import styled from "styled-components";

import theme from "../../../styles/theme";

export const Container = styled.section`
  width: 100%;
  &:not(:first-child) {
    border-bottom: solid 1px ${theme.color.lightGray};
  }
`;
export const Header = styled.header`
  height: 80px;
  cursor: pointer;
  position: relative;

  p {
    color: ${theme.color.primary};
    text-transform: uppercase;
    font-size: 16px;
    font-weight: bold;
    margin: 30px 0 6px 0;
  }

  h1 {
    color: ${theme.color.primaryHover};
    margin: 0 0 40px 0;
  }
`;

export const Icon = styled.i`
  position: absolute;
  top: 10%;
  left: 15%;
  color: ${theme.color.primaryHover};
  font-size: 28px;
  ${({ selected }) =>
    selected
      ? `transition: 0.2s all ease-in;
          transform: rotate(180deg);`
      : `transition: 0.2s all ease-in;
          transform: rotate(0);`}
`;

export const Wrapper = styled.div`
  ${({ selected }) =>
    selected
      ? `opacity: 1;
        visibility: visible;
        transition: 0.2s all ease-in;`
      : `height: 0;
        opacity: 0;
        visibility: hidden;`}

  display: flex;
  width: 100%;
`;
export const Box = styled.div`
  width: ${props => props.width || "33%"};
  color: ${theme.color.gray};
  text-transform: uppercase;
  font-weight: bold;
  font-size: 12px;
  &:not(:last-child) {
    margin-right: 30px;
  }
  p {
    margin-bottom: 20px;
    font-size: 14px;
  }
`;
export const Card = styled.div`
  box-shadow: 0 3px 15px rgba(0, 0, 0, 0.05);
  width: 100%;
  background: ${theme.color.white};
  border-radius: 10px;
  min-height: ${props => props.height || "144px"};
  padding: 0 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 35px;

  div {
    font-size: 12px;
    height: 40px;
    display: flex;
    justify-content: space-between;
    line-height: 40px;
    &:not(:last-child) {
      border-bottom: solid 1px ${theme.color.lightGray};
    }
    span {
      color: ${theme.color.primaryHover};
    }
  }

  table {
    margin-top: 6px;
    background: ${theme.color.background};
    border-radius: 3px;
    line-height: 30px;
    width: 100%;
    border-collapse: collapse;
    tr {
      height: 40px;
      &:not(:last-child):not(:first-child) {
        border-bottom: solid 1px ${theme.color.lightGray};
      }
    }

    td {
      background: ${theme.color.white};
      text-align: center;
      border-left-color: white !important;
      border-right-color: white;
    }
    span {
      color: ${theme.color.primaryHover};
    }
  }
`;
