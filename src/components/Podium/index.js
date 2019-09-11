import React from 'react'

import { Flex } from '@rebass/grid'
import PropTypes from 'prop-types'
import UserCard from '../UserCard'

const Podium = ({ firstUsers }) => {
  return (
    <Flex justifyContent="center" mt={50} mb={80} flexWrap="wrap">
      {firstUsers.map((card, index) => (
        <UserCard key={index} first={index === 0} {...card} />
      ))}
    </Flex>
  )
}

Podium.propTypes = {
  firstUsers: PropTypes.array
}
export default Podium
