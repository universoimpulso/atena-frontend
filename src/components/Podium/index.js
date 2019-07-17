import React from "react";

import { Flex } from "@rebass/grid";
import PropTypes from "prop-types";
import UserCard from "../../components/UserCard";

// import { Container } from './styles';

const Podium = ({ firstUsers }) => {
  console.tron.log("firstUsers", firstUsers);
  return (
    <Flex justifyContent="center" mt={50} mb={80} ml={172} mr={172}>
      {firstUsers.map((card, index) => (
        <UserCard key={index} first={index === 1 && true} {...card} />
      ))}
    </Flex>
  );
};

Podium.propTypes = {
  firstUsers: PropTypes.array
};
export default Podium;
