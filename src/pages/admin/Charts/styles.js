import styled from "styled-components";

import theme from "../../../styles/theme";

export const Container = styled.section`
  width: 100%;
  h4 {
    font-size: 16px;
    color: ${theme.color.primary};
    text-transform: uppercase;
    margin-bottom: 30px;
  }
`;
export const Wrapper = styled.div`
  display: flex;
  flex: 1;
  height: 85%;
`;

export const Info = styled.div`
  flex-grow: 1;
  font-size: 14px;
  display: flex;
  flex-direction: column;
  color: ${theme.color.gray};
  text-transform: uppercase;
  font-weight: bold;
  flex-wrap: wrap;
  height: 100%;
  margin-left: 50px;
`;
export const Card = styled.div`
  background: ${theme.color.white};
  border-radius: 10px;
  height: ${props => props.height};
  width: ${props => props.width};
  padding: 20px;
  margin-bottom: 10px;
  h5 {
    font-size: 14px;
    color: ${theme.color.gray};
    margin-bottom: 20px;
  }
`;

export const Level = styled.ul`
  max-height: calc(100% - 40px);
  width: 100%;
  padding-left: 25px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  li {
    padding-bottom: 24px;
    display: flex;
    width: 45%;
    span {
      flex: 1;
      border-bottom: 2px dotted ${theme.color.gray};
      width: 25%;
      margin: 0 6px;
    }
    div {
      display: inline-block;
      width: 1em;
      border-radius: 100%;
      height: 1em;
      margin: auto 4px;
    }
  }
`;

export const Total = styled.div`
  width: 100%;
  height: 40px;
  line-height: 40px;
  font-size: 12px;
  font-weight: bold;
  overflow: hidden;
  padding: 0 20px;
  border-radius: 5px;
  display: flex;
  align-items: baseline;
  text-transform: uppercase;
  white-space: nowrap;
  color: ${theme.color.primaryHover};
  background: ${theme.color.background};

  span {
    flex: 1;
    border-bottom: 2px dotted ${theme.color.primaryHover};
    margin: 0 6px;
  }
`;
