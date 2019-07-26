import React from 'react'
import StyledCard from './style'
import { Flex, Box } from '@rebass/grid'

const Card = props => {
  const { children, large } = props

  return (
    <StyledCard large={large}>
      <Flex justifyContent="space-between" alignItems="center">
        <Box width={1}>{children}</Box>
      </Flex>
    </StyledCard>
  )
}

export default Card
