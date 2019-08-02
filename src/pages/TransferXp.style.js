import styled from 'styled-components'

export const StyledTrasferXp = styled.div`
  height: 100vh;
  width: 100vw;
  background: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 100px;
  section {
    height: 90%;
    width: 80%;
    background: white;
    border-radius: 10px;
    color: black;
    display: flex;
    padding: 16px;
  }
`
export const UserList = styled.div`
  width: 50%;
  ul {
    padding: 0;
    margin: 0;
    height: 100%;
  }
  li {
    height: 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;

    &:nth-child(2n -1) {
      background: #f5f5f5;
    }

    img {
      height: 50px;
    }
    i {
      margin: 0 8px;
    }
  }
`
