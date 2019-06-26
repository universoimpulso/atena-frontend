import styled from "styled-components";

import theme from "../../styles/theme";

export const Container = styled.div`
  margin-top: 100px;
  padding-top: 40px;
  font-size: 16px;
  width: 100%;
  height: 100%;
  display: flex;
  background: ${theme.color.background};
`;
export const Aside = styled.aside`
  width: 320px;
  height: 600px;
  margin: 0 30px;
  h3 {
    text-transform: uppercase;
    font-weight: bold;
    color: ${theme.color.gray};
    margin-bottom: 30px;
  }

  small {
    border-bottom: solid 1px ${theme.color.lightGray};
    display: block;
    width: 236px;
    margin: 30px 0;
  }
`;
export const Option = styled.p`
  margin: 30px 0;
  color: ${theme.color.gray};
  line-height: 100%;
  cursor: pointer;
  ${({ active }) =>
    active
      ? `color: ${theme.color.primary}
      font-weight: bold;`
      : `color: ${theme.color.gray}`};

  &:after {
    content: "";
    display: block;
    width: ${props => (props.active ? "30px" : 0)};
    height: 3px;
    background: ${theme.color.primary};
    border-radius: 3px;
    position: absolute;
    transform: translateY(6px);
    transition: 0.2s all ease-in;
  }

  &:hover {
    color: ${theme.color.primary};
    font-weight: bold;
    :after {
      width: 30px;
    }
  }
`;

export const Section = styled.section`
  width: 100%;
  margin: 0 50px 0 20px;
  h2 {
    font-size: 36px;
    font-weight: bold;
    color: ${theme.color.primary};
    margin-bottom: 20px;
  }
`;
