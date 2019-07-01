import styled from "styled-components";

import theme from "../../../styles/theme";

export const Wrapper = styled.div`
  display: flex;
  width: 100%;
  margin: 60px 0 30px 0;
`;
export const Collunm = styled.div`
  flex: 1;
  &:not(:last-child) {
    margin-right: 30px;
  }
  h4 {
    font-size: 16px;
    color: ${theme.color.primary};
    text-transform: uppercase;
    margin-bottom: 30px;
  }
`;

export const Card = styled.div`
  background: ${theme.color.white};
  border-radius: 10px;
  height: 110px;
  width: 100%;
  padding: 20px;
  margin-bottom: 10px;
  position: relative;
  font-size: 12px;
  text-transform: uppercase;
  p {
    color: ${theme.color.gray};
    font-weight: bold;
    margin-bottom: 10px;
  }
  h1 {
    font-size: 25px;
    font-weight: bold;
    color: ${theme.color.primaryHover};
    margin: 0 0 5px 0;
  }
  select {
    color: ${theme.color.primaryHover};
    text-transform: uppercase;
    position: absolute;
    font-weight: bold;
    top: 13px;
    right: 20px;
    outline: none;
    width: 95px;
    height: 32px;
  }
`;
export const Percentage = styled.span`
  font-weight: bold;
  margin-left: 3px;
  color: ${props =>
    props.positive ? theme.color.green : theme.color.secondary};
`;
