import React from 'react'
import StyledTitle from './style'

const Title = ({ children, extraLarge, width, align, ...others }) => (
  <StyledTitle extraLarge={extraLarge} width={width} align={align} {...others}>
    {children}
  </StyledTitle>
)

export default Title
