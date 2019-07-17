import styled from "styled-components";
import theme from "../../../styles/theme";

export const Container = styled.section`
  align-items: space-between;
  color: ${theme.color.gray};
  display: flex;
  flex-direction: column;
  font-weight: bold;
  width: 100%;
`;

export const RankingHeader = styled.div`
  color: #595b98;
  display: flex;
  font-size: 20px;
  font-weight: bold;
  width: 100%;
  .ranking {
    flex: 1;
    max-width: 88px;
  }
  .level {
    flex: 2;
    max-width: 83px;
    text-align: center;
  }
  .xp {
    flex: 1;
    max-width: 120px;
    text-align: center;
  }
  .userInfo {
    flex: 2;
  }
`;

export const UserSection = styled.section`
  margin-top: 30px;
  min-height: 100px;
  position: relative;
  width: 100%;
`;
export const CardWrapper = styled.div`
  display: flex;
  height: 180px;
  margin: 80px 0 20px 0;
  width: 100%;
`;
export const Portrait = styled.div`
  align-items: center;
  background: ${theme.color.white};
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  font-weight: bold;
  height: 100%;
  justify-content: space-evenly;
  margin-right: 10px;
  width: 183px;
  figure {
    display: flex;
    justify-content: center;
    position: relative;
  }
  small {
    align-items: center;
    background: ${theme.color.white};
    border-radius: 100%;
    bottom: 0;
    color: ${theme.color.gray};
    display: flex;
    font-size: 14px;
    height: 32px;
    justify-content: center;
    opacity: 0.9;
    position: absolute;
    transform: translateY(50%);
    width: 32px;
  }
`;
export const Card = styled.div`
  background: ${theme.color.white};
  border-radius: 10px;
  display: flex;
  flex-grow: 1;
  height: 100%;
  padding: 50px 15px;
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 16px;
  font-weight: bold;
  justify-content: space-between;
  padding: 5px 10px;
  text-align: center;
  text-transform: uppercase;
  width: ${({ width }) => width || "20%"};
  :not(:last-child) {
    border-right: ${theme.color.lightGray} 1px solid;
  }
  h4 {
    color: ${theme.color.primary};
  }
  p {
    color: ${theme.color.gray};
  }
`;

export const ButtonWrapper = styled.div`
  border-bottom: ${theme.color.lightGray} 1px solid;
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const Button = styled.button`
  align-self: flex-end;
  background: transparent;
  border: 2px solid ${theme.color.primary};
  border-radius: 100px;
  color: ${theme.color.primary};
  cursor: pointer;
  font-weight: bold;
  height: 46px;
  margin-bottom: 30px;
  outline: none;
  text-transform: uppercase;
  transition: all 0.3s linear;
  width: 30%;
  &:hover {
    background: ${theme.color.primary};
    color: ${theme.color.white};
  }
  &:active {
    transform: scale(0.95);
  }
`;
