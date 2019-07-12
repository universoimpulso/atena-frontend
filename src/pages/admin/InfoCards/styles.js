import styled from "styled-components";

import theme from "../../../styles/theme";

export const Container = styled.div`
  display: flex;
  height: 410px;
  margin: 60px 0 30px 0;
  width: 100%;
`;

export const CardsWrapper = styled.div`
  flex: 1;
  position: relative;
  &:not(:last-child) {
    margin-right: 30px;
  }
  h4 {
    color: ${theme.color.primary};
    font-size: 16px;
    margin-bottom: 30px;
    text-transform: uppercase;
  }
`;

export const Card = styled.div`
  background: ${theme.color.white};
  border-radius: 10px;
  font-size: 12px;
  height: 110px;
  margin-bottom: 10px;
  padding: 20px;
  position: relative;
  text-transform: uppercase;
  width: 100%;
  p {
    color: ${theme.color.gray};
    font-weight: bold;
    margin-bottom: 10px;
  }
  h1 {
    font-size: 25px;
    color: ${theme.color.primaryHover};
    font-weight: bold;
    margin: 0 0 5px 0;
  }
  select {
    color: ${theme.color.primaryHover};
    font-weight: bold;
    height: 32px;
    outline: none;
    position: absolute;
    right: 20px;
    text-transform: uppercase;
    top: 13px;
    width: 85px;
  }
`;
export const Percentage = styled.span`
  color: ${props =>
    props.positive ? theme.color.green : theme.color.secondary};
  font-weight: bold;
  margin-left: 3px;
`;
