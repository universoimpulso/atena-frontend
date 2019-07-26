import styled from 'styled-components'
import theme from '../../styles/theme'

const StyledTitle = styled.h1`
  font-size: ${props =>
    props.large
      ? theme.fontSize.veryLarge
      : props.extralarge
      ? theme.fontSize.super
      : theme.fontSize.large};
  color: ${props => theme.color[props.color || 'primary']};

  ${props =>
    (props.large || props.extralarge) &&
    `
    text-transform: uppercase;
  `}

  ${props =>
    props.extralarge &&
    `
    margin: 0;
    line-height: 1;
  `}

  .red {
    color: ${props => theme.color.secondary};
  }

  width: ${props => props.width};
  text-align: ${props => props.align};

  @media (max-width: 760px) {
    font-size: 28px;
  }
`

export default StyledTitle
