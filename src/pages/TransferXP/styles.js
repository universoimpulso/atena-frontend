import styled from 'styled-components'

export const StyledTrasferXp = styled.div`
  align-items: center;
  background: transparent;
  display: flex;
  height: 100%;
  justify-content: center;
  padding-top: 100px;
  width: 100vw;
  section {
    background: white;
    border-radius: 10px;
    color: black;
    display: flex;
    min-height: 90%;
    padding: 16px;
    width: 80%;
  }
`
export const UserList = styled.div`
  width: 50%;
  h5 {
    margin-bottom: 12px;
  }
  ul {
    margin: 0;
    height: 100%;
    padding: 0;
  }
  li {
    align-items: center;
    cursor: pointer;
    display: flex;
    height: 50px;
    justify-content: space-between;
    padding-right: 12px;

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
