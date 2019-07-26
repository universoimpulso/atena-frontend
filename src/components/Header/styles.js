import styled from 'styled-components'

const StyledHeader = styled.header`
  left: 0;
  margin: 0 auto;
  max-width: ${props => props.theme.gridSize};
  padding: 30px 50px;
  position: absolute;
  right: 0;
  top: 0;
  z-index: 999;

  @media (max-width: 760px) {
    padding: 14px 20px;

    img {
      display: block;
      height: 40px;
      margin: auto;
    }
  }
`

export default StyledHeader
