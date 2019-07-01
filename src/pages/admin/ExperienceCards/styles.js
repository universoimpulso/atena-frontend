import styled from "styled-components";

import theme from "../../../styles/theme";

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-wrap: wrap;
`;
export const Title = styled.h3`
  font-size: 16px;
  font-weight: bold;
  text-transform: uppercase;
  color: ${theme.color.primary};
  margin-top: 30px;
`;
export const Card = styled.div`
  width: 30%;
  min-height: 258px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  font-size: 12px;
  font-weight: bold;
  text-transform: uppercase;
  color: ${theme.color.gray};
  border-radius: 10px;
  background: ${theme.color.white};
  margin: 2% 3% 2% 0;

  p {
    text-align: center;
    margin-bottom: 20px;
  }
  small {
    border-bottom: solid 1px ${theme.color.lightGray};
    display: block;
    width: 100%;
    margin: 0 auto;
  }
  form {
    display: flex;
    flex-direction: column;
    margin-top: 10px;
    width: 100%;
    span {
      color: ${theme.color.primaryHover};
      margin: 10px 0;
    }
    input {
      width: 100px;
      height: 50px;
      margin-bottom: 20px;
    }
  }

  button {
    color: ${theme.color.primary};
    text-transform: uppercase;
    font-weight: bold;
    height: 46px;
    margin-top: 20px;
    border-radius: 100px;
    border: 2px solid ${theme.color.primary};
    cursor: pointer;
    outline: none;
    transition: all 0.3s linear;
    background: ${theme.color.white};
    &:hover {
      color: ${theme.color.white};
      background: ${theme.color.primary};
    }
    &:active {
      transform: scale(0.95);
    }
  }
`;
