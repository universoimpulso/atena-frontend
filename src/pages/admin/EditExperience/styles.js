import styled from "styled-components";

import theme from "../../../styles/theme";

export const Container = styled.div`
  align-items: flex-start;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  width: 100%;
`;
export const Title = styled.h3`
  color: ${theme.color.primary};
  font-size: 16px;
  font-weight: bold;
  margin-top: 30px;
  text-transform: uppercase;
  width: 100%;
`;

export const Card = styled.div`
  background: ${theme.color.white};
  border-radius: 10px;
  color: ${theme.color.gray};
  display: flex;
  flex-direction: column;
  font-size: 12px;
  font-weight: bold;
  margin: 2% 3% 2% 0;
  min-height: 258px;
  padding: 20px;
  position: relative;
  text-transform: uppercase;
  width: 30%;

  p {
    margin-bottom: 20px;
    text-align: center;
  }
  small {
    border-bottom: solid 1px ${theme.color.lightGray};
    display: block;
    margin: 0 auto;
    width: 100%;
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
  }

  button {
    background: ${theme.color.white};
    border: 2px solid ${theme.color.primary};
    border-radius: 100px;
    color: ${theme.color.primary};
    cursor: pointer;
    font-weight: bold;
    height: 46px;
    margin-top: 20px;
    outline: none;
    text-transform: uppercase;
    transition: all 0.3s linear;
    :hover {
      background: ${theme.color.primary};
      color: ${theme.color.white};
    }
    :active {
      transform: scale(0.95);
    }
    :focus {
      outline: none;
    }
    ::-moz-focus-inner {
      border: 0;
    }
  }
`;

export const StyledInput = styled.input`
  border: ${({ error }) => (error ? "1px solid red" : "1px solid gray")};
  border-radius: 6px;
  color: ${theme.color.gray};
  font-size: 16px;
  font-weight: bold;
  height: 50px;
  margin-bottom: 20px;
  padding: 0 6px 0 18px;
  width: 100px;
`;
