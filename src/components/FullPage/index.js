import React from 'react'
import StyledFullPage from './style'

const FullPage = ({ background, children, height = '100' }) => (
  <StyledFullPage background={background} height={height}>
    {children}
  </StyledFullPage>
)

export default FullPage
