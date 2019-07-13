import styled from "styled-components";

import theme from "../../styles/theme";

export const Container = styled.div`
  background: ${theme.color.background};
  display: flex;
  font-size: 16px;
  height: 100%;
  margin-top: 100px;
  padding-top: 40px;
  width: 100%;
`;
export const Aside = styled.aside`
  margin: 0 30px;
  height: 600px;
  width: 320px;
  h3 {
    color: ${theme.color.gray};
    font-weight: bold;
    margin-bottom: 30px;
    text-transform: uppercase;
  }

  small {
    border-bottom: solid 1px ${theme.color.lightGray};
    display: block;
    margin: 30px 0;
    width: 236px;
  }
`;
export const Option = styled.p`
  cursor: pointer;
  line-height: 100%;
  margin: 30px 0;
  margin-left: ${props => props.marginLeft || 0};
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
