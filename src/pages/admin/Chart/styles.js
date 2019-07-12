import styled from "styled-components";
import theme from "../../../styles/theme";

export const Container = styled.section`
  width: 100%;
  h4 {
    color: ${theme.color.primary};
    font-size: 16px;
    margin-bottom: 30px;
    text-transform: uppercase;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex: 1;
  height: 85%;
`;

export const Info = styled.div`
  color: ${theme.color.gray};
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  flex-wrap: wrap;
  font-size: 14px;
  font-weight: bold;
  height: 100%;
  margin-left: 50px;
  text-transform: uppercase;
`;

export const Card = styled.div`
  background: ${theme.color.white};
  border-radius: 10px;
  height: ${props => props.height};
  margin-bottom: 10px;
  padding: 20px;
  width: ${props => props.width};
  h5 {
    color: ${theme.color.gray};
    font-size: 14px;
    margin-bottom: 20px;
  }
`;

export const Level = styled.ul`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  max-height: calc(100% - 40px);
  padding-left: 25px;
  width: 100%;
  li {
    display: flex;
    padding-bottom: 24px;
    width: 45%;
    span {
      border-bottom: 2px dotted ${theme.color.gray};
      flex: 1;
      margin: 0 6px;
      width: 25%;
    }
    div {
      border-radius: 100%;
      display: inline-block;
      height: 1em;
      margin: auto 4px;
      width: 1em;
    }
  }
`;

export const Total = styled.div`
  align-items: baseline;
  background: ${theme.color.background};
  border-radius: 5px;
  color: ${theme.color.primaryHover};
  display: flex;
  font-size: 12px;
  font-weight: bold;
  height: 40px;
  line-height: 40px;
  overflow: hidden;
  padding: 0 20px;
  text-transform: uppercase;
  white-space: nowrap;
  width: 100%;

  span {
    border-bottom: 2px dotted ${theme.color.primaryHover};
    flex: 1;
    margin: 0 6px;
  }
`;
