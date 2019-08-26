import React from 'react'
import PropTypes from 'prop-types'
import StyledFullPage from './style'

const FullPage = ({ background, children, height }) => (
  <StyledFullPage background={background} height={height}>
    {children}
  </StyledFullPage>
)

FullPage.propTypes = {
  background: PropTypes.string,
  children: PropTypes.element.isRequired,
  height: PropTypes.string
}

FullPage.defaultProps = {
  height: 100
}

FullPage.propTypes = {
  children: PropTypes.element.isRequired,
  height: PropTypes.string,
  background: PropTypes.string
}
export default FullPage
