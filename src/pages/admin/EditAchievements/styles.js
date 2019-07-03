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
  height: 80px;
  cursor: pointer;
  position: relative;

  p {
    color: ${theme.color.primary};
    text-transform: uppercase;
    font-size: 16px;
    font-weight: bold;
    margin: 20px 0 6px 0;
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
    display: block;
    width: 100%;
    margin-top: 60px;
    color: ${theme.color.primary};
    font-size: 12px;
    text-transform: uppercase;
  }
`;

export const Card = styled.div`
  min-width: 48%;
  height: 268px;
  background: ${theme.color.white};
  border-radius: 10px;
  text-transform: uppercase;
  color: ${theme.color.gray};
  font-weight: bold;
  font-size: 12px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-top: 30px;
  p {
    font-size: 12px;
    height: 40px;
    line-height: 25px;
    border-bottom: 1px solid ${theme.color.lightGray};
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
        width: 70px;
        height: 50px;
      }
    }
    button {
      color: ${theme.color.primary};
      text-transform: uppercase;
      font-weight: bold;
      height: 46px;
      width: 70%;
      margin: auto;
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
  }
`;
