import styled from "styled-components";
import Select from "react-select";
import theme from "../../../styles/theme";
import { Field } from "formik";

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  font-weight: bold;
  justify-content: space-between;
  h3 {
    color: ${theme.color.primary};
    font-size: 16px;
    margin: 30px 0;
    text-transform: uppercase;
  }
  p {
    color: ${theme.color.gray};
    font-size: 14px;
    margin: 25px 0 5px 0;
  }
  span {
    color: ${theme.color.secondary};
    font-size: 12px;
    font-weight: normal;
    padding-top: 4px;
  }
`;
export const StyledSelect = styled(Select)`
  border: none;
  box-shadow: 0 3px 15px rgba(0, 0, 0, 0.1);
  color: ${theme.color.gray};
  max-width: 25%;
`;
export const StyledSmallInput = styled(Field)`
  border: ${({ error }) => (error ? "1px solid red" : "1px solid gray")};
  border-radius: 6px;
  color: ${theme.color.gray};
  font-size: 14px;
  font-weight: bold;
  height: 50px;
  margin-bottom: 20px;
  padding: 0 4px;
  width: 100px;
`;

export const DateWrapper = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 50%;
  span {
    color: ${theme.color.gray};
    font-size: 14px;
    margin: 25px 0 5px 0;
  }
  input {
    color: ${theme.color.gray};
    border: none;
    border-radius: 6px;
    box-shadow: 0 3px 15px rgba(0, 0, 0, 0.1);
    font-weight: bold;
    height: 50px;
    padding: 0 16px;
    width: 95%;
  }
`;
export const Box = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
`;

export const StyledInput = styled.input`
  border: none;
  border-radius: 6px;
  box-shadow: 0 3px 15px rgba(0, 0, 0, 0.1);
  color: ${theme.color.gray};
  font-weight: bold;
  height: 50px;
  padding: 0 16px;
  width: ${({ width }) => width || "50%"};
`;
export const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export const Card = styled.div`
  background: ${theme.color.white};
  border: ${({ cardError }) => (cardError ? "1px solid red" : "none")};
  border-radius: 10px;
  box-shadow: 0 3px 15px rgba(0, 0, 0, 0.1);
  color: ${theme.color.gray};
  display: flex;
  flex-direction: column;
  font-size: 12px;
  height: 182px;
  justify-content: space-between;
  margin-top: 30px;
  min-width: 48%;
  text-transform: uppercase;
  padding: 20px;
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
          color: ${theme.color.primaryHover};
          font-weight: bold;
          margin: 0 auto;
          padding-bottom: 15px;
        }
      }
      input {
        height: 50px;
        width: 70px;
      }
    }
  }
`;

export const Title = styled.p`
  border-bottom: 1px solid ${theme.color.lightGray};
  font-size: 12px;
  height: 20px;
  padding-bottom: 20px;
`;

export const Button = styled.button`
  align-self: flex-end;
  background: ${theme.color.white};
  border: 2px solid ${theme.color.primary};
  border-radius: 100px;
  color: ${theme.color.primary};
  cursor: pointer;
  font-weight: bold;
  height: 46px;
  margin: 50px 0;
  outline: none;
  text-transform: uppercase;
  transition: all 0.3s linear;
  width: 30%;
  &:hover {
    color: ${theme.color.white};
    background: ${theme.color.primary};
  }
  &:active {
    transform: scale(0.95);
  }
`;
