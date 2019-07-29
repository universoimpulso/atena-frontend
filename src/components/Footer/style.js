import styled from 'styled-components'
import theme from '../../styles/theme'

export const StyledFooter = styled.footer`
  background-color: ${theme.color.primary};
  color: ${theme.color.white};
  padding: 50px 0 40px;

  > section {
    max-width: 380px;
    margin: 0 auto;
    hr {
      width: 85%;
      margin: 40px auto;
    }
  }

  .impulsoIcon {
    display: flex;
    margin: 0 auto 40px;
  }
`

export const StyledCopyright = styled.p`
  text-align: center;
  color: ${theme.color.primaryLight};
  margin: 0;
`
