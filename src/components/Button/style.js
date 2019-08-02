import styled from 'styled-components'
import theme from '../../styles/theme'

const StyledButton = styled.div`
  color: ${theme.color.primary};
  display: inline-block;
  text-transform: uppercase;
  font-weight: bold;
  border-radius: 100px;
  padding: 12px 20px;
  border: 2px solid;
  margin: 20px 0 10px;
  cursor: pointer;
  background-color: transparent;

  & a {
    text-decoration: none;
    color: ${theme.color.primary};
  }

  &:hover {
    color: ${theme.color.primary};
    background-color: ${theme.color.primary};
    & a {
      color: white;
    }
  }

  &:focus {
    outline: none;
    color: ${theme.color.primaryFocus};
    background-color: ${theme.color.primaryFocus};
    & a {
      color: white;
    }
  }
`

export default StyledButton
