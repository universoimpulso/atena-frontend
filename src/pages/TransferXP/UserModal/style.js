import styled from 'styled-components'

export const Wrapper = styled.div`
  align-items: center;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
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
  background: #fff;
  border-radius: 15px;
  box-shadow: 0px 0px 9px 2px rgba(0, 0, 0, 0.6);
  display: flex;
  flex-direction: column;
  height: 70vh;
  justify-content: space-between;
  width: 60vw;
`

export const UserWrapper = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 8px;
  padding: 12px;
  width: 100%;
`

export const UserInfo = styled.div`
  background: #fff;
  border-radius: 3px;
  box-shadow: 0px 0px 9px 2px rgba(0, 0, 0, 0.2);
  color: black;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 20px 10px;
  width: 45%;

  header {
    align-items: center;
    display: flex;
    flex-direction: column;
    padding: 30px;

    img {
      height: 64px;
      width: 64px;
    }
    i {
      font-size: 64px;
    }
    strong {
      font-size: 24px;
      margin-top: 10px;
    }
    small {
      color: #666;
      font-size: 14px;
    }
  }

  ul {
    li {
      display: flex;
      font-weight: bold;
      padding: 12px 20px;
      justify-content: space-between;
      &:nth-child(2n - 1) {
        background: #f5f5f5;
      }
    }
  }
`
export const ButtonWrapper = styled.div`
  display: flex;
  margin: 16px;
`
export const Button = styled.button`
  background: ${props => (props.gray ? '#7f8c8d' : '#1e90ff')};
  color: #fff;
  height: 50px;
  margin: 0 8px;
  text-transform: uppercase;
  width: 260px;
  &:hover {
    cursor: pointer;
    opacity: 0.8;
  }
  &:disabled,
  button[disabled] {
    background-color: #2ecc71;
    color: #fff;
    cursor: not-allowed;
  }
`
