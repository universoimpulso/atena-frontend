import styled from "styled-components";
import theme from "../../styles/theme";

export const Container = styled.div`
  background: ${theme.color.background};
  padding-bottom: 50px;
`;

export const Header = styled.header`
  align-items: center;
  background: ${theme.color.primary};
  display: flex;
  flex-direction: column;
  height: 660px;
  margin-bottom: 120px;
  text-transform: uppercase;
  width: 100%;
`;

export const ImageWrapper = styled.div`
  align-items: center;
  background: ${theme.color.scampi};
  display: flex;
  flex-direction: column;
  height: 290px;
  margin-bottom: 200px;
  position: relative;
  width: 220px;
  div {
    align-items: center;
    background: ${theme.color.scampi};
    border-radius: 0 0 50% 50%;
    display: flex;
    flex-direction: column;
    height: 220px;
    justify-content: center;
    transform: translateY(100%);
    width: 100%;
  }
  img {
    border-radius: 100%;
    height: 200px;
    margin: 0 auto;
    width: 200px;
  }
  small {
    background: ${theme.color.white};
    border-radius: 100%;
    bottom: 0;
    color: ${theme.color.primary};
    font-size: 20px;
    font-weight: bold;
    height: 64px;
    line-height: 64px;
    position: absolute;
    text-align: center;
    transform: translateY(275%);
    width: 64px;
  }
`;

export const UserName = styled.p`
  color: ${theme.color.white};
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 50px;
`;

export const Info = styled.div`
  color: ${theme.color.white};
  display: flex;
  font-size: 16px;
  font-weight: bold;
  height: 54px;
  width: 450px;
  div {
    display: flex;
    flex: 1;
    flex-direction: column;
    justify-content: space-between;
    padding: 5px;
    text-align: center;
    :not(:last-child) {
      border-right: 1px solid ${theme.color.primaryLight};
      max-width: 120px;
    }
    p {
      color: ${theme.color.primaryLight};
    }
  }
`;

export const Title = styled.h1`
  color: ${theme.color.primary};
  font-size: 48px;
  margin-bottom: 50px;
  text-align: center;
  text-transform: uppercase;
`;

export const Accordion = styled.div`
  background: ${theme.color.white};
  border-radius: 20px;
  box-shadow: 0 3px 15px rgba(0, 0, 0, 0.1);
  margin: 0 auto 50px auto;
  width: 80%;
  header {
    color: ${theme.color.primary};
    cursor: pointer;
    font-size: 36px;
    font-weight: bold;
    height: 110px;
    line-height: 110px;
    padding: 0 40px;
    span {
      color: ${theme.color.secondary};
    }
  }
`;

export const Icon = styled.i`
  color: ${theme.color.primaryHover};
  float: right;
  font-size: 28px;
  line-height: 110px;
  ${({ selected }) =>
    selected
      ? `transition: 0.2s all ease-in;
          transform: rotate(180deg);`
      : `transition: 0.2s all ease-in;
          transform: rotate(0);`}
`;

export const AccordionBody = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-evenly;
  margin: 0 auto;
  overflow: hidden;
  padding: 30px 0 20px 0;
  width: 100%;
  ${({ selected }) =>
    selected
      ? `opacity: 1;
        visibility: visible;
        padding: 30px 0 20px 0;
        border-top: 1px solid ${theme.color.lightGray};
        transition: 0.2s all ease;`
      : `height: 0;
        opacity: 0;
        padding: 0;
        border-top: none;
        visibility: hidden;
        transition: 0.2s all ease;`}
`;

export const BadgeWrapper = styled.div`
  margin: 0 20px 20px 20px;
  width: 145px;
`;
export const Stars = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
`;

export const Star = styled.img`
  height: 25px;
  transform: ${({ align }) => `translateY(${align}%)`};
  width: 25px;
`;

export const Badge = styled.div`
  align-items: center;
  display: flex;
  width: 100%;
  img {
    height: 145px;
    margin: 25px auto 8px auto;
    width: 145px;
  }
`;

export const Score = styled.p`
  color: ${({ color }) => color};
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 4px;
  text-align: center;
`;

export const ScoreBar = styled.div`
  border: 1px solid ${({ color }) => color};
  border-radius: 10px;
  height: 10px;
  margin: 0 auto;
  margin-bottom: 4px;
  width: 100%;
  ::after {
    background: ${({ color }) => color};
    content: "";
    display: block;
    height: 100%;
    width: ${({ status }) => status}%;
  }
`;
export const Achievement = styled.p`
  color: ${theme.color.gray};
  font-size: 16px;
  font-weight: bold;
  text-align: center;
`;
