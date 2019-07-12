import styled from "styled-components";
import theme from "../../../styles/theme";

export const Container = styled.section`
  margin-top: 60px;
  width: 100%;
  &:not(:last-child) {
    border-bottom: solid 1px ${theme.color.lightGray};
  }
`;
export const Header = styled.header`
  cursor: pointer;
  height: 80px;
  p {
    color: ${theme.color.primary};
    font-size: 16px;
    font-weight: bold;
    margin: 20px 0 6px 0;
    text-transform: uppercase;
  }
`;
export const Icon = styled.i`
  color: ${theme.color.primaryHover};
  font-size: 28px;
  margin-left: 25px;
  ${({ selected }) =>
    selected
      ? `transition: 0.2s all ease-in;
          transform: rotate(180deg);`
      : `transition: 0.2s all ease-in;
          transform: rotate(0);`}
`;

export const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  overflow: hidden;
  ${({ selected }) =>
    selected
      ? `opacity: 1;
        visibility: visible;
        transition: 0.2s all ease-in;`
      : `height: 0;
        opacity: 0;
        visibility: hidden;`}
  h3 {
    color: ${theme.color.primary};
    display: block;
    font-size: 12px;
    text-transform: uppercase;
    width: 100%;
  }
`;

export const Card = styled.div`
  background: ${theme.color.white};
  border-radius: 10px;
  color: ${theme.color.gray};
  display: flex;
  flex-direction: column;
  font-size: 12px;
  font-weight: bold;
  height: 268px;
  margin-top: 30px;
  min-width: 48%;
  justify-content: space-between;
  padding: 20px;
  position: relative;
  text-transform: uppercase;
  p {
    border-bottom: 1px solid ${theme.color.lightGray};
    font-size: 12px;
    height: 40px;
    line-height: 25px;
  }
  form {
    display: flex;
    flex-direction: column;
    ul {
      display: flex;
      justify-content: space-between;
      padding-bottom: 40px;
      li {
        color: ${theme.color.primaryHover};
        display: flex;
        flex-direction: column;
        span {
          margin: 0 auto;
          padding-bottom: 15px;
        }
      }
      input {
        height: 50px;
        width: 70px;
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
      margin: auto;
      outline: none;
      text-transform: uppercase;
      transition: all 0.3s linear;
      width: 70%;
      &:hover {
        color: ${theme.color.white};
        background: ${theme.color.primary};
      }
      &:active {
        transform: scale(0.95);
      }
    }
  }
`;

export const StyledInput = styled.input`
  border: ${({ error }) => (error ? "1px solid red" : "1px solid gray")};
  border-radius: 6px;
  color: ${theme.color.gray};
  font-weight: bold;
  font-size: 14px;
  height: 50px;
  margin-bottom: 20px;
  padding: 0 4px;
  width: 100px;
`;
