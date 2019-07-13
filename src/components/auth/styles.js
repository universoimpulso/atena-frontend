import styled from "styled-components";
import theme from "../../styles/theme";

export const Modal = styled.div`
  align-items: center;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: center;
  left: 0;
  position: fixed;
  top: 0;
  width: 100vw;
  z-index: 10;
`;
export const Container = styled.div`
  flex: 1;
  height: 100%;
  background: white;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const Form = styled.form`
  border-radius: 5px;
  box-shadow: 0 2px 10px 0 rgba(0, 0, 0.2);
  padding: 40px;
  background: ${theme.color.primaryFocus};
  width: 400px;
  display: flex;
  flex-direction: column;
  align-items: stretch;

  h1 {
    font-size: 26px;
    font-weight: 700;
    text-align: center;
    margin: 0 0 10px;
  }

  span {
    color: ${theme.color.white};
    font-size: 14px;
    line-height: 16px;
    font-weight: 600px;
    margin-top: 15px;
  }
  input {
    height: 40px;
    padding: 10px;
    border-radius: 3px;
    border: 1px solid rgba(0, 0, 0, 0.3);
    color: ${theme.color.gray};
    margin-top: 8px;
    transition: border 0.15s ease;
    font-size: 16px;

    &:focus {
      border-color: #7289da;
    }
  }
`;
export const Button = styled.button`
  border-radius: 3px;
  transition: background-color 0.15s ease;
  background: ${theme.color.primary};
  border: 0;
  cursor: pointer;
  color: ${theme.color.white};
  font-size: 16px;
  padding: 10px;
  margin: 40px 0 0;
  text-transform: uppercase;
  font-weight: bold;
`;
