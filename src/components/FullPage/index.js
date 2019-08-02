import React from 'react'
import PropTypes from 'prop-types'

import StyledFullPage from './style'

const FullPage = ({ background, children, height = '100' }) => (
  <StyledFullPage background={background} height={height}>
    {children}
  </StyledFullPage>
)

FullPage.propTypes = {
  children: PropTypes.element.isRequired,
  height: PropTypes.string,
  background: PropTypes.string
}
export default FullPage
