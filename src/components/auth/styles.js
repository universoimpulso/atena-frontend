import styled from 'styled-components'
import theme from '../../styles/theme'

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
`

export const Container = styled.div`
  align-items: center;
  background: ${theme.color.white};
  display: flex;
  flex: 1;
  height: 100%;
  justify-content: center;
`

export const Form = styled.form`
  align-items: stretch;
  background: ${theme.color.primaryFocus};
  border-radius: 5px;
  box-shadow: 0 2px 10px 0 rgba(0, 0, 0.2);
  display: flex;
  flex-direction: column;
  padding: 40px;
  position: relative;
  width: 400px;
  h1 {
    font-size: 26px;
    font-weight: 700;
    margin: 0 0 10px;
    text-align: center;
  }
  span {
    color: ${theme.color.white};
    font-size: 14px;
    font-weight: 600px;
    line-height: 16px;
    margin-top: 15px;
  }
  input {
    border: 1px solid rgba(0, 0, 0, 0.3);
    border-radius: 3px;
    color: ${theme.color.gray};
    font-size: 16px;
    height: 40px;
    margin-top: 8px;
    padding: 10px;
    transition: border 0.15s ease;
    &:focus {
      border-color: #7289da;
    }
  }
  .or {
    margin: 20px auto;
    text-align: center;
  }
`

export const Button = styled.button`
  background-color: ${theme.color.primary};
  border: 0;
  border-radius: 3px;
  color: ${theme.color.white};
  cursor: pointer;
  font-size: 14px;
  font-weight: bold;
  margin: 40px 0 0;
  padding: 15px;
  text-transform: uppercase;
  transition: all 0.3s ease-in-out;
  &:hover {
    background-color: ${theme.color.primaryHover};
  }
`

export const LinkedinButton = styled.div`
  width: 100%;
  .bt-linkedin {
    align-items: center;
    background-color: ${theme.color.linkedin};
    border: 0;
    border-radius: 3px;
    color: ${theme.color.white};
    cursor: pointer;
    display: flex;
    font-size: 14px;
    font-weight: bold;
    justify-content: center;
    padding: 15px;
    text-indent: 0;
    text-transform: uppercase;
    transition: all 0.3s ease-in-out;
    width: 100%;
    &:hover {
      background-color: ${theme.color.linkedinHover};
    }
    img {
      margin-left: 5px;
      max-width: 68px;
    }
  }
`
