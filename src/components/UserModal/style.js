import styled from 'styled-components'

export const Wrapper = styled.div`
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  height: 100vh;
  width: 100vw;
  justify-content: center;
  align-items: center;
  left: 0;
  position: fixed;
  top: 0;
  z-index: 10;
`

export const Container = styled.div`
  box-shadow: 0px 0px 9px 2px rgba(0, 0, 0, 0.6);
  height: 70vh;
  width: 60vw;
  display: flex;
  border-radius: 15px;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  justify-content: center;
  background: #fff;
`

export const UserWrapper = styled.div`
  width: 100%;
  display: flex;
  margin: 8px;
  padding: 12px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`

export const UserInfo = styled.div`
  box-shadow: 0px 0px 9px 2px rgba(0, 0, 0, 0.2);
  color: black;
  width: 45%;
  background: #fff;
  border-radius: 3px;
  display: flex;
  flex-direction: column;
  margin: 20px 10px;
  justify-content: space-between;

  header {
    padding: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;

    img {
      width: 64px;
      height: 64px;
    }
    i {
      font-size: 64px;
    }
    strong {
      font-size: 24px;
      margin-top: 10px;
    }
    small {
      font-size: 14px;
      color: #666;
    }
  }

  ul {
    li {
      font-weight: bold;
      padding: 12px 20px;

      small {
        float: right;
        font-weight: normal;
        font-size: 12px;
        color: #999;
        font-style: italic;
      }
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
  margin: 0 8px;
  text-transform: uppercase;
  width: 260px;
  height: 50px;
  color: #fff;
  background: ${props => (props.gray ? '#7f8c8d' : '#1e90ff')};
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
