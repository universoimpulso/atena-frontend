import styled from 'styled-components'
import theme from '../../styles/theme'

const StyledSocialLinks = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  width: fit-content;
  margin: 0 auto;

  li + li {
    margin-left: ${theme.fontSize.large};
  }

  a {
    color: ${theme.color.white};
    font-size: ${theme.fontSize.medium};
    text-decoration: none;
  }

  a:hover {
    color: ${theme.color.primaryHover};
  }
`

export default StyledSocialLinks
