import styled from "styled-components";
import { Form, Input } from "unform";
import theme from "../../../styles/theme";

export const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  font-weight: bold;
  h3 {
    font-size: 16px;
    text-transform: uppercase;
    color: ${theme.color.primary};
    margin: 30px 0;
  }
  p {
    font-size: 14px;
    color: ${theme.color.gray};
    margin: 25px 0 5px 0;
  }
  span {
    color: ${theme.color.secondary};
    font-size: 12px;
    font-weight: normal;
    padding-top: 4px;
  }
  select {
    max-width: 25%;
    height: 50px;
    box-shadow: 0 3px 15px rgba(0, 0, 0, 0.1);
  }
`;
export const DateWrapper = styled.section`
  display: flex;
  width: 50%;
  flex-wrap: wrap;
  justify-content: space-between;
  span {
    font-size: 14px;
    color: ${theme.color.gray};
    margin: 25px 0 5px 0;
  }
  input {
    width: 95%;
    border: none;
    height: 50px;
    box-shadow: 0 3px 15px rgba(0, 0, 0, 0.1);
    border-radius: 6px;
    padding: 0 16px;
    color: ${theme.color.gray};
    font-weight: bold;
  }
`;
export const Box = styled.div`
  display: flex;
  width: 50%;
  flex-direction: column;
`;

export const StyledInput = styled(Input)`
  width: ${({ width }) => width || "50%"};
  border: none;
  height: 50px;
  box-shadow: 0 3px 15px rgba(0, 0, 0, 0.1);
  border-radius: 6px;
  padding: 0 16px;
  color: ${theme.color.gray};
  font-weight: bold;
`;
export const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export const Card = styled.div`
  min-width: 48%;
  height: 182px;
  box-shadow: 0 3px 15px rgba(0, 0, 0, 0.1);
  background: ${theme.color.white};
  border-radius: 10px;
  text-transform: uppercase;
  color: ${theme.color.gray};
  border: ${({ cardError }) => (cardError ? "1px solid red" : "none")};
  font-size: 12px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-top: 30px;
  div {
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
    ul {
      display: flex;
      justify-content: space-between;

      li {
        display: flex;
        flex-direction: column;
        p {
          font-weight: bold;
          margin: 0 auto;
          padding-bottom: 15px;
          color: ${theme.color.primaryHover};
        }
      }
      input {
        width: 70px;
        height: 50px;
      }
    }
  }
`;

export const Title = styled.p`
  font-size: 12px;
  height: 20px;
  border-bottom: 1px solid ${theme.color.lightGray};
  padding-bottom: 20px;
`;

export const Button = styled.button`
  color: ${theme.color.primary};
  text-transform: uppercase;
  font-weight: bold;
  align-self: flex-end;
  height: 46px;
  width: 30%;
  margin: 50px 0;
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
`;
