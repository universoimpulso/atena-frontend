import React from 'react'
import { Flex, Box } from '@rebass/grid'

import Menu from './Menu/'
import atena from '../../assets/atena.svg'
import StyledHeader from './styles'

const Header = props => (
  <StyledHeader>
    <Flex justifyContent="space-between" alignItems="center">
      <Box flex="1">
        <a href="/">
          <img alt="Logo atena" src={atena} />
        </a>
      </Box>
      <Box>
        <Menu {...props} />
      </Box>
    </Flex>
  </StyledHeader>
)

export default Header
